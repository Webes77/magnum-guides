# 08 · Same job, other tool

Date: 1 November 2026.
Method: WebSearch only, run on 1 Nov 2026, plus one Microsoft Learn docs search (first-party, grade A). Vendor help sites are blocked from direct fetch, so anything from them is quoted as it appeared in a search result. Claude rows rest on facts this repo already holds (CLAUDE.md, fact register) and were not re-researched unless something contradicted them; the Cowork merge was re-checked.

Grades: A = vendor's own page or announcement. B = established tech press. C = blogs, aggregators, how-to sites. D = forums.

Menu paths are loose on purpose. Only a few came from an A source, and every vendor here has renamed or moved menus in 2026.

---

## 1. Standing instructions about you and your business (every chat)

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Profile preferences / instructions for Claude | In Settings. Since the Cowork merge, Cowork's global instructions moved to Settings, General, one box for both. All plans. | Repo record, 20 Sep (third-party then). Not re-researched. |
| ChatGPT | Custom instructions | Settings, Personalization, Custom instructions. Stay in effect for new chats until changed. Free and paid. | openai.com/academy/personalization, Apr 2026 (A). Path from guideflow, temperstack (C). |
| Gemini | Instructions for Gemini | Settings, now under a hub called Personal Intelligence (older guides say "Saved info" or "Personal context"). Google says all users can add instructions. | ai-toolbox.co, memx.app (C). Rename to Personal Intelligence reported by C sources only. |
| Copilot (M365) | Custom instructions | Settings, Personalization, with an on/off toggle. Admins can switch Enhanced personalization off tenant-wide. Learn says memory and personalisation are available with and without a Copilot licence, still marked preview. | learn.microsoft.com/microsoft-365/copilot/copilot-personalization-memory (A); support.microsoft.com "Customize how Microsoft 365 Copilot responds to you" (A). |

## 2. A dedicated workspace for one job (own files and instructions)

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Projects | Sidebar, Projects. All plans (file limits differ). A separate Claude Code Projects redesign exists in beta and is not the one taught. | Repo record (fact register rows 63 to 65). |
| ChatGPT | Projects (also custom GPTs) | Sidebar. Projects free since Sep 2025: 5 files per project on Free, 25 Plus, 40 Pro, with per-project instructions. Building custom GPTs reportedly needs a paid plan; free users can use existing ones. | Engadget, tech.co (B) for Projects. GPT building rule from a C guide only. |
| Gemini | Notebooks in Gemini (synced with Gemini Notebook, the renamed NotebookLM). Gems are being converted to skills, see job 7. | In the Gemini app sidebar. Notebooks hold sources, per-notebook instructions and the chat. Launched 8 Apr 2026 on paid plans, reportedly extended to free users on the web. Reported source limits 50 free, 100 Plus, 300 Pro, 600 Ultra. NotebookLM renamed Gemini Notebook 16 Jul 2026, notebooklm.google redirects. | blog.google "Try notebooks in Gemini" and "NotebookLM is now Gemini Notebook" (A); support.google.com/gemini/answer/16972047 via search (A); free extension Digital Trends (B); source limits C only. |
| Copilot (M365) | Copilot Notebooks (also agents via Agent Builder) | In the Microsoft Copilot app and OneNote. Rolling to Copilot Chat (Basic, unlicensed) users from mid 2026 (MC1384425, timeline revised 2 Jul); notebooks in OneNote not for Basic. Agent Builder open to Basic and Premium users, though agents grounded on work data are metered. | Message Center MC1384425, MC1420901, MC1282682 via mc.merill.net (A, mirrored); Microsoft Tech Community blog (A). |

