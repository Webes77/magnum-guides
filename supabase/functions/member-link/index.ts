// member-link: the three jobs behind a member's first sign-in and resets.
//
//   reset  (default)  A member typed their email on the login page. Makes a
//                     one-time link (one hour) and emails it.
//   invite            James ticked send_invite on a member's row. Emails the
//                     invitation with a link that lasts 14 days. Needs the
//                     private invite key, so only the database can ask.
//   redeem            The member pressed Carry on from their invitation.
//                     Swaps the invitation for a fresh one-time sign-in token.
//
// Safe to call by anyone: it only ever acts for an address on the members
// list with access switched on, and never says whether an address is on it.
// Emails go out through the webhook in the private settings table, from
// James's own mailbox. Every link is also logged in link_outbox.
import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://magnum-members.netlify.app",
  "https://members.magnumai.com.au",
];
const INVITE_DAYS = 14;

const db = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false, autoRefreshToken: false } },
);

const json = (o: unknown) =>
  new Response(JSON.stringify(o), { headers: { "content-type": "application/json" } });
const done = () => json({ ok: true });

async function settings(): Promise<Record<string, string>> {
  const { data } = await db.from("settings").select("key, value");
  const out: Record<string, string> = {};
  for (const r of data || []) out[r.key] = r.value;
  return out;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function firstName(name: string | null): string {
  const n = (name || "").trim().split(/\s+/)[0] || "";
  return n ? `Hi ${esc(n)},` : "Hi,";
}

// One plain email layout, house colours, built to survive Outlook and Gmail.
function layout(paragraphs: string[], button: string, link: string, after: string[]): string {
  const p = (t: string) =>
    `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:16px;line-height:1.55;color:#2B2823">${t}</p>`;
  return `<div style="background:#FBFBF9;padding:28px 16px">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;margin:0 auto;background:#FFFFFF;border:2px solid #1E1B17">
<tr><td style="background:#1F2A37;border-bottom:4px solid #FF6F5E;padding:20px 26px;font-family:'Arial Narrow',Arial,sans-serif;font-size:22px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#F4F1EA">Magnum AI <span style="color:#FF6F5E">Members area</span></td></tr>
<tr><td style="padding:26px 26px 10px">
${paragraphs.map(p).join("\n")}
<p style="margin:6px 0 22px"><a href="${link}" style="display:inline-block;background:#FF6F5E;border:2px solid #1E1B17;color:#1E1B17;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;text-decoration:none;padding:12px 24px">${button}</a></p>
${after.map(p).join("\n")}
<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:13px;line-height:1.5;color:#63615C">If the button does not work, copy this into your browser:<br><a href="${link}" style="color:#C63A2A;word-break:break-all">${link}</a></p>
</td></tr>
</table></div>`;
}

function inviteEmail(name: string | null, link: string, site: string) {
  const host = site.replace(/^https:\/\//, "");
  return {
    subject: "Your login for the Magnum AI members area",
    html: layout(
      [
        firstName(name),
        "It's James from Magnum AI. I've set you up with your own login for the Magnum AI members area. That's where I keep the guides, the prompts and the weekly reads.",
        "It now sits behind a login, so each person has their own email and password. To get in, choose your password here:",
      ],
      "Choose my password",
      link,
      [
        `The link is for you only. It works once and lasts ${INVITE_DAYS} days.`,
        `After that, sign in any time at <a href="${site}/login/" style="color:#C63A2A">${host}</a> with this email address and the password you chose.`,
        "Any trouble, reply to this email and it comes straight to me.",
        "James Wheable<br>Magnum AI",
      ],
    ),
  };
}

function resetEmail(name: string | null, link: string) {
  return {
    subject: "Your link to set your Magnum AI members password",
    html: layout(
      [
        firstName(name),
        "You asked for a link to set your password for the Magnum AI members area. Here it is:",
      ],
      "Set my password",
      link,
      [
        "It works once and lasts one hour.",
        "If you did not ask for this, ignore it. Your password has not changed.",
        "James Wheable<br>Magnum AI",
      ],
    ),
  };
}

async function send(cfg: Record<string, string>, to: string, mail: { subject: string; html: string }) {
  if (!cfg.email_webhook_url) return false;
  try {
    const r = await fetch(cfg.email_webhook_url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ key: cfg.email_webhook_key || "", to, subject: mail.subject, html: mail.html }),
    });
    return r.ok;
  } catch (e) {
    console.error("email send failed", String(e));
    return false;
  }
}

