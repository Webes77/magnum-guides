# 05 · Automating small-business social media, late 2026

Researcher 5 of 6. Question: what can realistically be automated, how, at what cost, and where does it break.
Researched 23 Sep 2026 by WebSearch only. **Every WebFetch attempt was blocked by the sandbox egress proxy** (about.fb.com, techtimes.com, slashpost.ai, community.make.com), so every claim below rests on search result snippets, not full-page reads. Treat figures as "as reported in the snippet on 23 Sep 2026".

Grades: **A** = vendor's own docs or site. **B** = reputable press. **C** = blog, forum, community, comparison site, or vendor-competitor marketing.
Currency: **USD** throughout unless marked. No AUD rates were searched. For a rough AUD figure multiply by about 1.5, then check the day's rate. Australian clients pay GST on top of most of these SaaS prices.

---

## 0. The short answer

- Posting is the easy, well-supported part. Make, Zapier and Buffer all publish to Facebook Pages, Instagram professional accounts, LinkedIn company pages and Google Business Profile without the consultant needing his own Meta or LinkedIn app review, because the tool holds the approved app. (Inference from the fact these tools offer the modules to any user; see sections 2 and 3.)
- What breaks is **connections, not logic**. Instagram connections in Make need manual reauthorisation about every 60 days, with no auto-refresh. Any Facebook password change or security event also kills the token. That is the recurring maintenance load.
- The sweet spot for a beginner client is **level 2: AI drafts into a scheduler, the owner approves on their phone**. Buffer is now the simplest landing pad because it has a public API, Make and Zapier integrations, and an official Claude connector (MCP) on every plan including Free.
- Full autonomy (level 4) is technically easy and commercially unwise for a construction or retail brand: one wrong caption under the owner's name costs more than a year of approvals.
- Auto-replies: Meta's own tools (Business Suite automations, Meta Business Agent) now cover DMs on Facebook, Instagram and WhatsApp, with token billing since 1 Aug 2026. Comment replies are the weak spot.

---

## 1. The automation ladder

| Level | What happens | Who presses publish | Main risk | Fit for |
|---|---|---|---|---|
| 0. Manual with AI help | Owner asks Claude for a caption in a chat or Project with brand voice, posts it by hand or via Meta Business Suite | Owner | Consistency dies when the owner gets busy | Everyone, as the course's first module |
| 1. AI drafts, human posts | A trigger (photo in a folder, form) produces a caption and sends it to the owner by email or message; the owner copies and posts | Owner | Friction: copy, paste, re-upload the photo. Drop-off after a few weeks | Owners who refuse any scheduler |
| 2. AI drafts into a scheduler, human approves | Photo plus AI caption lands in Buffer (or Metricool, Later, Planable) as a **draft**; the owner edits and approves in the mobile app; the scheduler publishes | Scheduler, after owner's tap | A lazy "approve all" habit; token expiry stops publishing silently | **Default for beginners** |
| 3. Auto-schedule, human can veto | AI caption goes straight into the queue a few days out; owner gets a digest and deletes anything wrong | Scheduler, by default | A bad post goes out if the owner does not read the digest | Established clients with a stable voice and low-risk content (e.g. sports fixtures, opening hours) |
| 4. Fully autonomous | Trigger to AI to publish, no human | Automation | Brand, legal and safety errors under the owner's name; hallucinated facts (prices, claims, safety statements); no one notices a broken token | Not recommended for these clients. At most for pure data posts (scores, weather closures) generated from a trusted source |

Risk notes that apply up the ladder:
- AI invents specifics. For a construction company a wrong licence claim, a safety statement, or a named client site is a real liability. The caption prompt must forbid inventing facts not in the job note. (Consultant judgement, no source.)
- Silent failure grows with autonomy. At level 2 the owner notices "my posts didn't go out". At level 4 nobody does. See section 3 on tokens.
- Meta's anti-spam rules bite hardest on messaging automation, not on posting (section 5).

---

## 2. Concrete pipelines

### Pipeline A · "Drop a job photo, get a draft" (Make, level 2) · recommended build

