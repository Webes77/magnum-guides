# Weekly Field Note: the draft log

One entry per `field-note/<date>` branch the midweek routine pushes. Newest at
the top. The routine writes its own entry as Step 9 of
`notes/field-note-prompt.md`; James adds a line to the same entry when he
merges, or says why he did not.

Two jobs. It tells the next run which shelf cards have already been taught, so
the fallback never repeats one. And it is the record of whether a drafted
Field Note was worth having, which is the thing to watch over the first month.

## Format

A heading with the branch date, then one short paragraph: the issue number and
theme, whether the idea came from the Sunday Brief's commission or the shelf
fallback, the shelf card it teaches and its id, the result of the card check,
and anything the run could not finish.

## Cards already taught

One line per issue, so the fallback in Step 2 has a list to check without
reading four pages of HTML. Add to it when an issue merges.

| Issue | Theme | Card taught | Card id |
|---|---|---|---|
| 01 | Clarity | none, written before the shelf existed | |
| 02 | Context | none, written before the shelf existed | |
| 03 | Talking | Talk it out | `talk-it-out` |
| 04 | Cutting | Cut it to the 20 per cent | `cut-to-twenty` |
| 05 | Arguing | Redline your own plan | `redline-your-plan` |
| 06 | Auditing | Get a full audit from one folder | `business-folder-audit` |
| 07 | Proof | Make it read your account first (rebuilt as a prompt) | `read-your-account` |

## Entries

### 2026-09-30

Issue 07, Proof. The Sunday Brief vault file for 2026-09-27 carries a
`## field-note-commission` section naming the card directly: headline "Your AI
just gave you the textbook answer, not your answer," shelf card
`read-your-account`. The headline already named its subject in the first
three words, so it stood as written, no rewrite needed.

The card itself does not pass as delivered, and not on a levers item, on
something more basic: it is `kind:'recipe'`, five short steps for the human to
carry out across a conversation (turn on the connector, open the account, say
this, then that), not a single block of prompt text. Every issue built so far
teaches a `kind:'prompt'` card because the whole page is built around one
prompt with a copy button. Held against `notes/prompt-review-standards.md`
anyway: no role sentence (item 7), the guard against invention is present but
thin (step 3 only), no stated output format or stop boundary (item 10). Since
the Sunday Brief commissioned this card by name, built the issue on it anyway
and rewrote it in full as a single prompt on the six levers in order, which is
what actually sits in the BLUF box and on page 5's twin. The rewrite is
reported to James under MAKE A DECISION, not applied to the shelf; the routine
never edits an existing shelf card.

One more fact worth recording: the card sits on branch
`sunday-brief/2026-09-27`, still unmerged as of this run. Read from there with
`git show origin/sunday-brief/2026-09-27:prompts/index.html` rather than from
`main`, since it is not on `main` yet. Nothing was written back to that branch
or to `prompts/index.html` on this branch.

The lead is built from something already recorded in CLAUDE.md, not invented:
the 23 Sep correction where James found, from the live product, that Claude
signs in with an emailed code rather than a password, after three separate
documents had said otherwise. The Joelinda Team-versus-Personal-plan story
(also recorded, also on theme) was considered and rejected for the lead: it
would have put her name and James's own account billing shape on a public
page, which is exactly the material CLAUDE.md keeps out of this repo and in
Drive because the repo is public. The sign-in story carries the same lesson,
generically, with nobody named.

Word count of the BLUF frame (the eyebrow, hook, and three dt/dd pairs,
excluding the prompt): 90, at the budget. Phone screens: 2.2 closed (hook and
prompt only), roughly 5.5 open, in line with issues 05 and 06.

`node tools/check-field-note.js --shape` prints PASS. Checked in headless
Chromium at 1440, 1280, 820 and 390: no sideways scroll at any width, no
console errors beyond blocked Google Fonts and a missing favicon.
`tools/check-contrast.js` returns the same three pre-existing failures already
present on issue 06's unchanged CSS (the `.copy` button, `.foot .mid`, and
`.kicker` at 390 wide), verified by running the same check against issue 06
for comparison; nothing new. The style checker's two findings
(`--taupe:#8E97A3`, the thumbnail's stacked-page `box-shadow`) are the same
pair issue 06 carries, inherited from the shared template, not introduced
here. Card image rendered clean at 1200x630 on the first attempt, fonts
inlined per the sandbox gotcha.

Issues 06 and 07 were both missing from the "Cards already taught" table
above; 06 had never been added and a duplicate 06 row existed further down
from an earlier edit. Both fixed in the same pass as adding 07.

### 2026-09-23

Issue 06, Auditing. The Sunday Brief vault file for 2026-09-20 carries a
`## field-note-commission` section naming the card directly: headline "It
read every file and found the problem you didn't know you had," shelf card
`business-folder-audit`. The headline was rewritten, it opened on a bare
pronoun, the exact fault CLAUDE.md flagged for this run: "Your AI answers the
question you ask. It never says what you didn't." carries the same idea and
names its subject first. The original phrase survives as the BLUF payoff
line instead. Card check against `notes/prompt-review-standards.md`: passes.
Role, context and constraints are all present, two separate guards against
invention (cite the document behind every claim; separate finding from
inference), a numbered output format, and a stop boundary naming what to act
on first. No rewrite needed. `node tools/check-field-note.js --shape` prints
PASS. Card image rendered clean at 1200x630 on the first attempt. Checked in
the browser at 1440, 820 and 390 wide: no console errors beyond blocked
Google Fonts and a missing favicon, no sideways scroll. `tools/check-contrast.js`
returns the same two pre-existing failures (`.copy` button, `.foot .mid`)
already present on issue 05's unchanged CSS, nothing new. BLUF frame word
count (excluding the prompt): 88, under the 90 budget. The lead uses the 20
Sep full deck audit from CLAUDE.md, where a check for one small fault (the
Cowork toggle, three lines) turned up a bigger one nobody asked about (the
instructions box move), as the first-person story grounding the issue.

### 2026-09-16

Issue 05, Arguing. The Sunday Brief vault file for 2026-09-13 has no
`## field-note-commission` section, since that run predates the section being
added to the vault file on 14 Sep, so this issue came from the shelf fallback.
Teaches `redline-your-plan`, "Redline your own plan", rank 1, moment
before-acting, never before taught by a Field Note. Card check: the card lists
Role among its levers but the prompt text carries no explicit role sentence;
proposed fix given in the routine's email for James to apply in the deck and
on the shelf together. `node tools/check-field-note.js --shape --draft` prints
PASS. Card image rendered clean at 1200x630. Checked in the browser at 1440,
820 and 390 wide: no console errors beyond blocked Google Fonts, no sideways
scroll.
