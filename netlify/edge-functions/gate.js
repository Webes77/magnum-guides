// The gate. Runs on Netlify's servers before any file is sent. No valid
// member session, no content: the visitor gets the login page instead.
import { currentSession, isMember, clearCookies, redirect, supa } from "../lib/session.js";

// Field Notes stay open to everyone (James's call, 17 Nov 2026): he sends
// them on WhatsApp to people who are not members. Only the issues, their
// archive page, their share pictures and the site icons. Nothing else.
const OPEN = [
  /^\/newsletter\/?$/,
  /^\/newsletter\/index\.html$/,
  /^\/newsletter\/field-note-[a-z0-9-]+\.html$/,
  /^\/assets\/thumbnails\/field-note-[a-z0-9-]+\.jpg$/,
  /^\/assets\/logos\/[A-Za-z0-9._-]+$/,
  // The newsletter sign-up block the Field Notes and their archive load
  // (18 Nov 2026). One script, no secrets in it.
  /^\/assets\/subscribe\.js$/,
  // The Brisbane AI Summit page is open too (James's call, 17 Nov 2026):
  // the 15 Nov This Week in AI links to it. The page, its pictures and the
  // three style sheets it loads.
  /^\/news\/brisbane-ai-summit-2026\/?$/,
  /^\/news\/brisbane-ai-summit-2026\/index\.html$/,
  /^\/assets\/illustrations\/summit-[a-z0-9-]+\.jpg$/,
  /^\/assets\/(site|topbar|illustration)\.css$/,
];

export default async (req, context) => {
  const url = new URL(req.url);
  if ((req.method === "GET" || req.method === "HEAD") && OPEN.some((r) => r.test(url.pathname))) {
    return context.next();
  }
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