1. **Trigger**: Google Drive "Watch Files in a Folder" (or Dropbox "Watch Files"), a shared folder called `To post` on the owner's phone. Alternative trigger: a Tally or Google Form with photo upload plus a one-line job note, or a Make webhook fed by an email-to-Make address. WhatsApp inbound is possible via the WhatsApp Business Cloud API but adds a Meta app and number setup, so it is not recommended for a beginner build. (Judgement.)
2. **AI step**: Make's **Anthropic Claude** module with the client's own API key, or Make's built-in AI provider. With a custom provider connection Make charges operations and you pay Anthropic directly for tokens; Make's own AI provider charges Make credits by tokens and operations; custom connections need a paid Make plan. [A] https://help.make.com/how-features-use-credits · https://apps.make.com/anthropic-claude
   The system prompt holds the brand voice block (six levers), banned words, hashtags, and a "never invent a fact not in the note" rule. Optionally a vision call so the model describes the photo.
3. **Landing**: Buffer. Buffer's public API covers post creation, scheduling, ideas, channels, with built-in Make, Zapier and IFTTT integrations. [A] https://support.buffer.com/en-us/articles/connecting-buffer-to-automation-tools-and-ai-assistants-MMoXpjDEEo · https://buffer.com/resources/best-social-media-apis/ ; Zapier can save content to Buffer as an Idea or a Draft. [A] https://buffer.com/resources/buffer-zapier-integration/ · https://zapier.com/apps/buffer/integrations
   Media must be at a public URL for Instagram publishing; files sitting in Drive or Dropbox are not accepted as the media URL by Make's Instagram module (reported for video). [C] https://www.theaiautomators.com/auto-post-to-instagram-with-make-com/ . Buffer and other schedulers host the media themselves, which is one more reason to land in a scheduler rather than post direct.
4. **Approve**: owner opens the Buffer mobile app, edits, schedules. Drafts can be created from the dashboard, mobile apps or the API, and approvers get email notifications of new drafts. [A] https://support.buffer.com/en-us/articles/creating-managing-and-approving-draft-posts-on-the-buffer-mobile-app-XSRim1JeUl · https://support.buffer.com/en-us/articles/managing-and-approving-draft-posts-57li7M8tDA
5. **Publish**: Buffer publishes to Facebook Page, Instagram, LinkedIn page, Google Business Profile.
6. **Housekeeping**: move the Drive file to `Posted`; log a row in a Google Sheet (optional).

Make operations per photo: roughly 4 to 6 modules (watch, download, AI, Buffer create, move file, sheet row). At 20 posts a month that is about 100 to 150 operations, far below Core's 10,000 credits. (Arithmetic from Make's pricing below; AI tokens extra if on Make's provider.)

### Pipeline B · Direct publish without a scheduler (Make or Zapier, level 3 or 4)

Make modules: **Instagram for Business (Facebook login)**: upload a photo, a carousel, or a reel. [A] https://www.make.com/en/integrations/instagram-business ; **Facebook Pages**: create a post / photo post; **LinkedIn**: company text, image and video post modules. [A] https://apps.make.com/linkedin ; **Google Business Profile**: create a local post for a location, reply to reviews, list and delete posts. [A] https://apps.make.com/google-my-business
Zapier: **Instagram for Business** Publish Photo (single or carousel, caption, location, up to 9 user tags) and Publish Video; needs an Instagram Business account linked to a Facebook Page and content-creation permission on that Page. [A] https://help.zapier.com/hc/en-us/articles/8496101110541-How-to-get-started-with-Instagram-for-Business-on-Zapier ; **Facebook Pages**, **LinkedIn**, **Google Business Profile** apps also exist. [A] https://zapier.com/apps/google-business-profile/integrations
To add approval without a scheduler you bolt on a Slack or email "approve" step, which is more fragile to maintain than Buffer's built-in draft. Not recommended for a non-technical owner. (Judgement.)

### Pipeline C · Claude-native (no Make at all)

Buffer shipped an official MCP server in May 2026 alongside its public GraphQL API (public beta Feb 2026). Connect it in Claude as a custom connector, OAuth sign-in, no API key; Claude can list channels, create drafts and schedule posts; supports LinkedIn, X, Instagram, Threads, Facebook, TikTok, Pinterest, YouTube, Bluesky, Mastodon and Google Business Profile; MCP access on every plan including Free. [A] https://buffer.com/mcp · https://developers.buffer.com/guides/integrations/claude.html · https://buffer.com/resources/how-to-post-on-social-media-from-claude/ (plan and launch-date detail partly from [C] https://www.usecarly.com/blog/claude-buffer-integration/ and https://www.socialync.io/mcp-server/buffer)