async function ensureAccount(email: string, tier: string) {
  // "Already registered" is the normal case after the first time; ignored.
  await db.auth.admin.createUser({
    email,
    email_confirm: true,
    app_metadata: { member_access: true, member_tier: tier },
  });
}

async function oneTimeToken(email: string): Promise<string | null> {
  const { data, error } = await db.auth.admin.generateLink({ type: "recovery", email });
  if (error) console.error("generateLink failed", error.message);
  return data?.properties?.hashed_token || null;
}

async function log(email: string, link: string, kind: string, sent: boolean) {
  await db.from("link_outbox").insert({
    email, link, kind, sent_at: sent ? new Date().toISOString() : null,
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("POST only", { status: 405 });
  let body: Record<string, string> = {};
  try { body = await req.json(); } catch (_) { return done(); }
  const action = String(body.action || "reset");
  const cfg = await settings();
  const site = ALLOWED_ORIGINS.includes(cfg.site_origin) ? cfg.site_origin : ALLOWED_ORIGINS[0];

  // The member pressed Carry on from their invitation.
  if (action === "redeem") {
    const token = String(body.token || "");
    if (!/^[a-f0-9]{48}$/.test(token)) return json({ ok: false });
    const { data: m } = await db.from("members")
      .select("id, email, access, tier, invite_expires").eq("invite_token", token).maybeSingle();
    if (!m || !m.access || !m.invite_expires || new Date(m.invite_expires).getTime() < Date.now()) {
      return json({ ok: false });
    }
    await ensureAccount(m.email, m.tier);
    const t = await oneTimeToken(m.email);
    if (!t) return json({ ok: false });
    await db.from("members").update({ invite_token: null, invite_expires: null }).eq("id", m.id);
    return json({ ok: true, t });
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!email.includes("@") || email.length > 200) return done();
  const { data: m } = await db.from("members")
    .select("id, name, access, tier, link_sent_at").eq("email", email).maybeSingle();

  // James ticked send_invite. Only the database holds the key.
  if (action === "invite") {
    if (!cfg.invite_key || body.key !== cfg.invite_key) return done();
    if (m) await db.from("members").update({ send_invite: false }).eq("id", m.id);
    if (!m || !m.access) return done();
    const bytes = crypto.getRandomValues(new Uint8Array(24));
    const token = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    const expires = new Date(Date.now() + INVITE_DAYS * 86400e3).toISOString();
    await db.from("members").update({ invite_token: token, invite_expires: expires }).eq("id", m.id);
    const link = `${site}/login/welcome/?i=${token}`;
    const sent = await send(cfg, email, inviteEmail(m.name, link, site));
    if (sent) await db.from("members").update({ invited_at: new Date().toISOString() }).eq("id", m.id);
    await log(email, link, "invite", sent);
    return done();
  }

  // Default: a member asked for a link on the login page.
  if (!m || !m.access) return done();
  if (m.link_sent_at && Date.now() - new Date(m.link_sent_at).getTime() < 60_000) return done();
  const origin = ALLOWED_ORIGINS.includes(String(body.origin)) ? String(body.origin) : site;
  await ensureAccount(email, m.tier);
  const t = await oneTimeToken(email);
  if (!t) return done();
  const link = `${origin}/login/welcome/?t=${t}`;
  await db.from("members").update({ link_sent_at: new Date().toISOString() }).eq("id", m.id);
  const sent = await send(cfg, email, resetEmail(m.name, link));
  await log(email, link, "reset", sent);
  return done();
});
