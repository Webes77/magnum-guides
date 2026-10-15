# 03 · Image and video tools for a 1 to 10 person business, October 2026

Researched 11 October 2026 by web search only (WebSearch, extended mode for every price and every change inside the last three months). Every vendor page tried by direct fetch was blocked from the sandbox: gemini.google, docs.ideogram.ai, fal.ai and higgsfield.ai all returned ENOTFOUND. So the figures below come from search-result snippets. Where a snippet quotes the vendor's own current page it is graded A with "via snippet" noted; otherwise B or C. This file builds on `notes/social-research/02-tools.md` (23 Sep 2026) and supersedes it wherever the two disagree on images or video. Several things in that file are now out of date (Nano Banana version, the Gemini free tier, ChatGPT's image model).

Grades: A = vendor's own current page (here read via search snippet, not fetched). B = reputable press. C = blog, review or comparison site, reseller, forum, user review site. Dates are the source's publication or "checked" date where the snippet showed one; "seen 11 Oct" means the page was live in results that day with no date visible.

Currency convention: every price says AUD or USD and whether tax is in. USD tools billed to an Australian card usually add 10% GST at checkout, plus a possible foreign transaction fee of up to about 3% from the bank. AUD equivalents assume roughly A$1.55 per US$1, the same assumption as file 02, and are estimates, not quotes. Check the rate on the day.

The one thing to know before reading on: this category moves monthly. In the 90 days to today, Google replaced Veo in the Gemini app with a new model, downgraded the free Gemini app, and shipped Nano Banana 2.1; OpenAI shipped ChatGPT Images 2.5 and announced ads beside image generation on its cheap tiers; Ideogram shipped 4.5; Kling 4.0 is in early access with a full launch due this month. OpenAI's Sora video app, which a reader might assume comes with ChatGPT, closed in April. Any recommendation page built from this needs a "last checked" date on it.

---

## 1. Images

### 1.1 Gemini image model (Nano Banana) · Google

**What it does.** Makes and edits pictures from a sentence inside the Gemini app, on a Google AI plan.

**Current name and version.** Two models matter. Nano Banana 2.1 (`gemini-nano-banana-2.1`) was released 6 October 2026, built on Gemini 3.6 Flash, replacing Nano Banana 2 (February 2026), which is now deprecated. Nano Banana Pro is still Google's top image model and reviewers say it often gives better images than 2.1 in practice. Whether 2.1 is already the default inside the Gemini app, rather than only in the developer API, is UNSETTLED: the sources describe it on the API side.

**Best at.** Photo realism, product and portrait photography, native 4K output, keeping people and objects consistent across images (2.1 takes up to 14 reference images and keeps up to four characters and ten objects consistent). Editing an existing photo with a sentence.

**Bad at.** Dense small text. In blog head-to-heads Nano Banana Pro garbled a bilingual menu and misspelled fine print on a label, while ChatGPT's model did better on dense type. It does keep short text, capitals and URLs exact.

**Price.**
- Google AI Plus: A$12.99/mo including GST, reported for Australia since January 2026, with a A$6.49 intro rate for two months (C, single source). US price is variously US$4.99 or US$7.99 to US$9.99 depending on source.
- Google AI Pro: A$32.99/mo per Google's own Australian subscriptions page (A via snippet), but the snippet said the page was about 231 days old, so it may predate 2026 changes. US$19.99/mo in the US. File 02's worry about a A$149.99 figure is not repeated by any source today; A$32.99 is the best available figure.
- Ultra: US$99.99 to US$199.99/mo by tier (C). Not relevant here.

**What a plan buys.** UNSETTLED. Google moved the Gemini app to compute-based limits (an allowance that refreshes every five hours up to a weekly cap) and stopped publishing a daily image count. A March 2026 guide put it at about 50 images a day on AI Plus and 100 on AI Pro with Nano Banana 2, plus the same number of "redo with Nano Banana Pro" actions (C). Treat as indicative only. For a small business posting a few times a week, either plan is far more than enough.

**Free tier.** Weakened this week. From 9 October 2026 free Gemini app accounts are limited to the Flash-Lite model and lose Flash and Pro; AI Plus keeps Flash-Lite and Flash but loses Pro; only AI Pro and Ultra keep all three (B). The free image allowance is UNSETTLED: Google listed up to 20 images a day until about May 2026 and has published no number since (C). The free Nano Banana Pro allowance from late 2025 is reported gone (C).

**Claude.** No Claude connector found. Works alongside: Claude writes the prompt, Gemini makes the picture. (Google Business Profile in Gemini, noted in file 02, is a separate benefit.)

**Pros for a small business.**
- Cheapest strong image model on a plan most owners can justify: A$12.99 includes 200 GB storage (file 02).
- Visible watermark can now be switched off (Settings, Media watermark, web first) since 14 August 2026. Invisible SynthID and C2PA metadata stay in every file (B). Some regions and work or school accounts are excluded (single source, C).
- Best of the three for realistic photos of a product or a space.

**Cons.**
- Plan limits are no longer published, so "how many" cannot be answered.
- Commercial use: no Google first-party wording found. A secondary source citing Google's support forum says Google does not claim ownership and commercial use is generally allowed subject to law and its prohibited use policy (C). Treat as UNSETTLED until Google's own terms are read.
- Every image carries an invisible mark that anyone can now check (see SynthID Detector, section 4). A realistic fake of a job, a product or a premises is now easier to expose, not harder.

