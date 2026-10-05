# Deck rebuild spec

Phase 0 design direction, signed off by James on 5 Oct 2026 ("full
authority"). The mockup he read is `notes/deck-rebuild-mockup.html`, also
published at https://claude.ai/artifact/D5cFPztbEnjmxRGmqywEJR. This file is
the handover for the build sessions. Build to it. Do not re-open the design
calls below.

## Why

Every slide is laid out in one 1340 by 770 box with content at the top. A
short slide leaves a dead gap under it. A phone scales the whole box to a
third and everything shrinks except the prompts, which hold their 15px floor
and so look crammed. Two jobs, one layout.

## The decision

One source of slides (`S`), two renderers.

1. **Laptop (stage).** Slides are still scaled to the window, but each slide
   is sized to its content through one of four layouts. The 1340 by 770 box
   stays as the design unit so `tools/check-decks.js` keeps working.
2. **Phone (page), under 760px.** The same `S` renders as one scrolling page
   at normal type size. No pager, no zoom. A bottom bar shows where you are
   and what is next. Prompts become full-width cards.

## The four layouts

Every slide declares one, or the engine infers it from its keys
(`prompt` → prompt, `tiles` → tiles, `rows` → rows, else statement).

- **Statement.** Heading, points or figure. Content is vertically centred
  in the frame; the heading scales up to a cap (72px at 1340) when there is
  room. Cover variant: navy ground, badge top left
  (`assets/logos/magnum-badge-ring-navy-red-ai.svg`, clipped to its circle,
  170px), headline Oswald 86px uppercase with the `em` in `--coral-bright`,
  sub in `--on-navy-mute`, figure on the right.
- **Rows.** Each row shares the height equally (`grid-template-rows:
  repeat(n,1fr)`), with a ghost index number (`--coral-ghost`, Oswald 76px),
  the row name in Oswald 44px uppercase, then the two columns with 10.5px
  mono labels taken from `rowhead`. Index fills `--rust` on hover. Three to
  five rows only; more than five goes back to the table.
- **Tiles.** Portrait tiles fill the frame. Each: icon 46px at the top, an
  optional mono tag, title Oswald 40px uppercase, body 20px, and a real
  button at the foot when the tile carries a `goto`. Grounds: `o` white
  with ink border and `--rust` button; `b` bright coral with ink text and
  ink button; `c` navy with white text and bright coral button. `t` stays
  for tiles without a button.
- **Prompt.** Two columns, 300px rail then the card. Rail: WHERE (the
  `where` line), THEN (the `after` steps with ghost numbers), and at the
  foot one tip drawn from the first `pts` entry in a coral-ruled box; the
  other points are dropped on this layout (hard rule 11 already says points
  go before the prompt does). Changed in the build: the rail keeps every
  point, as a coral-ruled list at the top, then WHERE, then THEN. Dropping
  live teaching copy to match a mockup was the wrong trade. The rail
  scrolls with its own "More below" in a small window, and the deck check
  fails a clipped rail that does not say so. The card: 2px ink border, navy header 60px
  with THE PROMPT in bright coral mono, a plain line "Tap a blank to fill
  it, then copy" in `--on-navy-mute`, and three buttons right, FILL IN and
  EXPAND outlined, COPY filled `--coral-bright` with ink text. Body: IBM
  Plex Mono 15.5px, line height 1.62, on white. Lever labels (`Role:` to
  `Output:`) in `--coral-text` 600. A fillable blank is a chip: `--tint`
  ground, `--coral-text` text, 2px dotted underline. An all-caps marker like
  `[CHECK]` is `--olive` 600 and never a chip. "More below" is the flat
  paper bar with "n of 9" on the right.

## Phone page

- Sticky paper bar, 56px, 2px ink rule under it: the small mark
  (`assets/logos/magnum-mark.svg`, 34px) on the left, the deck name in
  Oswald 17px, a SLIDES button on the right opening the existing list.
- Cover block in navy with the headline at 52px.
- Each slide is a section: ghost number and section label, heading at
  40px, points as a list with 8px coral square markers. Rows render as
  stacked bands. Tiles stack with full-width buttons.
- The prompt card is the same component, header stacked (label line, then
  a two-button grid: FILL IN outlined, COPY coral). Prompt at 15px mono.
  Long prompts fold after about 14 lines behind a "Read the rest · n more
  lines" bar; Copy always reads the stored text, never the DOM.
- Bottom bar, navy, 60px: "12 / 24", a progress line in bright coral,
  "NEXT <slide>" in bright coral.
- The paper bar is a deliberate call: the logo set has no small reverse
  mark for a dark ground, so the phone bar is paper, not navy.

## What does not move

- No URL changes (hard rule 8). `#n` slide hashes keep working.
- Logos are the delivered files, never redrawn. Badge clipped to its
  circle with `clip-path`, nothing edited in the SVG.
- Prompts never shrink. 15px floor on the laptop, 15px on the phone.
- Every prompt stays byte-identical to its Prompt Shelf card. Verify with
  the extract-and-compare script, not by eye.
- No logins, no server, no tracking.
- Palette and type are the house tokens only. Nothing new was introduced in
  the mockup and nothing new is introduced in the build.

## Build order

1. Social deck on the session branch, laptop first, then phone. Done 5 Oct,
   see CLAUDE.md.
   Gates: `tools/check-decks.js` PASS at four sizes, `tools/check-contrast.js`
   PASS at 1440, 820 and 390 with the phone view rendered, nine prompts
   byte-identical to the shelf, fill-in and goTo still working, rendered and
   read at 1440 and 390. Then James reads it on his phone.
2. Port the engine to the other four decks. Done 5 Oct. Same gates. The deck check
   learns the phone view: no sideways scroll, no prompt under 15px.
3. The members area shell: one shared stylesheet, a page per course,
   "carry on where you left off" in localStorage, search across the shelf.

Hours, session time: 6 to 8 for step 1, about 4 for step 2, 8 to 10 for
step 3. James's part is three reads.

## Model

Design calls were made on Fable. The build runs on Opus 5.5, high effort
for the engine, medium for the ports and the shell.
