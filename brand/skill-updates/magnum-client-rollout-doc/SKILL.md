---
name: magnum-client-rollout-doc
description: Builds client-facing HTML rollout plans, proposals, and review documents in Magnum AI's locked paper and rust house style. Use this skill whenever James needs a client-facing proposal, rollout plan, setup plan, operations review, scope document, or any polished HTML deliverable a client will read, including when he says "build the rollout doc", "do the proposal", "make it like the Easy Fit one", "client-facing plan", or shares a scope and asks for the document. Always use this skill for these documents, never improvise the design or writing rules from scratch, because every rule in here was earned through client iteration.
---

# Magnum Client Rollout Document Builder

Builds the client-facing HTML documents Magnum AI sends to clients: rollout plans, setup proposals, operations reviews. The design and writing rules below were locked across the Easy Fit Meals operations review and the GIG rollout plan. Follow them exactly, each one exists because the alternative was rejected.

**Runs alongside:** `client-facing-voice` (governs register) and `asd-ste100-clarity` (governs whether the steps can be followed).

## Before writing anything

1. **Confirm scope with James first.** What's inside the setup/initial fee, item by item, and what's explicitly later work. Never assume. Scope blur (implying everything shown is included in the fee) was the single biggest rejection across both builds. If James hasn't stated the inclusions, ask before drafting the pricing or included-work sections.
2. **Verify facts against transcripts/knowledge docs**, not memory. Check dates against a real calendar (e.g. "Friday 4 July" when the Friday was the 3rd). Check who a feature is for (email triage was for *both* Danny and Adam, not just Adam).
3. **Get logo files.** Magnum's monogram file comes on a solid black background: make near-black pixels transparent and crop to content before embedding. Client logos on white, same treatment. Embed both as base64 data URIs. Magnum logo top-left in the nav; client logo top-right under a small "Prepared for" label. Never recreate a logo with text.

## Document structure (in order)

1. **Hero**: mono eyebrow with a leading rust rule (Prepared for [Client] · Magnum AI · [Month Year]), Oswald uppercase title carrying one rust word or a stacked second line in rust (two-part titles stack, e.g. "Operations Review" over "and Recommendations" in rust), short document-voice sub-line, animated "Begin ⌄" scroll cue.
2. **Why / intro** (optional hook): short reminder of why the client is doing this, grounded in facts about their business. One Oswald lead line plus one body paragraph.
3. **The approach**: how the work is delivered (e.g. background build + one day together; review method for a review doc).
4. **Summary, the main points**: 2×2 grid of numbered cards, rust Oswald numerals, one-line-plus card bodies.

**Clarity dependency.** Before writing any steps, checklist, procedure or rollout sequence, load `/mnt/skills/user/asd-ste100-clarity/SKILL.md`. Apply it to instructional blocks only: phase steps, setup instructions, action lists, prerequisites and warnings. Never apply it to the intro, the why-this-matters section, transitions or the close, which stay in voice. Run its nine-point clarity check on the instructional blocks only before delivering. If a block moves from voice to clarity, name that in one line.

5. **The work, item by item**: numbered expandable stage cards. Each opens to labelled rows: **What it is / What it does for you / What's needed from you** (for a review document: **The problem / The fix / What it affects / The action / The cost**). Every card expands; uniform interaction.
6. **The day / agenda + confirm box** (rollout docs): agenda blocks framed as "a suggested shape, final running order agreed together", then a rust-bordered confirm box with numbered direct questions (date confirmation, the pre-work meeting, etc.).
7. **Beyond the setup**: future capabilities as expandable cards labelled "What it would do", under an explicit eyebrow: "separate work, scoped later" and a lede stating "Not part of the setup fee."
8. **Costs**: always last. Divider-labelled rows: Magnum AI fees first (Setup, Monthly), then "Tools, billed to you directly, at cost" with real researched prices (never "scoped with you" or other vague cost language, look prices up). Footnote covers: setup fee = the initial agreed scope (state the realistic duration, e.g. first three to four weeks); monthly starts only once that's delivered and agreed; month to month, no lock-in, 30 days' notice; tool prices in USD move with exchange rates.
9. **Footer**: Magnum logo centred, "Magnum AI · magnumai.com.au".

