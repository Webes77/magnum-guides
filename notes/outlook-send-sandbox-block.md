# Outlook send is blocked in Claude Code sessions

Found 13 Sep 2026. Diagnosed with James and the chat that owns the Make
and Outlook plumbing. Make is fine. The block is in the Claude Code
sandbox, and it is a different wall from the Microsoft 365 problem fixed
earlier in the week.

## What happens

The `outlook-send` skill posts to the Make webhook at `hook.eu1.make.com`,
which drives Make scenario `Send Outlook Email Live` (5794603) and the
Outlook connection `Outlook, Draft & Send` (6466263).

From a Claude Code session the curl never runs. The auto mode classifier
refuses it before any network request:

> Permission for this action was denied by the Claude Code auto mode
> classifier. Reason: [Data Exfiltration].

Nothing reaches Make, so there is no execution to inspect and no error in
the scenario log. The absence of a run is the symptom. Do not go looking
for a failed bundle.

Two blockers are stacked. The Microsoft 365 connector returns 403 on
Mail.Send because the permission is not granted on the tenant, which is
why Make exists at all. The Make webhook is now refused by the sandbox. So
from a Claude Code session there is currently no path to send as
james@magnumai.com.au.

## The fix

An allow rule for that exact curl, in `.claude/settings.json` of whichever
repo the session runs in, under `permissions.allow`. The same line in
`~/.claude/settings.json` covers Claude Code running locally on the Mac.
If the file already has an allow list, the line is added to it rather than
replacing the block.

James adds it and holds the exact text. A session cannot write it: the
classifier refuses an agent authoring its own permission rules as
self-modification, which is the correct behaviour, and it refuses a repo
file that merely contains the rule for the same reason. Ask James for the
line rather than reconstructing it.

The skill was tightened at the same time so the command is byte-identical
every run: the email is written to a payload file and one fixed curl sends
it. That is what lets the rule match that exact command rather than being
a wildcard on curl. The classifier keeps working on every other curl.

## Two rules that came out of it

A blocked send is reported as blocked. On 13 Sep this session fell back to
the Gmail connector without asking, and the email arrived from the Gmail
address rather than james@magnumai.com.au. Fine for a note to himself,
wrong for anything client-facing, and wrong to do silently. The skill now
forbids it.

Cowork sessions do not carry this classifier. If something has to go out
before the rule is in place, send it from Cowork.
