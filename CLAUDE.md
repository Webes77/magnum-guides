# CLAUDE.md

Read this before doing anything in this repo. It is the handover between
sessions. Update the "Where we are" and "Next" sections at the end of every
session that changes them.

## What this is

The Magnum AI members area. A static site on GitHub Pages, served from the
`main` branch at `https://webes77.github.io/magnum-guides/`. Clients get the
link. No login. Everything is public, so nothing client-specific ships here.

Owner: James Wheable, Magnum AI, Gold Coast. One-person AI consulting
business. He is the only author and the only presenter.

## Hard rules

These are absolute. Do not relitigate them.

1. No em dashes, anywhere. Use a comma, a full stop, or a middot for separators.
2. Never the word "solid".
3. The 6 Levers are Role, Context, Constraints, Tone, Format, Output. That
   order, those labels. Never renamed, reordered, or added to.
4. Prices are always quoted plus GST.
5. No client material in the members area unless it is made generic enough to
   be an industry guide. Client names never ship.
6. Do not delete Fairmont material anywhere. Keep away from the Rebuild Relief
   and Broadbent client work except generic sales training.
7. The business stays one person. Flag anything that needs hiring, agency
   scale, or permanent operational complexity.
8. Never change a URL after it has been sent to a client.
9. Never commit scope or pricing without James signing off.
10. Anything interface-heavy about Claude, Cowork, or Anthropic products is
    search-verified before it ships. Training knowledge is months behind.
    The primary docs (`support.claude.com`, `anthropic.com`) are blocked from
    the sandbox. WebSearch works. Say when a fact is third-party only.

## House style

`brand/index.html` is the visual spec. `brand/magnum-house-style/SKILL.md`
is the enforcement skill. Paper `#EEE6D3`, ink `#1E1B17`, rust `#B8452A`,
olive `#6C7A3F`. Oswald for display, IBM Plex Sans for body, IBM Plex Mono
for labels and prompts. Cards: 3px ink border, 6px hard offset shadow, no
radius, no blur. Black and gold is retired. Do not introduce a fourth
typeface.

## Where we are

Front page `index.html` was rebuilt on 4 Sep (afternoon) for navigation.
Masthead carries a one-line instruction and an anchor nav. Then a Start
Here strip (three numbered blocks, one per session), Your Sessions (the
three decks, Fine-Tune as a reference link beneath), Prompt Shelf (one
full-width card), This Week (latest Field Note beside the latest edition,
the edition filled by a live fetch from the `magnum-newsletter` repo with
the archive as fallback), then Tool Manuals and By Industry side by side.
Only the latest Field Note shows; the archive holds the rest. One page, no
URL changed.

The Prompt Shelf (`prompts/`) is a cumulative, undated page of copy-ready
prompt cards and recipe cards. It launched on 4 Sep seeded with the thirteen
deck prompts, verbatim, plus one recipe. Every card carries a levers strip
showing which of the six it pulls on. Cards live in the `S` array at the top
of the script in `prompts/index.html`; new cards go at the top of the array
under the section `From the Sunday Brief`.

Since 4 Sep (afternoon) the shelf is indexed for the client, not by source.
Two optional fields on each card: `type` (interview, instructions, rules,
review, writing, scheduled) and `when` (start, before-acting, setup, weekly,
monthly). The page groups cards by `when`, in that order, and a card with no
`when` lands in a last group headed New until James files it. A filter row
at the top narrows by When, Type, or one Lever, one chip per group. `sec`
stays on every card and shows as a small source label on the card; it is no
longer a heading. Every id and anchor is unchanged. The lists of types and
moments live next to `LEVERS` at the top of the script; a value not on a
list still renders and filters, and sorts last. The Sunday Brief routine
does not yet write `type` or `when`; that is James's change to make from the
routine's chat.

Since 4 Sep (night) the shelf opens as a vault: a chooser of the moments,
one tile each with a count, plus Everything. Cards stay hidden until a tile
is picked or any filter chip is set; "Choose a moment" in the filter row
returns to the chooser. A link to a card id still lands on the card with
its moment open (`openHash` in the script, on load and on hashchange). The
"How to use a card" box shows only once cards are showing. Built for a
shelf past a hundred cards: every card is rendered once and hidden by
state, nothing is re-rendered.

Since 6 Sep every card carries a `hook`, one line of outcome under the
title, under fourteen words, written to sell the card before it is read.
Two more optional fields: `rank` (1, 2 or 3) pins a card to the top of its
moment and shows a rust "Start with this" tag; James sets it, the routine
never does. Nine cards are ranked, three per moment for Starting a task,
Before you act and Setting up. `added` (YYYY-MM-DD) shows an olive "New"
tag for fourteen days. The sixteen library cards carry `added:'2026-09-04'`.
Two things were proposed and deferred on 6 Sep: a `topic` field
(communication, conflict, money, files) waits until a moment passes twenty
cards, and pre-written Cowork skill cards wait until one paying client has
run one for a month. Neither is a decision to never build.