## Design system (locked. See assets/exemplar.html for the full working CSS)
The house style is written up in full at
https://webes77.github.io/magnum-guides/brand/. That page is the source of
truth. This block is the working summary.
- Ground: paper `#EEE6D3` carrying the fine grid texture (a radial dot plus two
  hairline rules at 26px). A flat paper ground looks unfinished. Cards and
  panels sit on paper deep `#E4DAC4`.
- **Un-flippable render**: the old rule still applies, inverted. Hard-code the
  background as literal hex on BOTH `html` and `body` (CSS *and* inline style
  attributes), plus `<meta name="color-scheme" content="light">`,
  `<meta name="theme-color" content="#1E1B17">`, and `color-scheme: light` in
  `:root`. Never rely on a CSS variable alone for the page background. Forced
  dark mode and preview panes will otherwise invert it.
- Ink `#1E1B17`, rust `#B8452A`, olive `#6C7A3F`, body `#2B2823`, card text
  `#3A3630`, muted `#6F675C`. Rust is the only accent. Olive is for figures and
  ticks only and never carries text.
- Thin rust progress bar fixed at the top of the viewport, width driven by scroll.
- Type: Oswald 600/700 uppercase for the hero, section headings, card and stage
  titles. IBM Plex Sans 400/500 for everything else. IBM Plex Mono 11 to 12px,
  uppercase, letter-spaced .14 to .28em, for eyebrows, dates, metadata and
  footers. **Discipline rule: never more than two type treatments in one block.**
  Rust appears only on eyebrows, numerals, rules, prices and a single emphasis
  word. Never inline mid-paragraph.
- Headings carry one rust word, not a gold italic. Oswald italic is not in the
  system; do not substitute one. Two-part titles stack, with the second line in
  rust.
- Cards: 3px ink border, 6px hard offset shadow (`box-shadow:6px 6px 0 var(--ink)`),
  no radius, no blur. Interactive cards lift 2px on hover and the shadow grows
  to 9px. Static cards do not lift. Open state moves the border to rust and the
  chevron rotates.
- Cards within a section share one type: all with images, or all without.
- Pricing is neutral. Never red, never visually alarming, never the hero of the
  page.
- Retired: black and gold, Playfair Display, Inter, rounded corners, soft
  shadows. Do not reintroduce them.

## Writing rules (these caused the most rejections, follow strictly)

- **Document voice.** The plan describes itself: "This plan sets out…", "Prepared remotely; Danny's is set up in person on the day." Not "What I'll build for you" / "I'll set yours up". First person appears at most rarely; direct second-person asks live only in the "What's needed from you" rows and the confirm box.
- **Plain, factual, professional.** No slogans, no movie-trailer lines, no teaser one-liners, no third-person ad copy, no cheesy hooks. Magnum AI writing to a professional client.
- **Never state a client weakness as fact.** Do not write "nothing gets captured", "no follow-up system", "buried in email", "things slip and get forgotten", these assert inefficiency without evidence and insult a business that already runs on spreadsheets, client notes and emails. The truthful frame: *the information exists; it lives in different places; consistency makes it compound.* A negative may only be used if the client said it about themselves, and sparingly.
- **No theatrical specifics** from private conversations (e.g. quoting "728 emails" back at a client in a document).
- **Scope is explicit everywhere.** Included work sits under an eyebrow naming the fee. Future work is labelled not-included, scoped-later, in the eyebrow, the lede, and the costs note. The fee must read as a body of work (background build + delivery + training), never as a day rate.
- Agendas are "suggested", to be agreed together. Pre-work meetings are concrete: "An hour booked with [name], or whichever staff member is closest to the clients."
- Sensitive strategy (role consolidation, staff replacement, internal politics) never goes in writing, gestured at most ("one person managing what currently takes several"); the blunt version is verbal.

## Cover email

Short and plain, written as James personally. Points to the attachment ("it's interactive, tap any item for the detail"), gives a one-sentence why, asks the specific confirmations as a numbered pair, notes signup links coming separately. No recap of the whole document. No selling.

## Build mechanics

1. Read `assets/exemplar.html`, it is the locked CSS and structure (the final GIG build). Clone its head, CSS and section skeleton; replace content.
2. Build in `/home/claude`, embed logos via base64 replace, write the final file to `/mnt/user-data/outputs/`.
3. Re-inject logos after every edit cycle (keep the source file with `LOGO_DATA_URI` / `CLIENT_DATA_URI` placeholders; never edit the injected output directly).
4. Present the file and summarise only what changed, no postamble tour.
