# 04 · Brand voice and preset social prompts

Researcher 4 of 6. Question: how does a small business capture its brand voice and turn it into reusable preset prompts that produce posts that do not sound like AI?

Researched 23 September 2026 with WebSearch. **Method note:** WebFetch was blocked by the sandbox egress proxy for every host tried (clutch.co, styleguide.mailchimp.com, nngroup.com, en.wikipedia.org). Every claim below therefore rests on search result snippets, except the Mailchimp voice section, which was read in full from Mailchimp's own public GitHub repository (raw.githubusercontent.com was reachable). Where a claim rests on a snippet only, that is said.

Grades: **A** = the vendor's or organisation's own page. **B** = reputable press or peer-reviewed research. **C** = blog, forum, tool vendor writing about someone else.

---

## Short version for the course build

1. A beginner's voice file needs six things and no more: who we talk to, three voice words each written as "X, not Y", a short list of words we use and words we never use, three to five real posts or emails we are proud of, what we will never say or claim, and one line on local flavour (Australian spelling, place names). Everything else in the agency frameworks (tone maps by emotional state, personas, archetypes, channel matrices) is overkill for a one-person shop.
2. Do not ask the owner to describe their voice from scratch. Extract it: have Claude interview them, then feed it real material (their best emails, website About page, quotes, and above all their Google reviews, because customers describe the business in words the business should be using).
3. The AI tells in social copy are well documented: em dashes, the rule of three, "It's not X, it's Y", promotional adjectives (elevate, unlock, seamless, game-changer), opening rhetorical questions, emoji walls, hashtag stacks, and closing summaries. Suppress them with positive instructions plus reasons, backed by a short banned list, not a hundred-word blacklist.
4. Audiences do react. Recent surveys and a 2026 peer-reviewed study show a real penalty when people believe a post is AI-made. The fix is not hiding AI, it is making the post specific and true: real job, real photo, real detail.
5. Public prompt libraries (Hootsuite, SocialPilot, SocialBee, OpenAI Academy, dozens of blogs) mostly give one-line prompts with no voice file, no input, no guard against invention and no output format. The recurring job types are useful; the prompts are not.
6. A good beginner preset: a photo or notes as the input, the voice file attached through a Project, three blanks at most, a guard against inventing facts, and an output that gives the platform versions side by side.
7. Eight presets follow in section 6, built on the six levers in order.

---

## 1. How brand voice guides are built for small businesses

### Framework 1: Mailchimp Content Style Guide (the reference everyone copies)

- Voice is constant, tone changes: "You have the same voice all the time, but your tone changes." Tone shifts with the reader's emotional state. **A** · read in full from Mailchimp's own repo: https://github.com/mailchimp/content-style-guide/blob/master/02-voice-and-tone.html.md (live version https://styleguide.mailchimp.com/voice-and-tone/)
- The current guide defines voice as four plain statements, each with a sentence of meaning: "We are plainspoken", "We are genuine", "We are translators", "Our humor is dry". It also carries paired contrasts inside the prose: "weird but not inappropriate, smart but not snobbish." **A** · same source.
- Tone guidance worth lifting verbatim in spirit: "it's always more important to be clear than entertaining" and "forced humor can be worse than none at all. If you're unsure, keep a straight face." **A** · same source.
- Style tips: active voice, no slang or jargon, write positively. **A** · same source.
- The older, widely quoted Mailchimp list is the "X but not Y" pairs: "Fun but not silly · Confident but not cocky · Smart but not stodgy · Informal but not sloppy · Helpful but not overbearing · Expert but not bossy · Weird but not inappropriate." **C** · attributed to Mailchimp in secondary sources (search snippet), not on the current guide page, e.g. https://www.drift.com/blog/how-mailchimp-grew/

**What a beginner takes:** the voice/tone split, and the "X, not Y" pair. The pair is the single most useful device for a small business, because "friendly" alone lets the AI slide into gushing, while "friendly, not gushy" draws the line.

### Framework 2: Nielsen Norman Group, four dimensions of tone