## 3. Memory of past chats

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Memory | Settings. One memory shared by chat and tasks since 25 Aug 2026, on by default. All paid plans at least. | Repo record (third-party, 4 Sep). Not re-researched. |
| ChatGPT | Memory: two switches, Reference saved memories and Reference chat history | Settings, Personalization, Memory, where saved memories can be reviewed. Chat history referencing reaches free users but only recent chats; paid users get full history. Turning off chat history deletes what was learned within 30 days. | openai.com/academy/personalization (A) for location; Tom's Guide, TechCrunch (B) for free tier and switches. |
| Gemini | Past chats ("Your past chats with Gemini"), plus a Memory summary | Settings, Personal Intelligence (formerly "Personal context"). Reported on by default for eligible accounts. Memory summary reported for US users on a paid AI plan. Gemini Apps Activity renamed Keep Activity. | Android Central, VentureBeat (B); ai-toolbox.co (C). Regional and free-tier availability conflicts between sources: NOT CONFIRMED for Australia. |
| Copilot (M365) | Copilot Memory (saved memories plus details from chat history) | Settings, Personalization; the Sources panel under a reply has a Personalization tab showing what was used. Available with and without a Copilot licence (preview). Stored in a hidden mailbox folder, discoverable by admins. | learn.microsoft.com copilot-personalization-memory (A); support.microsoft.com "Personalize what Microsoft 365 Copilot remembers" (A). |

## 4. Private chat not saved to history

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Incognito chat | Icon when starting a chat. Kept 30 days (longer under Enterprise custom retention) and appears in a Team or Enterprise org data export. | Repo record, verified 13 Sep against support.claude.com via search. Not re-researched. |
| ChatGPT | Temporary Chat | From the top of a new chat. Not in history, creates no memories. Reported since 27 Aug 2026: choose personalised (reads existing memory and instructions) or not, before the first message. Free and paid. | Tom's Guide (B) for basics; the 27 Aug personalised split is single-sourced C (tonyreviewsthings.com). NOT CONFIRMED by OpenAI. |
| Gemini | Temporary chat | Icon at the top of the chat. Not in Recents or Gemini Apps Activity, kept up to 72 hours. Workspace: admin controlled, and kept under Vault rules where the organisation uses Vault. | workspaceupdates.googleblog.com Jun 2026 and knowledge.workspace.google.com (A); PhoneArena (B). |
| Copilot (M365) | Temporary chat | From the mode dropdown in the chat window. Sets aside memory and custom instructions. Not private from the employer: admins can find temporary chats in Purview like regular chats. | learn.microsoft.com copilot-personalization-memory FAQ (A); office365itpros (C). |

## 5. Connecting email, calendar and files

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Connectors | Settings, Connectors. Google Workspace and Microsoft 365 on all plans. | Repo record. Not re-researched. |
| ChatGPT | Apps (formerly connectors), now in a Plugin Directory | Settings, reportedly under Plugins after the App Directory was retired in Jul 2026. Gmail, Google Calendar, Drive, Outlook on paid plans; free users reportedly cannot connect. Sending email after approval from about Jun 2026, web only, Gmail and Outlook. | Neowin, BetaNews (B) for the connectors existing; rename to Plugins, paid-only rule and send feature are C only (coupler.io, context-link.ai, webpronews). Plugin Directory rename NOT CONFIRMED by OpenAI. |
| Gemini | Connected Apps, inside Personal Intelligence | Settings, Personal Intelligence, Connected Apps, opt in per app (Gmail, Calendar, Drive, Photos, YouTube, Maps). Free for personal accounts in the US since Mar 2026, reported worldwide except EEA, Switzerland and UK from 14 Apr 2026. Not for Workspace accounts, where Gemini is built into Gmail, Docs and Drive. | 9to5Google Jan 2026 (B); free and global rollout from C sources (gend.co, gdgtme). Australian availability NOT CONFIRMED beyond the exclusion list. |
| Copilot (M365) | Built in (Work IQ, Microsoft Graph); agents and Copilot connectors for other data | No setup for Outlook, Teams, OneDrive, SharePoint with a Copilot licence. Without a licence, Copilot Chat uses uploaded files and the web, but from Jul 2026 Copilot Chat in Outlook reasons over the whole inbox and calendar. Third-party data through metered agents. | learn.microsoft.com Copilot Chat FAQ and release notes 1 Jul 2026 (A). |