This enables two patterns:
- **Level 0 to 1, taught in the course**: the owner has a Claude Project with the brand voice; they paste a photo and a note; Claude writes the caption and drops it into Buffer as a draft. No automation platform, nothing for the consultant to maintain.
- **Level 2 batch**: a Claude scheduled task, weekly, reads a Drive folder of job photos and notes and creates a week of Buffer drafts. Caveats: scheduled tasks run on Anthropic's servers, but whether a scheduled task can use a custom MCP connector and read Drive in that context was not verified here. Mark as "test before selling". Also this puts the pipeline inside the client's Claude account, so it only suits clients who already pay for Claude.

### Pipeline D · Free, Meta-only (level 0 to 2)

Meta Business Suite Planner schedules Facebook and Instagram posts, Reels and Stories free; minimum 20 minutes ahead, officially up to 75 days out though some Page owners report about 29 to 30 days in 2026. [A] https://www.facebook.com/business/help/609176706604372 · [C] https://www.crowbert.com/how-to-schedule-facebook-posts · https://bestsocialmediascheduler.com/reviews/meta-business-suite
No usable API landing for "AI draft into Business Suite" was found, so this is a manual level-1 destination: AI caption emailed to the owner, owner schedules in Business Suite. One blog claims Business Suite has built-in approval flows with inline comments; this could not be corroborated and reads like competitor marketing copy. [C, doubtful] https://www.crowbert.com/how-to-schedule-facebook-posts

---

## 3. Hard platform constraints