**Changed in the last 90 days.** Nano Banana 2.1 (6 Oct). Free tier cut to Flash-Lite (9 Oct). Visible watermark toggle (14 Aug). Nano Banana 2 deprecated.

**Proposed verdict.** Worth it, on Google AI Plus (A$12.99) or as part of AI Pro if the owner wants video too. The best value image tool for realistic photos.

Sources: ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1 (A via snippet, seen 11 Oct); the-decoder.com, "Google's new image model Nano Banana 2.1" (B, Oct 2026); thenextweb.com/news/gemini-flash-lite-free-users-nano-banana-2-1 (B, Oct 2026); techrepublic.com/article/news-google-gemini-free-flash-lite-access (B, Oct 2026); gemini.google/au/subscriptions (A via snippet, page dated about Feb 2026); glbgpt.com Google AI Plus Australia (C, Jan 2026); felloai.com/is-nano-banana-free (C, 2026); aifreeapi.com Gemini image free tier (C, Mar 2026); techradar.com and searchenginejournal.com on the Media watermark toggle (B, Aug 2026); genmedialab.com watermark toggle (C, Aug 2026); workalizer.com on commercial use (C, undated); imagine.art, chatcut.io, maginary.ai head-to-heads (C, 2026).

### 1.2 ChatGPT Images · OpenAI

**What it does.** Makes and edits pictures by asking for them inside ChatGPT.

**Current version.** ChatGPT Images 2.5 (API name GPT Image 2.5, two variants, Flare as default and Sunburst for slower precise work), launched 8 September 2026 across ChatGPT and ChatGPT Work. It follows Images 2.0 (21 to 22 April 2026). Sources cite up to 50% faster generation, more consistent repeated edits, and new Sketch, templates and image comments tools (A via snippet for the launch page; C for most feature detail). File 02 names Images 2.0; that is now one version behind.

**Best at.** Text inside images: posters, packaging, menus, sale tiles, labels. Most comparisons put OpenAI's model ahead of Nano Banana Pro on small and dense type and on following long instructions (C).

**Bad at.** Native resolution is lower than Nano Banana Pro's (about 2K) and reviewers describe a more neutral colour look (C).