## 6. Web search and deep research

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Web search; Research | Toggles in the message box. | Repo record. Not re-researched. |
| ChatGPT | Search; Deep research | From the tools in the message box. Deep research listed as "limited" on Free and Go, included on Plus, Business, Enterprise, more on Pro. | Wikipedia summary of OpenAI pricing page (C), TechRepublic (B). Exact free quota NOT CONFIRMED. |
| Gemini | Search grounding by default; Deep Research | Tools in the message box. Free allowance exists but sources give 5 or 10 a month, or say Google publishes no number. Paid plans much higher. | contentgrip, layer3labs, zenken (C). Free quota NOT CONFIRMED. |
| Copilot (M365) | Web grounding; Researcher agent | Web grounding on by default in Copilot Chat. Researcher (and Analyst) included with a Microsoft 365 Copilot licence, about 25 combined queries a month reported; Copilot Chat users get standard access to some agents with web grounding only. | learn.microsoft.com Copilot Chat FAQ (A) for web; Tech Community blog (A) and handsontek (C) for Researcher limits. 25-query figure C only. |

## 7. A reusable skill or saved procedure

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Skills | Settings, Capabilities (or created in a task). Paid plans at least. | Repo record. Not re-researched. |
| Gemini | Skills (replacing Gems) | Called from any chat by typing "/"; one skill can call another. Announced 30 Sep 2026. Workspace from 5 Oct, Gemini app from 13 Oct. Personal Gems convert to draft skills from 17 Nov 2026 (date moved from 20 Oct). Workspace Gems convert in Mar 2027, schools Jun 2027. Google Labs Gems do not migrate; Workspace Studio "Ask a Gem" steps stop working. Skills do not sync between the Gemini app and Workspace. PCWorld reports skills will not be paywalled. | Android Central, Android Authority, 9to5Google, Thurrott, PCWorld (B). Google's own announcement not surfaced in results: Workspace dates NOT CONFIRMED by an A source. |
| ChatGPT | Skills | Rolled out for workplace accounts (Business, Enterprise, Edu) with the ChatGPT Work launch, 9 Jul 2026; on by default for Enterprise from 23 Jul unless admins opt out. Reported not on Free, Plus or Pro as of July. | Beta reports BleepingComputer (B); July rollout and plan list single-sourced C (theaicareerlab.com). Consumer plan availability NOT CONFIRMED. |
| Copilot (M365) | Agents via Agent Builder; skills inside Agent Builder and Copilot Studio | Agent Builder open to Copilot Chat (Basic) and licensed users. Skills reported added to Agent Builder in 2026, with a Copilot Studio skill catalogue on the roadmap (RM571880). No first-party confirmation that skills reach the free Copilot Chat tier. | MC1282682 (A, mirrored); hubsite365 (C). Free-tier skills NOT CONFIRMED. |

## 8. A job that runs on a schedule

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Scheduled tasks | Run in the cloud with no device on. Paid plans. | Repo record (third-party, 4 Sep). Not re-researched. |
| ChatGPT | Scheduled tasks (Tasks), with a Scheduled page in the sidebar | New Scheduled page from 17 Jun 2026; tasks can also watch web pages or connected apps and only notify when something changes. Pulse retired by about 1 Jul 2026, replaced by a scheduled daily briefing. Plans: OpenAI lists Go, Plus, Pro, Business, Enterprise per one report; limits per plan conflict (Plus 5, Pro 15 in one guide; a free allowance of 3 in another). | Engadget, Gigazine (B). Plan list and limits NOT CONFIRMED. |
| Gemini | Scheduled actions | Gemini app. Paid: Google AI Pro or Ultra and qualifying Workspace business and education plans; up to 10 active. No source shows free access in 2026. Google AI Plus not mentioned. | blog.google scheduled actions (A, 2025); TechRadar, Android Authority (B). AI Plus eligibility NOT CONFIRMED. |
| Copilot (M365) | Scheduled prompts | From a prompt in Copilot Chat. Needs a Microsoft 365 Copilot licence (no Power Automate licence since 2025). Admin policy moved to Microsoft 365 Connected Experiences, Aug 2026. A May 2026 forum thread reports scheduled prompts failing. | MC1189911, MC1447683 via itelio and handsontek (A, mirrored); Tech Community forum (D). |

