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

## AI privacy reference page

Added 14 Sep with the page. This page is the reason the register exists: it
is a page of nothing but third-party policy, it carries a "Settings last
checked" line in its footer, and James refers clients to it. Every row here
is re-checked on the routine's quarterly pass, and the footer date is
updated in the same commit.

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 23 | Claude consumer, training on, keeps chats up to 5 years; off keeps 30 days | `privacy` section 02 | 2026-09-14 | A |
| 24 | Claude incognito chats are kept 30 days, or longer under an org retention policy | `privacy` sections 02 and 03 | 2026-09-14 | A |
| 25 | Claude incognito chats are in the org data export Owners can run, and the Enterprise Compliance API | `privacy` section 03 | 2026-09-14 | A |
| 26 | Claude Enterprise can set custom retention, floor 30 days; indefinite if none is set | `privacy` section 02 | 2026-09-14 | A |
| 27 | A deleted chat goes from the back end within 30 days, both tools | `privacy` section 02 | 2026-09-14 | A |
| 28 | Claude memory paths: Settings, Memory, Generate memory from chats, and Topics | `privacy` section 04 | 2026-09-14 | C, flagged on the page |
| 29 | ChatGPT training toggle is Settings, Data Controls, Improve the model for everyone | `privacy` section 04 | 2026-09-14 | A |
| 30 | ChatGPT Temporary Chat: not in history, no memories, not trained on, kept 30 days | `privacy` sections 02 and 04 | 2026-09-14 | A |
| 31 | ChatGPT memory paths: Settings, Personalization, Memory and Manage memory | `privacy` section 04 | 2026-09-14 | A |
| 32 | Business and enterprise data is not used for training by default, both vendors | `privacy` sections 02 and 03 | 2026-09-14 | A |
| 33 | ChatGPT Enterprise and Edu compliance tools cover conversations, files and memories | `privacy` section 03 | 2026-09-14 | A |

Row 28 is the standing exception on this page, the same shape as rows 11 and
15. The two Claude memory menu paths are third-party reporting, said so on
the page, and nobody has seen those menus in the live product from here.

## Not on this list, deliberately

The 6 Levers, the method, the prompts themselves, the exercises, anything
about how to think. None of it depends on a vendor's menu. Magnum pricing
lives in the service menu skill and is James's alone, never a routine's.
