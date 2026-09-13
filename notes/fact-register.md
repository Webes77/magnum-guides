# Fact register

Every claim in the members area that can go stale, where it lives, and when
it was last checked. The fact-check routine works this list. Nothing else.

"Check everything" produces noise. A claim earns a row here when both are
true: it asserts something about a third-party product, plan or policy, and
a client acting on it while it is wrong would be misled or embarrassed.
Teaching, opinion and method are not on this list and never go stale.

Grades follow `notes/prompt-review-standards.md`. A is the vendor's own
page, B an independent practitioner, C journalism, D marketing and forums.
Hard rule 10: a claim confirmed only at C or D says so on the page.

The date in Last checked is the last time a human or a routine put eyes on
a source, not the date the slide was written.

---

## Claude interface, Make Claude Yours

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 1 | Settings opens from your initials, bottom left | `make-claude-yours` Open Settings | 2026-09-04 | A |
| 2 | Help improve Claude sits under Privacy and can be switched off | same, Your chats stay yours | 2026-09-13 | A |
| 3 | Training on keeps consumer chats up to five years; off keeps 30 days | same | 2026-09-13 | A |
| 4 | Location metadata sits on the same page and can be switched off | same | 2026-09-04 | A |
| 5 | Memory lives under Capabilities; Generate memory from chat history and Search and reference chats are both on by default | same, Let it remember | 2026-09-04 | A |
| 6 | View and manage memory lets you read, edit and delete lines | same | 2026-09-04 | A |
| 7 | The incognito chat is the ghost icon, top right | same, The private chat | 2026-09-04 | A |
| 8 | An incognito chat is kept 30 days, longer under an Enterprise custom retention setting | same | 2026-09-13 | A |
| 9 | An incognito chat appears in the organisation data export a Team or Enterprise Primary Owner can run | same | 2026-09-13 | A |
| 10 | A deleted chat leaves history at once and clears storage within 30 days | same, Chat history and deleting | 2026-09-04 | A |
| 11 | Record a skill: desktop app, inside Cowork, plus icon, Pro, Max and Team | same, The other way to build one | 2026-09-04 | C |

Row 11 is the standing exception. It was checked against Claude's own
announcement post on X of 21 July 2026 and three third-party writeups, and
nobody has seen the menu in the live product from this repo. James is the
only person who can close it.

## Claude and Cowork product facts

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 12 | Cowork runs on the web and the phone app, Max plans first | decks, several | 2026-09-04 | C |
| 13 | Scheduled tasks run in the cloud with no device awake | `runs-without-you` | 2026-09-04 | C |
| 14 | Chat and Cowork share memory, on by default since 25 Aug | decks, several | 2026-09-04 | C |
| 15 | A server added through `claude_desktop_config.json` shows its tools in Cowork sessions and not in standard chats | `manus-bridge` What it cannot do | never | observed only |

Rows 12 to 14 are third-party only: TechCrunch, Engadget, The Register and
9to5Mac. `claude.com`, `anthropic.com` and `support.claude.com` are blocked
from direct fetch in the sandbox, but WebSearch returns their pages, so a
routine can often lift these to grade A. Row 15 is James's own Mac on 3 and
11 Sep and nothing third-party either way.

## Other vendors, the bots deck

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 16 | What ChatGPT agents and workspace agents are, and who they are for | `bots` In ChatGPT | 2026-09-09 | C |
| 17 | What Grok Bot is, and who it is for | `bots` Grok Bot | 2026-09-09 | C |
| 18 | What OpenClaw is, and who it is for | `bots` OpenClaw | 2026-09-09 | C |

CLAUDE.md already flags these three: dated facts, re-check before any room
sees them after October 2026.

## Cross-tool and third-party tools

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 19 | On ChatGPT it is Data Controls, on Claude it is Privacy | `fine-tune` | 2026-09-13 | A |
| 20 | Wispr Flow, what it does, no price quoted | `ai-foundations`, `make-claude-yours` | 2026-09-07 | C |
| 21 | Manus task modes lite, standard and max | `manus-bridge` How it operates | never | observed only |
| 22 | Manus hosting and billing, who owns what | `manus-website-manual` | never | observed only |

## Not on this list, deliberately

The 6 Levers, the method, the prompts themselves, the exercises, anything
about how to think. None of it depends on a vendor's menu. Magnum pricing
lives in the service menu skill and is James's alone, never a routine's.
