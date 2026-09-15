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

## Team seats reference page

Prices are the whole point of this page and both vendors state they can
change without notice, so this section is the one most likely to move. No
price is computed anywhere on the page: every figure is hand-written HTML.
A price change has to be made in the Cost accordion's table, in the worked
examples beneath it, in the short version at the top, and in the footer date,
or the page contradicts itself. The recommendation tool does no arithmetic
and carries no prices, so it never needs touching for a price change.

| # | Claim | Where | Last checked | Grade |
|---|---|---|---|---|
| 34 | Claude Team standard seat: USD $20 per seat per month billed annually, $25 monthly | `team-seats` the short version, and the Cost accordion | 2026-09-14 | A |
| 35 | ChatGPT Business standard seat: USD $20 per seat per month billed annually, $25 monthly | same | 2026-09-14 | A |
| 36 | Premium seat: USD $100 annual, $125 monthly, both vendors | `team-seats` Cost accordion | 2026-09-14 | A |
| 37 | Minimum 2 seats on both platforms | `team-seats` the short version, and the Cost accordion | 2026-09-14 | A |
| 38 | Premium gives roughly 5x standard usage headroom | `team-seats` Cost accordion | 2026-09-14 | A |
| 39 | Adding a seat mid-term charges immediately for the rest of the term; removing one frees the seat but does not drop the bill until renewal, both vendors | `team-seats` Cost accordion | 2026-09-14 | A |
| 40 | Claude Team setup path: Organization settings, Members, Add member; business email required to create the org; invite valid about 21 days | `team-seats` Setup accordion | 2026-09-14 | A |
| 41 | ChatGPT Business setup path: Workspace settings, Members, Invite member, with CSV upload; business email required; account created on join if none exists | `team-seats` Setup accordion | 2026-09-14 | A |
| 42 | A pending, unaccepted invite still consumes a paid seat on both platforms | `team-seats` Setup accordion | 2026-09-14 | A |
| 43 | Claude Team gives the Owner weekly and monthly active user counts and per-person usage; ChatGPT Business gives a Workspace analytics table | `team-seats` What you gain accordion | 2026-09-14 | A |
| 44 | Business tiers do not train on your data by default on both platforms; personal tiers train by default unless each person opts out | `team-seats` the short version and What you gain | 2026-09-14 | A |
| 45 | Moving a personal Claude account onto a team seat is one-way and cannot be reversed; merging closes the personal account on both platforms | `team-seats` What's the catch and Memory and leavers | 2026-09-14 | A |
| 46 | Claude Team drops artifact publishing, public share links and custom skills, which need manual export | `team-seats` What's the catch accordion | 2026-09-14 | A |
| 47 | On Claude the only route to a staff member's chat content is a deliberate export by the Primary Owner, not the admin screen | `team-seats` What's the catch accordion | 2026-09-14 | A |
| 48 | Revoking a seat ends access immediately; re-adding the same email restores the account on both platforms. ChatGPT reassigns projects and GPTs to a workspace owner but not personal conversations | `team-seats` Memory and leavers accordion | 2026-09-14 | A |

Rows 34 to 48 came in with the page on 14 September 2026 and were verified by
James against `claude.com/pricing` and `openai.com/business/pricing` before he
handed the content over, not re-verified from a session. Treat the first
routine run over this section as a first check, not a re-check.

## Cowork reference page

Eleven rows, added 15 September 2026 when `cowork/` was built. Nearly every
line of a setup guide is a third-party interface claim, so the page is the
densest thing on this register after team seats.

Six of these ship with a visible `[CHECK]` marker on the page and a draft
band at the top of it, because Anthropic's documentation either does not
carry the detail or carries it in two versions. The page is a draft until
James has confirmed them in the live product and the band comes off. Rows
54 to 59 are the six. Until then their grade is the grade of the source, not
a confirmation.

One documentation hazard is worth carrying forward for whoever re-checks
this. The support site currently serves both a current and a stale version
of article 13345190: the stale one describes Cowork as desktop-only with all
execution on your own machine, which was true earlier in 2026 and is not
true now. If a re-check appears to contradict this page wholesale, establish
which version of that article you are reading before changing anything.

| # | Claim | Where it lives | Last checked | Grade |
|---|---|---|---|---|
| 49 | Cowork is included on Pro, Max, Team and Enterprise, and is not on Free | `cowork` section 01 | 2026-09-15 | A |
| 50 | Memory is one store shared by chat and Cowork since 25 August 2026, readable and deletable under Settings, Memory, listed by topic | `cowork` section 02 | 2026-09-15 | A |
| 51 | A Cowork task does not read the content of your previous chat threads | `cowork` section 02, and prompt P4 in Make Claude Yours and on the shelf | 2026-09-15 | A |
| 52 | Cowork runs on desktop for Mac and Windows, on web and on the phone app; web and mobile have been in beta since 7 July 2026, Max plans first | `cowork` section 03 | 2026-09-15 | A |
| 53 | The work itself runs on Anthropic's servers rather than the user's machine, so a task survives closing the app | `cowork` section 03 | 2026-09-15 | A |
| 54 | The message box carries a control switching between Chat and Cowork | `cowork` setup step 01 | 2026-09-15 | A, pending live check |
| 55 | Cowork creates no folder and has no default location; the user grants an existing folder, and Desktop is grantable | `cowork` setup step 02 | 2026-09-15 | C, pending live check |
| 56 | A session started in the desktop app reaches the granted local folder although the work runs on Anthropic's servers | `cowork` setup step 02 | 2026-09-15 | C, pending live check |
| 57 | Cowork can move and rename files in a granted folder, not only read and write them | `cowork` section 02 table, and the clear-the-desktop prompt depends on it | 2026-09-15 | C, observed by James 9 Sep, pending live check |
| 58 | Skill creation is switched on at Settings, Capabilities, Skills, after which a skill can be written through conversation | `cowork` setup step 05 | 2026-09-15 | A, pending live check |
| 59 | A recurring task is set with /schedule inside a task or from Scheduled in the left sidebar, and runs with the computer off | `cowork` setup step 06 | 2026-09-15 | A, pending live check |
| 60 | Connectors are authorised once at Settings, Connectors, and are then available in both chat and Cowork rather than needing a separate Cowork attachment | `cowork` setup step 04 | 2026-09-15 | A |

## Not on this list, deliberately

The 6 Levers, the method, the prompts themselves, the exercises, anything
about how to think. None of it depends on a vendor's menu. Magnum pricing
lives in the service menu skill and is James's alone, never a routine's.
