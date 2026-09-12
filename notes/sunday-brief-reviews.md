# Sunday Brief: review log

One entry per `sunday-brief/<date>` branch the routine pushes. Each entry
is the review James reads before he merges, written against
`notes/prompt-review-standards.md` and the four-test bar in
`notes/sunday-brief-prompt.md`. The verdict on each card is one of keep,
keep with the rewrite below, or drop. Nothing here changes the shelf. James
merges the branch, or cherry-picks from it, or closes it.

## 2026-09-06, branch `sunday-brief/2026-09-06`

First live run. The branch arrived, so the routine's repository access is
working. Three cards, one commit, `prompts/index.html` only. Every card
carries `type`, `when`, `hook` and `added`, none carries `rank`. The file
parses, all 33 ids are unique, no em dash, no banned word. Rendered locally at
1280 and 390 wide: the three cards land in Setting up (two) and Before you
act (one), each with the New tag, and the phone view does not scroll
sideways.

### 1. Turn a repeatable task into a skill (`skill-in-one-line`). Drop.

Fails test 2 of the bar. It does the same job as the deck card Your first
skill (`first-skill`, session two): draft one skill for me and show it
before saving. The deck card is authored material and is never replaced, so
under the routine's own rule the new card is the one that goes. The hook
even carries the deck card's line ("never have to explain that job twice").

Judged on its own it is also the weaker prompt. Two lines, no interview, no
guard against invention (standard 9), no output format or stop boundary
(standard 10). A client pasting it gets a guessed skill. The deck card gets
them a five-question interview and a draft in a fixed shape.

### 2. Never let it send anything (`approve-before-sending`). Keep, with the rewrite below.

Passes the bar. It is a different job from Rules for unattended work
(`unattended-rules`, which is for scheduled jobs that cannot ask) and from
Cowork instructions (`cowork-instructions`, an interview that writes a
settings box). This is a standing rule for a live Cowork session with email
or a calendar connected, the moment a client first plugs one in. Nothing on
the shelf covers that moment, and it is the fear every client names first.

Two faults against the standards. The rule carries no reason (standard 2),
and the last two lines are all prohibition (standard 3). The rewrite keeps
every rule, adds the why, and states the fallback as the wanted result.

```
This is a standing rule for anything you do with my email, my calendar
or my files, because a message sent in my name cannot be unsent.

Draft it. Show it to me. Wait for my yes on that exact message before
you send, reply, book, move or delete anything.

If I am not there to answer, do the work and stop. A finished draft
waiting for me is the right result.
```

Title, hook, where, `type:'rules'`, `when:'setup'` and
`levers:['Constraints','Output']` all stand.

### 3. Get a blind second opinion (`blind-second-opinion`). Keep as written.

Passes the bar. Redline your own plan (`redline-your-plan`) asks the same
chat to argue against itself. This opens a second chat that has never seen
the first answer, which is a different check and catches a different
failure: an answer that is wrong and confidently so. Seven steps, one
action each, verb first, longest step thirteen words, condition before
action on the last two. Nothing to change.

### Outcome

James approved the verdict on 6 Sep. The two kept cards were written into
the shelf from the branch with the rewrite applied, and the skill card was
left out. The branch itself was not merged as a git merge, so it still sits
on the remote as the record of what the routine wrote; it can be deleted.
Both kept cards carry `added:'2026-09-06'` and show New until 20 Sep.

### For the routine

The duplicate check let a deck overlap through. The prompt already forbids
it in words; it now also gives the routine a mechanical test to apply
before it judges: same `type`, same `when`, same artefact produced means
duplicate. The line is in `notes/sunday-brief-prompt.md` for James to
paste into the routine.

---

## 12 Sep 2026, two cards supplied in chat

Not a branch. James pasted two finished cards and asked whether they made
sense before they went on the shelf. Reviewed the same way.

### Card one, `ai-search-check`, recipe

Kept as written. No counterpart on the shelf: the only other monthly
review card is `monthly-review`, which audits scheduled tasks. Six steps,
one action each, verb first, a real trigger, and step six closes the loop
rather than leaving it a one-off.

One edit. `where` said "once a quarter" while `when` filed it under Every
month. The card now says monthly and step six keeps the three-month
re-run, so the cadence in the two fields agrees.

### Card two, `four-block-image`, prompt

Failed the mechanical duplicate test as written: `image-prompt` already
sat at type `image`, moment `start`, with the same four levers and the
same thing in hand. That is the test firing correctly.

It was not a pure duplicate. The existing card asks Claude to write the
prompt in three parts, subject and action, camera, mood. The new one is a
skeleton the reader fills in and pastes straight into the tool, and it
carries two blocks the shelf had never had: LAYOUT, where the subject
sits and what space is reserved, and TEXT, words that must appear exactly.
Both are what goes wrong on client-facing tiles.

James chose the skeleton, so the two were split by subject rather than
merged. `four-block-image` is now the image card. `image-prompt` narrowed
to video, where its camera and motion parts are the strongest thing on the
shelf, and gained a run-length line. Its id did not change, because links
to `#image-prompt` may already exist; only its title, hook, `where` and
body moved. Its `where` now points a reader after a still image at the
four-block card.

### Outcome

Both cards are on the shelf, 39 in total, carrying `added:'2026-09-12'`.
They show New until 26 Sep.

### Corrected the same day

James read `four-block-image` on the live shelf and said it gave the
reader nothing. He was right, and the review missed it. Against the
standards it failed part one item five, examples are the strongest
steering tool: the card carried four labels and four descriptions of what
to write, and no example at all. It also failed the golden rule in item
one, because "describe the visual treatment" tells a reader with no
context nothing they did not already know.

Rewritten to show one filled-in brief (a walnut dining chair shot for a
square social tile, space kept clear for a headline) above the blank, and
the placeholders now name the kind of input wanted rather than repeating
the block name. The two closing rules gained their reasons, per item two.
Nothing else about the card moved.

The lesson for the routine: a card made only of placeholders passes every
mechanical check and still teaches nothing. Ask of every prompt card
whether a reader could write a good one straight after reading it.
