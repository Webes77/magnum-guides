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

## Entries

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
