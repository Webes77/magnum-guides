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

    The verifying is the session's job, and after that the monthly fact
    check's. It is never James's. A fact that search cannot settle still
    ships: write it loosely enough to survive being slightly wrong, carry a
    visible line saying it is third-party or observed, and put a row in
    `notes/fact-register.md` so the routine works it. Do not hold a page, do
    not block a merge, and do not hand James a list of things to go and
    confirm in the product. He built the fact check routine on 13 Sep so
    that checking would stop being his work, so a session that sends the
    checking back to him has inverted the rule rather than followed it.
    Softened 15 Sep after exactly that happened on the Cowork guide: six
    lines were flagged for him and four of them were already A-grade from
    Anthropic's own current documentation. The one genuine gap was settled
    in one sentence from James's own memory. Ask him a question when only he
    holds the answer, and make it a question, not a task.
11. A prompt on a slide is never shrunk, condensed, cut or reflowed to make
    it fit. Prompt text holds a floor of 15 real pixels at any window size
    (14 for the points beside it); a small window scrolls the pane and
    shows "More below". If a prompt slide does not fit, the fix is fewer
    points beside it or a second slide, never a smaller prompt. Run
    `node tools/check-decks.js` against a local server before any deck
    change merges; it must print PASS. James asked for this on 6 Sep after
    a run where prompts had been compressed to fit.

## House style

`brand/index.html` is the visual spec. `brand/magnum-house-style/SKILL.md`
is the enforcement skill; `brand/house-style-block.md` is the paste-ready
version for other skills. Since 9 Sep: paper `#FBFBF9` (flat, no
texture), white `#FFFFFF` cards with a 2px ink border and no shadow, navy
`#1F2A37` for the masthead band, footers, figure plates and dark cards,
ink `#1E1B17`, coral `#EF4029` (since 14 Sep, was `#DE4A3C`) as the one
accent for display type, fills, borders and figures, deep coral `#C63A2A`
for any coral text under 18px, bright coral `#FF6F5E` for fills on navy and
badges only, coral tint `#FBE1D8` for tags, slate `#5B6B7A` for ticks and
figure detail, mute `#63615C` for notes and secondary lines (since 15 Sep,
was `#7A7A7A` at 4.14:1), ghost coral `#F7BAB0` for the resting index number
on a section heading and nothing else, and `#A1524E` for the same number on a
navy ground (both since 15 Sep). The CSS token names did
not change: `--rust` holds coral, `--olive` holds slate.
Oswald for display, IBM Plex Sans for body, IBM Plex Mono for labels and
prompts. Retired: black and gold, and the beige and rust system (paper
`#EEE6D3`, rust `#B8452A`, olive `#6C7A3F`, grid texture, offset
shadows). Do not introduce a fourth typeface. Since 9 Sep (night) Fine-Tune and
the Buyer's Agents guide carry it too. The claim that nothing was left in an
older style was wrong twice and both are now closed: the Manus website manual
was still on the beige system, and all four Field Notes still carried the
retired offset shadow, both found and fixed on 15 Sep. Twelve share card
sources remain, deliberately, and are listed below.

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
Two things were proposed and deferred on 6 Sep. The `topic` field shipped
on 13 Sep as `station` (see the Research station below). Pre-written Cowork
skill cards still wait until one paying client has run one for a month.

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

