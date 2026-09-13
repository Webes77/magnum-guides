# Fact check: the routine prompt

A Claude Code routine that works `notes/fact-register.md` and nothing else,
on the first of every month. It does not edit the members area. It opens a
branch with proposed corrections and emails James what it found, the same
shape as the Sunday Brief: the routine drafts, James merges.

Monthly, not quarterly, because AI product menus move inside a quarter.
Everything in the register is dated, and the cost of a stale slide is a
client following instructions that no longer match their screen.

The live routine is `trig_01Ug88bf3JAkccEhX6f7Nd2x`, "Members area fact
check", created 13 Sep 2026, cron `0 21 1 * *`, which is the 1st of each
month at 21:00 UTC, 7am Gold Coast on the 2nd. Fresh session each fire.
First run 1 Oct 2026. Push and push notifications are both on.

Change this file first, then push the prompt to the live routine with
`update_trigger`, then read it back with `list_triggers` and confirm the
changed line is there. If the two differ, the routine is what actually ran.

**It cannot work yet.** The trigger was created from a session holding no
connector grants, so it stored none, and its sources list is empty. Two
things only James can do, both in the Routines UI, the same pair the
Sunday Brief needed:

1. Add `webes77/magnum-guides` to the routine's sources, or it cannot read
   the register or open a branch.
2. Attach Gmail, or it cannot send the report. Gmail rather than Outlook:
   the Microsoft 365 connector returned 403 on Mail.Send in a routine
   session on 6 Sep and the Gmail fallback got through.

Until both are done the 1 Oct run will find nothing to work on. The prompt
already tells it to say so in the session output rather than fail quietly.

---

## The prompt

```
You are checking whether the Magnum AI members area still tells the truth
about other companies' products. A client follows these instructions on
their own screen, so a menu that has been renamed or a toggle that has
moved is not a small error.

Work only from notes/fact-register.md in webes77/magnum-guides. Every row
is one claim, with where it lives and when it was last checked. Do not
audit anything that is not on that list. The register deliberately leaves
out teaching, method and the 6 Levers, because none of that depends on a
vendor's menu.

For each row, in register order:

1. Search for the vendor's own page first. support.claude.com,
   privacy.claude.com, docs.anthropic.com, help.openai.com and the rest
   cannot be fetched directly from the sandbox, but WebSearch returns
   their content, so quote what the result shows and grade it A.
2. Search for the strongest evidence against the claim before the
   evidence for it. A claim that has quietly changed usually shows up
   first in someone complaining that the old instruction no longer works.
3. Grade every source A to D using notes/prompt-review-standards.md.
4. Decide one of four verdicts and nothing else:
   HOLDS. The claim matches the vendor's current page.
   MOVED. Still true, but the location, name or wording has changed.
   FALSE. No longer true.
   NOT VERIFIED. You could not confirm it either way. Say what you
   searched for.

Then write the corrections. For every MOVED or FALSE row, open the file
the register names, find the exact line, and write the smallest edit that
makes it true. Keep the voice of the surrounding text. Do not rewrite a
slide because you would have written it differently.

Rules that are not yours to break:
- No em dashes anywhere. A comma, a full stop, or a middot.
- Never the word "solid".
- The 6 Levers are Role, Context, Constraints, Tone, Format, Output. That
  order, those labels.
- Never touch a price. Magnum pricing is James's alone.
- Never edit a prompt on a slide or on the shelf to make it fit. If a
  prompt is wrong on the facts, flag it and leave it.
- If a deck changed, run node tools/check-decks.js against a local server
  and do not push unless it prints PASS.

Output, in this order:

1. A branch named fact-check/<YYYY-MM-DD> carrying the edits and an
   updated notes/fact-register.md with new Last checked dates and grades.
   Never push to main. Never merge.
2. notes/fact-check-log.md, appended: the date, every row with its
   verdict, the source you used, and what you changed. One entry per run.
3. An email to james@magnumai.com.au. Subject: "Fact check, <month>:
   <n> moved, <n> false, <n> not verified". Body, in this order: anything
   FALSE first with the correction you made, then MOVED, then NOT
   VERIFIED with what you searched for, then one line saying everything
   else holds. If every row holds, say so in one line and send nothing
   else. A quiet month should read as one line, not a report.

Two standing exceptions, both in the register. Row 11, Record a skill, has
never been seen in the live product from here; leave it as NOT VERIFIED
and name it every run until James closes it. Row 15, the Cowork tools
claim, is James's own observation and nothing third-party exists either
way; do not mark it FALSE on the strength of silence.

If you find a claim that is wrong and also appears somewhere the register
does not list, add the row rather than fixing it silently.
```
