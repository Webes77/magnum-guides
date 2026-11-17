# Members login

Set up 17 November 2026. The members area sits behind a real login. A
signed-out visitor is sent the login page and nothing else.

Address: https://magnum-members.netlify.app (Netlify team `james-5pmc438`,
site `magnum-members`).

## James: add or remove a member

The quick way: tell Claude. "Add name@example.com to the members area" or
"Remove name@example.com from the members area". Claude changes the list
through the Supabase connector and tells you when it is done.

To do it yourself:

1. Open https://supabase.com/dashboard/project/xvlyrasjwxfwaxhjtzoy/editor
2. Click the `members` table.
3. **Add:** click Insert, then Insert row. Type the email. Name is optional.
   Leave the rest alone. Save.
4. **Lock someone out:** click their row, untick `access`, Save. They are
   out on their next click. Tick it again to let them back in.
5. **Remove for good:** select the row, Delete.

6. **Send the invitation:** tick `send_invite` on their row and Save. It
   emails them from james@magnumai.com.au and unticks itself. `invited_at`
   shows when it went. Adding a row on its own sends nothing.

To add a personal line for one person, type it in `invite_note` on their row
before you tick `send_invite`. It appears as its own paragraph near the top.
Leave it empty for the standard invitation.

The invitation says who it is from, what the members area is, and gives one
button to choose a password. The link is theirs only, works once and lasts
14 days. A copy lands in your Sent Items. Tick `send_invite` again to send a
fresh one.

Forgotten password: the member uses "First time here, or forgot your
password" on the login page and gets a link by email. That one lasts an hour.

Every link sent is logged in `link_outbox`, with `sent_at` filled in when the
email went.

## How it fits together

| Piece | Where | Job |
|---|---|---|
| Members list | Supabase project `magnum-members`, table `members` | One row per person. `access` is the on/off switch. `tier` is spare, for a payment provider to set later |
| Logins | Supabase Auth, same project | Email and password accounts. Passwords are never stored on the site |
| The gate | `netlify/edge-functions/gate.js` | Runs on Netlify before any file is sent. No member session, no content |
| Sign in, sign out, links | `netlify/edge-functions/auth.js` | Sets the session in two HttpOnly cookies |
| Shared code | `netlify/lib/session.js` | Checks the session signature against Supabase's public keys |
| Login pages | `login/` | Sign in, welcome, choose a password. House style |
| Link maker | Supabase function `member-link` (source in `supabase/functions/`) | Makes invitation and reset links, only for addresses on the list, and writes the two emails |
| Email sender | Make scenario "Magnum members area: login emails" | Takes the email from the link maker and sends it from James's Outlook. Swappable: the address it posts to is one row in the private `settings` table |
| Keep-alive | `netlify/functions/keepalive.mjs` | Touches Supabase daily so the free project never rests |

A trigger on `members` copies `access` and `tier` onto the login account and
ends that person's sessions when access is switched off. The gate reads
`member_access` from the signed session, and on each page load asks
Supabase whether the session is still live.

Nothing secret is in this repo. The Supabase key in the code is the
publishable one.

## Adding payments later

No rebuild. A payment provider's webhook needs to do one thing: insert or
update a row in `members` (set `access` true on purchase, false on
cancellation, and `tier` to the plan). Everything else follows from that.

## Deploying

The site is not yet linked to GitHub, so a push does not deploy it. Deploy
with the Netlify connector's deploy command, run from a clean copy of this
folder (the command fails inside a git worktree):

```bash
rsync -a --delete --exclude .git --exclude .DS_Store --exclude .claude ./ /tmp/members-deploy/
```

Then run the `npx @netlify/mcp` command the connector gives you from
`/tmp/members-deploy/`, with site id `cdb4bf31-242f-4b88-b009-3bc06b7c0ab0`.

After any deploy, check signed-out: `curl -s -o /dev/null -w '%{http_code}'
https://magnum-members.netlify.app/ai-foundations/` must print 401.

## Still open (as of 17 Nov 2026)

- Custom address `members.magnumai.com.au` (needs one DNS record). The
  link maker already accepts it. After it is live, set `site_origin` in the
  `settings` table to the new address so invitation links use it.
- Old GitHub Pages address still live and the repo still public. Switch
  over only on James's say-so: replace Pages with redirects, then make the
  repo private.
- Link Netlify to the GitHub repo so a merge to `main` deploys by itself.
- Turn off open sign-ups in Supabase (Authentication, Sign In / Providers).
  Not a hole: an account that is not on the members list gets nothing. It
  is tidiness.
- The front page and guides still carry the old GitHub address in their
  link-preview tags. Update at switch-over.
