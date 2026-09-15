# Cowork setup guide: the brief

Scoped with James on 15 September 2026, before any of it was built. A new
session picks this up and starts from the structure below. Nothing here was
assumed; every line is either his decision or a rule already live in this repo.

## What it is

A reference page on the members area, maintained in place and undated.
Precedent: `fine-tune/` and `privacy/`.

It is **not** a Tool Manual. That section is for a tool that does a job Claude
does not, and Cowork is Claude. On the front page it sits as a reference line
under the courses, beside Chatbots, Fine-Tune, Privacy and Team Seats.

## Who it is for

A small business owner who **already has a paid plan**. James's decision,
15 Sep: his clients come through him and he sets them up, so the realistic
reader is already paying. Say so in the first line and move on. A guide that
hedges every step with "if you are on Pro, otherwise" doubles in length and
reads uncertain.

Where the plan question does come up, link once to `team-seats/`, which
already answers it, and carry on.

## Platforms

Desktop and web, both, with the trade-off between them stated plainly and
kept short. James's decision, 15 Sep, overriding a desktop-only
recommendation.

Keep the trade-off to a few lines. It is orientation, not a comparison
table. The reader needs to know which one to open, not a feature matrix.

## Structure James asked for

1. What Cowork is.
2. How it differs from a standard Claude chat, explained simply.
3. Desktop versus web, and which to use.
4. Setting it up.
5. Pre-written prompts to run once it is set up.

## The prompts

This is the part with the most value and the most risk.

Every prompt goes through `notes/prompt-review-standards.md`, James's
September 2026 reference checked against Anthropic's live docs. That is
already the standing rule for everything on the Prompt Shelf and it applies
here.

Prompts do not live only inside the guide. They land on the Prompt Shelf as
cards, the same way the deck prompts do, so a client can find them again
without reopening the guide. Deck and shelf stay identical; a fix to one is a
fix to both, in the same commit.

Named so far by James:
- Clear the desktop.
- Identify your writing style from Gmail, which becomes a Skill.

**Safety rule on the desktop prompt, and it is not negotiable.** When James
had his own desktop cleared on 9 Sep the rule was that nothing is deleted,
everything moves to a dated review folder. The same rule carries into any
prompt shipped to a client, and the prompt's own text must say so. A prompt
that deletes a client's files is the worst thing this page could ship.

## How the facts get verified

Hard rule 10 applies to every line of this page, because a setup guide is
almost entirely interface: menus, buttons, labels, folder locations.
`claude.com` and `support.claude.com` are blocked from the sandbox, so a
session cannot see the product.

Two-part approach, agreed 15 Sep after James pushed back on being asked for
twenty minutes of review:

1. A research prompt runs in a chat with web search on and comes back with
   graded, dated facts. The prompt is below, versioned here so it can be
   re-run when the page goes stale.
2. Anything the research cannot settle gets a visible `[CHECK]` marker in the
   draft. James then checks five or six specific lines in the live product,
   not a whole page. He is time poor and the earlier ask was overpriced.

Precedent for why this matters, both already in this repo: the privacy page
still carries a caveat because two Claude memory menu paths could not be
confirmed from here, and Make Claude Yours slide 31 has been unverified since
4 September with three sources agreeing and nobody having looked.

## The research prompt

Run in a chat with web search on. Paste the answer into the building session.

```
ROLE
You are a technical researcher verifying current product facts about
Anthropic's Cowork for a training guide that small business owners will
follow step by step. Getting a menu path wrong costs the reader ten
minutes and the author credibility.

CONTEXT
The guide covers: what Cowork is, how it differs from a standard Claude
chat, how to set it up from scratch, and how to run pre-written prompts
inside it. The audience is non-technical small business owners, most over
forty. Today is 15 September 2026. Cowork has moved fast this year, so
anything older than about eight weeks needs treating as possibly stale.

CONSTRAINTS
- Search the web. Do not answer from training memory on anything about
  the interface.
- Prefer Anthropic's own pages (claude.com, support.claude.com,
  anthropic.com). Grade every fact: A for Anthropic's own documentation,
  B for a dated third-party report, C for undated or single-source.
- Give the date of the source next to each fact.
- Where sources disagree, say so and give both.
- Where you cannot find an answer, write NOT FOUND. Do not infer a menu
  path from how the product used to work.
- No em dashes.

FORMAT
A numbered list. One fact per line. Each line: the fact, then the grade,
then the source URL and its date in brackets.

OUTPUT
Answer these, in this order:
1. What is Cowork, in one paragraph a non-technical reader would follow.
2. The concrete differences between a Cowork session and a standard
   Claude chat: what each can and cannot do, what persists between them,
   what memory is shared.
3. Which plans include Cowork, and on which platforms (desktop, web,
   phone), with the date each became available.
4. The exact steps to start a Cowork session for the first time, naming
   every menu, button and label as it appears on screen today.
5. How Cowork gets a folder or workspace on the user's machine, and
   exactly where that folder lives by default.
6. How a file is given to Cowork, and what file types it accepts.
7. How a scheduled or recurring task is set up in Cowork: the exact
   path, the options offered, and whether the machine must be awake.
8. How connectors (Gmail, Drive, Calendar) are attached to Cowork, and
   whether that is separate from attaching them to chat.
9. What a Skill is in this context, how one is created, and where the
   create option sits today.
10. Anything Anthropic has published in the last eight weeks that
    changes any of the above.
```

## What the repo already believes about Cowork

All of it third-party and dated, so the research either confirms or kills each
one. Do not carry any of it onto the page unverified.

- Cowork has run on the web and the phone app since 7 July, Max plans first,
  other plans following. Verified 4 Sep, third-party.
- Scheduled tasks run in the cloud with no device on. Verified 4 Sep,
  third-party.
- Chat and Cowork share memory since 25 Aug, on by default. Verified 4 Sep,
  third-party.
- Record a Skill sits in the Plus menu of the desktop app, inside Cowork, on
  Pro, Max and Team plans, desktop only. Checked 4 Sep against Anthropic's
  announcement post on X (21 July) plus three third-party writeups. Never
  seen in the live product from here. This is the fact that would have made
  the guide desktop-only, and question 9 settles it.
- Servers added through `claude_desktop_config.json` show their tools in
  Cowork sessions and not in standard chats. James's own Mac, 3 and 11 Sep.
  Observed only, nothing third-party either way.

Every claim that ships gets a row in `notes/fact-register.md` so the monthly
fact check can work it.

## Why it is built here and not in Cowork

James asked, and the first answer given was wrong. Cowork can build this: it
has a filesystem, runs code and reaches GitHub.

The real reason is that this repo's quality comes from tooling that sits
beside it and is already pointed at the files: `tools/check-decks.js`,
`tools/check-field-note.js`, `brand/magnum-house-style/scripts/check_style.py`,
the contrast audit that measures every element against its real painted
background, and Playwright at a known path. Building elsewhere spends the
first hour rebuilding the harness instead of the guide. It is a question of
where the verification lives, not of what Cowork can do.

## Still open

- The card. Source beside the page as `thumbnail.html`, card at
  `assets/thumbnails/`, 1200x630 JPEG q90.
- Whether any of this belongs in a deck as well as a page. Not asked for.
  Do not assume it.