**Price.**
- ChatGPT Plus: US$20/mo list. Australian sources disagree: A$30 to A$35/mo including GST, and app store prices differ by platform (C). No AUD figure from OpenAI found.
- ChatGPT Go: about A$13/mo including GST (single source, C).
- How many images a plan buys: OpenAI publishes no number. Its plan pages describe image creation as limited on Free, higher on Go, more on Plus and unlimited on Pro (C summarising OpenAI's pages). Third-party estimates for Plus are guesses; do not quote one.

**Free tier.** Yes, small and unnumbered. Change coming: OpenAI announced on 5 October 2026 that labelled visual ads will appear while an image renders, for Free and Go users, in a US test with selected advertisers starting later in October. Plus and above see none. No timeline for Australia (B/C). Reports say opting out of ads on Free means losing image creation (C, unconfirmed against OpenAI's own docs).

**Claude.** No Claude connector. Works alongside.

**Pros.**
- If the owner already pays for ChatGPT Plus, it costs nothing extra.
- Best of the plan-bundled tools for words on a picture, which is most of what a shop or café promo needs.
- OpenAI's terms (1 January 2026) assign the output to the user (A via snippet). C2PA metadata and invisible watermarking are used (A via snippet, Images 2.5 page). No visible mark.

**Cons.**
- No published limits.
- Output may not be unique; the terms say other users may get similar output (A via snippet).
- No video any more. Sora, OpenAI's video app, stopped on 26 April 2026 after an announcement in March; the Sora API closed 24 September 2026 (A via snippet for the OpenAI notice; B for the shutdown coverage). A ChatGPT subscriber who wants video needs a second tool.

**Changed in the last 90 days.** Images 2.5 (8 Sep). Image ads on Free and Go announced (5 Oct, US test). Sora API closed (24 Sep).

**Proposed verdict.** Worth it, for anyone already on ChatGPT Plus, and the best pick when the job is a graphic with words on it. Not a reason on its own to buy Plus if the owner is on Claude and a Google plan.

Sources: openai.com/index/introducing-chatgpt-images-2-5 (A via snippet, Sep 2026); openpr.com GPT Image 2.5 launch (C, Sep 2026); cellcog.ai and kie.ai on GPT Image 2.5 (C, Sep 2026); techcrunch.com/2026/04/21 Images 2.0 (B); openai.com/policies/terms-of-use (A via snippet, effective 1 Jan 2026); mixed-news.com, androidheadlines.com (2026/10) and finance.yahoo.com on visual ads (B/C, 5 to 6 Oct 2026); smallbizai.au, glbgpt.com, onautopilot.com.au on Australian Plus price (C, 2026); toyboxai.io and chatgptlimit.com on limits (C, 2026); openai.com/index/sora-2 shutdown notice (A via snippet); nbcnews.com, thehill.com, forbes.com on the Sora shutdown (B, Mar 2026).

### 1.3 Ideogram

**What it does.** A picture maker built around getting words right: posters, sale banners, signs, menus, social tiles.

**Current version.** Ideogram 4.5, launched 30 September 2026, pitched as a precision editing model: repeated, multi-turn edits on one image without colour shifts or artefacts building up, editing stylised text in place, and translating the words on a sign while keeping the design. Native 2K. Live in the Ideogram app and API. The "no drift" comparison is Ideogram's own and has not been tested independently (C, one reviewer says so explicitly). Open weights are promised, not shipped. Ideogram 4.0 remains the main generation model; one source reports about 0.97 on a text-reading benchmark (C).

**Best at.** Typography and poster layouts. Fixing one thing on a graphic (the price, the date, the wording) without the rest of the picture changing. There is also an Ad Resizer tool on Ideogram's site (A via snippet, listing only, not assessed).

**Bad at.** Not the first choice for realistic product or people photography (no source ranks it there). Smaller ecosystem than Google or OpenAI.

**Price (USD, tax not stated).** Sources disagree, including two of Ideogram's own pages.
- Ideogram help docs (about 2 days old on 11 Oct): Plus US$20/mo or US$15/mo billed annually, 2,400 credits a month; Pro US$60/mo or US$42/mo annually, 7,500 credits; Team US$30/user/mo, 3,600 credits per user (A via snippet).
- Ideogram pricing page (about 9 days old): Plus US$15/mo annually with 1,000 priority credits; Pro US$42/mo annually with 3,500 (A via snippet).
- One credit costs one US cent on top-ups (A via snippet). Ideogram 4.0 costs 2, 4 or 6 credits per image for Turbo, Default and Quality (C). So Plus buys roughly 400 to 1,200 images a month on the 2,400 figure, or roughly 170 to 500 on the 1,000 figure. After credits run out, Plus and Pro keep generating in a slow queue with no cap, but edits, upscales and reference-image work still need credits (A via snippet). The exact allowance is UNSETTLED; either figure is plenty for a small business.
- AUD estimate: Plus about A$34/mo monthly or A$26/mo annually, with GST, at the convention rate.

**Free tier.** Yes. Help docs: 30 credits a week for accounts signed in with Google, Apple or Microsoft; email-and-password accounts get none (A via snippet). The pricing page says 10 slow credits a week (A via snippet). Free images go to Ideogram's public feed by default and download as reduced-quality JPEG (C). Commercial use on free is disputed: one guide quotes Ideogram's FAQ saying any purpose including commercial use; two others say free output is not licensed for commercial use (C). Paid plans give private generation (C).

**Claude.** No Claude connector or MCP server found.

**Pros.**
- Strongest specialist for text-heavy graphics, and 4.5 makes "change the price, keep everything else" practical.
- Cheap at the volume a small business uses.
- Translating sign text is useful for a tour operator or café with non-English customers.

**Cons.**
- Overlaps ChatGPT Images, which most owners already have or will pick first.
- Free images are public by default; anything for a client or a launch should be made on a paid plan.
- Pricing and credit figures are inconsistent across the vendor's own pages.

**Changed in the last 90 days.** Ideogram 4.5 (30 Sep). Credit figures in the help docs changed in early October.

**Proposed verdict.** Only if the business makes text-heavy promo graphics every week and wants to edit them in place. Otherwise ChatGPT Images or Canva covers it.

Sources: x.com/ideogram_ai/status/2105327223431737780 (A, 30 Sep 2026); alternativeto.net/news/2026/10 Ideogram 4.5 (C, Oct 2026); orcarouter.ai Ideogram 4.5 launch and test (C, Oct 2026); eachlabs.ai (C); docs.ideogram.ai FAQ and plans pages (A via snippet, seen 11 Oct); ideogram.ai/pricing (A via snippet, about 2 Oct); eesel.ai/blog/ideogram-pricing (C, 2026); licenseorg.com, costbench.com, krea.ai on free-tier terms (C, 2026).

### 1.4 Fal.ai

**What it does, plainly.** A pay-as-you-go shop that sells access to hundreds of other companies' image and video models (Google's, ByteDance's, Kling, FLUX, Ideogram and more) one picture or one second of video at a time. There is no monthly plan: you load credit and each result is charged. It is built for developers; the main way in is code or an API key, with a browser playground on the side.

**Who it suits.** Someone technical who wants to try many models without a subscription to each, or who wants Claude (especially Claude Code) to make images and video on demand. Most owners will not need it: the plan they already have covers the job with less to learn.

**Best at.** Choice and speed of access. New models often land here first (for example Seedance 2.0 was on fal in April 2026; Kling 4.0 is listed as "coming soon"). Paying only for successful outputs: fal says server errors and queue time are not billed (A via snippet).

**Bad at.** Anything a non-technical owner would call easy. No brand kit, no templates, no editing timeline.

**Price (USD, tax not stated).** Per output, varies by model.
- Images, examples: FLUX dev US$0.025/image in fal's own docs example (A via snippet); Nano Banana 2 about US$0.08/image; Seedream about US$0.03 to US$0.04/image (C).
- Video, examples checked October 2026: Kling 3.0 Pro about US$0.112/second without audio; Veo 3.1 about US$0.20/second without audio or US$0.40/second with audio at 1080p; Wan 3 US$0.05 to US$0.20/second (C).
- What US$10 buys at those rates: roughly 125 Nano Banana 2 images, or about 25 seconds of Veo 3.1 with sound, or about 90 seconds of Kling 3.0 Pro without sound. Rates move; check the model page.
- Rate caps: a single reviewer reports new accounts are capped at two jobs at once (C).

**Free tier.** No general free tier. Some models carry free Sandbox credits marked with a gift icon, usable only in the playground, not the API (A via snippet). fal's browser image tools are free with no watermark; its MiniMax H3 Max video model gives five free generations a day to signed-in users (A via snippet). Reports of a sign-up credit range from US$1 to about US$20 and conflict (C). UNSETTLED.

**Claude.** Yes, by MCP. fal's own docs give a Claude Code command and, on a newer Claude-specific page, a custom connector at `mcp.fal.ai/mcp-relay` with browser sign-in. An older fal page says Claude's custom connectors are not yet supported; the newer page is likely current (A via snippet, both undated, conflict noted). On Team or Enterprise a workspace owner adds it first.

**Pros.**
- No subscription; a business that makes ten images a month pays for ten.
- One account reaches almost every major model, including FLUX 3 Image (below).
- Works with Claude.

**Cons.**
- Developer tool; the learning cost is the real price for an owner.
- Commercial-use terms depend on each underlying model's licence; no source settled this (UNSETTLED).
- Per-second video pricing makes a spend hard to predict, the credit-system complexity flagged in file 02.

**Changed in the last 90 days.** New models added continuously, including FLUX 3 Image (about 1 Oct) and fal's own post-trained MiniMax H3 Max video model.

**Proposed verdict.** Skip for most. Only if the owner, or James on their behalf, wants Claude to drive image or video generation through a connector and is comfortable topping up credit.

Sources: fal.ai/docs/documentation/model-apis/pricing (A via snippet, seen 11 Oct); fal.ai/docs/documentation/model-apis/sandbox (A via snippet); fal.ai/minimax-h3-max (A via snippet); fal.ai/docs/model-apis/mcp and fal.ai/docs/documentation/setting-up/mcp/claude (A via snippet, undated, conflicting); fal.ai/seedance-2.0 (A via snippet, Apr 2026); fal.ai/learn/tools/what-is-kling-4-0 (A via snippet); aireiter.com/blog/fal-ai-review-2026 (C, Oct 2026); costbench.com fal pages (C, 2026); modelslab.com/fal-ai-pricing (C).

### 1.5 Also seen, not recommended for this reader

- **FLUX 3 Image** (Black Forest Labs, released about 1 October 2026). Multi-step editing that leaves the rest of the picture alone, with JSON bounding boxes that lock the pixels outside a chosen area. API at 50% off until 8 October; open weights promised. Reached through fal.ai and other API hubs. A developer's tool; for an owner it duplicates Ideogram 4.5's editing pitch. Sources: techtimes.com 2026-10-02 (C, promotional wording); aifrontierpost.com (C, Oct 2026). The wider FLUX 3 family launched 23 July 2026 starting with video (C).
- **Canva Pro's own AI images.** Dream Lab, powered by Leonardo.ai's Phoenix model, draws on one shared monthly AI allowance with every other Canva AI feature (C). Good enough for an owner already in Canva who needs an occasional picture; see section 3.

---

## 2. Video

### 2.1 Google video through Gemini and Flow (Veo 3.1, now Gemini Omni)

**What it does.** Makes short video clips with sound from a sentence or a photo, inside the Gemini app or Google's Flow film tool.

**The name changed.** Google's Gemini video page now says Gemini Omni "is our latest video editing and generation model that will replace Veo in the Gemini app" (A via snippet, page updated about 10 October). Omni Flash was introduced in May 2026 (around Google I/O, 19 May, per secondary sources) and Gemini Omni 1.1 Flash followed on 27 August 2026. It does 10-second videos with native audio, photo-to-video from up to five photos, scene extension, and video-to-video and multi-turn editing (A via snippet). Veo 3.1 is still the documented developer model and still runs in Flow (A via snippet, Vertex docs). So "Veo" is the right word for Flow and the API, and "Omni" is what an owner will meet in the Gemini app. One comparison warns that "Omni kills Veo" overstates it (C).

**Best at.** Several comparison sites rank Omni Flash first on blind-vote leaderboards, at about US$0.10/second at 720p on the API (C). Veo 3.1 is still rated best for physical realism, sound and lip-sync (C). Both make sound in the same pass, which matters for a social clip.

**Bad at.** Short clips: about 8 seconds native for Veo 3.1 in the Gemini app, 10 for Omni (A via snippet; C). Anything longer is stitched or extended.

**Price.** Bundled in Google AI plans (prices in 1.1).
- Gemini app: compute-based allowance, no published video count (C). Omni is limited to paid Google AI plans, 18 and over (C).
- Flow: monthly credits that do not roll over. About 200 a month on AI Plus, 1,000 on AI Pro, 10,000 to 25,000 on Ultra, plus 50 daily credits on every tier (C, several sources agree). Veo 3.1 Lite costs 10 credits a generation, Fast 20, Quality 100 (C).
- What that buys: AI Pro's 1,000 credits is about 100 Lite, 50 Fast or 10 Quality clips a month, each about 8 seconds, so roughly 400 seconds of Fast video, before the daily credits (C). AI Plus is about 20 Lite or 10 Fast clips a month. Whether the 50 daily credits need a paid plan at all is disputed (C). Omni's credit cost inside Flow was not found (UNSETTLED).

**Free tier.** Flow advertises 50 daily credits on any Google account, but Google's own getting-started docs reportedly still say a paid plan is required (C, conflict noted). UNSETTLED. The Gemini app's Omni video is paid plans only (C).

**Claude.** No Claude connector. Works alongside.

**Pros.**
- If the owner is on Google AI Pro, image and video come on one bill they already pay.
- Sound included, and top-ranked quality on current leaderboards.
- Visible watermark can be switched off for Omni video too; SynthID and C2PA stay (B).

**Cons.**
- Clips are short, which suits a Reel or a story but not an explainer.
- Two surfaces (Gemini app and Flow) with different models and different meters, which confuses a beginner.
- Every clip carries an invisible AI mark that can now be checked publicly. A realistic clip of a job, a meal or a venue that never happened is a consumer law risk (section 4).

**Changed in the last 90 days.** Omni 1.1 Flash (27 Aug). Omni replacing Veo in the Gemini app (page updated October). Free Gemini app cut to Flash-Lite (9 Oct), which also narrows what a free account can try.

**Proposed verdict.** Worth it for an owner already on Google AI Pro (A$32.99), who gets video included. Only if (they want video at all) on AI Plus, where the Flow allowance is about ten good clips a month.

Sources: gemini.google/overview/video-generation (A via snippet, updated about 10 Oct 2026); blog.google "Introducing Gemini Omni" (A via snippet, May 2026); blog.google "Gemini Omni 1.1 Flash lets you build with more control" (A via snippet, 27 Aug 2026); docs.cloud.google.com Veo 3.1 (A via snippet, about 2 Oct 2026); artlist.io, yingtu.ai, veo3ai.io on Omni vs Veo (C, 2026); magichour.ai/blog/google-flow, costgoat.com/pricing/google-flow (C, Oct 2026), saascrmreview.com (C) on Flow credits; ai-toolbox.co Gemini usage limits (C, 2026); hedra.com, tech-insider.org, buildmvpfast.com video model rankings (C, Sep 2026); techradar.com on the watermark toggle (B, Aug 2026).

### 2.2 Seedance · ByteDance ("C Dance")

**What it does.** ByteDance's video model: turns a prompt plus reference photos into a clip, and is known for longer one-take shots and keeping a character or product consistent.

**Current version.** Seedance 2.5, launched 31 July 2026: up to 30 seconds in one take (double 2.0's 15), multi-round extension, up to 50 reference inputs, and editing at a timestamp instead of regenerating (A via snippet, ByteDance Seed blog; B, TechNode). Seedance 2.0 (February 2026) and a cheaper 2.0 Mini and 2.0 Fast are still offered.

**Where a normal person can use it.**
- **Higgsfield** (James's route). Seedance 2.5 is gated to Higgsfield's Plus plan and up; 3 credits per second at 480p, 6.5 at 720p, 9 at 1080p, so an 8-second 1080p clip is 72 credits, about US$3.60 (A via snippet, Higgsfield blog, and C, agreeing). One Higgsfield page gives 7 and 12 credits a second instead (A via snippet, conflicting). Higgsfield also has a character-swap app, Recast, and a Seedance VFX workflow where a Claude skill writes the prompt (A via snippet).
- **Dreamina** (CapCut's web app). Pick AI Video, then Seedance 2.0 (A via snippet). Basic plan USD 15/month with 1,575 credits (USD 1 = 1,050 credits), Standard USD 36/month with 3,885 credits; a 90% first-month promo ran 23 Sep to 9 Oct 2026. Seedance 2.5 is quoted at US$0.035/second at 720p on the promo first month; 2.0 Fast and Mini from US$0.008/second (A via snippet, promotional). Seconds per plan: UNSETTLED; Dreamina says "48 videos (10s each) per month" without naming the plan. Free daily credits to try (A via snippet).
- **CapCut app.** All tools, then AI video (A via snippet). Seedance 2.0 Fast from about US$0.01/second on Pro and Ultra plans at US app pricing (A, CapCut on X, Aug 2026). CapCut's April 2026 rollout named Indonesia, the Philippines, Thailand, Vietnam, Malaysia, Brazil and Mexico, not Australia (A via snippet). Whether Seedance is in the Australian CapCut app today is UNSETTLED. CapCut Pro is US$19.99/mo or US$179.99/yr at US web prices (C), unchanged from file 02.

**Best at.** Length (30 seconds) and reference control: the same product, outfit or location held across a clip (C rankings agree).

**Bad at.** Access and track record: not yet on the main public leaderboards, and API access is limited by region (C). Resolution claims for 2.5 conflict between 720p and 4K (C).

**Free tier.** Dreamina free daily credits (A via snippet). Not on Higgsfield's free plan.

**Claude.** Through Higgsfield's connector (2.3). No direct Claude route to Dreamina or CapCut found.

**Pros.**
- The best current model for a 15 to 30 second product or venue clip in one take.
- Cheap per second on Dreamina.
- Already inside the tool James publishes with.

**Cons.**
- Copyright history. Disney sent a cease-and-desist on 13 February 2026, followed by protests from Paramount, Warner Bros., Netflix, Sony and the MPA, over clips of film characters and celebrities (B). ByteDance pledged stronger safeguards on IP and celebrity likeness; one vendor blog says named celebrity faces and protected characters are now blocked (C, unverified). A business must never put a real person or a known character in a clip without permission.
- ByteDance ownership, which some clients will raise (file 02).
- Three ways in, each with different pricing and different model versions.

**Changed in the last 90 days.** Seedance 2.5 (31 Jul) and its arrival on Higgsfield and Dreamina. Dreamina promo pricing (23 Sep to 9 Oct, now ended).

**Proposed verdict.** Only if the owner already uses Higgsfield, or already pays for CapCut and finds it in their app. Not worth a separate sign-up for a business that posts one clip a week; Google's plan covers that.

Sources: seed.bytedance.com Seedance 2.5 post (A via snippet, 31 Jul 2026); technode.com/2026/07/31 (B); dev.to Seedance 2.5 review (C, 2026); higgsfield.ai/blog/seedance-2-5-pricing-2026 and /seedance-2-5-on-higgsfield-2026 (A via snippet, vendor, 2026); apify.com Higgsfield proxy listing (C); higgsfield.ai/apps/recast and /blog/vfx_4k (A via snippet); dreamina.capcut.com Seedance 2.0 and 2.5 pricing, pricing/dreamina-price, how-to-use pages (A via snippet, Sep to Oct 2026); capcut.com/newsroom/dreamina-seedance-2 (A via snippet, Apr 2026); x.com/capcutapp/status/2091779824927011129 (A, Aug 2026); fluxnote.io CapCut pricing (C, 2026); techloy.com, au.variety.com (MPA letter; Sony protest), ibtimes.co.uk on the copyright dispute (B, Feb to Mar 2026); xarith.com (C).

### 2.3 Higgsfield

**What it does.** One subscription that reaches many video and image models (Seedance, Kling, Google's and others) plus ready-made presets, effects and ad tools, so an owner picks a look instead of writing a long prompt.

**Best at.** Presets and ad formats for people who do not want to learn prompting. Ads Studio (launched early October 2026): import a website or product link, save a brand kit once, and get up to 20 static ad variations per product in one run at 4 credits per ad, about US$0.20, with the total shown before it runs (A via snippet, Higgsfield launch post). A third-party summary says Ads Studio is static ads only and video ads sit in a separate Marketing Studio (C). The "up to 10 products per batch" figure in the Sunday Brief was not found in any source: the 20-variation cap is per product (UNSETTLED). Higgsfield also launched a Claude pipeline that ends in editable After Effects files (C, 26 Sep 2026), which is for video professionals, not owners.

**Bad at.** Price clarity and trust (see cons). A 15-second Seedance 2.5 UGC-style video at 1080p cost 270 credits in a reviewer's own run, 18 credits a second (C).

**Price (USD, tax not stated).** UNSETTLED; sources split into two sets and neither is the fetched pricing page.
- Set one (Krea; Versely checked the pricing page 8 Oct 2026; Costbench): Starter US$19/mo, 270 credits; Plus US$59/mo or US$47 annual, 1,200 credits; Ultra US$129/mo or US$99 annual, 3,000 credits (C).
- Set two (Higgsfield's own blog posts; Layer3Labs; NovoAds; a guide dated 15 Sep): Starter US$15 annual, about 200 credits; Plus US$49 monthly or US$39 annual, 1,000 credits; Ultra US$129, 3,000 (A via snippet for the blog posts, C otherwise).
- Ultra is consistent at US$99 annual / US$129 monthly. Lower prices need annual billing charged upfront (A via snippet). Credits do not roll over; pack credits last 90 days (C).
- What it buys, using Seedance 2.5 at 6.5 credits/second (720p) and 9 (1080p): Plus at 1,000 to 1,200 credits is about 150 to 185 seconds of 720p or 110 to 130 seconds of 1080p a month, roughly 15 to 20 eight-second clips. Starter cannot use Seedance 2.5. In Ads Studio, 200 credits is about 50 static ads. AUD estimate for Plus: about A$85 to A$100/mo monthly with GST.

**Free tier.** Not usable for a business. Reported as zero credits, images on two models, no video, watermarked, and commercial use "Not included" on the pricing table (C); one source says the free plan is no longer listed at all (C). Higgsfield's help centre says its terms do not restrict commercial use and paid plans remove the watermark on downloads (A via snippet), which conflicts with the free-plan row. Use a paid plan for anything published.

**Claude.** Yes. Official custom connector documented in Higgsfield's help centre: Settings, Connectors, add `https://mcp.higgsfield.ai/mcp`, sign in with OAuth, no API key; needs an active paid subscription (A via snippet). No Anthropic announcement found. For Claude Code, Higgsfield recommends its CLI rather than the connector (C).

**Pros.**
- The widest set of models and presets behind one login, and it is the only tool in this file with an official Claude connector that makes video.
- Ads Studio makes cheap static ad variations from a product link.
- Commercial use on paid plans per its help centre.

**Cons.**
- Billing complaints. Refunds reportedly cover only an initial purchase within 7 days with no credits used, minus up to 6%; renewals are non-refundable (C summarising the policy). Trustpilot and BBB complaints about refused refunds and renewal charges (C). "Unlimited" plans are criticised as mostly images, throttled at busy times (C). Trustpilot ratings reported between 3.2 and 4.0 depending on date (C).
- Trust history. Its main X account was suspended in February 2026 with no official reason; coverage linked it to marketing controversies including deepfake promos of public figures, which the company called a mistake (B for Qazinform; C otherwise).
- Credit costs vary by model and resolution, so a monthly spend is hard to predict. Annual billing upfront plus a strict refund policy means a business should start monthly.

**Changed in the last 90 days.** Claude connector "Unlimited MCP" promotion (28 Jul). Seedance 2.5 added. After Effects pipeline (26 Sep). Ads Studio (early Oct). Pricing figures disputed across September.

**Proposed verdict.** Only if the owner makes video or ad creative every week and will put an hour into learning it. Start on monthly billing, not annual. For one clip a week, Google's plan is simpler and already paid for.

Sources: higgsfield.ai/blog/higgsfield-ads-studio (A via snippet, Oct 2026); designerbox.ai Ads Studio (C, 2026); novoads.ai Higgsfield review and pricing (C, 2026); higgsfield.ai/creator-hub/help-center integrations and commercial-use pages (A via snippet, seen 11 Oct); higgsfield.ai/blog/unlimited-mcp (A via snippet, 28 Jul 2026); alphasignal.ai on After Effects (C, 26 Sep 2026); krea.ai, versely.studio (checked 8 Oct 2026), costbench.com, layer3labs.io, scopeful.org, voyager.so on pricing (C, Sep to Oct 2026); higgsfield.ai blog pricing posts (A via snippet, 2026); aifunnelinsider.com, pixmax.ai, imastudio.com on billing (C, 2026); trustpilot.com and bbb.org Higgsfield pages (C, to 30 Sep 2026); qazinform.com on the backlash (B, Feb 2026); tech.az on the X suspension (C, 10 Feb 2026).

### 2.4 Kling · Kuaishou (brief)

**What it does.** A video model and app known for natural motion and multi-shot clips, sold on its own plans and inside hubs like Higgsfield and fal.

**Current version.** Kling 3.0 (launched 5 February 2026). Kling 4.0 is in early access for Ultra subscribers, with Kling 4.0 Flash in early access since 28 September and a full launch due in October 2026, no day announced; claimed 30-second generations, up to 10 keyframes, 4K with stereo sound (C, pre-launch). Kuaishou's board announced on 12 May 2026 that it is evaluating a restructuring of the Kling business (C, Baidu wiki), worth watching.

**Best at.** Value and short social clips with strong character consistency (C rankings).

**Bad at.** Lower on current leaderboards than Omni (C). Pricing per second conflicts widely.

**Price (USD).** Standard US$8.80/mo (US$6.99 first month) with 660 credits; Pro US$32.56, 3,000 credits; Premier US$80.96; Ultra US$159.99 (C, citing Kling's plan guide, 13 Sep 2026). Kling 3.0 is quoted at 6 to 12 credits a second by one guide and 85 a second for 1080p with audio by another (C). So Standard buys somewhere between about 8 and 110 seconds a month. UNSETTLED.

**Free tier.** Not for business: free output is watermarked and not licensed for commercial use; daily free credits may have ended (C). Paid plans remove the watermark and include commercial use (C).

**Claude.** No direct connector found; reachable through Higgsfield and fal.

**Proposed verdict.** Skip as a separate subscription. Use it through Higgsfield if the owner is there already. Wait for Kling 4.0 to settle before recommending anything.

Sources: finance.yahoo.com Kling 3.0 launch (B, Feb 2026); imagine.art Kling 4 review (C, Oct 2026); fal.ai/learn/tools/what-is-kling-4-0 (A via snippet); baike.baidu.com KLING (C); magichour.ai, eesel.ai, virse.ai, shhots.ai Kling pricing (C, 2026); aireiter.com and aitoolcurator.com on the free tier (C, 2026).

### 2.5 Also seen, not recommended for this reader

- **Sora (OpenAI)** is gone. App closed 26 April 2026, API 24 September 2026 (A via snippet; B). Remove it from any list. ChatGPT now has no video maker.
- **Runway Ads** (launched 30 September 2026). Generates video and image ads, publishes the versions you approve to Meta, Google and TikTok, reads back results and makes the next round. Currently piloted with selected enterprise partners; pricing and availability not disclosed; the performance figures are Runway's own (A via snippet; B, Adweek). Not a contender for a 1 to 10 person business yet. Revisit if it opens self-serve.
- **HeyGen Video** (about 1 October 2026). HeyGen's first general video model, a post-train of MiniMax H3, sound included, US$0.01/second at launch through October (half the standard US$0.02), on the API and partner hubs (A via snippet, HeyGen developer page). API only for now; an owner would not use it directly.
- **Canva Pro's AI video.** Runs on Google's Veo 3, drawn from Canva's shared monthly AI allowance; reviewers describe roughly 20 top-tier uses a month and short clips (C, figures conflict). Fine for an occasional clip if the owner is already on Canva Pro.

---

## 3. One image tool and one video tool, nothing else

**Simplest pick: one Google AI Pro subscription (A$32.99/mo, best available figure, check on the day).** It gives Nano Banana for pictures and Gemini Omni (in the app) or Veo 3.1 (in Flow, about 50 Fast clips a month) for video, on one bill, with no extra logins and the visible watermark switchable off. For an owner who also wants Gemini's Google Business Profile features (file 02), this is the same subscription.

**If the owner already pays for ChatGPT Plus:** use ChatGPT Images for pictures, especially anything with words on it. ChatGPT has no video since Sora closed, so add Google AI Plus (about A$12.99) for video, or skip video entirely and film on the phone, which file 02 already recommends for a local business.

**If the owner already pays for Canva Pro:** Dream Lab images and Veo-powered clips are already included on a shared monthly allowance. For a business making a few graphics and the odd short clip, that may be enough and nothing new is needed.

**If the owner is on Claude only:** Claude still makes no pictures itself (C, no Anthropic announcement found). The Canva connector (file 02) covers branded layouts; for generated photos or video inside Claude, Higgsfield's official connector is the route, but it brings Higgsfield's cost and trust questions with it.

**When to add Ideogram or Higgsfield:** Ideogram when text-heavy promo tiles are a weekly job. Higgsfield when video ads are a weekly job and the owner will learn it. Fal.ai almost never.

---

## 4. Rules a business must not break (from sources, not legal advice)

- **Misleading images.** The Australian Consumer Law asks whether the overall impression is false or misleading, not whether a person or an algorithm made it; the ACCC's guidance on false or misleading claims makes no exception for AI (C, commentary). A generated photo of a finished job, a dish, a venue or a product that the business did not make, does not stock, or that looks better than what a customer will get, is that risk. Maximum penalties for false or misleading representations rose from 28 March 2026 (C, quoting the ACCC). The ACCC's 2025 to 2027 priorities reportedly include AI-generated fake content (C).
- **Disclosure.** No Australian law requiring AI images in ads to be labelled was found; labelling is voluntary best practice (C). Ad Standards and Roy Morgan research in May 2026 found 72% of 1,000 Australians concerned about AI content in advertising and 64% wanting it always disclosed (C, quoting the study). File 02 notes Meta auto-labels content made with its own tools.
- **Real people's likeness.** Australia has no general legal right in your own face or voice; a business using someone's likeness is exposed through consumer law, defamation, privacy and copyright instead (C, law firm commentary). Senator David Pocock's bill to legislate that a person's face, voice and likeness are theirs was introduced in November 2025 (B, ABC); its status today is UNSETTLED. Get written consent before using a real person, staff included. Never generate a celebrity or a film character: that is what put Seedance in front of Disney and the MPA (B).
- **Watermarks are checkable now.** Google opened SynthID Detector to the public on 7 October 2026; it checks images, video and audio for SynthID marks from Google, OpenAI, NVIDIA and Kakao, Apple to follow, about ten checks a day after signing in (B, eWeek; C others). It cannot catch every AI image, and a negative result proves nothing. For a business it means a customer or competitor can now test whether a "real" photo was generated by Gemini or ChatGPT. Removing the visible watermark (allowed in Gemini) does not remove this.

Sources: australiaexperiences.com/blog/ai-content-disclosure-australia (C, 2026); letspresent.com.au/post/misleading-ai-claims-accc (C, 2026); obriensolicitors.com.au deepfake defamation (C); hsfkramer.com "Facing the Facade" (C, Jun 2024); abc.net.au/news/2025-11-24 Pocock bill (B); eweek.com SynthID Detector (B, Oct 2026); xenospectrum.com, windowsreport.com, techgenyz.com (C, Oct 2026).

---

## 5. Proposed verdicts (James makes the final call)

| Tool | Proposed verdict | One-line reason |
|---|---|---|
| Gemini · Nano Banana | Worth it | Best realistic photos for the money, on Google AI Plus (A$12.99) or inside AI Pro |
| ChatGPT Images | Worth it, for anyone already on Plus | Best at words on a picture; no extra cost on Plus; no video since Sora closed |
| Ideogram | Only if text-heavy promo graphics are a weekly job | 4.5 edits a graphic in place without drift, but ChatGPT covers most of this |
| Fal.ai | Skip (Only if someone wants Claude to drive many models by connector) | Pay-per-use developer hub; the learning cost outweighs the saving for an owner |
| Google Veo / Gemini Omni (Gemini app and Flow) | Worth it on AI Pro; Only if video is wanted on AI Plus | Top-ranked quality with sound, already in the plan; clips are short |
| Seedance | Only if already on Higgsfield or CapCut | Best for 15 to 30 second consistent clips; copyright history; three confusing routes |
| Higgsfield | Only if video or ad creative is a weekly job, monthly billing | Widest choice and an official Claude connector, but billing complaints and unclear pricing |
| Kling | Skip as a standalone | Reachable via Higgsfield; 4.0 lands this month; free tier is non-commercial |
| Runway Ads, HeyGen Video, FLUX 3 Image, Sora | Skip | Enterprise pilot, API only, developer only, and discontinued |

## Open questions this research could not settle

- Google AI Pro's current AUD price (A$32.99 is from a page about eight months old) and AI Plus's (A$12.99 from one third-party source).
- How many images or videos any Gemini plan buys now that limits are compute-based; the Gemini free image allowance after 9 October.
- Whether Nano Banana 2.1 is the Gemini app default or API only.
- Omni's credit cost in Flow, and whether Flow's 50 daily credits need a paid plan.
- Higgsfield's real plan prices (two conflicting sets) and the "10 products per batch" Ads Studio claim.
- Ideogram's monthly credit allowance (two of its own pages disagree) and free-tier commercial rights.
- Whether Seedance is in the Australian CapCut app; Dreamina seconds per plan.
- Kling 3.0's credits per second.
- Google's own commercial-use wording for Gemini images; fal.ai's commercial terms per model.
- Status of the Pocock likeness bill.