- Tone can be placed on four spectrums: formal to casual, serious to funny, respectful to irreverent, enthusiastic to matter-of-fact. **A** (NN/g's own article, via search snippet; fetch blocked): https://www.nngroup.com/articles/tone-of-voice-dimensions/
- NN/g's research found tone affects users' perception of a brand's friendliness, trustworthiness and desirability. **A** (snippet): https://www.nngroup.com/articles/tone-voice-users/

**What a beginner takes:** four sliders are a fast way to get an owner to commit. "Where are you between matter-of-fact and enthusiastic?" gets a better answer than "describe your brand personality". The enthusiasm slider matters most for AI copy, because AI defaults to the enthusiastic end.

### Framework 3: HubSpot brand voice guide and template

- HubSpot publishes a free brand voice template and teaches side-by-side on-brand and off-brand examples. **A** (HubSpot's own blog, snippet): https://blog.hubspot.com/marketing/brand-voice
- HubSpot's product now stores a brand voice that sets tones and rules per channel (social posts, emails, blog, landing pages, SMS). **A** (snippet): https://www.hubspot.com/products/content/brand-voice

**What a beginner takes:** the on-brand versus off-brand example pair. One real sentence in their voice next to the same sentence written generically teaches the AI more than a paragraph of adjectives.

### Framework 4: Sprout Social and the brand voice chart

- Sprout recommends a list of do's and don'ts with example sentences, plus appropriate tones by scenario and channel. **A** (snippet): https://sproutsocial.com/insights/brand-voice/ and https://sproutsocial.com/insights/social-media-style-guide/
- The voice chart format: each trait gets a description, a do, and a don't. Three to five traits is enough. **C** (HeyOrca, snippet): https://www.heyorca.com/blog/brand-voice-chart

**What a beginner takes:** three traits, each with a do and a don't. Stop there.

### Framework 5: Canva Brand Voice (and why the short version wins)

- Canva lets a team save brand voice guidelines that apply to its AI writing tools, with a **500 character limit**. **A** (Canva Help Center, snippet): https://www.canva.com/help/brand-voice/
- Canva's guidance ties voice to mission and values. **A** (snippet): https://www.canva.com/resources/brand-consistency/

**What a beginner takes:** the 500 character limit is a useful discipline. If the core of a voice cannot be said in about 80 words, the owner does not know it yet. The Project's reference file can be longer, but the heart of it should fit in that space.

### Framework 6: Anthropic's own Brand Voice plugin

- Anthropic publishes a Brand Voice plugin for Claude that turns scattered brand materials into guidelines Claude enforces, and separates voice (constant attributes) from tone (flexes by content type and audience). It is also bundled in Anthropic's Marketing plugin, which connects to HubSpot, Klaviyo, Canva and others. **A** for existence (claude.com plugin page, snippet only; claude.com is blocked from the sandbox), detail **C**: https://claude.com/plugins/brand-voice , https://claude.com/plugins/marketing , https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing
- Marked third-party observed for the course: the plugin is aimed at teams in Cowork or Claude Code. For a beginner owner, a Project with a voice file does the same job with less setup.

### Beginner needs versus agency overkill

| Keep (beginner voice file) | Drop (agency overkill for a one-person business) |
|---|---|
| Who we are talking to, in one sentence, in their words | Detailed personas with names, ages, stock photos |
| Three voice words, each as "X, not Y" | Brand archetypes (Hero, Sage, Outlaw) |
| Four NN/g sliders, one tick each | Tone maps across every emotional state of every customer journey stage |
| Words we use (including trade terms customers use) and words we never use | 120-word banned lists |
| 3 to 5 real posts, emails or review replies we are proud of | Channel-by-channel voice matrices |
| What we never claim (no guarantees we cannot keep, no prices unless given) | Mission, vision and values workshops |
| Local flavour: Australian spelling, the suburbs and towns we work in | Competitor voice audits |

---

## 2. Extracting voice with AI

### What the practice is

- Practitioners agree the voice already exists in the owner's best writing and should be extracted, not invented. "You don't need to invent a voice from scratch. Your best existing content already carries the signal." **C** (snippet): https://www.digitalapplied.com/blog/extract-brand-voice-guide-ai-content-2026
- Describe observable behaviours, not adjectives: "We state the outcome before the method", "We never open with a rhetorical question", "We use contractions". **C** (snippet): same source. This is the strongest single idea found: behaviours are testable, adjectives are not.
- Interview-style extraction is the common opening move: ask the AI to interview the owner "one or two questions at a time". **C** (snippet, MindStudio and Prompt Architects): https://www.mindstudio.ai/blog/ai-brand-voice-extraction-voice-profile , https://prompt-architects.com/blog/266-25-ai-prompts-for-nailing-your-brand-voice
- Copyhackers publishes brand voice extraction prompts built on real samples. **C** (snippet): https://copyhackers.com/ai-prompt/brand-voice/

### Customer language from reviews

- Customers' own words in reviews are the best source of language a small business should reuse ("voice of customer"). Most published material on this is enterprise VoC tooling, not small business. **C**: https://www.sentisum.com/library/ai-voice-of-customer
- **Legal line for Australia, and the reason the guard matters:** a business must not make a false or misleading representation purporting to be a testimonial. Fabricating a testimonial from a customer who does not exist is treated as a serious breach, and the ACCC found 37% of 137 businesses swept engaged in conduct of concern around online reviews. **C** for the summaries (law firm pages, snippet), the underlying rule is the Australian Consumer Law: https://legal123.com.au/how-to-guide/online-reviews-testimonials-endorsements/ , https://addisons.com/article/cheat-sheet-for-businesses-how-to-manage-online-reviews-in-compliance-with-the-acl/ . The ACCC's own page was not reached; recommend the course cites accc.gov.au directly after a check. So reviews can teach vocabulary, but a post may only quote a review that exists, word for word, with permission.

### Doing it in Claude

- Projects are self-contained workspaces with their own chat history, knowledge base and custom instructions; files uploaded to project knowledge are used as context in every chat in that project. **A** (Claude Help Center, snippet; support.claude.com is blocked from the sandbox): https://support.claude.com/en/articles/9517075-what-are-projects
- Styles: Claude has custom styles. You can upload or paste a writing sample, and Claude builds a style from it. Menu path per third-party writeups: "Use style", "Create & edit styles", "Create custom style", "Add Writing Example". **A** for the feature (Anthropic announcement and help article, snippet): https://www.anthropic.com/news/styles , https://support.anthropic.com/en/articles/10181068-configuring-and-using-styles . Menu path **C**, third-party only, do not teach the clicks.
- Practitioners recommend Projects for the brand file and Styles for quick switching. **C**: https://www.ai-toolbox.co/claude-management-and-productivity/how-to-set-up-claude-custom-instructions-2026
- ChatGPT equivalent is projects and custom GPTs with uploaded files; OpenAI Academy runs a Small Business prompt pack including "local marketing and customer communications". **A** (snippet): https://academy.openai.com/public/clubs/small-business-ipf4m/resources/run-your-small-business-with-chatgpt-2025-11-18

### Recommended course sequence (synthesis, not a sourced claim)

1. Interview prompt: Claude asks the owner questions one at a time and drafts the voice file.
2. Evidence prompt: paste 3 to 5 of their best real messages and 10 to 20 Google reviews. Claude corrects the draft from evidence, pulls customer phrases, and lists words the owner uses that the draft missed.
3. Save the result as `brand-voice.md` in the Project knowledge, with a one-paragraph summary in the Project instructions.
4. Test: run one preset, have the owner mark every line that does not sound like them, and add each fix to the file as a rule with a reason.

Two setup prompts for steps 1 and 2 sit at the start of section 6.

---

## 3. What makes AI social copy read as AI

### The documented tells

Wikipedia's editor guide "Signs of AI writing" is the most cited public catalogue. Grade **A** as the organisation's own page, read by snippet only (fetch blocked): https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

- **Em dashes:** LLM output uses em dashes more often than nonprofessional human writing, often where people would use a comma, colon or brackets. **A** (snippet).
- **Rule of three:** "adjective, adjective, adjective" or three short phrases, used to make thin content look comprehensive. **A** (snippet).
- **Negative parallelism:** "It's not ..., it's ..." and "no ..., no ..., just ...". **A** (snippet). Ruben Hassid wrote a whole piece on "It's not X, it's Y" as the tell: https://ruben.substack.com/p/its-not-x-its-y **C**.
- **Promotional language:** meaning is invented and then promoted with intensity, and it slips through even with careful prompting. **A** (snippet).
- **Vocabulary:** "delve" and "elevate" are named; any one word is fine on its own, the signal is clustering. **A** (snippet).
- Signs vary by model and change over time. **A** (snippet). This is the argument for teaching the patterns, not a fixed word list.

Practitioner banned lists (all **C**, snippets): delve, leverage, seamless, robust, elevate, unlock, empower, harness, streamline, game-changer, transformative, tapestry, landscape, journey, unleash, cutting-edge. https://blog.paulbreit.com/how-to-make-ai-write-like-a-human/ , https://kompozy.io/brand-voice/banned-words , https://tracysheen.com/resources/ai-words-to-avoid . One offers the test worth teaching: "would you say it across a table?"

Social-specific tells (synthesis from the above plus platform facts):
- **Hashtag stuffing.** Instagram now caps hashtags at five per post, applying to Reels, photos and carousels, and says fewer targeted tags work better. **B** (Social Media Today, snippet): https://www.socialmediatoday.com/news/instagram-implements-new-limits-on-hashtag-use/808309/ . A 15-hashtag block is now both an AI tell and against the platform.
- **Emoji walls**, emoji as bullet points, and a rocket or sparkle on every line. Noted as a tell by Wikipedia's list (snippet) and practitioners. **A/C**.
- **Opening rhetorical questions** ("Ever wondered...?", "Looking for...?"). Named in practitioner lists as a pattern to ban. **C**: https://www.digitalapplied.com/blog/extract-brand-voice-guide-ai-content-2026
- **Closing summaries and generic calls to action** ("In conclusion", "Don't miss out!"). **C**: kompozy banned-word library categories.
- **Vagueness.** Not in any list as a single word, but the root cause: a post with no real job, suburb, product or number reads as generic whoever wrote it.

### How practitioners suppress them

- Anthropic's own guidance: tell Claude what to do rather than what not to do. Instead of "Do not use markdown", say "Your response should be composed of smoothly flowing prose paragraphs." Also: give context and the reason for an instruction. **A** (Anthropic docs, snippet; platform.claude.com fetch not attempted, claude.com blocked): https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices , https://claude.com/blog/best-practices-for-prompt-engineering
- Practice that works (synthesis): a positive description of the target ("write like the owner texting a regular customer: short sentences, plain words, one specific detail from the job"), plus a short named list of never-use items with the reason ("these words make readers think a machine wrote it"), plus real examples in the voice file. Long banned lists are counterproductive: they are negative instructions, and the model substitutes the next cliché.
- Hootsuite's 2026 trends: brands are moving away from overly polished content and emphasising slight imperfection to stand out from AI noise. **A** (Hootsuite's own research, snippet): https://blog.hootsuite.com/social-media-trends/ , https://www.hootsuite.com/research/social-trends

### Evidence on audience reaction

- Clutch survey, 601 consumers, August 2026: 86% have encountered AI-generated content; 53% are less likely to buy from brands they know use AI in social media content; 64% would trust a brand less if products were misrepresented with AI content; 42% view AI positively for educational content. **B** (MarTech Series report of the Clutch release, snippet; clutch.co blocked): https://martechseries.com/content/clutch-report-53-of-consumers-are-less-likely-to-buy-from-brands-using-ai-on-social-media/
- Clutch, June 2026, 408 consumers: 33% say AI worsens their perception of a brand, 16% say it improves it. **A** by source (Clutch's own page) but snippet only: https://clutch.co/resources/ai-in-branding
- Hootsuite 2026: nearly a third of consumers say they are less likely to choose a brand that uses AI ads; audiences trust people over faceless brands. **A** (snippet): https://blog.hootsuite.com/social-media-trends/
- USC Marshall study, Journal of Consumer Research, May 2026: an AI disclosure on a social post makes viewers feel less effort went in, the post loses authenticity, and they engage less. **B** (Stanford Social Innovation Review summary, snippet): https://ssir.org/articles/entry/ai-disclosures-social-media-disengagement
- A 2026 ScienceDirect study on Instagram travel ads found AI disclosure lowered brand credibility, attitude and purchase intention. **B** (snippet): https://www.sciencedirect.com/science/article/pii/S0747563226001445
- A figure circulating that trust in known-AI content fell from 47% to 34% could not be traced to a primary source. **C**, do not use: https://www.influencers-time.com/ai-content-trust-falls-to-34-percent-forcing-brand-disclosur/

**What the course should say (loosely enough to survive):** surveys this year show a meaningful share of customers think less of a business when they believe its posts were written by AI. The penalty attaches to posts that feel generic or misleading. A post about a real job, with a real photo and one real detail, does not carry it. Use AI to draft, never to invent.

---

## 4. Public preset prompt libraries for social media

| Library | What it is | Grade |
|---|---|---|
| Hootsuite, "75 ChatGPT prompts for social media" plus a 250-prompt cheat sheet across 25 industries; OwlyWriter built in | Vendor blog | **A** · https://blog.hootsuite.com/chatgpt-social-media/ |
| OpenAI Academy Prompt Packs, including a Small Business pack (local marketing and customer comms, customer feedback to action plan) | Vendor, about 25 prompts per pack | **A** · https://academy.openai.com/public/clubs/small-business-ipf4m/resources/run-your-small-business-with-chatgpt-2025-11-18 |
| Buffer AI Assistant: generate, rewrite, repurpose per platform | Built-in tool, not a library | **A** · https://support.buffer.com/article/583-using-buffers-ai-assistant |
| SocialPilot "100+ viral prompts" | Tool vendor blog | **C** · https://www.socialpilot.co/blog/chatgpt-prompts-for-social-media |
| SocialBee "1000+ prompts" | Tool vendor blog | **C** · https://socialbee.com/blog/ai-social-media-prompts/ |
| PostEverywhere "93 prompts", SurePrompts "50 prompts", MeetEdgar caption prompts | Blogs | **C** · https://posteverywhere.ai/blog/ai-prompts-for-social-media , https://sureprompts.com/blog/ai-prompts-for-social-media , https://meetedgar.com/blog/chatgpt-social-media-captions |

### Recurring prompt types (the useful part)

Caption from a photo; a week or month of posts; repurpose one idea or long piece into several posts; reply to a comment or review; turn job notes into a post; before and after story; promotion or offer; behind the scenes or meet the team; FAQ or tip post; event or seasonal post; hook and headline variations.

### Quality assessment

Most are weak, and for the same reasons (assessment, not a sourced claim):
- **One line, all blanks.** "Write an Instagram caption for [product] targeting [audience] in a [tone] tone." The owner fills the blanks with the same vague words the AI would have used.
- **No voice source.** Tone is a single adjective. Nothing attaches the brand file or a real example.
- **No input.** They ask the AI to write about a product rather than from a photo, a job sheet or a review, so the output has nothing specific in it.
- **No guard against invention.** None found tells the model not to invent a customer, a result, a price or a date. For an Australian business this is a legal exposure, not just a quality issue.
- **No output shape.** "Write a caption" rather than "give me the Instagram version, the Facebook version and the Google Business Profile version, labelled."
- **Engagement bait built in.** Many ask for "viral", "hook", "emojis and hashtags", which produces exactly the tells in section 3.
- MeetEdgar's guidance is the better end: specify platform, audience, goal and tone, and edit rather than publish untouched. **C**: https://meetedgar.com/blog/chatgpt-social-media-captions

---

## 5. Structure of a good reusable social prompt for a beginner

Design rules (synthesis from sections 1 to 4, and from the six-lever method):

1. **The voice lives in the Project, not the prompt.** Every preset says "use the brand voice file in this project". The preset stays short and the voice stays consistent.
2. **Real input first.** A photo, the job notes, the review text, the offer details. The input is what makes a post specific. A preset with no input slot will produce generic copy.
3. **Three blanks at most.** Each blank is something only the owner knows today (what the job was, the suburb, the price). Anything that does not change week to week belongs in the voice file.
4. **One guard against invention, in every preset, with its reason.** Use only facts in the photo, the notes or the voice file. If a detail is missing, leave a marked gap rather than filling it.
5. **Positive target plus a short never list.** Describe how it should sound, then name the handful of tells to avoid, and say why.
6. **Platform versions in one pass.** Instagram (short, up to five tags), Facebook (a little longer, conversational, local), Google Business Profile (plain, factual, a clear next step; Google Business posts suit updates and offers), LinkedIn only for a B2B business such as a construction firm. Labelled, so the owner copies each one.
7. **A check before the answer.** Ask for one line listing anything it could not confirm from the input. That line is how the owner catches a missing fact.
8. **Photo privacy.** Remind the owner the photo is being uploaded; no customer faces, number plates or addresses without consent. (Synthesis; consistent with the members area privacy page.)

Photo input note: Claude and ChatGPT both accept image uploads in chat and read what is in them. A Google Business Profile post is plain text plus photo; the reply-to-review preset should follow Google's own guidance to thank the reviewer, stay calm, not share private information, and take complex issues offline. **A** (Google Business Profile Help, snippet): https://support.google.com/business/answer/3474050?hl=en , community guide https://support.google.com/business/community-guide/318603570/how-to-effectively-respond-to-google-reviews-tips-and-best-practices?hl=en

---

## 6. Draft preset prompts

All built on the six levers in fixed order: Role, Context, Constraints, Tone, Format, Output. Every constraint carries a reason. Blanks are in square brackets, three or fewer. Capitalised square brackets such as [CHECK] are markers the AI outputs, not blanks. Each assumes the Project holds a brand voice file. No em dashes appear anywhere, and the prompts instruct the model not to use them either.

### Setup A. The voice interview (run once)

```
Role: You are an experienced copywriter who has written for small local businesses for twenty years, and you are good at getting owners to say what they actually mean.

Context: I run a small business and I want every social post to sound like us, not like a machine. You are going to interview me and turn my answers into a brand voice file that lives in this project and guides every post from now on.

Constraints: Ask one question at a time and wait for my answer, because a list of questions gets rushed answers. Cover who our customers are, how they describe us, what we would never say, words we use and words we hate, and how we sound on a good day. When I give a vague answer like "friendly" or "professional", ask me for a real example, because adjectives mean different things to different people. Use only what I tell you. Do not add values, claims or history I have not given you, because a voice file with invented details will put invented details into posts.

Tone: Plain and direct, like a good tradesperson asking questions on site. No flattery.

Format: After about ten questions, write the file with these headings: Who we talk to. Our voice in three pairs (each written as "this, not that"). Where we sit on four sliders (formal to casual, serious to funny, respectful to cheeky, matter-of-fact to enthusiastic). Words we use. Words we never use. Things we never claim. Local detail (spelling, places, sayings).

Output: The finished file, under 400 words, in Australian English, ready for me to save to this project. Then one line listing anything you still need from me.
```

### Setup B. Correct the voice from real evidence (run once, then every few months)

```
Role: You are an editor who studies how people really write and talk, and you trust evidence over what people say about themselves.

Context: The brand voice file in this project was written from an interview. Below it I have pasted [3 to 5 messages, emails or posts I am proud of] and [10 to 20 of our Google reviews, copied word for word]. I want the voice file corrected so it matches how we really sound and how customers really talk about us.

Constraints: Base every change on something in the pasted material and quote the words that support it, so I can see why it changed. Pull out phrases customers use about us, because those are the words new customers search for and trust. Never turn a review into a new quote or change its wording, because posting a testimonial that is not exactly what a real customer said is misleading under Australian Consumer Law. If my examples and the interview disagree, trust the examples and tell me.

Tone: Straight and specific. Tell me what is wrong, not that it is great.

Format: First, a short list of changes, each with the quoted evidence. Then the full revised voice file with the same headings. Then a list headed Customer words, with each phrase and how many reviews used it.

Output: Everything in Australian English, ready to replace the old file.
```

### 1. Caption from a photo

```
Role: You are the social media writer for this business, and you write the way the owner would if they had time.

Context: I have attached a photo. It shows [what it is, in a few words]. Use the brand voice file in this project for how we sound.

Constraints: Use only what is in the photo, what I have written above and what is in the voice file. Never invent a customer, a result, a price, a date or a quote, because a made-up detail in a public post can mislead a customer and it is the first thing that gets us caught out. If the post needs a detail you do not have, write [CHECK] in its place. Mention one specific thing you can see in the photo, because a specific detail is what makes a post sound like a person was there. Use at most three hashtags and no more than one emoji, because a block of tags and emojis is the quickest sign a machine wrote it. Do not use dashes to join clauses; use a full stop or a comma instead.

Tone: How the voice file says we sound, pitched like a message to a regular customer: short sentences, everyday words, no hype.

Format: Three labelled versions. Instagram: two to four short lines, then the hashtags. Facebook: three to five lines, a little more conversational, ending with one clear next step. Google Business Profile: two to three plain lines and a next step, no hashtags.

Output: The three versions only, then one line headed Not confirmed listing anything marked [CHECK].
```

### 2. A week of posts

```
Role: You plan and write social content for a small local business and you know most owners have about fifteen minutes a week for it.

Context: This week we have [what is happening this week: jobs, stock, events, anything real]. Our voice is in the brand voice file in this project. We post on [which platforms].

Constraints: Build every post from something real in what I have told you or in the voice file, because a filler post about nothing does more harm than no post. Never invent a customer, a result, a price, a date or an event. Where a post needs a photo, say what photo to take in one line, because the owner needs to know what to shoot before the week starts. Keep to five posts, because a plan the owner cannot keep up with gets abandoned by Wednesday. Mix the types: at least one showing work, one helping the customer, one about the people. Avoid words like elevate, unlock, seamless and game-changer, and never open with a question, because both are signs of machine writing.

Tone: As the voice file says, and plain enough to read aloud without cringing.

Format: A table with columns Day, Platform, Post type, Photo to take, Post text.

Output: The table, then one line listing anything you needed and did not have.
```

### 3. One idea into five posts

```
Role: You are an editor who can get five honest posts out of one good idea without padding any of them.

Context: Here is the idea, story or piece of advice: [paste it or describe it]. Our voice is in the brand voice file in this project.

Constraints: Each post must stand on its own, because most people will only see one. Each takes a different angle: a quick tip, a short story, a common mistake, a question customers ask us, and a behind-the-scenes look. Use only facts in what I have given you. Never invent a customer, a result, a price or a statistic, because one invented number can undo years of trust. If an angle needs a fact you do not have, drop that angle and say so rather than filling it. Do not use a three-item list in any post, and do not use "it's not this, it's that", because both are well-known signs of AI writing.

Tone: As the voice file says. Each post should read like the owner explaining it to one person at the counter.

Format: Five numbered posts, each under 80 words, each with a one-line label saying its angle and which platform it suits best.

Output: The five posts, then one line on any angle you dropped and why.
```

### 4. Reply to a review

```
Role: You are the owner of this business replying personally to a customer review on Google.

Context: Here is the review, word for word: [paste the review]. Our voice is in the brand voice file in this project.

Constraints: Thank the person by first name if they gave one, because a reply that reads like a form letter tells every future reader nobody is listening. Refer to one specific thing they mentioned. Never add details about their job, their purchase or what happened that are not in the review, because you do not know them and a wrong detail is worse than none. Never share private information about the customer. If the review is negative, acknowledge the problem without arguing, do not admit fault for anything outside our control, and invite them to call or email so it can be sorted privately, because arguments in public cost more customers than the complaint did. Do not offer a refund, discount or promise unless I tell you to, because a public promise is binding in the customer's eyes.

Tone: Warm and human if the review is good. Calm, sorry where it is fair, and brief if it is not.

Format: One reply, under 80 words, no hashtags, no emojis unless the voice file says we use them.

Output: The reply only, then one line headed Before you post listing anything I should check.
```

### 5. Job notes into a post

```
Role: You write social posts for a trade or service business, and you know the best posts are just a real job told well.

Context: Here are my rough notes from a job: [paste notes, voice memo transcript or dot points]. The job was in [suburb or area]. I have attached [a photo, or say none]. Our voice is in the brand voice file in this project.

Constraints: Tell the job as it happened, using only what is in my notes and photo, because customers can tell a real job from a made-up one. Never name the customer, show their address or give details that identify their home or business, because they have not agreed to it. Never invent a result, a time saved, a price or a quote from the customer. If the notes are missing something the post needs, write [CHECK]. Use the words a customer would use, not trade jargon, unless the voice file says our customers are in the trade.

Tone: As the voice file says. Proud of the work without bragging.

Format: Two labelled versions. Facebook: four to six lines, what the problem was, what we did, what it looks like now. Instagram: two to three lines plus up to three hashtags including the area.

Output: Both versions, then one line headed Not confirmed listing anything marked [CHECK].
```

### 6. Before and after story

```
Role: You write before and after posts that let the photos do the talking.

Context: I have attached a before photo and an after photo of [what the job or product was]. Our voice is in the brand voice file in this project.

Constraints: Describe only what can be seen in the two photos and what I have told you, because a before and after is a claim about real work and it has to be true. Never invent how long it took, what it cost, what the customer said or what problem it solved unless I have told you, because those are exactly the details a reader will ask about. Keep the words short, because the photos are the post. Use no more than one emoji and no exclamation marks in a row, because overexcitement makes real work look like an advert.

Tone: As the voice file says. Quietly confident.

Format: Three labelled versions. Instagram carousel: a line for slide one, a line for slide two, and a caption under 50 words with up to three hashtags. Facebook: three to five lines. Google Business Profile: two plain lines and a next step.

Output: The three versions, then one line listing anything you could not confirm.
```

### 7. A promotion or offer

```
Role: You write offers for small businesses that people act on without feeling sold to.

Context: The offer is [what it is]. The price or discount is [exact figure, including whether GST is included]. It runs [start and end dates]. Our voice is in the brand voice file in this project.

Constraints: Use the offer, the price and the dates exactly as I have written them, because a wrong price or date in a public post is a promise we may have to honour and can breach consumer law. Do not add conditions, extras, stock levels or urgency I have not given you, such as "only a few left" or "last chance", because false urgency is misleading and customers see through it. Say who the offer is for and one plain reason it is worth having. Avoid words like unlock, exclusive, elevate and don't miss out, because they are the words every AI-written promo uses.

Tone: As the voice file says. Clear first, friendly second.

Format: Three labelled versions. Instagram: three lines and up to three hashtags. Facebook: four to five lines with the dates on their own line. Google Business Profile offer: a short title, two lines of detail, and the dates.

Output: The three versions, then one line confirming the price and dates exactly as used, so I can check them against my own.
```

### 8. Reply to a comment or message on a post

```
Role: You are the owner of this business answering a comment on one of our posts.

Context: Here is our post and the comment on it: [paste both]. Our voice is in the brand voice file in this project.

Constraints: Answer the question they actually asked, in as few words as it needs, because a long reply to a short comment reads like a script. Use only facts from the post, the voice file or what I tell you. If they ask about a price, availability or a date you do not have, do not guess; say we will message them, because a wrong answer in public is worse than a slow one. If the comment is a complaint, move it to a private message politely, because public back and forth rarely ends well. Never reply with only an emoji or "Thanks for your comment!", because it looks automated.

Tone: As the voice file says. Like talking to someone who walked into the shop.

Format: Two short options, labelled Shorter and Warmer, each under 40 words.

Output: The two options, then one line on anything I need to confirm before posting.
```

Blank counts: Setup A 0, Setup B 2, 1: 1, 2: 2, 3: 1, 4: 1, 5: 3, 6: 1, 7: 3, 8: 1.

---

## Items for the fact register (if these claims ship)

- Instagram five-hashtag cap per post (B, Social Media Today). Platform rule, can change.
- Canva Brand Voice 500 character limit (A, snippet only).
- Claude Styles: upload a writing sample to create a custom style (A for feature; menu path C, do not teach clicks).
- Anthropic Brand Voice plugin exists (A, snippet only, claude.com blocked).
- Clutch August 2026 survey figures (B via press release; primary blocked).
- USC Marshall, Journal of Consumer Research, May 2026, AI disclosure lowers engagement (B via SSIR).
- ACCC 37% of 137 businesses reviews sweep (C via law firm summaries; verify on accc.gov.au before use).
