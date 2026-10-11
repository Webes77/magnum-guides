# 04 · Social scheduling and automation tools, October 2026

Researched 11 October 2026 by web search only, for the tools recommendations page. The reader is an Australian small business owner with 1 to 10 staff who already dabbles with AI. Method: WebSearch in extended mode for every price and every claim from the last three months, often restricted to the vendor's own domain so the snippet quotes the vendor. Direct fetch failed for every vendor page tried (buffer.com, make.com, zapier.com, n8n.io all returned ENOTFOUND from the sandbox), and claude.com, anthropic.com and support.claude.com are blocked as usual. So every figure below comes from a search-result snippet. Where the snippet quotes the vendor's own page it is graded A with "via snippet"; nothing was read in full.

This file does not redo `notes/social-research/02-tools.md` and `05-automation.md` (both 23 Sep 2026). It re-checks the Buffer prices and limits, records what changed, and adds the automation platforms.

Grades: **A** = vendor's own current page (here always via search snippet). **B** = reputable press. **C** = blog, comparison or review site, forum, or a vendor writing about a competitor. Every source is dated by the date the snippet or page carried, or "undated" where it carried none.

Currency: every price says USD or EUR and is the vendor's own figure. None of the vendor snippets found said whether tax is included. All four vendors are overseas and price in USD or EUR, so an Australian card should expect 10% GST added at checkout (GST follows the customer's location, not the currency) and a possible bank foreign transaction fee of up to about 3%. Where an AUD figure is given it uses the same convention as file 02, about A$1.55 per US$1, before GST, and is an estimate to check on the day. No EUR to AUD conversion is given; check the rate.

---

## 1. Social scheduling

### Buffer

**What it does, in one line.** One queue for all your social accounts: you (or Claude) put posts in, Buffer publishes them at the times you set, and you check each one on your phone first.

**Who it is for.** An owner posting to more than Facebook and Instagram (LinkedIn, Google Business Profile, TikTok, Threads, YouTube Shorts and others), anyone who wants Claude to draft straight into a queue, and anyone who wants one phone app to check and schedule everything. **Who it is not for.** A business on Facebook and Instagram only, which can schedule free in Meta Business Suite (below); and a team that needs a formal sign-off chain, which needs Buffer's dearer Team plan or a tool like Planable.

**Price, re-checked 11 Oct 2026.**