On 4 Sep (evening) the shelf grew from 14 cards to 30. Sixteen came from
James's own prompt library in Drive (the Five Role Prompts, four of the
fifty Role Packs, the Prompt Architect, the voice guide, the 20 per cent
cut, the reference-file builder, the three-part image prompt, and one
recipe), each rewritten for Claude against `notes/prompt-review-standards.md`
and carrying `sec:'Magnum AI library'`. The other forty-six Role Packs stay
off the shelf as a product. A primer, "The method in five lines", sits at
the top of the shelf and links to session one. `image` was added to the
type list. Two deck prompts were fixed in the deck and on the shelf
together: Cowork instructions ("Cowork does not read my chats") and The
file plan (its rules rewritten as positive rules with reasons).

The session ladder is complete at three. There is no session four. Decided
on 3 Sep. Session three closes by pointing at paid build work, not another
deck.

| Session | Folder | Slides | Prompts |
|---|---|---|---|
| One, AI Foundations | `ai-foundations/` | 23 | 4 |
| Two, Make Claude Yours | `make-claude-yours/` | 35 | 5 |
| Three, Work That Runs Without You | `runs-without-you/` | 18 | 4 |

Also live: Fine-Tune (`fine-tune/`, do not restyle, James said leave it
alone), the Manus website manual, AI for Buyer's Agents (`ba-growth/`, the
only By Industry entry).

Four Weekly Field Notes are in `newsletter/`: 01 Clarity, 02 Context,
03 Talking (added 4 Sep, written from a note James was sent, in his voice),
04 Cutting (drafted 4 Sep evening from the 20 per cent rule in James's own
library, carrying the shelf card "Cut it to the 20 per cent"; on the branch
for James to read in his voice before it merges).
Each issue is one self-contained HTML file with its card source beside it.
The front page shows the newest two or three; the archive shows all.

Make Claude Yours has been delivered to one client, on 3 Sep. Two problems
came out of that run and both are fixed: prompts were mostly off-screen, and
the deck did not follow its own agenda. Foundations and session three have
not been delivered to anyone yet.

Make Claude Yours slide 31 (Record a Skill) was checked on 4 Sep against
Claude's own announcement post on X (21 July 2026) and three third-party
writeups. Plus menu of the desktop app, inside Cowork, Pro, Max and Team
plans, desktop only. The slide matches. James has not yet eyeballed it in
the live product; that is the one remaining check.

Three product facts search-verified on 4 Sep, all third-party (TechCrunch,
Engadget, The Register, 9to5Mac): Cowork has run on the web and the phone
app since 7 July, Max plans first, other plans following; scheduled tasks run
in the cloud with no device on; chat and Cowork share memory since 25 Aug, on
by default. The decks were corrected to match. `claude.com`, `anthropic.com`
and `support.claude.com` are all blocked from the sandbox; WebSearch is the
only research channel and it works.

The Gamma sweep is done, 4 Sep. 233 decks listed, the four Claude-era ones
read. Nothing reopened the closure decision. One gap it surfaced is closed:
Foundations gained a slide, "It reads what you hand it", on photos, PDFs,
spreadsheets and handwritten notes as inputs. Details in
`notes/training-audit.md`, Source 2.

## Decisions already made

- Old training material (the Big 6, ChatGPT manuals, everything in Drive from
  January to June 2026) is not being salvaged. New material only. Full audit
  and the reasoning in `notes/training-audit.md`.
- The By Industry section is speculative. James has no vertical with a
  pipeline. His biggest client is a furniture retailer. Do not build
  industry guides until he says which trade, and expect the answer to depend
  on where his last several paying engagements came from.
- Two weekly publications exist (Field Note here, This Week in AI in the
  newsletter repo). Unresolved positioning question. Not urgent.
- Tool Manuals is one section, not an area per tool. A tool gets a manual
  when it does a job Claude does not and it has done paid work, both. No
  training for other chat models; that is the retired Big 6. Things the
  Sunday Brief finds go to the shelf or a Field Note, not a manual. Decided
  4 Sep.
- Every prompt on the shelf is reviewed against
  `notes/prompt-review-standards.md`, James's September 2026 reference
  checked against Anthropic's live docs. Pasted in verbatim on 4 Sep. The
  Sunday Brief routine and any future prompt work review against it. A
  deck prompt that fails it is fixed in the deck and on the shelf together.
- No third weekly publication. The Prompt Shelf is cumulative and undated so
  it grows without James having to write anything on a schedule. Decided
  4 Sep.
- The Sunday Brief (the routine that reads the week's AI newsletters for
  James) feeds the shelf. It moved from a Cowork task to a Claude Code
  routine on 4 Sep so it runs with no Mac awake. Its prompt is versioned at
  `notes/sunday-brief-prompt.md`. The routine drafts shelf cards straight
  into `prompts/index.html` on a branch named `sunday-brief/<date>`; James
  reads the diff and merges. Nothing reaches the shelf without that step.
  The vault is the `Vault` folder in Drive, synced to the Mac; the routine
  adds one dated file a week there and never edits the four standing files. Deck prompts on the shelf are the authored text and are
  never rewritten; a fix to a deck prompt is made in the deck and the shelf.
