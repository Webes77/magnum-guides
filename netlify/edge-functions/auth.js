// Sign in, sign out, first-time link, set password. All server-side, so the
// session cookies are HttpOnly and never touch page scripts.
import {
  supa, verify, isMember, currentSession, sessionCookies, clearCookies,
  safeNext, redirect, readCookies,
} from "../lib/session.js";

const enc = encodeURIComponent;

export default async (req) => {
  const url = new URL(req.url);
  const route = url.pathname.replace(/\/+$/, "");

  if (route === "/auth/logout") {
    const { at } = readCookies(req);
    if (at) await supa("/auth/v1/logout?scope=local", { token: at }).catch(() => {});
    return redirect("/login/?out=1", clearCookies());
  }

  if (req.method !== "POST") return redirect("/login/");
  // Forms must come from this site.
  const origin = req.headers.get("origin");
  if (origin && origin !== url.origin) return new Response("Bad origin.", { status: 403 });

  let f;
  try { f = await req.formData(); } catch (_) { return redirect("/login/"); }
  const val = (k) => String(f.get(k) || "");

  if (route === "/auth/login") {
    const email = val("email").trim().toLowerCase();
    const next = safeNext(val("next"));
    const back = (e) => redirect(`/login/?e=${e}${next !== "/" ? "&next=" + enc(next) : ""}`);
    if (!email || !val("password")) return back("bad");
    const r = await supa("/auth/v1/token?grant_type=password", { body: { email, password: val("password") } });
    if (r.status === 429) return back("slow");
    if (!r.ok || !r.data || !r.data.access_token) return back("bad");
    const claims = await verify(r.data.access_token);
    if (!isMember(claims)) return back("noaccess");
    return redirect(next, sessionCookies(r.data));
  }

  if (route === "/auth/link") {
    const email = val("email").trim().toLowerCase();
    if (email.includes("@")) {
      await supa("/functions/v1/member-link", { body: { email, origin: url.origin } }).catch(() => {});
    }
    // Same answer whether or not the address is a member's.
    return redirect("/login/?sent=1");
  }

  if (route === "/auth/verify") {
    let t = val("t");
    // An invitation (14 days) is swapped for a fresh one-time token first.
    const invite = val("i");
    if (invite) {
      if (!/^[a-f0-9]{48}$/.test(invite)) return redirect("/login/?e=link");
      const x = await supa("/functions/v1/member-link", { body: { action: "redeem", token: invite } }).catch(() => null);
      if (!x || !x.data || !x.data.ok || !x.data.t) return redirect("/login/?e=link");
      t = x.data.t;
    }
    if (!/^[A-Za-z0-9_-]{20,200}$/.test(t)) return redirect("/login/?e=link");
    const r = await supa("/auth/v1/verify", { body: { type: "recovery", token_hash: t } });
    if (!r.ok || !r.data || !r.data.access_token) return redirect("/login/?e=link");
    return redirect("/login/set-password/", sessionCookies(r.data));
  }

  if (route === "/auth/password") {
    const pw = val("password");
    if (pw.length < 10) return redirect("/login/set-password/?e=short");
    if (pw !== val("password2")) return redirect("/login/set-password/?e=match");
    const s = await currentSession(req);
    if (!s.claims) return redirect("/login/?e=link", s.set);
    const r = await supa("/auth/v1/user", { method: "PUT", token: s.token, body: { password: pw } });
    if (!r.ok) {
      const code = r.data && (r.data.error_code || r.data.code);
      const e = code === "weak_password" ? "weak" : code === "same_password" ? "same" : "fail";
      return redirect("/login/set-password/?e=" + e, s.set);
    }
    return redirect("/", s.set);
  }

  return redirect("/login/");
};

export const config = { path: "/auth/*", onError: "fail" };