| Plan | Monthly billing | Annual billing | Limits | Source · grade |
|---|---|---|---|---|
| Free | US$0 | US$0 | 3 channels connected at once, **lifetime cap of 8 unique channels** (counting ones you later disconnect), 10 scheduled posts per channel (refills as posts publish), 100 ideas, 1 user, AI Assistant with unlimited use, 5 AI reply suggestions a week, 30 days of analytics, 1 API key | support.buffer.com "Buffer pricing and features" (A via snippet, undated, current); buffer.com/pricing (A via snippet, undated) |
| Essentials | US$6 per channel per month | US$5 per channel per month | 1 user, unlimited scheduling (fair use), full analytics, up to 5 API keys | support.buffer.com pricing article (A via snippet); upload-post.com and socialk.it (C, 2026) |
| Team | US$12 per channel per month | US$10 per channel per month | Unlimited users, approval workflows (contributor and reviewer roles) | support.buffer.com pricing article (A via snippet) |
| Volume | Per-channel price drops past 10 channels (Buffer's table lists US$4, US$3, then US$1 to US$2 at higher bands) | | | support.buffer.com (A via snippet); noobclaw.com (C, 2026) |
| Trial | 14 days free on paid plans | | | support.buffer.com (A via snippet) |

Worked figures for the page: four channels on Essentials is US$24 a month on monthly billing (about A$37 before GST) or US$20 a month on annual (about A$31 before GST). That matches the A$37 + GST already on the Social Media deck's stack slide (register row 69), which is the monthly-billing figure.

Third-party pages disagree, because some quote the annual rate as if it were monthly. One page "verified 29 September 2026" lists Essentials at US$5 and Team at US$10 without saying which billing (upload-post.com, C). Buffer's own help centre gives both rates and is the one to follow.

Tax: no Buffer page found says whether GST is included or added for Australian customers. UNSETTLED. Treat as USD plus 10% GST.

**Free tier, genuinely usable?** Yes, for a business with three channels or fewer posting a few times a week. The real limit is 10 queued posts per channel, which is about two weeks ahead at five posts a week; a batch week of drafting from Claude can hit it. The lifetime cap of 8 unique channels matters for anyone who connects and disconnects accounts while experimenting.

**Claude connector.** Buffer runs its own official MCP server at `mcp.buffer.com/mcp`, launched with its public API on 27 May 2026. It is **not** in Anthropic's Connectors Directory: a domain-restricted search of claude.com and claude.ai found directory listings for Metricool and Postiz but none for Buffer (11 Oct 2026). So it is still added as a custom connector in Claude's connector settings, OAuth sign-in, no API key needed in the Claude apps, which is what the Social Media deck already teaches. Buffer says the API and MCP are on every Buffer plan including Free; separately, custom remote connectors in Claude have plan limits on Claude's side. What it lets Claude do: list your channels, read the queue, create drafts and scheduled posts, save ideas, read aggregated post metrics, and manage post templates. MCP calls count against Buffer's API rate limits, which vary by plan (third-party figures: 3,000 requests a month on Free, 7,500 on Essentials, 15,000 on Team; C, unconfirmed). Sources: buffer.com/resources/buffer-api-is-here (A via snippet, 27 May 2026); developers.buffer.com/guides/integrations/claude.html and /mcp.html (A via snippet, undated); usecarly.com/blog/claude-buffer-integration (C, 2026). Observed in this session: a Buffer MCP connection's own setup text says Claude, ChatGPT and other clients connect over OAuth "with nothing to create", and lists drafts, scheduling, ideas, templates and aggregated metrics as its tools (observed, 11 Oct 2026).

**Pros for a small business.**
- The only scheduler taught in the members area, and Claude drafts into it directly, so the course and the tool are one system.
- Free plan is real, and the AI Assistant is unlimited on it.
- Buffer holds the Meta, LinkedIn and Google approvals, so the owner reconnects an expired account with a tap in Buffer rather than anyone rebuilding an automation (file 05, section 3).

**Cons.**
- Per-channel pricing: the bill grows every time a platform is added.
- Formal approvals only on Team, at double the Essentials price per channel.
- The Claude connector is a custom connector, not a one-click directory listing, so setup is a step the owner may need help with (the deck already says "we do this one together").

**Changed since 23 Sep 2026, or found that the earlier files got wrong.**
1. **Team is US$12 per channel on monthly billing, US$10 on annual.** File 05 recorded Team at US$10 as the monthly figure. Correct it if Team is ever quoted.
2. **Free plan lifetime cap of 8 unique channels.** Not in either earlier file. It is in Buffer's help centre.
3. **AI Assistant is unlimited on Free.** Earlier files said "included"; Buffer's page now says unlimited (an older 50-credit cap is out of date).
4. **Buffer's legacy REST API is being retired on 1 February 2027**, with planned brownouts on **11 November and 9 December 2026**, when legacy requests will fail briefly. Buffer's help centre says its Zapier, Make, n8n and MCP connections run on the current GraphQL API, so a client using the official connector or the official Zapier and Make apps should be unaffected. Anything a developer built on the old API will break. Sources: buffer.com/resources/legacy-rest-api-retired (A via snippet, 2026); support.buffer.com "What is Buffer's API?" (A via snippet).
5. No price change found in September or October 2026. Essentials at US$6 / US$5 is unchanged from file 02.
6. Still not in Claude's Connectors Directory. Two rival schedulers are (Metricool and Postiz). That is worth knowing, not a reason to switch: see below.

### The one alternative worth naming: Meta Business Suite

**What it does.** Meta's own free tool for scheduling Facebook and Instagram posts, Reels and Stories, plus one inbox for messages.

**Clear reason a client might pick it instead.** It is free, first-party, and does everything a Facebook-and-Instagram-only business needs. Meta One (launched 15 Sep 2026) did not replace or charge for the free scheduler, inbox or composer; it sells extras on top (30-day Story scheduling, team access without sharing passwords) from US$49.99 a month per profile. Scheduling window: officially up to 75 days ahead; 2026 guides report a 20-minute minimum and about 30 days in practice (sources disagree). No Claude connector and no usable way for AI to drop drafts into it, so Claude's caption has to be pasted in by hand. Sources: adlibrary.com/posts/meta-one-vs-business-suite (C, 2026); bestsocialmediascheduler.com/reviews/meta-business-suite (C, 2026); fitsmallbusiness.com best free schedulers (C, 2026); file 02 section 5 (B sources on Meta One, 15 to 16 Sep 2026).

Proposed position on the page: Facebook and Instagram only, use Meta Business Suite, free. The moment LinkedIn, Google Business Profile or TikTok joins, or the owner wants Claude to fill the queue, use Buffer.

**Not named, and why.**
- **Metricool and Postiz** are listed in Claude's Connectors Directory (claude.com/connectors/metricool-social-media-management; claude.ai/directory/postiz, A via snippet, undated). That is one-click setup where Buffer needs a custom connector. It is not a clear enough reason to recommend a second scheduler: Buffer's connector works, the deck teaches it, and Metricool gates approvals and its Zapier access behind its Advanced plan (file 05). Revisit if Buffer's custom-connector step proves to be where clients get stuck.
- **"Sacha"** (newsletter lead, about 29 Sep). No product of that name was found. The nearest match is SachaSoft (sachasoft.com, A, undated), a LinkedIn-first tool that writes posts in your voice and schedules to LinkedIn, X, Threads, Facebook and Bluesky. It does not cover Instagram or Google Business Profile by its own description, and no independent review was found. Not a Buffer alternative for these clients.

---

## 2. Automation platforms

### The billing units, in plain words

All three charge for how much work the automation does, but they count it differently. This is the single thing an owner gets wrong when comparing prices.

| Platform | Unit | What counts as one | What a small business typically uses |
|---|---|---|---|
| **Zapier** | Task | One action step that succeeds. The trigger (the "when this happens") does not count. A Zap that adds a new lead to a spreadsheet and sends a welcome email is 2 tasks per lead | 100 leads a month through that Zap is 200 tasks, inside the 750 on Professional. A Claude call through the Zapier connector costs 2 tasks each. An AI step inside a Zap costs 1, 3 or 5 tasks depending on the model tier (since 15 June 2026) |
| **Make** | Credit (was called an operation until the 2025 switch) | Each module (step) that runs, usually at least 1 credit. **The trigger counts too, and a scheduled check that finds nothing still costs 1 credit** | The trap: a scenario that watches a Google Drive folder every 15 minutes spends about 2,880 credits a month just looking, nearly three times the free plan's 1,000, before it does any work. Checking hourly costs about 720. A photo-to-Buffer draft is about 4 to 6 credits per post, so 20 posts is 100 to 150 credits plus the checking. Inside 10,000 credits on Core, if the checking is set sensibly |
| **n8n** | Execution | One full run of a workflow, however many steps it has | A 10-step workflow that runs 100 times a month is 100 executions. Starter's 2,500 covers most small businesses comfortably |

Sources: Zapier task rules, zapier.com/blog/what-is-a-task-in-zapier and help.zapier.com MCP usage article (A via snippet); AI step tiers, help.zapier.com "AI by Zapier: new model-based pricing starting June 15, 2026" (A via snippet, June 2026); Make credits, help.make.com and community.make.com credits notices (A via snippet); Make polling cost, academy-content.make.com "Using credits effectively in scenarios" (A via snippet, gives the 5-minute example: 288 credits a day, 8,640 a month for the trigger alone; the 15-minute figure is the same arithmetic); n8n executions, n8n.io/pricing and blog.n8n.io execution model posts (A via snippet).

### Zapier

**What it does.** Connects your apps so that when something happens in one (a form is filled, an invoice is paid, an email arrives), something happens in another, without you doing it.

**Who it is for.** A non-technical owner automating their first few jobs, and anyone using an app the other two do not support (Zapier has the widest catalogue, reported at 8,000 to 9,000+ apps; C). **Not for.** High-volume or many-step workflows where the per-task bill climbs, or someone who wants complex branching cheaply.

**Price.**

| Plan | Annual billing | Monthly billing | Includes | Source · grade |
|---|---|---|---|---|
| Free | US$0 | US$0 | 100 tasks a month (shared with Zapier MCP), unlimited Zaps, **two-step Zaps only** (one trigger, one action), checks for new data every 15 minutes, no premium apps, Tables and Forms | help.zapier.com "What's included in Zapier's Free plan" (A via snippet); zapier.com/pricing (A via snippet) |
| Professional | From US$19.99 a month, 750 tasks | About US$29.99 a month (third-party; the only Zapier page carrying it is an older product page using the retired name "Starter") | Multi-step Zaps, premium apps, 2-minute checks, pay-per-task overflow so Zaps keep running | zapier.com/pricing and zapier.com/blog (A via snippet, annual); automationatlas.io, lindy.ai, latenode.com (C, 2026, monthly) |
| Team | From US$69 a month, 2,000 tasks | About US$103.50 (one source) | Up to 25 users, shared workspace, 1-minute checks | zapier.com/blog and zapier.com/pricing (A via snippet); one C source for monthly |
| Overflow | Once the plan's tasks run out, paid plans can switch to pay-per-task, capped at 3x the plan's limit. Rate 1.25x the plan's per-task cost (one Zapier article says 2.5x on monthly billing; pricing page says 1.25x without splitting) | | | zapier.com/pricing, zapier.com/blog (A via snippet) |

Monthly Professional is UNSETTLED at about US$29.99: consistent across third-party sites, but not seen on Zapier's current pricing page snippet, which shows only "from US$19.99, billed annually". One site claims a March 2026 price rise and a 15% cut to task limits; no other source carries it and Zapier's pages do not show it. Treat as unverified. 14-day Professional trial for new accounts, then it drops to Free.

**Free tier, genuinely usable?** For one simple job, yes: "new form entry, add a row to a sheet" fits. The two-step limit is the real wall: any job with an AI step in the middle is three steps and needs Professional. Free Zaps stop dead at 100 tasks.

**Claude connector.** Yes, official and Anthropic-verified in the Connectors Directory, made by Zapier, added November 2025 (claude.com/connectors/zapier, A via snippet). Claude can then act in any app you allow in Zapier's catalogue: send an email, add a CRM contact, create a calendar event, look things up. Each successful call costs 2 tasks from the same pool as your Zaps; failed calls are free; available on every plan, so the Free plan's 100 tasks is about 50 Claude actions a month. Sources: help.zapier.com "How Zapier MCP usage works" (A via snippet); zapier.com/blog/zapier-mcp-guide (A via snippet). The reverse also works: a Claude step inside a Zap, billed in Zapier tasks with no separate Anthropic account (zapier.com/compare/zapier-vs-claude, A via snippet; Zapier notes some newer Claude models are bring-your-own-key only).

**Pros.**
- Easiest of the three to learn; most 2026 comparisons point a non-technical owner here first (dev.to, mccarygroup.com, aiessentials.us, C, 2026).
- Copilot builds a Zap from a plain-English description and walks you through each step; listed as beta on every plan including Free (help.zapier.com "Use the power of AI to generate Zap workflows", A via snippet).
- Widest app catalogue, and checking for new data does not cost tasks, so a quiet Zap costs nothing.

**Cons.**
- Dearest per unit of work; the bill grows with volume.
- Free plan cannot do a three-step job, which is any job with AI in it.
- AI steps now cost 1x, 3x or 5x tasks by model tier, and new AI steps may default to a dearer tier (Zapier's help says Advanced, 3x; one blog says Premium, 5x; sources conflict). An owner adding AI to a Zap can triple its cost without noticing.

**Changed in the last 90 days.** AI-step model-based pricing from 15 June 2026 (just outside 90 days but live, and it changes the arithmetic for any AI Zap). Zapier Agents reported generally available April 2026 (C). No plan price change confirmed.

### Make

**What it does.** The same job as Zapier, connecting apps so work happens on its own, built on a visual canvas where you can see every step and branch.

**Who it is for.** An owner (or the consultant building for them) whose automations have outgrown Zapier's price or need branching logic; anyone running many steps per job, because Make is cheaper per step. **Not for.** A first-time builder working alone: the canvas, data mapping and credit arithmetic take longer to learn.

**Price.**

| Plan | Monthly billing | Annual billing | Includes | Source · grade |
|---|---|---|---|---|
| Free | US$0 | US$0 | 1,000 credits a month, **2 active scenarios**, runs no more often than every 15 minutes, 5-minute max run time reported | make.com/en/pricing (A via snippet, credits); lindy.ai, stacksheriff.com, automationlabguide.com (C, 2026, scenario and interval limits) |
| Core | US$12 a month for 10,000 credits | About US$9 a month | Unlimited active scenarios, 1-minute interval, can scale to 300,000 credits | make.com/en/pricing and a Make blog post from about early August 2026 (A via snippet, monthly); most third-party guides (C, annual) |
| Pro | US$21 | About US$16 | Priority runs, custom variables, full-text log search, scales to 8 million credits | as above |
| Teams | US$38 | About US$29 | Team roles, shared templates | as above |

Annual billing saves 15% or more; unused credits expire at the end of the subscription term (Make community pricing notice, A via snippet). Extra credit packs reportedly cost about 25% more per credit than the plan's own (one C source, unverified).

Sources disagree, and that matters for the page. Make's own pricing-page snippet and a Make blog post from about 68 days before today show US$12 / US$21 / US$38. An older Make snippet and many guides show US$9 / US$16 / US$29, which look like the annual rates. One site (neomanex.com, C) claims Make quietly cut Core to US$9 in September 2026 by comparing its live page against a May record; a search for that article returned nothing, so it is unverified. Write it on the page as "from about US$9 a month on annual billing, US$12 monthly" and do not quote one figure as if it were both. Tax: UNSETTLED; nothing found says whether GST is included.

**Free tier, genuinely usable?** Barely, for one or two light jobs. Two active scenarios is a hard ceiling, and the credit trap above means a single folder-watcher on a 15-minute check can use the whole month's 1,000 credits in about ten days. Usable for learning and for one job set to check hourly.

**Claude connector.** Yes, official and Anthropic-verified in the Connectors Directory, made by Make, added January 2026, at `mcp.make.com` (claude.com/connectors/make, A via snippet). What it lets Claude do: run any of your Make scenarios that are active and set to run on demand, as tools, and (on paid plans, with management scopes) view and edit scenarios, connections and data stores. A scenario needs a clear description so Claude picks the right one. Two limits worth knowing: by default the run scope reaches every on-demand scenario across all your Make organisations, so use an MCP Toolbox to expose only chosen scenarios; and a scenario run through the connector times out after 25 seconds over OAuth (40 seconds with a token), so long jobs need splitting. Sources: help.make.com "Get started with Make MCP server" and "Introducing MCP toolboxes", developers.make.com/mcp-server (A via snippet, undated, current). Make's AI module can also call Claude inside a scenario, either through Make's own AI provider (charged in credits) or your own Anthropic key on a paid plan (file 05).

**Pros.**
- Cheapest per step of the hosted options: 10,000 credits for about US$9 to US$12 against Zapier's 750 tasks for about US$20 to US$30.
- Maia, a built-in assistant, builds a scenario from a plain-English request on the canvas in front of you, asks clarifying questions, and can explain an existing scenario; Make says it is included in all plans (make.com/maia and Make blog, A via snippet, 2026).
- Visual canvas makes a broken step easy to find once you know the tool.

**Cons.**
- Steeper to learn than Zapier for someone alone.
- Credits are hard to forecast, and scheduled checks cost credits even when nothing happens.
- Instagram connections need reauthorising by hand about every 60 days (file 05, C), which is one reason to publish through Buffer rather than straight from Make.

**Changed in the last 90 days.** Pricing display moved between about US$9 and US$12 for Core across sources from August to September 2026; read the billing toggle. Maia launched and was built into the scenario builder (2026; exact date not settled, C sources). MCP Toolboxes added (date not settled).

### n8n (research only; James does not use it)

**What it does.** Another tool for connecting apps and automating work, popular with technical people because it can run on your own server for free and handles complex, AI-heavy workflows.

**Who it is for.** A business with a technical person who will own it, or someone running high volumes where per-step billing would be expensive. **Not for.** A 1 to 10 person business without that person. Most 2026 comparisons say consider it only if you can name who is responsible for hosting, monitoring, backups and failures (C, several, 2026).

**Price (n8n Cloud, the hosted plan; prices in EUR).**

| Plan | Monthly billing | Annual billing | Includes | Source · grade |
|---|---|---|---|---|
| Free | No permanent free cloud plan. 14-day trial of Starter or Pro | | | coworker.ai, goodspeed.studio, nocode.mba (C, 2026); consistent with n8n.io/pricing (A via snippet) |
| Starter | €24 a month | €20 a month | 2,500 executions, 5 at once, 1 shared project, 5-minute max run time reported | n8n.io/pricing (A via snippet, annual); third-party guides (C, monthly) |
| Pro | €60 | €50 | 10,000 executions, up to 50 at once (sources disagree; one says 20), 3 shared projects, admin roles, workflow history | as above |
| Business | €800 | €667 | 40,000 executions, SSO, Git version control; n8n's page says **self-hosted only** | n8n.io/pricing (A via snippet) |
| Community Edition | Free, self-hosted | | Unlimited runs on your own server | n8n.io (A via snippet) |

If a cloud plan goes over its executions, n8n's page says workflows keep running but overage charges may apply (A via snippet); a community answer says Starter cannot exceed 2,500 and you move up a tier instead (C). Sources conflict. US dollar figures in third-party guides are conversions, not n8n's prices. Tax: UNSETTLED. No 2026 price change found.

**Free tier, genuinely usable?** Only self-hosted, which is the catch. The free version means running your own server.

**The self-hosting question, plainly.** A one-person business should not run its own n8n server. Self-hosting means owning updates, backups, security patches and uptime yourself, and 2026 showed what that costs when it slips. In March 2026 the US cybersecurity agency CISA added an n8n flaw (CVE-2025-68613, rated 10 out of 10) to its list of vulnerabilities being actively exploited, and a chained attack nicknamed Ni8mare paired it with a second 10-rated flaw; about 24,600 vulnerable servers were counted worldwide in February. The flaws mainly hit self-hosted servers that were not updated promptly. The Western Australian government's security operations centre issued an advisory on n8n in January 2026. If n8n is used at all, use n8n Cloud from €20 to €24 a month, where n8n runs the updates. Sources: securityaffairs.com CISA KEV report (B, 12 Mar 2026); heise.de (B, 2026); rapid7.com (B, 2026); soc.cyber.wa.gov.au advisory 20260115001 (A for the advisory itself, government, 15 Jan 2026); nordflux.de (C, 2026, vendor).

**Claude connector.** Yes, two ways. An official, Anthropic-verified directory connector made by n8n GmbH, added January 2026, which lets Claude search, run, test-run and publish workflows and use data tables (claude.com/connectors/n8n, A via snippet). And every n8n edition, cloud and self-hosted, now has a built-in MCP server an admin switches on, which lets Claude build and edit workflows by prompting; only workflows you mark as available are reachable (docs.n8n.io "Set up and use n8n MCP server", A via snippet; public preview from 29 April 2026 per one guide, C). A self-hosted server must be reachable from the internet for Claude's apps to use it.

**Pros.**
- Bills per whole run, not per step, so a long workflow costs the same as a short one.
- Strongest of the three for AI-heavy workflows, per most 2026 comparisons (C).
- Claude can build workflows in it directly.

**Cons.**
- No free hosted plan; the free version needs a server and the skills to keep it patched.
- The most technical of the three, by every comparison found.
- Prices in euros, so the AUD bill moves with the exchange rate as well as GST.

**Changed in the last 90 days.** Nothing on price found. The built-in MCP server reached newer versions through mid-2026 (C, dates disputed).

### Which one a non-technical owner should start with

**Start with Zapier.** It is the one an owner can set up alone, Copilot builds the first Zap from a sentence, quiet Zaps cost nothing, and it has the most apps. Sources mostly agree (dev.to, mccarygroup.com, aiessentials.us, intuz.com, C, 2026). One 2026 guide dissents and says most small businesses should start on Make (C); the majority view is Zapier first.

**Move to Make when** a Zapier bill has grown past what the job is worth, or a workflow needs branching, or someone who knows Make (James) is building it for you. The same job on Make is usually a fraction of the price, provided the checking interval is set sensibly. One guide's advice is worth repeating: build the job in Zapier first, then rebuild it in Make and compare once the cost starts to bite.

**Consider n8n only when** there is a technical person who will own it, and then on n8n Cloud, not a home-made server.

Judgement, not sourced: for a Magnum client, the Make route usually means James builds and maintains it. That is fine for a paid build. For a member doing it themselves, Zapier.

---

## 3. Do I need Zapier at all, or can Claude do it on its own?

What the sources say:
- **Claude can now run jobs on a schedule in the cloud.** Cowork's scheduled tasks moved to Anthropic's servers for Pro and Max on 6 October 2026, so new tasks keep running with the laptop shut. An Anthropic spokesperson told The New Stack that existing scheduled tasks keep running locally and need the device on until moved over; one blog says existing tasks were moved automatically. Sources conflict on the existing tasks. A task that works on files on your own computer still needs the desktop app open; files in Google Drive or OneDrive and connected apps work from the cloud. Sources: thenewstack.io/claude-cowork-cloud-mobile (B, Oct 2026); heraiempire.substack.com and aiblewmymind.substack.com (C, 6 Oct 2026); support.claude.com article 13455879 on Team and Enterprise, describing cloud sessions as a beta where scheduled tasks run with no device online (A via snippet, undated).
- **Note for this repo.** CLAUDE.md has recorded since 4 Sep 2026 that scheduled tasks run in the cloud with no device on, from TechCrunch, Engadget and others. The 6 October reporting describes cloud scheduled tasks as new on that date. These may describe different products (Claude Code routines and cloud sessions versus Cowork tasks in the desktop app) or a staged rollout. Worth a fact-register row; not settled here.
- **Claude Code routines** (research preview from 14 April 2026, C) run a saved prompt with connectors on Anthropic's cloud, on a schedule, through a web address, or on GitHub events. Run caps are UNSETTLED: one article says 5 runs a day on Pro, 15 on Max, 25 on Team and Enterprise (C, 26 Aug 2026); the same source says Anthropic's docs list no daily cap as of 2 Oct 2026, only hourly limits such as 100 scheduled runs an hour. An older GitHub issue reported 3 daily cloud scheduled sessions on Max 20x (March 2026, closed).
- **Connectors work in cloud runs** if everything the run needs lives on the Claude side (remote connectors, files in your Claude account) (C, 2026). Whether a scheduled task can use the Buffer custom connector unattended is still unconfirmed (register row 68).
- **Claude's schedules are time-based, not event-based.** No source found shows a consumer Claude feature that fires the moment a form is submitted or an email arrives. A competitor's guide says Claude has no event triggers (usecarly.com, C); a Medium post says routines replace Zapier (C) but does not show an inbound trigger beyond a web address a developer would call. Zapier's own comparison says event-driven or always-on work belongs in a Zap and describes Claude's scheduled tasks as running only while the computer is on (zapier.com/compare/zapier-vs-claude, A via snippet, self-interested). That last claim is out of date for new tasks since 6 October.
- **Zapier positions the two as partners**: Claude for judgement and drafting, Zapier for reliable multi-app plumbing with no AI in the loop, and the Zapier connector as Claude's route to apps it has no connector for (A, self-interested).

Proposed answer for the page, with the judgement marked:
- **Claude on its own is enough when** the job runs on a timetable (every Monday, every morning), a delay of minutes or hours does not matter, the apps involved have Claude connectors, and the output is a draft a person checks. Example: every Monday, read the job-photos folder and put a week of drafts into Buffer. (Sources above for the capability; the fit is judgement.)
- **You still want Zapier or Make when** something must happen the moment an event occurs (a lead fills in a form, a payment lands), every time, the same way, without AI deciding anything; when the app has no Claude connector; or when the job runs many times a day. (Event triggers and breadth are sourced; "the same way every time" is judgement: an automation platform repeats exact steps, while a Claude run is the model working it out afresh each time, which is the point for drafting and the risk for plumbing.)
- **Many businesses will use both**, and the Zapier and Make connectors are how Claude reaches the apps it cannot reach itself. Each Claude call through Zapier costs 2 tasks, so a busy Claude can eat a Zapier plan.

---

## 4. Newsletter leads checked (from the Sunday Brief digests, 27 Sep to 10 Oct 2026)

| Lead | What search shows | Bears on the page? | Source · grade |
|---|---|---|---|
| OpenAI Dots, always-on agents, 4,000+ app integrations (30 Sep) | Real. Announced at OpenAI DevDay 29 Sep 2026: an always-on agent inside ChatGPT with its own cloud computer and browser, reachable in ChatGPT, Slack and Teams, connecting to 4,000+ apps. First Dot included with Pro and Business Premium plans, gradual rollout | Yes, as one line under section 3: the top ChatGPT tiers now have an always-on agent too, which will make the "do I need Zapier" question louder. Not for a 1 to 10 person business on a standard plan yet. Model name and channel details vary by source | venturebeat.com (B, 29 Sep to Oct 2026); datacamp.com, mindstudio.ai (C, Oct 2026) |
| Meta Muse for Small Business, skills in Shopify, QuickBooks, Stripe, Canva, Asana (free) | Real, launched 29 Sep 2026, with connectors including Asana, Canva, QuickBooks, Shopify, Slack, Stripe, Notion, Zoom and others; owner approval on publishing, messages and spending; "free for most needs" with paid plans for more. **United States and Canada only. Not available in Australia** as of early October 2026 | Not for this page today. Revisit when Meta announces Australia. Do not quote any AUD price for it | retaildive.com, smallbiztrends.com (B, 29 to 30 Sep 2026); moveros.dev availability check 1 Oct 2026, weblifyai.co.uk (C) |
| Sacha, writes and schedules posts in your voice (~29 Sep) | No product of that name found. Nearest is SachaSoft, LinkedIn-first | Excluded, see section 1 | sachasoft.com (A, undated) |
| Microsoft Copilot Autopilot via the Frontier programme (~2 Oct) | Microsoft announced a redesigned Copilot on 25 Sep 2026 built around Home, Code and Autopilot. Autopilot was set for private preview at month end; Frontier is the Microsoft 365 early-access programme an IT admin turns on per tenant, with no guarantees. Billing described as usage-based | Not for this page. A small business on Microsoft 365 cannot rely on a private preview | letsdatascience.com (C, Sep 2026); microsoft.com Frontier admin page (A via snippet, undated) |

---

## 5. Proposed verdicts for a 1 to 10 person business

James makes the final call on each.

| Tool | Proposed verdict | One-line reason |
|---|---|---|
| Buffer | **Worth it** | One queue for every channel, Claude drafts straight into it, and the free plan covers three channels; pay US$6 a channel a month (about A$9 before GST) only when you outgrow it |
| Meta Business Suite | **Only if** you post to Facebook and Instagram and nothing else | Free and first-party for those two; the moment another channel or Claude drafting joins, use Buffer |
| Zapier | **Worth it**, and the one to start with | Easiest to learn, builds a Zap from a sentence, quiet Zaps cost nothing; expect Professional (from US$19.99 a month annual) as soon as a job has an AI step |
| Make | **Only if** a Zapier bill or a branching workflow pushes you there, or someone who knows Make builds it | Far cheaper per step, but harder to learn alone and its scheduled checks spend credits even when nothing happens |
| n8n | **Skip**, unless a technical person will own it | No free hosted plan (Cloud from €20 to €24 a month), the most technical of the three, and self-hosting is a security job a one-person business should not take on |
| Claude scheduled tasks and connectors on their own | **Only if** the job runs on a timetable and ends in a draft a person checks | Good for "every Monday, draft the week"; not for "the moment a form comes in, do this every time" |

---

## Open questions and UNSETTLED

1. Whether any of the four vendors includes GST in its displayed price for Australian customers. Assumed added.
2. Zapier Professional's monthly-billing price (about US$29.99 per third parties; Zapier's own snippet shows only the annual "from US$19.99").
3. Make's current displayed prices: US$12 / US$21 / US$38 on Make's own snippet, US$9 / US$16 / US$29 elsewhere, read as monthly versus annual; one unverified claim of a September cut to US$9.
4. n8n Cloud overage: keeps running with charges (n8n's page) versus capped at the plan (community answer).
5. Zapier's default tier for a new AI step: Advanced (3x, Zapier's help) or Premium (5x, a blog).
6. Claude routine and scheduled-task run caps per plan.
7. Whether existing Cowork scheduled tasks moved to the cloud on 6 Oct 2026 or stay local until moved by hand; and how that squares with CLAUDE.md's 4 Sep record of cloud scheduled tasks.
8. Whether a Claude scheduled task can use the Buffer custom connector unattended (register row 68, unchanged).
9. Buffer's API rate limits per plan (third-party figures only).
