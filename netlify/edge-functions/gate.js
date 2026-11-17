// The gate. Runs on Netlify's servers before any file is sent. No valid
// member session, no content: the visitor gets the login page instead.
import { currentSession, isMember, clearCookies, redirect, supa } from "../lib/session.js";

export default async (req, context) => {
  const url = new URL(req.url);
  const s = await currentSession(req);
  const wantsPage = req.method === "GET" && (req.headers.get("accept") || "").includes("text/html");

  // On each page load, ask Supabase whether this session is still alive, so
  // switching a member off locks them out on their next click, not an hour
  // later. Only a clear "no" locks them out; a Supabase hiccup does not.
  if (isMember(s.claims) && wantsPage) {
    const live = await supa("/auth/v1/user", { method: "GET", token: s.token }).catch(() => null);
    if (live && (live.status === 401 || live.status === 403)) {
      return redirect("/login/", clearCookies());
    }
  }

  if (isMember(s.claims)) {
    const res = await context.next();
    const out = new Response(res.body, res);
    out.headers.set("cache-control", "private, no-cache");
    out.headers.set("x-robots-tag", "noindex, nofollow");
    for (const c of s.set) out.headers.append("set-cookie", c);
    return out;
  }

  const signedInNoAccess = !!s.claims;
  const cookies = signedInNoAccess ? clearCookies() : s.set;
  if (wantsPage) {
    const q = new URLSearchParams();
    if (signedInNoAccess) q.set("e", "noaccess");
    const next = url.pathname + url.search;
    if (next !== "/") q.set("next", next);
    const qs = q.toString();
    return redirect("/login/" + (qs ? "?" + qs : ""), cookies);
  }
  const h = new Headers({ "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" });
  for (const c of cookies) h.append("set-cookie", c);
  return new Response("Sign in required.", { status: 401, headers: h });
};

export const config = {
  path: "/*",
  excludedPath: ["/login", "/login/*", "/auth/*", "/favicon.ico", "/robots.txt", "/.netlify/*"],
  onError: "fail",
};