### Instagram (Meta)
- **Account type**: publishing needs an Instagram professional account. The classic route (used by Make's "Facebook login" app and by Zapier) needs the Instagram account linked to a Facebook Page, and the connecting user needs content permissions on that Page. [A] https://help.zapier.com/hc/en-us/articles/8496101110541 · https://www.make.com/en/integrations/instagram-business
- Since July 2024 Meta also offers the **Instagram API with Instagram Login**, which does not need a linked Facebook Page. [A] https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/ · [C] https://gist.github.com/PrenSJ2/0213e60e834e66b7e09f7f93999163fc . Whether a given tool uses this route varies; for a retailer with no presence, set up the Facebook Page and link it anyway, because Business Suite, ads and most tools still assume it. (Judgement.)
- **App review**: needed only if you build your own Meta app. Using Make, Zapier or Buffer, the tool's approved app is used. (Inference; no single source states it for all three.)
- **Publishing limit**: one source citing Meta's September 2026 docs says 100 API-published posts per rolling 24 hours; older sources say 50 or 25. Reels and Stories count; a carousel counts as one. Quota readable at `GET /{ig-user-id}/content_publishing_limit`. [C] https://www.keyapi.ai/blog/instagram-api-rate-limits-2026-what-changed-and-how-to-adapt/ · https://bundle.social/blog/instagram-api-rate-limits . Irrelevant at small-business volume either way.
- **Stories**: API publishing documented for Business accounts; no stickers, polls, links, countdowns, or licensed music via API. Schedulers fall back to a "notification publish" (phone reminder) when stickers are wanted. [C] https://zeely.ai/blog/schedule-instagram-stories-in-2026-what-works/ · https://storrito.com/resources/instagram-api-2026/
- **Media**: must be at a publicly reachable URL at publish time. [C] https://www.theaiautomators.com/auto-post-to-instagram-with-make-com/
- **Tokens**: Instagram long-lived tokens last 60 days and can be refreshed if at least 24 hours old and not yet expired; unrefreshed tokens die. [A] https://developers.facebook.com/docs/instagram-platform/reference/refresh_access_token/ · https://developers.facebook.com/docs/instagram-platform/reference/access_token/
- **Make specifically**: Instagram modules fail with `AccountValidationError` about every 60 days and must be reauthorised by hand; Make support told users automatic reauthorisation is not possible. [C] https://community.make.com/t/instagram-connection-has-to-be-reauthorized-every-60-days/41109 (snippet only, fetch blocked). Some other tools (Juicer) refresh automatically. [A for Juicer] https://help.juicer.io/en/articles/12697805-adding-or-refreshing-your-instagram-connections
- **Facebook tokens** are also invalidated when the user changes their password, logs out, de-authorises the app, or Facebook resets the session for security reasons. [A] https://developers.facebook.com/community/threads/669953583775370 · https://developers.facebook.com/blog/post/v2/2011/05/13/how-to--handle-expired-access-tokens

### LinkedIn company pages
- Page posting via API requires LinkedIn's **Community Management API**, which is only for registered legal entities, with a two-tier review (Development then Standard, the latter needing a screencast). [A] https://developer.linkedin.com/product-catalog/marketing/community-management-api · https://learn.microsoft.com/en-us/linkedin/marketing/community-management/community-management-overview?view=li-lms-2026-06 · [C] https://singhamandeep.com/linkedin-community-management-api-access/
- Practical meaning: the consultant does not apply. He uses Make's LinkedIn company modules [A] https://apps.make.com/linkedin , Zapier's LinkedIn app, or Buffer, which already hold that access.
- Tokens: access tokens typically 60 days; programmatic refresh tokens (365 days) only for approved partners, so non-partner connections need reauthorising. [A] https://learn.microsoft.com/en-us/linkedin/shared/authentication/programmatic-refresh-tokens · [C] https://aws-sensei.cloud/posts/2026-07-01-linkedin-oauth-reauth/ . How often Make's or Zapier's LinkedIn connection itself needs reauth was not found; budget for it.

### Google Business Profile
- `accounts.locations.localPosts.create` is documented and current; scope `business.manage`. [A] https://developers.google.com/my-business/reference/rest/v4/accounts.locations.localPosts/create · Google also documents creating posts via API. [A] https://developers.google.com/my-business/content/posts-data
- One third-party snippet claimed localPosts "stopped working entirely"; another says the APIs are active as of May 2026. The official docs and deprecation page still list the endpoint. Treat the "stopped" claim as unverified. [C] https://slashpost.ai/blogs/google-business-profile/google-business-profile-api-documentation-2026 (fetch blocked) · [A] https://developers.google.com/my-business/content/sunset-dates
- A Make community thread reports 403 errors creating posts, tied to legacy API confusion. [C] https://community.make.com/t/google-my-business-business-profile-creating-posts-via-api-fails-403-mybusiness-googleapis-com-legacy-api-confusion/99258 . Make notes that using your own client credentials needs a GBP project in Google Cloud. [A] https://apps.make.com/google-my-business
- Direct GBP API access for your own project requires Google's access request form (not re-verified today). Practical meaning: post to GBP via Buffer (supported per Buffer MCP listing, [A] https://buffer.com/mcp) rather than building it.

### What breaks most often, ranked (judgement from the above)
1. Instagram or Facebook connection expiry or invalidation (60-day cycle in Make; password or security resets anytime).
2. The owner removes the consultant's or tool's Page permission, or the Page moves into or out of a Business Portfolio.
3. Media URL not public or wrong format (Reels specs, aspect ratio).
4. AI step errors: API key out of credit, model deprecation.
5. Scheduler plan changes (channel caps, feature moves between tiers).

Frequency: expect one reconnect per Meta channel roughly every two months if publishing direct from Make, plus ad hoc breaks. Landing in Buffer shifts channel reconnection to Buffer's dashboard, which the owner can do with a tap, and keeps the Make side (Drive, Claude, Buffer connections) stable.

---

## 4. Approval workflows a busy owner will use

| Tool | Approval feature | Plan and price (USD) | Mobile approval | Source |
|---|---|---|---|---|
| **Buffer** | Formal request-approval roles (contributor, reviewer) on Team plan only. But drafts exist on all plans and the owner can open a draft and schedule it, which is all a solo owner needs | Essentials $5/channel/month; Team $10/channel/month (annual saves about 20%) | Yes, drafts created and approved in the mobile app; email notification of new drafts | [A] https://support.buffer.com/en-us/articles/creating-managing-and-approving-draft-posts-on-the-buffer-mobile-app-XSRim1JeUl · [C] https://www.blotato.com/blog/buffer-pricing · https://socialk.it/en/pricing/buffer |
| **Metricool** | Approval system only on Advanced; Starter has zero team seats | Starter about $25/month monthly or $20 annual; Advanced from about EUR 43/month; Zapier and API only on Advanced | App exists; approvals on Advanced | [A] https://metricool.com/pricing/ · https://help.metricool.com/en/article/zapier-with-metricool-1hdwext/ · [C] https://www.socialpilot.co/insights/metricool-pricing |
| **Later** | Approval workflows on Growth, not Starter | Starter $25/month monthly ($18.75 annual), 1 user, 30 posts per profile, 5 AI credits; Growth about $50/month | Yes (app) | [A] https://later.com/pricing/ · https://help.later.com/hc/en-us/articles/360059362253 · [C] https://socialchamp.com/blog/later-pricing/ |
| **Planable** | Best-in-class multi-level approval, client review links, visual previews | Free 50 posts total; Basic about $33/workspace/month, Pro about $49 (figures vary by source) | Mobile app built for approvals | [A] https://planable.io/pricing/ · [C] https://www.getapp.com/marketing-software/a/planable/ |
| **Meta Business Suite** | No verified approval flow | Free | App | See section 2D |

Recommendation for these clients: **Buffer Essentials**, owner is the only user, AI output lands as drafts, owner taps through them on the phone once or twice a week. Planable only if an agency-style client wants multi-person sign-off. Metricool's approval and automation both sit behind Advanced, which makes it the dearer route for this pattern.

What makes owners actually approve (judgement): one batch notification a week, not one per post; drafts that are 90% ready so approval is a tap, not an edit; a default "if you haven't approved by Thursday, nothing goes out" rather than auto-publish.

---

## 5. Auto-replies to comments and DMs

- **Meta Business Suite automations** (free): instant replies, away messages, FAQs and follow-ups across Facebook, Messenger and Instagram inbox. [A] https://www.facebook.com/business/help/395965998733706 . Comment automation is thin: no sentiment, little on ad comments, rules rebuilt per Page. [C] https://napoleoncat.com/blog/facebook-automated-responses/
- **Meta Business Agent**: announced for businesses of all sizes globally on 3 June 2026, expanded to Instagram, answers in the business's tone and local languages, free to activate then paid subscriptions. [A] https://about.fb.com/news/2026/06/meta-business-agent/ (snippet only; fetch blocked) · [B] https://www.engadget.com/2258403/meta-adds-new-subscription-tiers-for-businesses-creators-and-ai-power-users/
  Billing moved to tokens on 1 Aug 2026 at USD 2 per million tokens, bundling AI and message delivery, reported as roughly 4 to 5 US cents per typical conversation, covering WhatsApp, Messenger and Instagram. [B/C] https://www.techtimes.com/articles/320787/20260716/meta-business-agent-billing-starts-aug-1-free-test-window-ends-days.htm · [C] https://socialday.live/features/meta-business-agent-billing-starts-1-august-at-2-per-million-tokens · https://enterprisedna.co/resources/news/meta-business-agent-billing-august-1-token-pricing-2026/
  Handoff: the owner can tell it to transfer complex or sensitive topics to a human; a handoff list flags conversations needing a person; it can answer directly or learn from the owner's replies. [A] https://whatsappbusiness.com/products/business-app-ai-agent/ · [C] https://www.sigserve.com/blog-meta-business-agent-handoff.html
  Australian availability was not confirmed by any source found; "global" per the announcement.
- **Rules that constrain any third-party DM bot** (ManyChat-style, or Make): 24-hour standard messaging window after the user's last message; comment-to-DM private replies must go within 7 days of the comment and only one message can be sent until the person replies; reported limit 750 private replies per hour. [C] https://www.keyapi.ai/blog/instagram-messaging-api-policy/ · https://www.inro.social/blog/instagram-dm-automation-guide-2026 (Meta's own messaging docs not fetched.)
- **Risks**: a bot answering a construction quote enquiry with a price or timeline it made up; replying cheerfully to a complaint in public comments; a DM bot that looks like spam and damages reach; and the owner no longer reading their inbox because "the bot has it". For these clients: auto-acknowledge DMs with an away message plus a handoff; do not auto-reply to public comments with AI. (Judgement.)