The first live Sunday Brief branch landed on 6 Sep: `sunday-brief/2026-09-06`,
three cards, every field written, no rank. So the routine's repository
access works and item 4 of the old Next list is done. The branch was
reviewed against the bar and the standards; the review is
`notes/sunday-brief-reviews.md`, one entry per branch from now on. Verdict:
drop one (duplicates the deck's Your first skill), keep one as written,
keep one with a two-line rewrite. James approved and the two kept cards are
on the shelf (32 cards). The routine prompt gained a mechanical duplicate
test (same type, same when, same thing in hand), for James to paste into
the routine.

Also on 6 Sep James reported the newsletter links had gone from the front
page. The 4 Sep rebuild had cut This Week from a three-edition grid and
three Field Note cards down to one card each. The two cards stay, and under
them a two-column list now carries the three earlier Field Notes and the
three editions before the latest, the editions filled by the same live
fetch with the archive link as fallback. No URL changed.

On 6 Sep the weekly newsletter, This Week in AI, moved off Manus and onto
two Claude Code routines that live in the `magnum-newsletter` repo. Saturday
6am drafts an `edition.json`, checks it builds, puts the draft and two image
prompts in the Drive folder This Week in AI, and emails James. James makes
the two images and drops them in the dated subfolder. Sunday 4pm (retry
Monday 4pm) builds, validates and pushes. The builder, schema, prompts and
trigger ids are in that repo: `tools/build_edition.py`,
`tools/EDITION-SCHEMA.md`, `ROUTINE.md`. The members area front page picks
the new edition up through the fetch it already does. Nothing in this repo
changed for it. The newsletter is a separate product and keeps its own
look; do not restyle it to the members area.

The session ladder is complete at three. There is no session four. Decided
on 3 Sep. Session three closes by pointing at paid build work, not another
deck. On 9 Sep a fourth deck was added outside the ladder: `bots/`,
Chatbots, Agents and Bots, a reference deck like Fine-Tune. On the front page it is block 00,
Learn the words, at the front of the Start Here strip (now four blocks,
`.grid.four`), and a reference line under Your Sessions. It
came from a ChatGPT-written explainer James supplied, stress-tested and
rebuilt: the four-level ladder (brain, helper, agent, standing agent),
chatbot versus agent, automation versus agent, the parts of a bot, a
glossary, what is out there (Claude, ChatGPT agents and workspace
agents, Grok Bot, OpenClaw, each search-verified third-party on 9 Sep
and framed as what it is and who it is for, not training), then a
four-step build of one bot in Claude, the Friday enquiries bot, on a
Cowork scheduled task. James asked for the vendor slides and the build
after hearing the case against; both are his call. Three prompts, on
the shelf under `Reference · Chatbots, Agents and Bots` as
`design-the-bot`, `bot-test-run`, `friday-enquiries-bot`. Card at
`assets/thumbnails/bots.jpg`, source `bots/thumbnail.html`. The deck
check covers it.

| Session | Folder | Slides | Prompts |
|---|---|---|---|
| One, AI Foundations | `ai-foundations/` | 30 | 6 |
| Two, Make Claude Yours | `make-claude-yours/` | 37 | 5 |
| Three, Work That Runs Without You | `runs-without-you/` | 17 | 4 |
| Reference, Chatbots, Agents and Bots | `bots/` | 26 | 3 |

On 12 Sep James supplied two cards in chat rather than on a branch, and
both were reviewed against the bar the same way; the entry is in
`notes/sunday-brief-reviews.md`. The recipe `ai-search-check` went on as
written, with its cadence reconciled (`where` said quarterly while `when`
filed it monthly). The prompt `four-block-image` failed the mechanical
duplicate test against `image-prompt`, same type, same moment, same
levers, but carried two blocks the shelf never had, LAYOUT and TEXT. James
chose the skeleton, so the two were split by subject rather than merged:
`four-block-image` is the image card, and `image-prompt` narrowed to video
and gained a run-length line. Its id did not change, because links to
`#image-prompt` may exist; only the title, hook, `where` and body moved.
The shelf is 39 cards. `four-block-image` was
rewritten the same day after James said it gave the reader nothing: it
carried four labels and no example, which fails item five of the review
standards. It now shows one filled-in brief above the blank.

On 13 Sep the shelf gained its first station. James supplied a finished
Research section, seven prompts built on the six levers in order, and asked
for headed areas so a reader can pick the kind of work they are doing.
That resolves the `topic` field deferred on 6 Sep: the field is called
`station`, it names an area of work rather than a source, and it sits
alongside `when` rather than replacing it. `STATIONS`, `STATION_NOTES` and
`STATION_HEAD` live next to `LEVERS` at the top of the script. The vault
chooser gained a second row, "Or pick an area", and the filter row gained
an Area chip. Picking an area shows a header block (the routing table, the
shared rules, a count) above that area's cards. A card with no station
never appears in a station view, so nothing else on the shelf moved, and a
deep link to a station card opens its area automatically.

The seven Research prompts are `trust-test`, `shortlist`, `briefing`,
`idea-test`, `business-check`, `post-call-intel` and `build-path`, all
`sec:'Research'`, `station:'research'`, `added:'2026-09-13'`, all six
levers on each. They are byte-identical to the file James supplied and
were verified as such after insertion. They are far longer than anything
else on the shelf: 4,809 to 9,598 characters against a shelf median of
1,065, which is part of why they needed their own area. The shared blocks
behind them (constraints, evidence grades, verdict labels, complexity
tiers) are versioned at `notes/research-engine-master.md`; change a rule
there first, then paste it over the same block in every prompt that uses
it. The shelf is 46 cards. Its copy also moved from sessions to courses,
matching the front page.

Same day, James read the cards and said the prompt text looked strange and
did not explain why he would use it. Both faults were mine. The cards
dropped a reader straight from a long all-caps `where` line into
`<my_input>` tags and `## Role` headings, and `flow()` was reflowing that
machine-facing scaffolding into runs of prose. And the explanation existed
in the file he supplied: each prompt carries the question it answers, what
to include, what comes back and a numbered how-to, and only "use it when"
had been carried across. Two fixes. `flow()` now returns a prompt
untouched when it carries its own structure (a line starting with a
markdown heading or an XML tag), so authored prompts of that kind display
as written; older cards still reflow exactly as before. And an optional
`brief` field on a card renders above the levers strip: the question in
full size, what to give it and what comes back side by side, and the
numbered steps behind a collapsed toggle. All seven `where` lines were
shortened, because that style sets them in uppercase mono and a 130
character sentence in caps is unreadable. Any future long prompt card
should carry a `brief`.

Later on 14 Sep the shelf was reworked again after James read it and said it
was still confusing. Four faults, all his, all real.

The primer said "Those five are the six levers in working order" over five
lines, and Tone was not among them. It is now six lines, one per lever, with
the lever name as the marker in the left margin so a reader can point at a
line and name it. Retitled The method in six lines.

The filter row was 25 chips of jargon. The type values (interview,
instructions, rules, review, writing, image, scheduled) meant nothing to
anyone who had not sat in a course, so they now say what a card does for you:
Asks you questions, Writes your setup, Sets the rules, Checks your work,
Writes something you send, Makes a picture, Runs on a timer. The group is
headed What it does. The Lever chip went entirely, because after the strip
came off the cards it filtered by something invisible. `before-acting`
shortened to Before you act. The keys never changed, only the labels, so
every card's stored `type` is untouched.

Recipes sat inside the prompt lists with nothing marking them. Each moment
now splits into two headed groups: Prompts to copy, then Step by step. An
empty group never renders, and `applyFilters` hides a group with no visible
card as well as an empty section.

The prompt is now told apart from the writing around it. It sits on a navy
wash (`--prompt-bg` `#EBEFF3`, a new token, same family as the navy) in navy
ink rather than ink on white, under a coral label reading The prompt, copy it,
paste it into a new chat. Recipes get The steps in slate.

And the long explanation folds away. James asked for a dropdown called The
reasons holding the detail, with the prompt directly below and the card head
answering only what is this for and how does it help me. The `brief` block on
the seven Research cards now sits inside a closed `<details class="reasons">`,
with the inner steps toggle flattened so there are no nested dropdowns. Those
cards go from 1,240px to 591px closed, which is the "too much to scroll"
complaint fixed. All 47 ids unchanged, script parses, no sideways scroll at
1440, 1280, 820 or 390.

Last on 14 Sep, the shelf gained a fill-in layer. A prompt with five or six
bracketed blanks scattered through it is the one nobody edits correctly by
hand, and missing one gives a broken answer. Five cards carry three or more
real blanks and now carry a small form above the prompt: `write-the-quote`
(6), `week-of-posts` (5), `write-the-sop` (4), `difficult-email` (4),
`image-prompt` (4). What a client types goes into the prompt on screen and
onto the clipboard. A blank offering a choice ("low / medium / high") renders
as a dropdown rather than a text box.

Two rules make it safe. A bracket in capitals is a marker the AI outputs
(`[CONFIRM]`, `[CHECK]`, `[CHECK CURRENT DOCS]`, `[NEEDS CONFIRMING]`) and
never becomes a field, which is why the Research cards get no form despite
having brackets. And a card with nothing typed is byte-identical to the
authored prompt, verified across all 43 prompt cards, so an untouched card
behaves exactly as it always did. Substitution is split and join rather than
a regex, because a blank's label carries slashes and commas a pattern would
eat. Clearing every field restores the authored text exactly.

The shelf was scoped honestly before it was built: 24 of 43 cards have no
blanks at all, so this was never a whole-shelf feature. Do not extend it to
cards with one or two blanks; the form costs more attention than it saves
there.

Two more faults James found reading it back, same day. The primer read as
clutter because the lever name and the bold lead said the same thing twice:
ROLE followed by "Give it a role". The restatement went, the numbers went,
and the six lever names are now the only marker, aligned down the left. The
raggedness behind the complaint was a specificity bug: `.about ol li` outranks
a bare `.levers-list li`, so the list stayed flex and kept drawing its
counter. The rules now carry the parent selector.

And the Research prompts opened with `<my_input>` and `## Role` before a word
of English, which James said reads as code and stops a client copying it.
Fixed by display only: the tags dim to a light slate, the headings drop to
slate, and a plain line above the panel says to type in the square brackets
and leave the faint lines alone. The prompts themselves are untouched and
still byte-identical to the file James supplied. That is safe because
`copyText` reads `s.prompt`, the stored text, never the DOM, which was
verified for all seven cards after the change.

One bug was introduced and caught in the same pass, worth recording because
the shape of it will recur. The dimming regex ended `\s*$` under the `m`
flag, and `\s` swallowed the newline after each tag, so every Research
prompt lost a blank line on screen while the clipboard stayed correct. It is
`[ \t]*$` now. The check that caught it was diffing the rendered text against
the authored text, not eyeballing the render, and all 43 prompt cards are now
verified to display exactly what they store.

Earlier on 14 Sep the levers strip came off the cards. James said there was too much
reference to the six levers and the page had gone too busy to use, and he was
right: every prompt card drew all six levers as boxes with the unused ones
greyed, so a card pulling three levers still showed six. Across 43 prompt
cards the average was 4.1 lit, and 30 cards carried at least one dead box. The
levers are taught once now, in the primer at the top of the shelf and in the
courses, and the card is the prompt. Hard rule 3 is untouched: the six labels
and their order are unchanged, they just stop being repeated 43 times. The
Lever filter chip reads `data-levers` on the element, not the strip, so it
still works and was tested (Tone returns 19 cards, matching the source).

Two changes went with it. The `where` line came out of tracked uppercase mono
into sentence case at 13px, because it is the second line a reader meets and a
long one set in capitals is unreadable, the same fault fixed on the Research
cards the day before. The authored `where` text was not reworded, only
restyled. And the `brief` block on the seven Research cards was made properly
readable at James's request: body and steps from 14.5px to 15.5px with more
line height, labels from 10px to 11px with the tracking cut from .2em to
.12em, and the prompt itself from 13.5px to 14px with more room above it. All
46 ids are unchanged and all 43 prompt bodies are byte-identical, checked
against the previous commit.

On 13 Sep a third-party article on AI privacy (Ruben Hassaid, shared by
James) surfaced a defect in live training material, which is worth more
than the article was. Two slides in Make Claude Yours were corrected, and
the deck check passed after. "The private chat" said an incognito chat is
"not saved, not remembered, and not in your history", which is true for
the individual and incomplete for the client it was written for. Anthropic's
own pages confirm an incognito chat is kept for 30 days (longer under an
Enterprise custom retention setting) and appears in the organisation data
export a Team or Enterprise Primary Owner can run. The slide now says
private from your sidebar, not from your employer. "Your chats stay yours"
gained the consequence of leaving the training toggle on: Anthropic keeps
consumer chats for up to five years with it on, against 30 days with it
off. Both verified through WebSearch against `support.claude.com` and
`privacy.claude.com`, which are reachable in results even though direct
fetch is blocked.

The article's own hook was not used and should not be. It tells the
Navier-Stokes story as Buckmaster and Alpoge solving the Millennium Prize
problem first and OpenAI then cracking it after hearing a rumour. The
record is contested: OpenAI says their work addressed the forced Euler
equations, a related but distinct problem, and that Buckmaster's Codex
prompts in the preceding two months could not have influenced its system
including through training, while conceding it cannot rule out
de-identified data contributing generally. Repeating the article's version
under James's name would put a one-sided account of a live dispute in
front of clients. Sources: openai.com/index/navier-stokes-solution,
Quanta, Fortune and TechCrunch, all 8 Sep 2026.

A monthly fact check went in on 13 Sep, at James's request, after the
privacy article showed how quietly a live slide can go wrong. Three files:
`notes/fact-register.md` lists every claim in the members area that can go
stale, 33 rows since the privacy page landed, each with where it lives, when
it was last checked and its
source grade; `notes/fact-check-prompt.md` is the versioned routine prompt;
`notes/fact-check-log.md` takes one entry per run. The register is
deliberately bounded. A claim earns a row only if it asserts something
about a third-party product, plan or policy and a client acting on it
while wrong would be misled. Teaching, method and the 6 Levers are not on
it and never go stale. Magnum pricing is never a routine's to touch.

The routine is `trig_01Ug88bf3JAkccEhX6f7Nd2x`, cron `0 21 1 * *`, the 1st
of each month at 21:00 UTC, 7am Gold Coast on the 2nd, fresh session each
fire, first run 1 Oct 2026. It never edits `main`: it opens a branch named
`fact-check/<date>` and emails James, the same shape as the Sunday Brief.
It cannot work until James adds `webes77/magnum-guides` to the routine's
sources and attaches Gmail in the Routines UI, because a session cannot do
either. Two rows are standing exceptions it will report every run until
James closes them: row 11, Record a skill, never seen in the live product
from here, and row 15, the Cowork tools claim, James's own observation with
nothing third-party either way.

Two things were agreed on 13 Sep and not built. Both were built on 14 Sep and
are below.

**The privacy reference page.** Built 14 Sep and live at `privacy/`, titled
"AI Privacy: What Is Kept, and Who Can See It". Undated and maintained in
place, precedent Fine-Tune, because a numbered Field Note reads as stale in
six months and privacy settings move constantly. The agreed structure shipped
as written: what happens to what you type, what is kept and for how long per
plan, who can see it, a numbered settings pass for Claude and for ChatGPT,
what never to put in at all, and a short three things. It ends on the memory
audit prompt, which is on the shelf as `memory-audit` under Setting up and is
byte-identical to the copy on the page.

The spine of the page is that three separate questions get collapsed into
one: is it stored, is it used to train, can a person read it. Different
answers, different switches, and the third is the one nobody asks about. The
sharpest thing on it is the incognito point from 13 Sep, now given its own
section: private from your sidebar is not private from your employer.

Every claim was search-verified against the vendors' own pages under hard
rule 10 and the page carries its sources. Two exceptions are marked on the
page itself: the Claude memory menu paths are third-party reporting, because
nobody has seen those menus in the live product from here. Nothing from the
Hassaid article's Navier-Stokes opening, for the reasons above.

One judgement call worth knowing about. The page is undated as agreed, but
the footer carries "Settings last checked · 14 September 2026". A page of
nothing but third-party policy needs to tell a reader how fresh it is, and
that is not the same as numbering it like an issue. Eleven rows went into
`notes/fact-register.md` (23 to 33) so the quarterly re-check has something
to work, and the footer date gets updated in the same commit as the re-check.

Front page: a third reference line under the courses, beside Chatbots and
Fine-Tune. Card at `assets/thumbnails/privacy.jpg`, source `privacy/thumbnail.html`.
Not a deck, so `tools/check-decks.js` does not cover it.

**The weekly Field Note routine.** Built 14 Sep. Both open questions were put
to James first and he settled both.

Where the week's idea comes from: the Sunday Brief, not a second pass over the
same inbox. The Sunday Brief already ends LEARN THIS PROPERLY with `FIELD
NOTE: yes` plus a headline or `FIELD NOTE: no`. That line is now the
commission, and it goes into the week's vault file as a fifth section,
`## field-note-commission`. The Wednesday routine reads the vault file, never
the inbox. That was not only a duplication argument: the Sunday Brief's Step 7
trashes the week's newsletters after it sends, so a second reader could not
work even if it were wanted. When the verdict is `no` the routine does not
skip the week, it falls back to a Prompt Shelf card that has never carried an
issue. Forty-six cards against four issues, so the fallback has years in it.

How much it writes: the scaffold, not the prose. James rewrote 03 and 04 in
his own voice, so a routine writing finished sentences is writing something
that gets thrown away. What took the hour was everything else, and that is
what arrives done: the seven pages, the five rules, the prompt card checked
against the review standards, the five exercises, the head tags, the card
source, the card image, and both index links. Every block he writes carries an
`EDIT · VOICE` comment and the email lists them, so he can work from the email
alone. A coral draft band sits at the top of the page until he deletes it, and
the check fails while it is still there.

Five files carry it. `templates/field-note-template.html` is issue 04's shape
with the copy taken out and every editable spot marked, spliced from 04 so the
house style and the print rules are the same bytes. `tools/check-field-note.js`
is the gate: house rules, page numbers, one masthead number, one footer run,
head tags against the filename, card source and card image, both index links,
and under `--shape` the template's seven pages, five rules, one prompt, five
exercises. It passes on all four live issues, and its one warning, that Field
Note 01 has no card source, is the gap already recorded under Next.
`notes/field-note-prompt.md` is the versioned prompt, `notes/field-note-log.md`
is the per-branch log and the list of cards already taught, and
`newsletter/README.md` carries the whole thing.

The routine is `trig_016pPJPsm8D3yUZs81wquraU`, cron `0 20 * * 2`, Wednesday
6am Gold Coast, fresh session each fire, first fire Wednesday 16 Sep. It drafts
onto `field-note/<date>` and emails James. It never publishes, never pushes to
`main`, never opens a pull request. Both prompts were pushed to their live
routines with `update_trigger` and read back byte-identical, so
`notes/field-note-prompt.md` and `notes/sunday-brief-prompt.md` are what
actually runs.

Two things James must do in the Routines UI before 16 Sep, neither doable from
a session. Add `webes77/magnum-guides` as the routine's repository, and attach
Gmail and Google Drive. `create_trigger` refused the connectors outright: this
organisation does not allow it, and a session can only pass through connectors
it holds itself. Until both are done the first fire has nothing to read and no
way to report.

One thing to watch rather than assume. The bet is that a scaffold is worth
having. `notes/field-note-log.md` is where that gets judged: if James finds
himself rewriting the rules and the exercises as well as the voice blocks, the
routine is doing the wrong half and the answer is to narrow it, not to widen
it. Give it a month.

**The team seats guide and its recommendation tool.** Built 14 Sep, live at
`team-seats/`, titled "Should You Move Your Team onto Paid Claude or ChatGPT
Seats?". James supplied the finished prose and a tool spec; both were locked
and neither was rewritten. The prose on the page is byte-faithful to what he
handed over, verified by diffing the rendered text against his file, and the
section order is his.

It was built twice on the same day and the second version is the one that
matters. The first carried a flat cost calculator, staff count in and both
platforms' cost out. James replaced it, and the reasoning is worth keeping
because it will apply to the next tool: the calculator answered "what does
this cost", which is a question with no interesting answer here, because the
two platforms price identically. The decision an owner is actually stuck on
is personal accounts versus a team plan, which does have differentiating
factors. The tool now asks four questions (team size, turnover, how sensitive
the work is, who is already paying personally) and returns a lean with the
reasons for that specific situation. Platform choice dropped out of the tool
entirely and lives in the guide as the second question.

Scoring runs one way only, toward Team, and Personal is the default lean when
the score stays low. That was the spec's call and it is a good one: points in
both directions double-count the same fact. Four bands, not two, so mixed
signals can be said out loud while still landing on a side every time. Max
score is 7. The score is never shown to the reader; it is an internal
weighting. All 81 answer combinations are tested, and the test asserts more
than the band: that no bullet describes an answer the reader did not give (a
"some turnover" answer never comes back as "high turnover"), that no template
placeholder leaks, and that bullets never repeat.

The weighting flaw flagged on 14 Sep is fixed. Team size used to cap at +2,
the same as turnover and sensitivity, so headcount could never carry a verdict
on its own. The 11 to 15 band scores 3 now and the maximum is 8. Twelve of the
81 combinations changed band, all of them 11 to 15 teams, and the shape of the
change is that a large team with one mild secondary factor now tips to Team:
eleven to fifteen people with some turnover and nothing else was a Personal
lean and is now a Team lean.

Two things about that fix are worth keeping, because both were wrong in the
first telling of it.

The worked example given to James was not a case that moved. Eleven to fifteen
people, stable, non-sensitive, nobody paying, scored 2 before and 3 after, and
both land in Band 2. The argument for the fix was right and the example chosen
to carry it was not. Check a proposed weighting change against the band table,
not against one case that sounds persuasive.

And the fix broke the Band 4 summary, which no test caught because the summary
was a fixed string. At +2, Band 4 could not be reached without turnover
scoring at least 1, so "Team size, turnover, and the kind of work going
through it all point the same way" was always true. At +3 a stable team can
reach Band 4, and that line then claims agreement from a factor that scored
zero. It is now used only when all three really do agree; otherwise the
summary names the two factors that carry it. The test asserts it: a summary
may never name a factor the reader scored zero on.

The page layout changed with it. Six accordions, all closed on load, headed
with the questions a client actually asks ("What's the catch?", "What happens
to a staff member's chats if they leave?") rather than the guide's own
section nouns. Native `<details>`, no library, multiple open at once so two
sections can be compared. The closed stack is the contents page, which is why
the old contents strip came off: it would have been a second index of the
same six things. Page order is the short version open, the tool, the
accordions, then What It Comes Down To open.

A link with a hash opens its accordion rather than scrolling to a closed
heading. That covers the verdict's link to the Cost section and any link
someone pastes later.

No price is computed anywhere on the page now. Every figure is hand-written
HTML in the Cost accordion, so a price change is made in four places (the
table, the worked examples, the short version, the footer date) and the tool
never needs touching.

The $100 bug, reported 14 Sep: there was not one. 20 staff at $20 returned
$400 on every input path tested, typing, spinner, paste and the monthly
toggle, and the arithmetic was correct at 2, 5, 10, 19, 20, 50 and 250. The
only state producing $100 was five seats, the field's hardcoded default on
load, and the static worked-examples list four lines below reads "5 staff,
annual billing: $100/month". Most likely the page at rest was read as a
computed answer. The calculator is gone either way. Worth recording because
the shape will recur: a tool that renders a default result on load looks
identical to one that has answered you. The new tool opens on question one
and shows no verdict until four answers are in, which removes that failure
mode by construction.

Fifteen rows are in `notes/fact-register.md` (34 to 48) because nearly every
line of this page is a third-party product claim. One caveat is recorded
there and matters: James verified the prices against `claude.com/pricing` and
`openai.com/business/pricing` before handing the content over, and those
hosts are blocked from the sandbox, so nothing on this page was re-verified
from a session. Under hard rule 10 the first fact-check run over rows 34 to
48 is a first check, not a re-check.

Front page: a fourth reference line under the courses, beside Chatbots,
Fine-Tune and Privacy. That is the minimum needed to stop the page being an
orphan and it uses the existing `.ref` pattern with nothing moved. James
asked on 14 Sep to be asked before the front page is touched, so if the
slight redesign relocates where references live, this line moves with them.
Card at `assets/thumbnails/team-seats.jpg`, source `team-seats/thumbnail.html`,
re-rendered when the tool changed because the old card advertised a
calculator. Not a deck, so `tools/check-decks.js` does not cover it, though it
was run and passed.

Three things landed on 15 Sep after James read it back, each as its own
commit at his instruction.

The verdict opens by restating the answers. One sentence under the headline:
"Based on a 6 to 10 person team with some turnover, mostly personal use, and
nobody currently paying, here's what fits." Every phrase comes from the answer
tapped rather than a paraphrase, so it introduces no wording the reader has
not already seen. Each option carries a `recap` field for this, kept separate
from `sum`, which the Band 3 and Band 4 summaries use, because the two slots
need different grammar: "a stable team" reads correctly in "Between a stable
team and regular client data" and wrongly in "a 2 to 5 person team with a
stable team". All 81 recaps are distinct and well formed.

A reset you can reach. One already sat on the verdict card, which was the part
worth checking, but on a 390 by 844 phone it was 833px down an 883px block. The
head bar carries the same control now: "Four questions" while asking, "Your
answer" with Start again on the right once the verdict shows. Both run one
`restart()`. The bug found doing it is the one to remember: the head element
was held in a variable named `head` and `verdict()` declares a local `var head`
for the headline string, so the local shadowed the element and the bar silently
never updated. It is `headEl` now, and the test caught it only because it
asserted the control exists and is visible rather than trusting the code to
have run.

And the page took the index-entry headings from `4acf4ac` the same day. It was
built on the old 12px mono `.label` and carried both faults that pass found
elsewhere: the masthead breadcrumb reused `.label`, and every section put an
h2 directly under it. So `--coral-ghost`, `.crumb` for the breadcrumb, three
numbered index entries, and `.label + h2` stepping down to a deck line, taken
from `brand/magnum-house-style/reference/tokens.css` rather than copied off a
peer. The six accordion headings are deliberately left unnumbered: they are
already the page's index, and two numbered indexes on one page is the busyness
the change exists to remove.

Fixed the same day James asked, and wider than he asked, which he was told.
He named Band 3, where the summary listed two factors the recap had just
listed. The same fault was in all four: Band 1 paraphrased three of the four
recap items, Band 2 repeated the factor its own headline names, and Band 4
named the categories. One fault, four instances, all of them introduced by the
recap rather than present before it, so fixing only the one he saw would have
left three for him to find.

Each summary now carries only what the recap and the headline do not. Band 1
says what a team plan would buy that he is not already getting. Band 2 says
nothing else in the answers is pushing the same way yet. Band 3 says more than
one thing is pushing at once, which is where the per-seat bill starts paying
for itself. Band 4 says nothing in the answers pulls the other way, which is
true for every combination in that band because no answer in this model ever
scores toward Personal, so a zero is neutral and never opposed.

Two things fell out of it. `topTwo()` existed only to feed the two summaries
that named factors, so it is gone. And the Band 4 branch added earlier the
same day, the one that picked between a fixed line and a named pair because
the fixed line could claim turnover agreed when it had scored zero, is gone
with it: no factor is named there any more, so the fault cannot recur. The
assertion that caught it stays and now holds trivially, which is the right
place for a guard.

The test carries the new rule too. It splits the recap sentence into its
phrases and fails if any of them appears in that verdict's summary, so the
next person to write a summary cannot reintroduce this without the suite
saying so.

Two small things to know. The page carries one piece of prose that is not
James's: the masthead standfirst, which is page furniture the guide file did
not have. And two gaps in the spec were filled rather than queried, both
noted for him: Band 2 gets no caveat line (the spec gives one only to Bands 1
and 3, and Band 2's headline already carries the watch-it message), and ties
between equal-scoring questions break in the order sensitivity, turnover,
size, spend.

The Manus Bridge walkthrough went live on 11 Sep as the second Tool
Manual, at `manus-bridge/`, with its card source beside it and the card at
`assets/thumbnails/manus-bridge.jpg`. It qualifies under the 4 Sep Tool
Manuals rule on both counts: Manus does a job Claude does not, and the
bridge has done paid work (one client at $250 plus GST as the test install,
a second quoted at $500 plus GST). The page is one file in the house style:
what it is, how it operates, what it can and cannot do, a five-stage
run-through with copy buttons, and three habits. The example products are
five office chairs from a furniture catalogue with supplier names and SKUs;
the client's name was removed under hard rule 5. The bridge itself is not in
this repo; it ships to clients as a zip from James's Mac. Not a deck, so
`tools/check-decks.js` does not cover it. One claim on the page is observed,
not search-verified, under hard rule 10: that servers added through
`claude_desktop_config.json` show their tools in Cowork sessions and not in
standard chats. That is what James's own Mac did on 3 and 11 Sep; nothing
third-party was found either way. If a client reports the tools in a
standard chat, the "What it cannot do" wording is the line to soften.

The front page was reworked on 11 Sep after James said it read as busy,
the writing was too light, and it needed a better index. The layout did not
change: masthead, Start Here, the courses, the shelf, This Week, Tool
Manuals and By Industry are where they were, and no URL moved. Seven
previews were built and thrown away; James chose the original layout plus
only what worked, and that is what shipped.

What changed. The six levers now sit beside the masthead headline as six
sliders, drawn in the deck's figure language, clear of the headline at
1440, 1280 and 1024 and hidden under 820px. The section nav lifted out of
the masthead into a bar that sticks to the top, marks the section you are
in, and collapses to a dropdown under 820px. Contrast was measured, not
eyeballed: `--mute` went from `#7A7A7A` (4.14:1) to `#63615C` (5.97:1), a
new `--coral-text` `#C63A2A` (5.02:1) carries every small mono line, the
section notes and card metadata moved onto body and char ink at weight
500, and the dark card's date went bright coral (2.8:1 to 5.32:1). Every
text and background pair on the page passes at both widths. One oversized
levers watermark sits in the lower right of the paper, hidden on the phone
and in print; it is a single mark, not a repeating texture, so the grid
retired on 9 Sep stays retired. The copy is neutral for a public reader:
courses rather than sessions, and no line assuming the reader sat in a
room. The `#sessions` anchor is unchanged.

`--rust` is `#EF4029` everywhere since 14 Sep. James said go, and the sweep
ran across 34 HTML files, ten house-style docs and skill files, and all
fourteen share cards, re-rendered with the fonts inlined.

The sweep carried a second change it could not do without. `#EF4029` is
3.73:1 on paper, so it fails AA for normal text. So did the coral it
replaced: `#DE4A3C` was 3.94:1, also under the 4.5 bar, which means the site
had this fault before the hotter value arrived and the front page was the
only page already fixed. Every page now carries both tokens, the front
page's pattern taken site-wide: `--rust` `#EF4029` for display type, fills,
borders and figures, and `--coral-text` `#C63A2A` (5.02:1) for anything
small enough to read. Which rules needed which was measured in the browser,
not guessed: an audit walks every element on fifteen pages, computes the
contrast against its real painted background, and reports failures by
selector. It went 80 failures to zero on coral, and zero is the number to
keep. Corrected 15 Sep: that audit was scoped to coral and did not catch
`--mute`, so "zero failures" was overstated on the day. See the grey sweep
below.

Two faults the 9 Sep restyle missed turned up in the same pass. `fine-tune`
still set Inter in three SVG text elements, and `templates/guide-template.html`
set Inter as its body font, so anything built from that template inherited a
retired typeface. Both now carry the house faces. This is the exact trap the
gotcha below warns about: a case-insensitive grep for "Inter" matches
"interaction", "interface" and "Interview", which is how they survived.

The paste-ready sources were carrying the same fault they exist to prevent.
`brand/magnum-house-style/reference/tokens.css`, the two `paste-block.md`
copies and `brand/house-style-block.md` all set `.label` at 12px in
`var(--rust)`, and all shipped `--mute:#7A7A7A` (4.14:1), the value the front
page moved off on 11 Sep. So anything built from the canonical block
inherited two contrast failures on day one. Fixed 14 Sep in all five files,
and the header comment now states the two-coral rule rather than leaving it
to be rediscovered. Corrected 15 Sep: the 14 Sep pass changed the CSS in
`tokens.css` but not the prose lines in the two `paste-block.md` copies,
`brand/house-style-block.md` or `magnum-client-rollout-doc/SKILL.md`, which
still named `#7A7A7A` in words. Those are fixed now. The lesson is that a
value lives in two forms in these files, a declaration and a sentence, and
a sed on one does not touch the other. This matters more than it did: James connected Claude
Design to GitHub the same day, so these files stop being a zip he remembers
to re-upload and become what design work actually reads.

`prompts/index.html` also used `var(--coral-text)` without ever defining it,
from 13 Sep when the brief block landed. Undefined, so those labels rendered
in plain ink rather than coral. Defining the token everywhere fixed it.

Two things the front page still carries that James flagged and chose to
keep: Start Here and the courses list the same three courses twice, which
is baked into the layout he prefers, and the shelf appears in both places.

On 7 Sep the homework slides came out of all three decks ("Before next
time" in one and three, "Suggested Tasks" in two). James does not want
anyone leaving with tasks. Make Claude Yours gained "The map" after "What
gets built": the four parts (Projects, Skills, Cowork, Code) and the two
underneath (Connectors, Schedules), lifted from his July talk deck "How to
Use Claude in 2026", which stays a talk deck and is not on the members
area. Two points were sharpened from the same deck: the four things a
project holds, and the two-minute test for a skill. Later on 7 Sep, for
a large online group session: The order became Today, an agenda in three
columns (step, what we do, why it matters) using a new `rows` layout in
the engine; the connector slides gained a third before-and-after line and
a six-tile slide of things to say once a connector is on; the voice slide
now teaches Wispr Flow, with no price on it; The instructions box was
retitled Introduce yourself to Claude. Deck is 36 slides.

Later again on 7 Sep: every deck has a Skip basics switch (SKIP BASICS in
the bottom bar, or the B key, or `?short` on the URL). A slide marked
`basic:true` drops out of Next and Back while it is on and greys in the
slide list, so one deck serves a room that already knows the basics. In
Foundations five slides carry it: What it actually is (rewritten to say
plainly what it is), Put it first, You are using the tip, It reads what
you hand it, Stop using it like Google. The button hides itself in a deck
with no basic slides. Foundations also gained the Today agenda in rows,
Wispr Flow on the Talk-It-Out slide, and two prompt edits (Talk-It-Out
and the overdue invoice) mirrored on the shelf. The five session-two
prompts were rewritten the same day against the review standards, deck
and shelf together.

Later on 7 Sep the Foundations lever section became one slide per lever
(rule in a line, then a vague ask beside a specific one and what each
gets back). The examples live in `EGS` above the slide array, two
sets: a trades business and an occupational therapy practice. The line
`const EG = EGS.ot` picks the set the slides show; James wanted it on
the main slides with no URL switch, changed by hand for each room. It
is on the OT set for a session on 8 Sep. Add a set for another field
there. No client is named in any set (hard rule 5). Both sets pass the
deck check.

Later still on 7 Sep, from James's own practice: Foundations gained two
prompt slides after Fresh chat, every job. Make it keep a status note (P5: a
standing rule given once at the start of a long job; STATUS.md in the
Cowork folder or a note at the end of every chat answer, and "pick up"
restarts from it) and The rescue (P6: paste the whole drifted chat under it,
get back where it went wrong and a fresh brief to restart from). Both
are on the shelf as `state-of-play` and `chat-rescue`, deck and shelf
identical. Foundations is 30 slides, six prompts. The shelf is 34 cards.

Gotcha, hit four times now: a push to `main` does not reliably queue a
"pages build and deployment" run. On 14 Sep it added a detail worth having.
The push of `75aa0c7` queued no run of its own, and the run that was sitting
in the queue at the time carried `head_sha` `ab77610`, the previous commit.
So the failure mode is not always "no run appears", it can also be "a run
appears for the commit before yours". Match on `head_sha`, never on the fact
that a run exists. On 12 Sep `f3c3463` sat on `main` with
no build after four minutes; on 13 Sep the merge commit `ff68f09` did the
same, and that one went up with `main` on its own, so the earlier theory
that it was caused by pushing `main` and the branch together is wrong.
What is known: some pushes do not trigger, and the next push to `main`
always does, carrying the earlier commits with it. So treat it this way.
Push `main` on its own, then poll the Actions API for a run whose
`head_sha` is that exact commit. If none appears within about two minutes,
push one more commit to `main` (there is usually something real to write,
otherwise the note itself) and watch again. Check the Pages deployments
endpoint, not the push output: `git push` reporting success says only that
the ref moved. Never tell James something is live on the strength of a
push.

Also live: Fine-Tune (`fine-tune/`, restyled to the house style on 9 Sep
at James's request, content unchanged, safe drawing kept), the Manus
website manual, AI for Buyer's Agents (`ba-growth/`, the only By Industry
entry; restyled 9 Sep, the client name removed from its subtitle per hard
rule 5, mangled arrows and dashes repaired).

Since 14 Sep a routine drafts the next issue every Wednesday 6am onto a
branch (see the Field Note routine above). The four live issues were all
written by hand.

Five Weekly Field Notes are in `newsletter/`: 01 Clarity, 02 Context,
03 Talking (added 4 Sep, written from a note James was sent, in his voice),
04 Cutting (drafted 4 Sep evening from the 20 per cent rule in James's own
library, carrying the shelf card "Cut it to the 20 per cent"), 05 Arguing
(the routine's first draft, 16 Sep, carrying the shelf card
"Redline your own plan"). All five are
on `main` and linked from the front page and the archive; the note that 04
was still on a branch was stale and was corrected on 14 Sep.
Each issue is one self-contained HTML file with its card source beside it.
The front page shows the newest four; the archive shows all.

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

**The Cowork setup guide.** Built and shipped 15 Sep, live at `cowork/`,
titled "Cowork: What It Is and How to Set It Up". The brief at
`notes/cowork-guide-brief.md` was followed as written and not re-scoped: five
sections in James's order, the paid-plan reader assumed in the first line with
one link out to `team-seats/`, desktop and web both covered with the trade-off
kept to three lines, and two prompts at the end.

It briefly shipped as a draft, with a coral band listing six interface lines
for James to confirm in the live product. That was wrong and it is the reason
hard rule 10 was softened the same day. Read the rule before doing this again,
because the mistake is easy to repeat and it looks like diligence.

What went wrong: the research came back warning that the support site serves
one stale article alongside the current ones, and that warning got applied to
things it did not touch. Four of the six flagged lines were already A-grade
from Anthropic's own current documentation, and all four were written without
naming a button, an icon or a menu, so they survive being slightly wrong
anyway. Flagging them bought nothing and sent James to go and check his own
training material, which is the opposite of what the fact check routine exists
for. He said so, and he was right.

One of the six was real, and it was one question rather than a task: whether
Cowork reaches into a folder and moves files or only reads them. The whole
clear-the-desktop prompt rests on it and the only evidence was James watching
it happen on 9 Sep. He confirmed it on 15 Sep, from memory, in one sentence.
It moved the files itself. That is the shape this should take next time: ask
him the question only he can answer, and ask it as a question.

The band and all six marks are gone. One caveat stays, in the page's own text
in the privacy page's style, because it is the one thing on the page that is
not Anthropic's own words: the access button's exact wording is
community-sourced, so the page names no button and tells the reader it may
read differently on their screen.

Twelve rows went into `notes/fact-register.md` (49 to 60). Row 55 is the only
one below A grade and the page says so itself.

The research turned up one documentation hazard worth keeping. Anthropic's
support site currently serves both a current and a stale version of article
13345190. The stale one describes Cowork as desktop-only with everything
running on your own machine, which was true earlier this year. Anything that
appears to contradict this page wholesale should start by establishing which
version it is reading.

Five prompts, all reviewed against `notes/prompt-review-standards.md`, all on
the shelf and byte-identical to the page, verified by extracting from both
files and comparing rather than by eye.

It shipped with two, the two the brief named, and James came back the same day
asking whether the prompts showed what Cowork does that a chat cannot. Half
right, and the half he was right about is the one worth recording.
`clear-the-desktop` does demonstrate it. `writing-style-skill` does not: a chat
with Gmail connected reads sent mail perfectly well, so it was sitting on the
page as a demonstration of nothing. It stays, because it is the thing that
makes everything written afterwards sound like him, but the page now says
plainly that it is the odd one out rather than implying otherwise. The brief
said "named so far by James", which should have been read as a starting point
rather than a list.

Three were added, each chosen because a chat cannot do it at all.
`sort-by-contents` opens every file and files on what the document says rather
than its name, which is the job nobody does by hand because it means opening
three hundred files. `folder-to-spreadsheet` reads a folder of receipts and
invoices, including scans, and writes a spreadsheet next to them with a total,
and it never calculates a figure it could not read. `scheduled-job` is the one
with no chat equivalent whatsoever: it makes the job prove itself once while
James watches, then puts it on a schedule that runs on Anthropic's servers with
his machine shut. Its last rule is the one worth keeping, that a run with
nothing to report writes so plainly, because otherwise a broken job and a quiet
week produce the same empty folder.

Two carry the safety rule the brief called non-negotiable, in their own text:
`clear-the-desktop` and `sort-by-contents` move and never delete, everything
goes to one dated folder, and each writes a record listing every move so any
single one can be undone by hand. `writing-style-skill` stops before saving so
James saves the skill himself, which is the draft-for-approval rule from the
standards.

**The page folds its prompts, from 16 Sep.** James said it read heavy for a
live training session and asked for the argument both ways. The measurement is
the useful part, because the obvious answer was wrong.

It was 2,330 prose words, 18.5 phone screens, twelve minutes, the longest page
on the members area. But the language was never the problem: the prose averages
16 words a sentence and 7 of 123 sentences run over 30. Sections 01 to 04 are
1,169 words and six screens together. Section 05 was eleven screens on its own,
sixty per cent of the page.

Condensing was tried and failed, which is worth recording because it will be
proposed again. Cutting the prompt commentary from 791 words to about 530 and
adding a short version block saved 262 words, took 18.5 screens to 17.3, and
pushed the first prompt further down. The estimate given to James beforehand
was 1,400 words and twelve screens, and it was wrong. The floor is the prompts
themselves: 1,189 words that exist to be copied, so no amount of prose trimming
takes the page under about nine minutes. It was a structural problem being
treated as a word-count problem.

What shipped folds each prompt behind a "Read it first" toggle, which is the
pattern the shelf already uses on the Research cards. 18.5 screens to 12.4, a
third off, with every word of every prompt still there. The Copy button sits
outside the fold, so a client takes the prompt without opening it. The short
version block stays at the top: the six setup steps and five prompt links on
one screen, which is the thing James points at in a session.

One bug made and caught, and it is the shelf's own lesson repeated. `innerText`
returns nothing from inside a closed `<details>`, because it reports what is
rendered, so Copy handed over one line instead of twenty-six. It reads
`textContent` now and the selection fallback opens the fold first, since a
range needs a rendered node. All five prompts are verified byte-identical to
the authored text with every fold shut. Never let the clipboard depend on what
happens to be on screen.

Three versions went up as `ab-A`, `ab-B` and `ab-C` under `cowork/` so James
could read them on his phone, with `index.html` untouched meanwhile. All three
are deleted. If a comparison is ever needed again, that is the way to do it:
the whole-page screenshots would not upload, because a full-page shot of the
long version is about 15,000 pixels tall and the uploader rejects it on height.

The shelf is 52 cards and gained its first new type since the 14 Sep pruning:
`does`, labelled "Does a job for you". None of the seven existing types
described a card that goes and works on your files, which is what every Cowork
card will be, so the new key is broad enough to hold the next ones rather than
invented for one card. That is one new chip in a filter row James deliberately
cut down, so it should be the last one for a while.

Front page: a fifth reference line under the courses, beside Chatbots,
Fine-Tune, Privacy and Team Seats, using the existing `.ref` pattern with
nothing moved. Card at `assets/thumbnails/cowork.jpg`, source
`cowork/thumbnail.html`. Not a deck, so `tools/check-decks.js` does not cover
it, though it was run and passed.

**A live prompt was wrong and is fixed.** P4 in Make Claude Yours, the Cowork
instructions prompt, told the model "Cowork does not read my chats, so these
instructions must stand on their own." Memory has been one store shared by
chat and Cowork since 25 August, which CLAUDE.md has recorded since 4 Sep
saying the decks were corrected to match. This line survived that correction.
The instruction was right and the reason was wrong, so only the reason
changed: it now reads "A new Cowork task does not read yesterday's chat",
which is true, survives the next memory change, and matches what the new guide
says. Fixed in the deck and on the shelf in the same commit, per the standing
rule. Same class of defect as the privacy slides found on 13 Sep: a product
fact quietly going stale inside live training material.

**Two contrast faults, one mine and one inherited.** The breadcrumb on
`cowork/`, `privacy/` and `manus-bridge/` set `--coral-text` on the navy
masthead at 2.80:1. That is exactly the fault the Manus manual had on 15 Sep,
where `#C63A2A` is tuned for paper and the navy value is `--coral-bright`;
copying the privacy shell copied the bug. All three now carry
`.masthead .crumb{color:var(--coral-bright)}`. And the `.say` block's label
set `--coral-text` on the coral tint at 4.17:1, live on both older pages and
not caught by the 14 Sep sweep, which measured coral on paper. The token set
has no small-coral-on-tint value, so the label takes ink; the coral signal is
the 5px border and the tint itself, so nothing is lost. Zero failures across
`cowork/`, `privacy/`, `manus-bridge/` and the front page at 1440, 1280, 820
and 390.

**The contrast audit is a tool now, at `tools/check-contrast.js`.** It had
been rebuilt from scratch in three separate sessions, which is how it kept
arriving with a fresh bug. Run it against a local server with one or more
paths; it exits 1 on any failure or any sideways scroll. The bug it arrived
with this time is recorded in its header and below.

**Tiles can carry an icon, from 16 Sep, and Foundations gained a card slide.**
James sent a Westpac email using tarot cards ("The Toothache", "The Vet
Visit", "The Fried Fridge") and asked for the idea on the members area, with
icons, colourful.

What makes that piece work is the naming, not the tarot. "The Toothache"
beats "unexpected expenses" because it is a specific thing that has happened
to you, and the tarot frame is the joke that licenses it. Three things
transfer: name the problem rather than categorise it, do three because three
reads as a pattern and four reads as a list, and close by turning the setup
into the product, which is what Westpac's "a Flexi Loan" line does.

What does not transfer is the illustration. Those are commissioned drawings
and this house style is flat geometric figures. Adopting an illustration set
would mean every future figure either matches it or looks like an orphan.
Said so, and built it without.

"Colourful" was the one part of the brief that fights hard rule house style,
which is one accent. It was resolved inside the existing palette rather than
by adding a hex: coral, slate and bright coral, all already tokens, all
already tile variants. Nothing new was introduced and the style checker
confirms it. If genuinely new colours are ever wanted, that is a brand
decision touching all 34 pages and James has to say it outright.

The engine change is small and shared, so it went into all four decks. A
tile takes an optional fourth element, an icon key, and an `ICONS` object
above `F` holds the SVGs. An icon paints in `currentColor` plus `--accent`,
so one icon works on any tile ground. A tile carrying an icon stands portrait
at 300px through `:has(.ticon)`, which leaves the plain tile grids untouched
and degrades to the old height if `:has` is ever unsupported. New variant
`.tile.b` is bright coral with ink text, the front page's 6.28:1 pattern.

The slide sits immediately before the levers section in AI Foundations, which
is the point: a room now feels the problem before it meets the framework.
Three cards, The blank page, The confident wrong answer, The fourth rewrite,
then two lines saying all three are the same fault and the levers are the fix.
Foundations is 31 slides. Deck check passes at all four sizes across all four
decks.

Two things James should know, both said to him. The names are a first pass and
his will be better, because he has heard how clients describe these. And three
is the discipline: a fourth card turns a device into a grid.

**Two known faults, deliberately not fixed, and they wait for a room.** Both
were put to James on 16 Sep with the recommendation to run the slide in a
session first, and he took it. Do not fix these before that happens.

The cards read landscape rather than portrait. The 300px floor does not get
there, because the deck scales everything into its 1340 by 770 box, so three
across full width comes out wider than tall at any real window. The fix is
constraining the grid width so they sit as three narrower columns with paper
either side, not raising the height again.

And card III's icon is mixed, ink pages with a cream arrow, where the other
two share a tone across both elements. It is the one card where the eye has
to work.

The reason to wait is that the names are what James will want to change after
hearing himself say them out loud, and shape and copy are cheaper to fix in
one pass than two. When he comes back from a session, do both together.

**Cowork is being folded into Claude, announced 16 Sep, patched here 20 Sep.**
Anthropic is merging Chat and Cowork: three modes become two, Chat and Code,
the toggle disappears from the message box per account as the rollout lands,
and Claude routes a request itself. Pro and Max first, then Team and Free,
over several weeks. Docs and Slides launched with it. Third-party reporting:
TechCrunch, Fortune, VentureBeat and 9to5Mac, all 16 Sep.

James asked whether this meant rewriting all the training. It did not, and the
measurement is why. "Cowork" appears 163 times across 16 files, and exactly
three lines asserted the toggle. Everything else describes what it does, which
is unchanged or better: folder access, cloud schedules, connectors, and all
five prompts work identically either way. The training survived a product
being discontinued because it teaches the method and the prompts rather than
the menus. That is the argument for never writing a menu path you do not have
to.

What shipped, and the shape of it is reusable when the next product moves.
The three lines were rewritten to survive both worlds rather than updated to
the new one: "if the message box still offers Chat and Cowork, pick Cowork. If
it does not, describe the job." True today, true after the rollout, and it
does not strand the clients who have not been migrated yet. Rewriting to the
new state would have been wrong for most readers on the day it shipped, which
is the trap to avoid on a staged rollout.

A dated notice sits under the short version on `cowork/`: what is changing,
that the plan decides when it reaches you, and that nothing else on the page
moves. New `.notice` component, paper card with a 6px coral top rule, in
palette. It is dated because the whole job of it is telling a reader how fresh
it is, same reasoning as the privacy page's footer.

Two more faults came with it, both the same class and both fixed. The Make
Claude Yours slide point still said "Cowork does not read your chats", which
is the defect fixed in P4's prompt body on 15 Sep; the slide point survived
that pass. And section 01 of the guide was headed "A second mode inside the
Claude you already pay for", directly contradicting the notice sitting above
it on the same screen. It says what it does instead of what it is now.

Fact register: row 54 marked superseded with the wording that replaced it,
rows 61 and 62 added for the merge and for Docs and Slides. 62 is recorded
without being taught anywhere, so the routine can flag when it is worth
teaching.

Not done and deliberately so. The page is still called "Cowork: What It Is
and How to Set It Up" at `/cowork/`. Hard rule 8 keeps the URL whatever
happens. The title will read as dated within a month or two and should be
retitled around the capability rather than the brand once the rollout
finishes, not before. And this is not a Field Note: the 4 Sep decision sends
news to This Week in AI and keeps a Field Note for one idea taught properly.

**The full deck audit, 20 Sep, and it found something bigger than the
toggle.** James asked for every deck to be checked. The toggle was three
lines. The instructions box is worse: Cowork's Global instructions have moved
to Settings, General, Instructions for Claude. There is one box now, not two.
Skills, plugins and connectors carry over, and Cowork tasks appear in Recents
with the chats. Source: aiagentslibrary and Claude Academy via search, 20 Sep,
third-party.

Fixed, all as both-worlds wording rather than updated to the new state, same
trick as the toggle lines: the menu path in Make Claude Yours P4 and its
after-step, the Record a skill path, "Open Cowork in the desktop app" in
`runs-without-you`, "Open Cowork. In the sidebar, Scheduled" in `bots`, and
the P4 prompt body itself, which moved off naming Cowork entirely and now says
"my standing instructions for Claude". Deck and shelf together, verified
byte-identical after. Two claims beside it that were flatly false also went:
the slide point "It has its own instructions box. It needs its own setup", and
Fig. 05's caption "Each needs its own instructions".

**Field Note delivery was reworked on 20 Sep, and half of it is not live yet.
Read this before Wednesday.** James asked for the issue to reach him as a
WhatsApp message and a link on a Wednesday that he just checks and forwards.

Most of it already existed. The email has carried a SEND THIS block since
16 Sep: five lines, "Hi everyone", under eighty words, ready to paste. The
defect was the link in it. The routine drafts to a branch and never publishes,
so on Wednesday morning that URL is not live, and the only other link in the
email is a raw GitHub URL, which serves the page as plain text and shows him
source code. So the fix was publishing, not the message.

`notes/field-note-prompt.md` now says: when `tools/check-field-note.js` prints
PASS the routine merges to main itself and the issue is live; when it fails
nothing reaches main, the branch is pushed alone and the email opens by saying
so. The email is reordered so SEND THIS is first and READ IT HERE carries the
real `webes77.github.io` URL. The subject says live or needs a fix. Three
knock-on contradictions were fixed in the same pass, all created by the change
itself: the constraint "Never push to main", Step 12's "nothing else is
merged", and the WhatsApp paragraph left stranded mid-list once SEND THIS moved
to the top.

**The file is ahead of the live trigger and that is the thing to know.** The
`update_trigger` call was refused by the permission classifier, correctly:
it authorises a routine to publish to a live site unattended, which is exactly
the kind of change that should carry an explicit human yes. The live prompt
(`trig_016pPJPsm8D3yUZs81wquraU`) is untouched at 20,560 characters and still
says "Never push to main". `notes/field-note-prompt.md` is 22,611 characters.
They differ in six places, all listed in the 20 Sep commit.

So Wednesday 23 Sep behaves the old way: the issue drafts onto
`field-note/2026-09-23`, James gets the email, and the link in it is not live.
Until the trigger is updated, do not tell him the new flow is running. Pushing
it needs James to allow the call, and the procedure in the gotchas applies
exactly: extract, diff, Read in full, emit, then assert `live == file`.

The Sunday Brief half did go through. `trig_014BpCSeSMonkfgePpN5tBfN` is live
and byte-identical to its file at 16,905 characters, carrying the hook rule
below.

**The commission headline was going to break its own rule.** This week's
commission, already written into the vault on 20 Sep, reads "It read every file
and found the problem you didn't know you had". That opens on a bare pronoun,
which is the exact fault James threw out on issue 05 four days earlier. The
Drive connector's `update_file` only changes metadata, so the vault file cannot
be rewritten from a session; the fix went into both routines instead, which
catches every future week rather than this one. The Sunday Brief now writes the
commission headline to the hook rule, and the Field Note prompt treats a
commissioned headline as a starting point and rewrites it when it fails, naming
this week's case so the 23 Sep run cannot miss it. That second half is in the
file and not yet live, per above.

**One thing worth doing and not done.** Both routines keep a full copy of a
long prompt inside the trigger, duplicated from a file in the repo the routine
already clones. That duplication is the direct cause of every drift and
retyping failure recorded here, three now. A trigger prompt that carried the
guardrails and then said "read notes/<routine>-prompt.md and follow it" would
end the whole class of fault. It was not done today because it is an
architectural change to a routine two days before it fires, on a session's own
initiative, and it deserves its own pass when nothing is due.

**The Sunday Brief routine was writing a verify marker onto client cards, and
that is fixed at the source, 20 Sep.** Its prompt told it, in two places, to
mark a card `[VERIFY BEFORE SHIPPING]` in its where line whenever the card
touched a Claude or Cowork interface. The where line is the first thing a
client reads, so the caveat landed on the card face and handed the checking to
the client. That is the 15 Sep inversion hard rule 10 was softened to stop,
one step further out: not James checking his own training, but a paying client
being asked to.

The 2026-09-20 run did exactly what it was told, so the prompt was the defect
and the run was not. Both places now say the opposite: a card never carries a
verification marker of any kind, the where line is written so it names no menu,
setting or button and therefore survives being slightly wrong, and the
unsettled claim goes in the email and into `notes/fact-register.md` where the
monthly check works it.

`notes/sunday-brief-prompt.md` and the live trigger
(`trig_014BpCSeSMonkfgePpN5tBfN`) were diffed before the change and differed on
nothing but those two lines, so there was no drift to reconcile. After the
push the live prompt reads back byte-identical to the file at 16,595
characters.

**A live routine was broken and repaired inside this session, and the gotcha
below is the real output of it.** The first `update_trigger` call sent a
retyped ~6,300 character reconstruction over the real 16,103 character prompt.
It opened with the wrong line and had lost Steps 1 to 8 entirely. It was caught
by asserting `live == file` on the read-back rather than trusting the echoed
response, and repaired by reading the file in full and emitting those bytes.
The broken version existed for about ninety seconds and never fired: the last
fire was 19 Sep, the next is 26 Sep. No run was affected. This is the second
time this exact mistake has been made here, which is why it is now written as
a procedure rather than a caution.

**The branch card is on the shelf, 53 cards.** `business-folder-audit`, "Get a
full audit from one folder", from `sunday-brief/2026-09-20`. It is the
strongest card the routine has produced: role, a why behind every rule, two
separate guards against invention, and a named output format. It passes the
duplicate test against `folder-to-spreadsheet` and `monthly-review` narrowly
enough to be worth recording, which the review in
`notes/sunday-brief-reviews.md` does. Its where line was the one carrying the
marker and now reads "A task with a folder of your business files granted",
matching the convention the other task cards took the same day. The card body
was extracted from the branch programmatically and not retyped, for the reason
directly above. The branch itself can be deleted on GitHub.

**The two things left for James were done on 20 Sep, on his word.** He said
he would rather get on the front foot than wait for the rollout. The argument
against was put to him once, with the cost named, and he was told his own
Sunday Brief that morning said the opposite twice ("Do nothing to the guide
yet. Watch your own Pro or Max account for the toggle to disappear, then
rewrite the setup steps from what you actually see"). He took the point on
menu paths and kept the instruction on everything else, which is the right
split and is what shipped.

The line held: no setup step was rewritten to an interface nobody has seen.
That is the defect class that produced the stale instructions box and the
15 Sep draft band, and a deck that contradicts the screen in a live room
costs more than a dated label. What got done instead is the work that was
already wrong today, independent of the rollout.

**Fine-Tune Part 03 is reframed.** Its whole premise was "Cowork is a
different room, it has its own separate instructions, it can't see any of your
chats, that's why it feels generic". Memory has been one shared store since
25 August, so that premise died three weeks before the merge was announced.
It was never a rollout question.

What replaced it keeps every step working: a task runs on your standing
instructions rather than on your last conversation, it reaches only the
folders and connectors you have granted, and nobody is in the room to correct
it halfway through, so a thin brief costs more here than in a chat. Writing a
proper standing brief, granting folder access, cleaning the files and auditing
the skills are all worth doing whether there is one box or two, which is why
this was a reframe rather than a deletion.

The section is titled Task work now, not Cowork, in the heading, the nav and
the index. The anchor `#part-03` is untouched, so hard rule 8 holds and no
link moves.

Cowork went from 88 mentions in that file to 18, and the rule for which
survived is worth keeping: the brand was replaced where it named a place or a
separate setup, which is the thing disappearing, and kept where it names the
capability acting on your files, which is what a client still sees on screen
today. The both-worlds Settings fallbacks stayed.

One line was a real trap and is fixed: "Skip this whole part if you don't use
Cowork". After the merge everyone has task work, so that sentence sends away
exactly the readers it now applies to. It reads "Skip it only if you never
hand the AI a job to go and do on its own."

**The wall figure is redrawn.** `F.cowork` drew two rooms with a wall between
them, captioned inside the SVG "THE WALL. COWORK CANNOT SEE YOUR CHATS." It
is one input splitting into two outcomes now, an answer and a job done, with
one instructions box running under both and the caption "ONE PLACE. IT PICKS
THE JOB." Palette is coral, slate, bright coral and tint, all existing tokens,
nothing new introduced. It was rendered and looked at, not just passed through
the deck check.

Its slide moved with it, from "Cowork is a different room" to "Two kinds of
job, one place", keeping the both-worlds last line.

Titles followed, so the vocabulary is one thing across the members area. The
deck section is "Task work and skills" in all five of its slides, P4's slide
is "Prompt 4. Your standing instructions", and the shelf card is "Your
standing instructions" with `#cowork-instructions` unchanged.

**The guide's notice gained two facts, nothing else.** Claude Design folds in
alongside Chat and Cowork, and Enterprise accounts get thirty days' notice.
Both came from James's own Sunday Brief, which corroborated the merge against
VentureBeat, TechRepublic and TheNextWeb because `claude.com` is blocked from
the sandbox. Register row 66. The rest of `cowork/` is untouched, which is
what the brief asked for.

Verified after: deck check PASS at four sizes across four decks, contrast
PASS, field note check PASS, the style checker showing the same 33 findings
before and after so none is new, 52 shelf ids unchanged, all 18 deck prompts
still byte-identical to their shelf twins, zero em dashes, every "solid" a CSS
border, and Part 03 rendered and read on a 390 phone with no sideways scroll.

**Still not done, and the trigger is unchanged.** The setup steps on `cowork/`
and the menu paths in the decks stay both-worlds until James sees the merged
interface on his own account. When the Cowork section disappears from his
settings, that is the signal to rewrite from what is on the screen, and the
page is retitled around the capability in the same pass. The URL never
changes.

**The label sweep is done, 20 Sep.** James asked whether the shelf prompts
needed changing. The first answer given, that they were clean, was wrong, and
the second one undercounted: it said seven stale `where` lines when there were
ten. Both corrections are worth keeping, because the pattern is a count made
by memory instead of by grep.

Twelve lines moved, in lockstep across the shelf and the decks.

Five `Reference · Cowork` cards dropped the brand from the `where` line and
kept the precondition: "A Cowork task, with your Desktop folder granted"
became "A task with your Desktop folder granted". The brand is not lost,
because those cards carry `sec:'Reference · Cowork'`, which renders as a
source label on the card face, so it was saying Cowork twice.

Four deck cards kept a pointer, because their label names a session rather
than Cowork and a reader needs to know where to go today: "Runs in a Cowork
session" became "Runs as a task, Cowork if your box still offers it". That is
the same both-worlds shape as the toggle lines, and all four decks carry the
identical string so the deck and the shelf still match byte for byte.

The bots card now matches its own deck slide, which was already clean.

Two prompt bodies moved, each in the deck and on the shelf together.
`state-of-play` said "In Cowork, keep it as a file called STATUS.md" and says
"For task work" now. P4's rule said "because Cowork acts on these
instructions without me in the room", which is the right reason attached to a
name that is going away; it says "because Claude acts on these instructions"
and the reason survives intact. Same fix as 15 Sep, where the instruction was
right and the reason was wrong.

Verified after: 52 ids unchanged, all 18 deck prompts byte-identical to their
shelf twins, no new style-checker finding, deck check PASS at all four sizes,
contrast PASS, and the five changed cards rendered and read on a 390 phone
rather than read in source.

One title left alone and it is James's call, grouped with the two below
because it is the same decision. The card and slide are still called "Cowork
instructions" and the deck section is still "Cowork and skills". Nothing
there is false for a reader who has Cowork, and retitling around the
capability is what the Cowork page's own not-done note says to do once the
rollout finishes, not before. The card now reads "Cowork instructions" over a
hook saying "Tell Claude once", which is the visible edge of that decision.

**Projects was redesigned too, 17 Sep, and it does not touch the training.**
James sent Anthropic's Projects docs asking whether this was another Cowork.
It is not, and the reason is the rollout gate.

The thing that changed is Claude Code Projects, the developer one. A project
there is now a single coordinator conversation running parallel cloud session
threads with shared memory. Public beta, Pro and Max only, not Team or
Enterprise, and the rollout starts with accounts that have used cloud
sessions and have **no existing projects in claude.ai chat or Cowork**. James
teaches building projects, so he is explicitly outside the beta and will not
see it.

What the training teaches is chat Projects: the instructions box, the
reference files, one project per job. Anthropic's own docs say the earlier
Projects experience keeps working as it does today until the redesigned one
reaches it. All 88 Project mentions in `fine-tune` and all 44 in
`make-claude-yours` were read against the new docs and not one asserts
something the redesign breaks. Nothing was changed on any page.

The thing to watch is the defect class the Cowork merge actually caused, not
the announcement. `fine-tune` names two interface labels, "Set project
instructions" and the instructions panel on the project page. Those are the
first things to die when the redesign reaches chat, exactly as Cowork's
Global instructions box did. So they went in the register with a trigger
rather than being rewritten now against a product state nobody has seen.

Three rows added, 63 to 65: chat Projects still working as taught, the Code
Projects redesign recorded without being taught, and the two interface labels
with the trigger to act, which is James opening a project and finding a
conversation rather than an instructions panel. Sources: Anthropic's own
Projects docs plus Unite.AI, XenoSpectrum and the Anthropic blog, 17 to
18 Sep, all read on 20 Sep.

One disorder in the register worth knowing before the first fact-check run:
rows 61 and 62 were appended above rows 55 to 60 rather than at the end, so
the table is not in numeric order. 63 to 65 went in the right place. Not
worth a commit of its own; tidy it when the routine next touches the file.

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

On 9 Sep, later, the whole members area moved to the white, navy and
coral palette in one pass (see House style above): every page, all four
decks, the shelf, the Field Notes, the brand page, the manual, the rollout
exemplar, the card sources and templates, and all eleven share cards
re-rendered. The swap was scripted (simple token and hex replacements
plus texture and shadow removal) and the deck check passed after it.
Later that night James asked for every old-style page to follow, so
Fine-Tune, its card and the Buyer's Agents guide moved too. Field Note
01 has no card source, so its card is still the old look; regenerate it from
`templates/field-note-thumbnail.html` when convenient. James chose this
look from mockups after supplying a white, red-orange reference; the
decision and the hex values are final.

On 15 Sep James put the front page to Claude Design over the GitHub
connection he had just made, and asked it for the three things most in a
first-time reader's way. All three checked out against the files and two
were built the same day. This is the first outside read of the members area
and the connection is worth keeping: it reads the repo rather than a
description of it, and it caught the one grey nobody had.

**Built.** The masthead carries a primary action, `Start course one`, a
bright coral block with ink text (6.28:1) pointing at `ai-foundations/`.
Before it, eleven cards carried identical weight and an identical coral
`Open the course`, so the page told a reader to start in order and gave
them nothing to press.

The phone no longer deletes the part that explains itself. `.step p` and
`.step .meta` were both hidden under 820px, so Start Here collapsed to four
bare condensed-uppercase titles with the levers figure gone too, which left
a first screen of a headline, one line, and four cryptic labels. The steps
are now a two-column grid on the phone, number beside title, description
under it, and the course label is the thing that goes instead. Most readers
are on a phone, so they were getting the least explanatory version of the
only element whose job is orientation.

And the sticky nav says what it does. Its summary read `Courses`, the
current section name, rewritten by the IntersectionObserver as you scrolled,
so the one navigation aid on the page looked like a heading rather than a
control. It reads `Jump to a section` now, fixed, and the current section is
marked inside the open list instead (`.subnav-list a.is-current`). The spy
maps both nav variants now rather than only `.subnav-row`.

**Built after James said go.** The third finding was that the same four
courses appeared three times under three different names: Start Here step 01
was `How to talk to it`, the card below it was `Stop prompting. Start
talking.`, its meta said `Course one · AI Foundations`, and a `.ref` line
pointed at `bots/` which was already step 00. Someone who knows the material
reads a name and a tagline. A first-timer reads four items and cannot tell
what they have already covered, and on a phone the duplicate set arrives
immediately after the first.

Every course now carries one name in both places: Chatbots, Agents and Bots,
AI Foundations, Make Claude Yours, Work That Runs Without You. The plain
English line that used to be the Start Here heading is not lost, it leads
the description underneath (`How to talk to it. What it is, the 6 Levers`),
which is where it does the work without competing with the name. The card
taglines went the same way into body copy. Step metas shortened to `Course
one`, `Course two`, `Course three`, since the name is now in the heading
above them. The `.ref` line to `bots/` came out of the courses section
because step 00 links it six inches higher up. This overturns the 11 Sep
decision to keep the duplication; James looked at it again on 15 Sep with
the outside read in front of him and changed his mind. No URL moved and
`#sessions` is unchanged.

Same day, the grey. `--mute` was `#7A7A7A` (4.14:1 on paper) on every page
except the front one, which moved to `#63615C` (5.97:1) on 11 Sep. 37 real
uses across 11 files, all small text between 10.5px and 17px. All swept to
`#63615C`. `fine-tune` carried its own `--muted:#7A7A7A` plus two literal
uses, and a `--faint:#9A9A9A` at 2.72:1 that set the footer signature at
11px; those are `#63615C` and `#706D69` (4.97:1). The `manus-bridge` figure
text was `#7A7A7A` in SVG fills and is `#63615C`. The brand page swatch and
its printed token block both published the failing value and now publish the
passing one.

Two `thumbnail.html` sources still carry `--taupe:#7A7A7A`. Left alone
deliberately: they are 1200x630 share cards, the text on them is large, and
changing the source without re-rendering the JPEG would put the two out of
step. Re-render them with the cards next time the card set moves.

The deck check passed after the token swap (110 slides, four decks, four
window sizes).

Also 15 Sep, the section heading. James has raised this several times and was
right every time: `.label` was a 12px mono eyebrow, so on a page whose whole
job is finding things the section names were the size of captions. He sent a
reference (Danny Dimas, `dannydigitalbrain.netlify.app`, blocked from the
sandbox but readable in his screenshot): ghosted outline numbers down the left
of a contents list, the live one filled and glowing.

It is an index entry now, not a caption. A ghosted coral number in Oswald at
56px sits beside the section name in Oswald at 40px ink, both under a 3px ink
rule. The number fills to full `--rust` while the cursor is anywhere in that
section. That is the one piece of movement the system allows, because it tells
a reader where they are rather than decorating.

The glow was not copied and should not be. Danny's page is near-black, so
light reads as luminous; ours is white paper and the house style bans glows
and shadows outright. Ghost to solid is the same idea translated to the ground
it sits on.

Rolled across all eight pages that carry a `.label`: the front page (six
sections numbered 01 to 06), `privacy/` and `manus-bridge/` (which already
carried `01 ·` inside the label text, so the number lifted into `data-n`),
`brand/` (numbered 01 to 07), `prompts/`, `newsletter/`, and both
`starter.html` templates. `data-n` is optional: leave it off and the number
hides itself, which is how the shelf's dynamic moment and area headings work.

Two faults found and fixed in the same pass. `privacy/` and `manus-bridge/`
open with a breadcrumb that reused `.label`, so it would have become a 40px
heading; it has its own `.crumb` class now, carrying the old small mono
treatment. And both pages put an `h2` directly under each label, which gave
two stacked uppercase headings, the exact busyness this change exists to
remove. `.label + h2` steps down to a deck line at around 20px, sentence
case, body colour. That is also the shape of Danny's list: number, title,
subtitle.

The Prompt Shelf section on the front page was rewritten for the same reason
James raised it. It said PROMPT SHELF, then a paragraph listing the five
filing moments, then a card headed `Every prompt. One shelf.`: the name three
times in three shapes with taxonomy in between. It is one name and one line
now, and the card said `Fourteen cards and counting` when there are 47.

The skill carries all of it, which is the part that stops this recurring:
`SKILL.md` (both copies) has the rewritten label component, the `.crumb` rule,
the `.label + h2` note and the `coral-ghost` row; `tokens.css`, both
`paste-block.md` copies and `house-style-block.md` carry the CSS and the
token; and `scripts/check_style.py` learned `F7BAB0`, since it correctly
flagged the new token as off-palette on first run.

Two checker findings are accepted functional exceptions, stated here rather
than fixed. The sticky nav's `box-shadow:0 1px 0 rgba(0,0,0,.18)` is a
hairline under a sticky bar, not a decorative shadow. The shelf's `More below`
gradient is load-bearing under hard rule 11, which requires a clipped prompt
to say so. Deck check, field note check and the style checker all pass.

Same treatment went onto the decks on 15 Sep, at James's request. The deck's
index is the slide list behind the SLIDES button, so that is where it landed,
in all four decks through the shared engine.

Section names in that list were 12px mono and slide numbers were buried inside
the button text as `12. Why it starts to drift`. The number is its own column
now, ghosted, and it fills bright coral with the title going white when the
cursor is on the row. Section names are Oswald at 24px over a hairline, and
the panel's own heading is Oswald at 40px under a bright coral rule. This is
the one place the reference's glow works literally, because the list sits on
navy, so light reads as light.

New token `--coral-ghost-navy` `#A1524E`, bright coral at 58 per cent over
navy, 2.65:1. It is the resting index number on a dark ground and nothing
else, the dark-ground twin of `--coral-ghost` on paper. Neither is text you
read; the title beside it carries that job.

Two bugs made and caught in the same pass, both worth recording. `#menu
button` also matches the CLOSE button, so `width:100%` stretched it across the
whole viewport and off screen. The rules are scoped to `#menulist button` now.
And the `basics` tag is a `::after` on the button, which the new grid placed
as a third grid item, so it dropped into the number column; it carries
`grid-column:2`. Both were found by asserting in the browser rather than
looking at the render: the close button's rect against the viewport, and the
resting and hover colours read off `getComputedStyle`.

One retired value went with it. The menu overlay was `rgba(74,66,60,.97)`, a
beige-system brown, and the footer nav buttons were bordered `#8C8275` from
the same dead palette. Overlay is navy now and the borders are `var(--olive)`.

Still off-palette in the deck engine and left alone deliberately, because
fixing them means auditing the engine's whole palette rather than the index:
`#46545F` (`--olive-2`), `#C8402F`, `#8E97A3`, `#3A4756`, a `box-shadow` and
the `More below` gradient, which hard rule 11 requires. `#6F675C`, another
beige-system grey, survives in two `runs-without-you` figures and as `--muted`
in `manus-website-manual.html`. Worth a pass, not urgent.

Deck check passes at all four window sizes across all four decks.

The Manus website manual was brought onto the house palette on 15 Sep, and it
was a bigger job than the one hex that started it. `#6F675C` was the visible
symptom; the page was still running the beige system underneath it: `--hair`
`#C9BFAC`, `--accent-dark` `#C9542F`, a dead `--grid` at
`rgba(120,90,60,.13)`, and a `#413931` hairline inside the ink prompt block.
It carried no `--rust` or `--coral-text`, so it had never had the two-coral
split at all.

A browser audit against real painted backgrounds found three failing rules
across 40 elements, all of them bright coral `#FF6F5E` used as small text on
paper at 11 and 12px (2.64:1) plus `#C9542F` at 15px (3.32:1). Bright coral is
a fill colour and the house style says so; it was carrying the running head
marker and every one of the 34 section labels. Those are `--coral-text` now,
the one genuine fill use (the nav's active dash) is `--coral-bright`, the copy
button's hover is `--rust`, and the `.goldline` on the navy block is
`--coral-bright`.

One fix needed a second pass, and it is the kind that will recur. `.phase
.pnum` went to `--coral-text` with the rest and still failed at 2.8:1, because
`.phase` is a navy block and `#C63A2A` is tuned for paper. On navy the house
value is `--coral-bright` at 5.32:1. The audit caught it because it measures
the ground each element actually sits on rather than assuming paper. Zero
failures now, and the style checker passes the file clean.

The 150px section numbers on that page are a false positive worth knowing
about: they are `--paper` fill with an ink stroke, so an audit reading only
`color` calls them 1:1. They are outlined numbers, which is the index
treatment this site arrived at independently on 15 Sep. The audit skips
anything with a non-zero `-webkit-text-stroke-width`.

**A hard rule 1 breach that every check had missed.** The page carried 29
em dashes and the brand page 3, all written as `&mdash;`. Every sweep this
repo has ever run looked for the character, so an entity was invisible to all
of them. All 32 are middots now, and `check_style.py` matches `&mdash;`,
`&#8212;` and `&#x2014;` as well as the character, verified against a fixture
carrying both forms. A full-site sweep with the fixed checker returns nothing.
If another rule is ever checked by searching for a literal character, ask what
its entity is first.

Last on 15 Sep, the Field Notes. James asked whether everything was sorted, and
the honest answer was no: all four issues were still in the retired style, which
the handover had claimed was swept on 9 Sep. It was not.

The visible fault was the 9 Sep offset shadow, still live on the rule and
exercise numbers as a five-layer stacked `text-shadow`. That is the exact
treatment retired with the beige system, and the Field Notes were the only
thing on the members area still doing it. Gone from all four issues and from
`templates/field-note-template.html`, which matters most because the Wednesday
routine builds from it.

With it went the beige-system values: `#F6ECDC` to `#F4F1EA`, `#C9BFAC` to
`#C8CDD3`, `#8F8779` to `#8E97A3`, and `'Helvetica Neue'` out of the body stack,
since a fourth typeface is a fourth typeface even as a fallback. That half was
invisible, because every one of those sat on a dark ground where the retired
cream and the house cream are two shades apart. The shadow was the part a
reader could see.

One thing proposed and not built, because the proposal was wrong. The rule
numbers were going to take the ghost-to-solid index treatment with everything
else. They should not. A Field Note is a print document with its own print
rules, those numbers are numbered content rather than navigation, and a ghosted
number prints at twenty per cent. They stay full `--rust`. The index treatment
is for section headings you move between, not for numbered items inside a
document.

`check_style.py` gained two refinements in the same pass, both because it was
flagging correct work. `border-radius:50%` is a circle, and circles are in the
figure language; only other radii are rounded corners now. And a `box-shadow`
with no blur and no spread is drawing a bar, not casting a shadow, which is how
the Field Note icons stack rules (`box-shadow:0 13px 0 var(--rust)`) and how
the front page draws its sticky hairline. Both changes were proven against a
fixture carrying the allowed and the banned form of each, so the test tightens
rather than just going quiet.

What is left, and it is deliberate. Twelve `*-thumbnail.html` share card
sources still carry `#F6ECDC` or `#7A7A7A`. Every one paints a caption on a
slate or navy plate where the retired value and the house value are
indistinguishable, and changing a source without re-rendering its JPEG puts the
two out of step. Re-render the card set and fix all twelve sources in the same
commit, next time the cards move for another reason. Also still open and the
same call: `#8E97A3` (4.92:1 on navy, used site-wide), `#46545F`, `#C8402F`
and `#3A4756` in the deck engine.

Done, 15 Sep: the Cowork setup guide is built and shipped, following
`notes/cowork-guide-brief.md` without re-scoping. See the entry under Where we
are, including the draft band that should not have been there and the softening
of hard rule 10 that followed it. Nothing on it is outstanding and nothing on
it is James's. He will feed back changes as he runs through it with clients,
which is the normal way anything here gets better. The research prompt in the brief is still the thing to
re-run when the page goes stale; it was run on 15 Sep and its findings are on
the page's sources block.

Where this session stopped (15 Sep, later): the Cowork setup guide is built
and on `main` at `cowork/`, with five prompts on the shelf (52 cards). Hard
rule 10 was softened the same day, at James's instruction, because this build
sent the fact checking back to him and that is the opposite of why he built
the routine. Slide 31 came off his list for the same reason. Along the way a
live deck prompt was found asserting a product fact that stopped being true on
25 August, and two contrast faults were found and fixed, one of them inherited
by copying the privacy shell and live on two older pages. The contrast audit is
now `tools/check-contrast.js` rather than something each session rebuilds.

Last thing that day, and the one worth carrying. James asked to see the page
rather than the checks, so it was rendered and looked at. That found four
faults nothing else had: the page still called itself two prompts in its meta
description, both social descriptions, the masthead standfirst and two body
cross-references; links in body copy rendered in the browser's default blue on
this page and on `privacy/`, because no page on the members area had ever set
a colour for a link inside a paragraph; and the `.path` chip, a block
component, was used mid-sentence where its vertical padding shoved the line
apart. All fixed. Every gate passed before and after, because none of the four
is a palette or contrast question. Render the page and read it before calling
anything done.

Deck check, field note check, style checker and contrast audit all pass.

A fifth routine was proposed on 15 Sep and decided against the same day, after
James asked for it to be stress tested. Do not propose it again before
1 November without new evidence.

The idea: a routine that researches what the model vendors have shipped, then
silently updates live training on the members area to match, and separately
writes a client-facing note about anything worth knowing.

The second half already exists twice. This Week in AI is a weekly four-minute
briefing on what moved, which is exactly "new model landed, here is what you
use it for", and the Field Note is one idea taught properly. The 4 Sep decision
against a third weekly publication stands. What the idea was really poking at
is the positioning question between those two, open since 4 Sep, and a third
product makes that worse rather than settling it.

The first half is 80 per cent built as the fact-check routine, and the missing
20 per cent is the part that should not be built. Silent replacement on `main`
means a wrong menu path reaches a client under James's name with no diff and
no signal. The branch costs ten minutes a month to read and prevents exactly
that. The premise is also weaker than it looks: a new model does not
invalidate the 6 Levers or how to talk to it. What goes stale is interfaces,
plans and prices, which is what the register already tracks.

The argument that settled it is hard rule 7. Four routines already touch this
work and two of them had never fired. A fifth before any of them has run a
month is how a one-person business acquires permanent operational complexity.
Revisit in November from what the four actually produced.

One piece of the idea was worth having and shipped the same day. The register
tracks claims that can go wrong and nothing that is newly right, so the
fact-check prompt gained a WORTH KNOWING section: at most three newly shipped
things per run, only if a non-technical owner could use one this month in a
sentence that needs no second explanation, explicitly excluding model names,
prices, APIs, context windows and benchmarks. It reports and does not act: no
page, no issue, no register row. It goes in the email and the log, not into
the Sunday Brief's vault, because a routine writing into the vault would be a
silent pipeline and this is meant to put one line in front of James once a
month. `notes/fact-check-prompt.md` holds it and the live trigger was updated
with `update_trigger` and read back byte-identical.

Two facts learned reading the triggers back, both closing open items.

The fact-check routine (`trig_01Ug88bf3JAkccEhX6f7Nd2x`) already carries
`Webes77/magnum-guides`, Gmail and Google Drive. Item 2 below is fully closed
for both routines now, not just the Field Note. Do not raise it in October.

And the Field Note routine fired for the first time on schedule, 15 Sep
20:01 UTC, which is Wednesday 16 Sep 6:01am Gold Coast, and finished
SUCCEEDED eleven minutes later. It pushed `field-note/2026-09-16` carrying
Field Note 05, Arguing, built from the shelf fallback because the 13 Sep vault
file predates the `field-note-commission` section. That is the fallback
behaving exactly as designed on the one week it was always going to be needed.
The branch carries the page, the card source, the rendered card, both index
links and its own log entry. James reads the diff; nothing is merged.

Issue 05 went to `main` on 16 Sep after three rounds of James reading it, and
each round changed the routine rather than only the issue.

Round one: the routine was writing a scaffold and leaving 23 blank brackets
for James. He overturned the 14 Sep decision that produced that. "It's never
the rule that I'm going to write the piece. The whole point is to automate
this." The routine now writes the whole issue in his voice through the
`james-writes` skill, and the one thing it must never invent is a fact about
James. If it needs a story, it builds it from something already recorded in
this repository. Never attribute an event to him that was made up.

Round two: too long and too busy. Measured rather than guessed: 1,618 words,
9.5 phone screens, eight minutes, on a cover claiming three. He asked for a
bottom line up front, so the issue now opens with a BLUF block carrying the
hook, the prompt itself, and nothing else. The rest of the issue is still
there, below it, for anyone who wants it. A reader on a phone on a Wednesday
morning gets the usable thing in the first screen and can stop.

Round three, and this is the rule worth keeping: an instruction is not a hook.
"Stop asking whether the plan works" is a task. "It will tell you the plan is
good. It has not checked." is a hook. James named the register, Stephen
Bartlett on Diary of a CEO, and the psychology is the point: a reader who sees
a wall of text does not start. The share card carries the same words, so what
gets shared and what gets opened are the same sentence. The BLUF now ends at
987px, 1.17 phone screens, 169 words.

All three rules are in `templates/field-note-template.html` as `EDIT · VOICE`
guidance and in `notes/field-note-prompt.md`, which was pushed to the live
trigger and read back byte-identical. The prompt file had drifted from the
trigger in seven places and was reconciled in the same pass; check them
against each other before editing either.

Round four, 16 Sep, and it is the one that actually fixed the length. The
BLUF had been put on top of the seven pages, so the issue got longer: 1,923
words, 4.7 phone screens even after it. James read it again and said so. The
seven pages are three now, and what came out is the argument for the shape.
Page 03 argued the same point page 02 had already made. Page 05 reprinted the
prompt that now sits up top. Page 06 was three habits. Page 07 was five
exercises, which is the homework James took out of all three courses on 7 Sep
because he does not want anyone leaving with tasks; it had been sitting in
every Field Note since. Nothing was cut that the issue needed.

Now: 851 words, three pages, 4.7 phone screens to 1.6, cover reading time
three minutes rather than eight. The BLUF also gained the copy button, because
the prompt now lives there and nowhere else, and a phone reader is not
selecting five lines by hand.

The template, `tools/check-field-note.js` and the live routine all moved with
it, which is the part that matters: `--shape` is three pages, five rules and
one prompt now, the check accepts a prompt in the BLUF as well as on a page,
and the routine prompt carries the reasoning so the next issue arrives short
rather than being cut by hand every week. If an issue feels thin at three
pages, the idea is thin, and the answer is a different shelf card, not padding.

Round five, 16 Sep, and it is the one that changes what a Field Note is for.
James read the short version and said the prompt itself was basic: "like
having a steak dinner and smothering it in so much other food you lose the
basics of it. The purpose is the prompt, really." He is right and the whole
programme had the priority upside down. Four rounds went into the frame around
a prompt nobody had looked at.

`redline-your-plan` was 268 characters and failed five items of
`notes/prompt-review-standards.md`: no role (item 7), no output format (item
5), no guard against invention (item 9), no severity ranking, and no reason
given for why the answer matters (item 2). It asked three things in prose and
got three paragraphs back, with the fatal objection buried wherever the model
felt like putting it.

It is 976 characters now and built on the six levers in order. Role, the most
experienced operator in the trade with nobody paying them to be encouraging.
Context, my own time and money, so a miss costs a week rather than a mark out
of ten. Constraints, work only from what is written and say what is missing
rather than filling it, because an invented risk sends me chasing a problem I
do not have. Tone, blunt and specific, name the thing not the category.
Format, three headings. Output, THE ONE THAT MATTERS with what it costs, WHAT
I HAVE ASSUMED with the question I should have asked, WHAT YOU WOULD WANT TO
KNOW. The last line is the one that earns it: if the plan holds up, say so in
one line, do not invent a fourth problem to look useful. That closes both
failure modes at once, the flattery and the manufactured objection.

Fixed in the deck and on the shelf together, per the standing rule, because it
is P3 in AI Foundations as well as a shelf card. The deck slide dropped from
four points to three, since the prompt is longer and hard rule 11 says the
points go, never the prompt. `tools/check-decks.js` passes at all four sizes.
The card's `levers` went from three to all six, which is now true of it.

Two knock-on fixes. `flow()` on the shelf only recognised an ALL-CAPS label
ending in a colon, so a bare caps heading on its own line was being joined into
the paragraph below it, which is the research-card fault from 13 Sep in a new
place. The pattern now also matches a full caps line. Proven by running both
the old and the new function over all 49 stored prompt bodies: exactly one
changed, the intended one. And the routine's word budget moved off the prompt
entirely. It was "under 170 words" for the whole block, which a real prompt
cannot fit inside. The frame around the prompt holds 90 words, one line each
for the three answers, and the prompt is as long as it needs to be. If the
block runs long, the frame is what gets cut.

A drift worth recording, because it was mine and it is easy to repeat. The
15 Sep push to the trigger was typed out by hand rather than pasted from
`notes/field-note-prompt.md`, so it overwrote the live prompt with a thinner
version missing Steps 5 to 11's detail. The file is the source; extract its
body after the `---` under `## The prompt` and push those exact bytes, never a
retyped version. Reconciled and pushed on 16 Sep, 16,252 characters, read back
identical.

Round six, 16 Sep, two faults James found reading the rebuilt version, both
about the reader rather than the content.

The hook opened on a bare pronoun. "It will tell you the plan is good. It has
not checked." Whoever wrote that knew what "it" was; a client meeting the line
cold in WhatsApp does not, so the sentence asks them to work before it has
earned anything. It reads "Your AI just told you the plan is good. It never
checked." now, and the rule is in the routine: the hook names its subject in
the first three words, never a bare pronoun. The card, the page and all three
meta descriptions carry the same words, and the descriptions were stale
anyway, still advertising five exercises that went on 16 Sep.

And the three pages are behind one dropdown. Cutting seven pages to three made
the issue shorter without making it lighter: the content was still sitting
there on load, and James said it still reads as a pile of work. The page now
loads at 2.2 phone screens with nothing on it but the hook, the three answers,
the prompt and one bar reading "Why it agrees with you, and the five rules for
arguing back". Opening it gives the same 5.5 screens as before, by choice
rather than by default.

The one thing to get right when this is copied: a closed `<details>` prints
nothing, and a Field Note is a print document. The page forces it open on
`beforeprint` and the print stylesheet strips the summary and the border, so
a printed issue is exactly what it always was. That handler and the `.deep`
CSS were lifted into `templates/field-note-template.html` verbatim rather than
retyped, so the two cannot drift.

**A Field Note is a standalone publication now, 16 Sep.** James said it
plainly: he sends single issues to people who are not members, including old
clients he is just passing something useful to. The page was a door into the
whole members area, twice over. The top bar read "Back to Magnum AI Members
Area" and linked to `index.html`, and the archive under it carried the same
link, so an old client sent one issue was two taps from the courses.

Both are gone. The top bar is a wordmark, "Magnum AI", not a link. The archive
lost its back link. The archive stays linked from the issue, because that is
the Field Note's own home and more of this is exactly what you want an old
client to find. A member reaches the members area from the front page, which
is where they came in, so nothing is lost that was being used.

Everything on the members area is public with no login, so this was never
about keeping anyone out. It is about what the page presents itself as. An
issue that opens with a door into a members area is showing a non-member a
room they are not in, which is the wrong first impression for something being
shared as a favour.

`tools/check-field-note.js` enforces the new rule rather than the old one: it
now fails an issue that links to `../index.html` and fails one that has lost
its archive link. The rule was inverted rather than deleted, so this cannot
quietly regress. Applied to all five issues and the template in one pass.

The archive's own copy was stale with it and moved in the same commit: "read
it in four minutes" became the thirty seconds the prompt actually takes, and
the About paragraph now says the prompt is at the top with the reasoning a
click below, which is what an issue has looked like since this morning.

One thing left as it is, and it will show in the style checker. The Field Note
share cards draw a stack of pages with a five-layer offset `box-shadow`, and
all four of 02 to 05 plus the template carry it. Changing 05 alone would put
it out of step with the three beside it on the front page. It goes when the
card set is re-rendered, with the twelve sources already listed above.

Where this session stopped (15 Sep): the outside read of the front page is
above, all three findings built. The section heading is an index entry across
all eight pages. The Field Note routine is set up. James confirmed the
repository and the connectors on 15 Sep and asked, plainly, to stop being
asked about it. Do not raise it again. The first fire is Wednesday 16 Sep and
the run itself is the only remaining signal; if it fails, read the failure,
do not ask him whether he did the setup. He has also looked at the members
area on his phone and it reads correctly.

The shelf keeps its name. James was asked directly on 15 Sep after saying
"Prompt Library" twice, and confirmed Prompt Shelf stays.

Also on 15 Sep, on a branch and not yet merged: the team seats guide at
`team-seats/`, rebuilt around a four-question personal-versus-team tool
after James replaced the flat cost calculator. It carries the swept
palette, so nothing on the members area is left on the old coral.

Where the session before that stopped (14 Sep): four things shipped. The midweek Field
Note routine is built and live, and needs its repository and connectors
attached before it fires on Wednesday 16 Sep (item 2 below), which is the one
thing waiting on James. The levers strip came off the Prompt Shelf cards. The
privacy reference page is live at `privacy/`. And the team seats guide is live
at `team-seats/`, carrying the first interactive tool on the members area that
is not a prompt: four questions returning a personal-versus-team lean, with
the guide beneath it as six closed accordions. Nothing from the 13 Sep
handover is outstanding.

James also said he wants a slight redesign of the members area. The shelf
change was the first piece of it. What else he means has not been scoped, so
ask before touching the front page.

Where the session before that stopped (9 Sep): the bots reference deck is
live and James has not yet read it through. That read is the next thing; the
vendor slides (ChatGPT, Grok Bot, OpenClaw) carry dated facts and want a
re-check before any room sees them after October. Before that (7 Sep, night): Foundations is ready for
the 8 Sep occupational therapy room at 30 slides with the OT example
set on the main slides. Swap `const EG = EGS.ot` back to `EGS.trades`
after that session, or add a set for the next room. The open work, in
order of value:

0. Two of the three parts are closed. James confirmed on 16 Sep that the four
   corrected skills are in Claude (magnum-house-style, gamma-architect,
   magnum-client-rollout-doc, design-director; sources stay in
   `brand/skill-updates/`). The brand page carries its PDF
   (`brand/Magnum-AI-House-Style.pdf`, regenerate when the style changes) and
   the Drive folder "Magnum AI House Style" holds the paste-ready block.

   Still open, and it is the one live defect on the members area: the AI
   Foundations lever slides are still on `const EG = EGS.ot`, the occupational
   therapy set built for the 8 Sep room. Every lever slide has taught through
   "You are the practice manager of an occupational therapy clinic" for the
   eight days since, to whoever opens a public course deck. `EGS.trades` is
   the general set and the right default for a page anyone can reach. It is a
   one-line swap either way and it was put to James on 16 Sep, because which
   set is right depends on his room schedule and a session cannot see that.

   Also still open and his alone: clearing the Mac desktop of old-style
   (beige and rust, black and gold) files. Needs Cowork with desktop access,
   the prompt was given in chat on 9 Sep, and nothing is deleted, only moved
   to a dated review folder.

1. Done, 16 Sep. James checked the team seats guide and the Manus Bridge
   walkthrough live and both read correctly. Nothing waits on him on either,
   and neither is to be raised again.

   Band logging was asked for on 15 Sep and decided against the same day.
   James wanted a count of which band each completed run lands on, as a
   feedback loop on whether the weights call it right over time. It is not
   built and should not be proposed again without a new reason. Two grounds,
   and the second is the one that matters.

   There is nowhere to put it. This is static GitHub Pages: no backend, no
   workflows, no analytics anywhere in the repo, and the only `fetch` on the
   whole site is the front page reading the newsletter's `issues.json`. A
   browser cannot write a counter file. `localStorage` would sit on each
   client's own device and James would never see it. Any real version means a
   third-party service, which is a recurring cost and a new moving part on a
   one-person business, and a tracker on the site that hosts the privacy page
   is its own positioning problem.

   And the metric cannot answer the question. A band distribution with no
   accuracy signal reads identically whether the weighting is wrong or most
   small businesses genuinely are borderline. It counts what people got, never
   whether it was right. The thing that would close that loop, a one-tap "does
   that sound right?" on the verdict, is ruled out by the same brief that asked
   for the logging. Until that changes, the honest feedback loop is James
   watching a client use it in a session, which he does anyway.

2. Done, and closed for both routines. The Field Note routine
   (`trig_016pPJPsm8D3yUZs81wquraU`) fired successfully on its first run,
   Wednesday 16 Sep 6am Gold Coast, and pushed `field-note/2026-09-16`.
   The fact-check routine (`trig_01Ug88bf3JAkccEhX6f7Nd2x`) was read back on
   15 Sep and already carries the repository, Gmail and Google Drive. Nothing
   here waits on James and nothing here is to be raised with him again.

   Standing note for every future session. `list_triggers` returns the
   schedule and the run history but never the attached repository or
   connectors, so a session cannot verify this and must not keep asking. If a
   run fails for want of a connector, the failure says so and that is the
   thing to act on.

3. Done, 14 Sep. The hotter coral is site-wide and the split is closed.
   Keep `tools/`-style discipline on it: the contrast audit that took this
   from 80 failures to zero is worth re-running after any palette change,
   and the rule it enforces is that `--rust` never paints text under 18px.
   Use `--coral-text` there.

4. Done, 15 Sep. James checked the front page on his phone and it reads
   correctly, including the sticky nav's dropdown, which only appears under
   820px.
5. Off James's list as of 15 Sep, under the softened hard rule 10. Make
   Claude Yours slide 31 (Record a skill) has never been eyeballed in the
   live product, three sources agree with it, and the 15 Sep Cowork research
   did not find it while finding a different route to creating a skill. That
   is now row 11's problem and the monthly fact check's, not a task for him.
   If he happens to be in the plus menu he can say what he sees, but nobody
   asks him again.
   The shelf recipe "Set Claude up in the right order" and the account and
   Cowork instruction prompts name the same Settings locations as the deck,
   so they move together if the deck changes.
6. Done, 13 Sep, and it closes what was the biggest item on this list.
   Five routines now, since the Field Note routine was added on 14 Sep and
   is the one exception: it is the only one without its repository, and
   item 2 above is that fix. The other four carry theirs, so they can push:
   draft has `magnum-guides` and `magnum-newsletter`, publish and publish
   retry have `magnum-newsletter`, Sunday Brief has `magnum-guides`.
   Gmail and Google Drive were already attached. The environment
   (`env_01K1ftemDMFMTg9W6sXokavM`, named Wheable, shared by all four)
   now runs Custom network access with `cdn.midjourney.com` on the
   allowed list plus the default package-manager list, so a video Magnum
   self-hosts instead of hotlinking.

   Two things learned doing it. A repository is a per-routine setting on
   the strip along the bottom of the Instructions box, labelled "Select a
   repository"; the cloud icon beside it is the environment and is the
   easy mis-tap. Changing the environment hits all four routines at once,
   changing a repository does not. Before this, no publish run had ever
   finished on its own: the 6 Sep run ended at 06:05 UTC and that
   edition's commit landed at 07:47 UTC from a chat session. The first
   fully unattended publish is Sunday 20 Sep 4pm. Watch that one.

   On 13 Sep the 2026-09-13 edition was published by hand from this
   session because the Magnum was a video and the routines only knew about
   stills. Three things changed in `magnum-newsletter`, all pushed:
   `tools/build_edition.py` renders a `<video>` when the Magnum section
   carries `video_url` and takes `--magnum-video` to self-host a local
   file (James's own patch); the publish gate now accepts either a
   `magnum.*` image or a `Magnum video:` URL line in `notes.txt`, fetches
   the video and self-hosts it when the network allows and hotlinks it
   when it does not; and the draft routine now writes three Magnum prompts
   instead of one so James picks, with a `Magnum prompt:` line in
   `notes.txt` carrying his choice onto the page. `ROUTINE.md` holds all
   three prompts verbatim and all three live triggers were verified
   byte-identical to it after the update. The 13 Sep Magnum is hotlinked
   to Midjourney's CDN, which is a host James does not control; the mp4 is
   in the Drive folder and can be self-hosted the day the network allows
   it.
7. James to check the front page live: This Week should show the Field
   Note card, the latest edition card, and under them the three earlier
   Field Notes beside the three previous editions. The
   `sunday-brief/2026-09-06` branch is done with and can be deleted on
   GitHub.
8. Done 6 Sep: the routine carries the mechanical duplicate test. A
   session can now update the routine prompt itself with `update_trigger`
   and read it back with `list_triggers`; the how is in
   `notes/sunday-brief-prompt.md`. Next run is Sunday 13 Sep, 6am.
9. The desktop folders, once James uploads them. The only material never
   swept. See "Still to sweep" at the end of `notes/training-audit.md`.
10. Housekeeping (not urgent): the 38 Gamma duplicates listed under Source
   2, by hand, since the Gamma connector cannot move or delete. The Drive
   tidy ran on 4 Sep: the retired January to March workspace is archived,
   duplicates sit in `_Review before deleting 2026-09` under Magnum
   Business for James to empty, and the log is `_Declutter log` in the same
   folder. Two loose PNGs and the API Key folder are still James's call.
11. Industry guide, one only, once James names the trade.

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
- The four decks share one engine (CSS and JS). A fix to the engine goes
  into all four files. The only differences between them are metadata,
  prompts, figures, and the slide array.
- `tools/check-decks.js` measures every slide of every deck at four window
  sizes: overflow, anything printing over the footer, elements overlapping,
  prompt text below its floor, prompt clipped without "More below". It exits
  1 on any failure. Run it before every deck merge (hard rule 11).
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
  will overflow again: run `tools/check-decks.js` before adding a slide,
  and keep prompt slides to one row of points. The zoom alone made prompt
  text 9 real pixels on a 1366 laptop window (found 6 Sep); the prompt
  pane and its points now hold a real-pixel floor through `--z`, set by
  `fit()`, so they scroll instead of shrinking.
- Prompts are authored with hard line breaks at about 72 characters. Widening
  a panel does nothing until they are reflowed.
- Case-insensitive grep for "Inter" matches "interaction". Use word
  boundaries when checking for retired fonts.
- An em dash hides as `&mdash;` (also `&#8212;`, `&#x2014;`) and a grep for
  the character finds none of them. Found 15 Sep with 32 live on two pages
  after months of clean sweeps. `check_style.py` now catches all four forms;
  use it rather than a grep.
- A contrast audit that trusts `getComputedStyle(el).display` reports ghost
  failures. A descendant of a `display:none` parent returns its own specified
  display, not `none`, so the front page's collapsed nav variant showed five
  failures at 1440 including one at 1.01:1, which looked like a serious
  regression and was not painted at all. Test the rendered box
  (`getBoundingClientRect`), not the computed display. Found 15 Sep.
  `tools/check-contrast.js` carries the guard.
- `update_trigger` takes the prompt as a tool argument, so there is no way to
  pipe a file into it: the bytes have to be emitted. That makes retyping the
  default failure and it has now happened twice, 15 Sep on the Field Note
  prompt and 20 Sep on the Sunday Brief, where a 16,103 character prompt was
  overwritten with a ~6,300 character reconstruction that opened with the
  wrong line. Both times the writer believed they were pasting. The procedure
  that works: extract the file's body to a scratch file, extract the live
  prompt out of `list_triggers` to another, diff the two so you know exactly
  what you are changing, then Read the scratch file in full immediately before
  the call and emit what you just read. Then re-list and assert
  `live == file` on length and equality, not by eye. A prompt that is
  shorter than the one it replaced is the tell.
- A Word lock file (`~$name.docx`) is not a document.
- `outlook-send` cannot send from a Claude Code session. The sandbox
  refuses the call to the Make webhook before it runs, so nothing reaches
  Make and there is no failed execution to hunt for. Make itself is fine.
  James holds the fix and applies it himself; a session cannot. Read
  `notes/outlook-send-sandbox-block.md` before touching this. A blocked
  send is reported as blocked, never rerouted through Gmail, which sends
  from the wrong address. Cowork is unaffected.

## Deeper reading

- `notes/training-audit.md`: the full material audit, the never-touch rules,
  the Drive inventory, the closure decision.
- `brand/index.html` and `brand/magnum-house-style/SKILL.md`: the look.
- `brand/rollout-exemplar.html`: the reference client document in the house
  style.
- `newsletter/README.md`: how a Field Note is added.
- `notes/cowork-guide-brief.md`: the scoped brief for the Cowork setup guide,
  with its research prompt and the dated facts this repo already holds about
  Cowork, all of which need re-verifying before they ship.
- `README.md` and `ROADMAP.md`: the human-facing version of this file and
  the long-term plan for logins.
