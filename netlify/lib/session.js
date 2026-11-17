// Shared by the gate and the auth routes. Sessions come from Supabase Auth
// and live in two HttpOnly cookies. Nothing here is secret: the key below is
// the publishable one, safe to ship.
export const SUPA = "https://xvlyrasjwxfwaxhjtzoy.supabase.co";
export const KEY = "sb_publishable_L96Q2yKY34N2ixQ85BhQxg_0n9Ujmek";

const AT = "__Host-mm_at";
const RT = "__Host-mm_rt";
const RT_DAYS = 60;

export function readCookies(req) {
  const out = {};
  for (const part of (req.headers.get("cookie") || "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return { at: out[AT] || "", rt: out[RT] || "" };
}

export function sessionCookies(s) {
  const base = "Path=/; HttpOnly; Secure; SameSite=Lax";
  return [
    `${AT}=${s.access_token}; ${base}; Max-Age=${Math.max(60, (s.expires_in || 3600) - 30)}`,
    `${RT}=${s.refresh_token}; ${base}; Max-Age=${RT_DAYS * 86400}`,
  ];
}

export function clearCookies() {
  const base = "Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0";
  return [`${AT}=; ${base}`, `${RT}=; ${base}`];
}

function b64url(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}

let keyCache = { at: 0, keys: {} };
async function signingKey(kid) {
  if (!keyCache.keys[kid] || Date.now() - keyCache.at > 3600e3) {
    const r = await fetch(`${SUPA}/auth/v1/.well-known/jwks.json`);
    if (!r.ok) throw new Error("jwks " + r.status);
    const keys = {};
    for (const k of (await r.json()).keys || []) {
      if (k.kty === "EC" && k.crv === "P-256") {
        keys[k.kid] = await crypto.subtle.importKey(
          "jwk", { kty: k.kty, crv: k.crv, x: k.x, y: k.y },
          { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
      }
    }
    keyCache = { at: Date.now(), keys };
  }
  return keyCache.keys[kid];
}

// Returns the claims of a genuine, unexpired Supabase access token, or null.
export async function verify(token) {
  try {
    const [h, p, sig] = token.split(".");
    if (!h || !p || !sig) return null;
    const head = JSON.parse(new TextDecoder().decode(b64url(h)));
    if (head.alg !== "ES256" || !head.kid) return null;
    const key = await signingKey(head.kid);
    if (!key) return null;
    const ok = await crypto.subtle.verify(
      { name: "ECDSA", hash: "SHA-256" }, key, b64url(sig),
      new TextEncoder().encode(`${h}.${p}`));
    if (!ok) return null;
    const c = JSON.parse(new TextDecoder().decode(b64url(p)));
    if (!c.exp || c.exp * 1000 < Date.now()) return null;
    if (c.iss !== `${SUPA}/auth/v1` || c.aud !== "authenticated") return null;
    return c;
  } catch (_) {
    return null;
  }
}

export const isMember = (c) => !!c && c.app_metadata && c.app_metadata.member_access === true;

export async function supa(path, { method = "POST", body, token } = {}) {
  const r = await fetch(`${SUPA}${path}`, {
    method,
    headers: {
      apikey: KEY,
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try { data = await r.json(); } catch (_) { /* empty body */ }
  return { ok: r.ok, status: r.status, data };
}

// Who is asking? Uses the access cookie; if it has run out, quietly renews
// it with the refresh cookie. `set` holds any cookies to send back.
export async function currentSession(req) {
  const { at, rt } = readCookies(req);
  let claims = at ? await verify(at) : null;
  if (claims) return { claims, token: at, set: [] };
  if (!rt) return { claims: null, token: "", set: [] };
  const r = await supa("/auth/v1/token?grant_type=refresh_token", { body: { refresh_token: rt } });
  if (!r.ok || !r.data || !r.data.access_token) return { claims: null, token: "", set: clearCookies() };
  claims = await verify(r.data.access_token);
  return { claims, token: r.data.access_token, set: claims ? sessionCookies(r.data) : clearCookies() };
}

// Only ever send people to a page on this site.
export function safeNext(n) {
  if (typeof n !== "string" || !n.startsWith("/") || n.startsWith("//") || n.includes("\\")) return "/";
  if (n.startsWith("/login") || n.startsWith("/auth")) return "/";
  return n;
}

export function redirect(to, cookies = []) {
  const h = new Headers({ location: to, "cache-control": "no-store" });
  for (const c of cookies) h.append("set-cookie", c);
  return new Response(null, { status: 303, headers: h });
}
