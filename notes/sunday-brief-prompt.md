# Sunday Brief: the routine prompt

The Sunday Brief is a Claude Code routine. It fires every Sunday at 6am Gold
Coast time (Saturday 20:00 UTC) in a fresh cloud session, reads the week's AI
newsletters in the magnumai.newsletters@gmail.com inbox, and writes James one
briefing. It ran as a hand-started Cowork task until 4 Sep 2026. It moved so
it runs with no Mac awake, can send from James's own Outlook, and can commit
shelf cards to this repo instead of emailing them for pasting.

This file holds the prompt in full so it is versioned and the next session
can see what the brief is supposed to produce. The live copy is the routine's
prompt (trigger name Sunday Brief); if they differ, the routine is what actually ran, and this file is
what it should say.

The change from the first version: the six mandatory sections became five,
WHAT CHANGED and the model scoreboard went, a fifth relevance test was added,
and the outputs grew from two to four.

## How the brief feeds the members area

1. The brief's BUILD THIS section carries anything James could implement
   inside a fortnight.
2. Any BUILD THIS item that a client could use without James in the room is
   also written as a shelf card, generic, and committed to the top of the
   `S` array in `prompts/index.html` on a branch named `sunday-brief/<date>`.
   The routine never pushes to `main`.
3. James reads the diff and merges. Nothing reaches the members area without
   that step.
4. If the week's LEARN THIS PROPERLY technique would carry a Field Note, the
   brief says so in one line. It does not write the Field Note. That stays in
   James's voice.

The vault is the `Vault` folder in James's Drive, synced to his Mac. It
holds the four standing files (tools-library, prompts-library, content-ideas,
sales-lessons). The Drive connector cannot edit an existing file's content,
so the routine writes one new dated file a week, `sunday-brief-YYYY-MM-DD.md`,
into that folder with a section per vault file. The four standing files are
never touched by the routine. The shelf is the vault's curated, generic,
approved subset.

## The prompt

This is the routine's prompt, verbatim.

---