---

## 6. Monthly cost by level (USD, excluding GST, three channels: Facebook, Instagram, one of LinkedIn or GBP)

Base prices:
- **Make**: Free 1,000 credits; Core about $12/month (about $9 on annual), Pro $21, Teams $38, each around 10,000 credits a month. Sources disagree on which figure is monthly vs annual. [C] https://coworker.ai/blog/make-com-pricing · https://latenode.com/blog/make-com-pricing · official page not fetched: https://www.make.com/en/pricing
- **Zapier**: Professional $29.99/month monthly ($19.99 annual) for 750 tasks; every action step counts, trigger does not; overage about 1.25x. [C] https://www.nocode.mba/articles/zapier-pricing-2026 · https://automationatlas.io/answers/zapier-pricing-explained-2026/
- **Buffer**: Essentials $5/channel/month, Team $10/channel/month. [C] https://www.blotato.com/blog/buffer-pricing
- **Claude API**: Sonnet 5 reported at $2 per million input tokens and $10 per million output. [C] https://benchlm.ai/anthropic/api-pricing · https://costgoat.com/pricing/claude-api . A caption call with a 2,000-token brand prompt and a photo is well under 1 US cent; 30 captions a month is cents, not dollars. (Arithmetic; image input adds tokens but not materially.)