- The audience copies prompts, it does not read them off the screen. Prompt
  slides are built for that.

## Next

Where the last session stopped: the members area is structurally done and
the three decks are live and fixed. The open work, in order of value:

1. James to look at the rebuilt front page and the indexed shelf live, on
   a phone as well as a laptop. Both were verified locally only.
2. James to glance at Make Claude Yours slide 31 in the live desktop app.
   Sources agree with the slide; nobody has seen the menu itself from here.
   The shelf recipe "Set Claude up in the right order" and the account and
   Cowork instruction prompts name the same Settings locations as the deck,
   so they move together if the deck changes.
3. Watch the first live Sunday Brief routine run (Sunday 6am Gold Coast).
   It should land an email, four Drive appends and a `sunday-brief/<date>`
   branch. If the branch arrives, James reads the diff and merges it. The
   prompt is versioned at `notes/sunday-brief-prompt.md`.
4. James to add four lines to the routine prompt so new cards arrive
   filed and sold: `type`, `when`, `hook` and `added`, values as listed
   under "Where we are". `rank` is never the routine's. Until then new
   cards land under New with no hook and get filed by hand in the merge.
5. The desktop folders, once James uploads them. The only material never
   swept. See "Still to sweep" at the end of `notes/training-audit.md`.
6. Housekeeping (not urgent): the 38 Gamma duplicates listed under Source
   2, by hand, since the Gamma connector cannot move or delete. The Drive
   tidy ran on 4 Sep: the retired January to March workspace is archived,
   duplicates sit in `_Review before deleting 2026-09` under Magnum
   Business for James to empty, and the log is `_Declutter log` in the same
   folder. Two loose PNGs and the API Key folder are still James's call.
7. Industry guide, one only, once James names the trade.

## How things get built

- Work on whichever `claude/...` branch the session is given (it changes
  every session), merge to `main`, push both. James has said "you have full
  control, merge wherever you need to." Pages deploys from `main` in under a
  minute. Two sessions can be live in this repo at once; fetch `main` before
  merging and expect to resolve `CLAUDE.md` by hand.
- Never deploy inside 20 minutes of a client session unless James says so.
- Each document keeps its card source next to it (`*-thumbnail.html` or
  `thumbnail.html`). Cards are 1200x630 JPEG q90 in `assets/thumbnails/`.
  Reusable source in `templates/guide-thumbnail.html`.
- The three decks share one engine (CSS and JS). A fix to the engine goes
  into all three files. The only differences between them are metadata,
  prompts, figures, and the slide array.
- Every deck: SLIDES button and M open the list. Escape, CLOSE, or clicking
  the backdrop closes it. Slide changes use `history.replaceState`, so one
  Back returns to the members area. Prompt slides give the prompt the full
  width, reflow authored line breaks for display only, show "More below"
  when cut off, and carry EXPAND for full-screen reading. Copied text is
  always the authored text.

## Gotchas that cost time before

- `chromium --headless --screenshot --window-size=1200,630` scales the page
  and ships a cropped card. Always render with Playwright at a true viewport
  and a clip. Playwright is global at
  `/opt/node22/lib/node_modules/playwright`, CommonJS require, with
  `executablePath: '/opt/pw-browsers/chromium'`.
- Chromium in the sandbox cannot reach Google Fonts. For any render that
  needs the real fonts, inline them: fetch the CSS with a browser UA, download
  the latin woff2 files, base64 them into a temp copy of the page. A pre-built
  `fonts-inline.css` sits in the session scratchpad; if it is gone, rebuild
  it.
- `github.io` is blocked from the sandbox. You cannot verify the live site.
  Verify against a local `python3 -m http.server` and tell James to check
  live.
- Do not `pkill -f` a local server by pattern. It killed the shell once. Let
  it die with the session.
- `navigator.clipboard.readText()` hangs headless Chromium. Do not test it.
- The decks scale to fit the screen. Every slide is laid out for a box of
  1340 by 770 (`FIT_W`, `FIT_H` in the engine, the tallest slide at a
  1440-wide window) and zoomed to the deck area, so nothing spills and the
  pinned footer never prints over the last line. Before the fit (4 Sep
  evening) a 1366-wide laptop showed five lines of a prompt and overlapping
  text on most slides. A slide whose content grows past 770 at 1340 wide
  will overflow again: measure with a headless run at 1366 by 657 before
  adding a slide, and keep prompt slides to one row of points.
- Prompts are authored with hard line breaks at about 72 characters. Widening
  a panel does nothing until they are reflowed.
- Case-insensitive grep for "Inter" matches "interaction". Use word
  boundaries when checking for retired fonts.
- A Word lock file (`~$name.docx`) is not a document.

## Deeper reading

- `notes/training-audit.md`: the full material audit, the never-touch rules,
  the Drive inventory, the closure decision.
- `brand/index.html` and `brand/magnum-house-style/SKILL.md`: the look.
- `brand/rollout-exemplar.html`: the reference client document in the house
  style.
- `newsletter/README.md`: how a Field Note is added.
- `README.md` and `ROADMAP.md`: the human-facing version of this file and
  the long-term plan for logins.