## 9. The AI doing a multi-step job on files or the web by itself

| Product | What it is called | Where / plan | Source and grade |
|---|---|---|---|
| Claude | Task work (Cowork being folded into the main Claude app) | Announced 16 Sep 2026: Chat and Cowork merge, two modes remain (Chat and Code), Claude routes a request itself; Pro and Max first, Team and Free later. Docs and Slides launched in beta alongside; Claude Design sits inside chat. | 9to5Mac 16 Sep 2026 (B), Unite.AI (B/C). |
| ChatGPT | Agent mode (ChatGPT agent); workspace agents for Business | From the tools in the message box. Plus, Pro, Business, Enterprise, Edu; not Free. Business credits per agent message reported. | BleepingComputer (B) for launch; plan list from C sources. GPT-6 powering agent mode NOT CONFIRMED (one low-grade source; most sources do not tie them). |
| Gemini | Agent (Gemini Agent, previously Agent Mode) | Gemini web app. Reported as US-only on Google AI Ultra; Pro access not confirmed. A workplace Gemini agent was in early access as of 9 Oct 2026. | Android Central (B), smartscope.blog (C). Australian availability and any Pro access NOT CONFIRMED. |
| Copilot (M365) | Copilot Cowork; Researcher and Analyst agents; Agent Mode in Word, Excel, PowerPoint | Copilot Cowork GA June 2026, needs a Microsoft 365 Copilot licence plus usage-based billing switched on by an admin. Researcher and Analyst with a Copilot licence. Agent Mode in Office apps: Copilot Chat users get standard access with web grounding, licensed users priority with work data. | handsontek "What's new for Copilot, June 2026" (C, quoting Microsoft); MC1393471 via pupuweb (C); Tech Community "Agent Mode general availability" (A). |

---

## Watch list

Likely to change before the page is a month old. Each wants a fact register row.

1. **Gemini Gems to skills.** Personal Gems convert from 17 Nov 2026; the date has already moved once. Any page saying "Gems" goes stale this month. Workspace dates (Mar 2027) are B-sourced only.
2. **Claude Cowork merge.** Staged rollout from 16 Sep; Team and Free later. Menu paths stay both-worlds until seen.
3. **ChatGPT menu names.** Apps reportedly moved into a Plugin Directory in July 2026 (C only). Avoid naming the menu.
4. **ChatGPT Skills on consumer plans.** Workplace-only as of July per one C source; a consumer rollout would change job 7.
5. **ChatGPT Temporary Chat personalised split** (27 Aug, single C source).
6. **Gemini settings hub name.** "Personal context" and "Saved info" reportedly became "Personal Intelligence" in 2026 (C sources). Gemini Apps Activity renamed Keep Activity.
7. **Gemini Agent** moving beyond US Ultra, and Personal Intelligence regional rules (Australia not named either way).
8. **Copilot Notebooks for unlicensed users.** MC1384425 timeline revised 2 Jul 2026; status for Basic users not confirmed.
9. **Copilot memory and temporary chat** still marked preview on Microsoft Learn; Copilot Chat app renamed "Microsoft Copilot Chat" at copilot.cloud.microsoft.
10. **Free quotas** for deep research in ChatGPT and Gemini: no reliable current number from any source.
11. **ChatGPT scheduled tasks plan limits** conflict between sources.
12. **Copilot in Word, Excel, PowerPoint for unlicensed users**: removal date and reversal conflict across sources (Apr to May 2026).