| Level | Stack | Approx USD/month |
|---|---|---|
| 0 Manual + AI | Claude Pro (client already has) + Meta Business Suite | $0 extra (Claude Pro itself about $20) |
| 0 to 1 Claude-native | Claude Pro + Buffer MCP; Buffer Free or Essentials | $0 to $15 |
| 2 Recommended | Make Core ($9 to $12) + Claude API (under $1) + Buffer Essentials 3 channels ($15) + Google Drive (existing) | **about $25 to $30** (about AUD 40 to 45 before GST, rough conversion) |
| 2 on Zapier | Zapier Professional ($20 to $30) + Claude API or Zapier AI + Buffer Essentials ($15) | about $35 to $45. At 20 posts x 4 action steps = 80 tasks, well inside 750 |
| 2 with formal approvals | Make Core + Buffer Team ($30) or Planable Basic ($33) or Later Growth ($50) | about $45 to $65 |
| 3 or 4 Direct publish | Make Core + Claude API, no scheduler | about $10 to $13, but the lowest price carries the highest maintenance (Make Instagram reauth every 60 days, no queue to see) |
| DM agent add-on | Meta Business Agent token billing | cents per conversation; a small business with 100 AI conversations a month would be a few dollars (at the reported 4 to 5 cents) |

Whether each client holds their own Make account (recommended, so the owner owns it) or the consultant runs one Make organisation for many clients changes cost: one Make Pro or Teams account can run many small clients' scenarios inside 10,000 credits, but then the consultant owns the dependency, which conflicts with "maintainable by the owner". (Judgement.)

---

## 7. Recommendation

**Start every beginner client on level 2, built as Pipeline A (Drive folder to Claude to Buffer drafts), after the course has taught level 0 by hand.**

Why:
- The owner keeps the publish button, so no caption goes out under their name unread. That is the whole trust question for a builder or a retailer.
- The scheduler owns the channel connections. When Meta invalidates a token, the owner sees a red banner in the Buffer app and reconnects with a tap. The consultant's Make scenario only touches Drive, Claude and Buffer, none of which expire on a 60-day Meta clock.
- Buffer Essentials needs no team seats: a solo owner simply opens the drafts. Formal approval roles are not needed until a second person is involved.
- The same Buffer account works with the Claude connector, so the course can teach "caption from a Claude Project straight into Buffer" first and the automation becomes an upgrade, not a different system.
- Monthly running cost around USD 25 to 30 per client.

Do not start clients on level 4. Move a client to level 3 (auto-queue with veto digest) only for low-risk, repetitive post types after about three months of approvals where they changed almost nothing.

For DMs: switch on Business Suite away messages and FAQs at setup. Offer Meta Business Agent only for a retailer with real enquiry volume, with a handoff list written by the owner, and never price or availability answers it cannot source.

**Consultant maintenance per client per month** (estimate, not sourced):
- Level 2 via Buffer: about 15 to 30 minutes. One scenario-health check (Make emails on errors, set that up), a glance at the error log, occasional prompt tweak when the owner keeps editing the same thing. Channel reconnects fall to the owner in Buffer, with a one-page "if posts stop" card.
- Level 3 or 4 direct from Make: 30 to 60 minutes plus a guaranteed Instagram reauth about every 60 days per client, which needs the client's Facebook login or the consultant holding Page access. At ten clients that is a reauth most weeks, which is the kind of permanent operational load to avoid.
- Year-one risk to plan for: a scheduler repricing or moving a feature between tiers (Buffer, Later and Metricool all gate approvals behind higher tiers already), and Meta changing the Instagram publishing route. Keep the prompt and brand voice in a file the client owns so a swap of scheduler is an afternoon, not a rebuild.

## Gaps and things not verified
- No page was fetched in full; all figures are from search snippets.
- Official Make and Zapier pricing pages were not read directly; third-party figures disagree on monthly vs annual.
- Whether Claude scheduled tasks can call the Buffer MCP connector unattended: not tested.
- Frequency of LinkedIn and GBP reauth inside Make or Zapier: not found.
- Meta Business Agent availability in Australia specifically: not confirmed.
- Meta Business Suite built-in approvals: one unreliable source only.
