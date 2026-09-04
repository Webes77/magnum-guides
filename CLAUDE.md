# CLAUDE.md

Read this before doing anything in this repo. It is the handover between
sessions. Update the "Where we are" and "Next" sections at the end of every
session that changes them.

## What this is

The Magnum AI members area. A static site on GitHub Pages, served from the
`main` branch at `https://webes77.github.io/magnum-guides/`. Clients get the
link. No login. Everything is public, so nothing client-specific ships here.

Owner: James Wheable, Magnum AI, Gold Coast. One-person AI consulting
business. He is the only author and the only presenter.

## Hard rules

These are absolute. Do not relitigate them.

1. No em dashes, anywhere. Use a comma, a full stop, or a middot for separators.
2. Never the word "solid".
3. The 6 Levers are Role, Context, Constraints, Tone, Format, Output. That
   order, those labels. Never renamed, reordered, or added to.
4. Prices are always quoted plus GST.
5. No client material in the members area unless it is made generic enough to
   be an industry guide. Client names never ship.
6. Do not delete Fairmont material anywhere. Keep away from the Rebuild Relief
   and Broadbent client work except generic sales training.
7. The business stays one person. Flag anything that needs hiring, agency
   scale, or permanent operational complexity.
8. Never change a URL after it has been sent to a client.
9. Never commit scope or pricing without James signing off.
10. Anything interface-heavy about Claude, Cowork, or Anthropic products is
    search-verified before it ships. Training knowledge is months behind.
    The primary docs (`support.claude.com`, `anthropic.com`) are blocked from
    the sandbox. WebSearch works. Say when a fact is third-party only.

## House style

`brand/index.html` is the visual spec. `brand/magnum-house-style/SKILL.md`
is the enforcement skill. Paper `#EEE6D3`, ink `#1E1B17`, rust `#B8452A`,
olive `#6C7A3F`. Oswald for display, IBM Plex Sans for body, IBM Plex Mono
for labels and prompts. Cards: 3px ink border, 6px hard offset shadow, no
radius, no blur. Black and gold is retired. Do not introduce a fourth
typeface.

## Where we are

Front page `index.html` has five sections: This Week in AI (live fetch from
the separate `magnum-newsletter` repo), Weekly Field Note, Prompt Shelf,
Guides and Manuals, By Industry.

The Prompt Shelf (`prompts/`) is a cumulative, undated page of copy-ready
prompt cards and recipe cards. It launched on 4 Sep seeded with the thirteen
deck prompts, verbatim, plus one recipe. Every card carries a levers strip
showing which of the six it pulls on. Cards live in the `S` array at the top
of the script in `prompts/index.html`; new cards go at the top of the array
under the section `From the Sunday Brief`. Sections render in order of first
appearance and an empty section never renders.

The session ladder is complete at three. There is no session four. Decided
on 3 Sep. Session three closes by pointing at paid build work, not another
deck.

| Session | Folder | Slides | Prompts |
|---|---|---|---|
| One, AI Foundations | `ai-foundations/` | 22 | 4 |
| Two, Make Claude Yours | `make-claude-yours/` | 35 | 5 |
| Three, Work That Runs Without You | `runs-without-you/` | 18 | 4 |

Also live: Fine-Tune (`fine-tune/`, do not restyle, James said leave it
alone), the Manus website manual, AI for Buyer's Agents (`ba-growth/`, the
only By Industry entry).

Make Claude Yours has been delivered to one client, on 3 Sep. Two problems
came out of that run and both are fixed: prompts were mostly off-screen, and
the deck did not follow its own agenda. Foundations and session three have
not been delivered to anyone yet.

## Decisions already made

- Old training material (the Big 6, ChatGPT manuals, everything in Drive from
  January to June 2026) is not being salvaged. New material only. Full audit
  and the reasoning in `notes/training-audit.md`.
- The By Industry section is speculative. James has no vertical with a
  pipeline. His biggest client is a furniture retailer. Do not build
  industry guides until he says which trade, and expect the answer to depend
  on where his last several paying engagements came from.
- Two weekly publications exist (Field Note here, This Week in AI in the
  newsletter repo). Unresolved positioning question. Not urgent.
- No third weekly publication. The Prompt Shelf is cumulative and undated so
  it grows without James having to write anything on a schedule. Decided
  4 Sep.
- The Sunday Brief (James's private Cowork task that reads the week's AI
  newsletters) feeds the shelf. Its prompt is versioned at
  `notes/sunday-brief-prompt.md`. The brief drafts shelf cards as paste-ready
  JS objects; James approves and pastes. Nothing reaches the shelf without
  that step. Deck prompts on the shelf are the authored text and are never
  rewritten; a fix to a deck prompt is made in the deck and the shelf.
- The audience copies prompts, it does not read them off the screen. Prompt
  slides are built for that.

## Next

Where the last session stopped: the members area is structurally done and
the three decks are live and fixed. The open work, in order of value:

1. James to confirm Make Claude Yours slide 31 (Record a Skill, plus menu in
   the desktop app) against the live product. Third-party sources only.
   The shelf recipe "Set Claude up in the right order" and the account and
   Cowork instruction prompts also name Settings locations; they say what
   the shipped decks say, so they move together if the deck changes.
2. James to paste the rewritten Sunday Brief prompt into the Cowork task
   (`notes/sunday-brief-prompt.md`). The first run with a FOR THE SHELF block
   will show whether the JS-object format survives an email client. If it
   does not, switch the block to plain fields and have the session paste.
3. Sweep the material never swept: Gamma presentations and the desktop
   folders. The Drive sweep is done. See "Still to sweep" at the end of
   `notes/training-audit.md`.
4. Drive housekeeping (not urgent): the items listed under "Reclaim" in the
   audit.
5. Industry guide, one only, once James names the trade.

## How things get built

- Work on the branch `claude/client-guide-magnum-access-iqtblw`, merge to
  `main`, push both. The Prompt Shelf was built on
  `claude/newsletter-brief-members-area-hxwcby` while a second session was
  also working in the members area; that branch is merged to `main` only
  after James has reconciled the two. James has said "you have full control, merge wherever
  you need to." Pages deploys from `main` in under a minute.
- Never deploy inside 20 minutes of a client session unless James says so.
- Each document keeps its card source next to it (`*-thumbnail.html` or
  `thumbnail.html`). Cards are 1200x630 JPEG q90 in `assets/thumbnails/`.
  Reusable source in `templates/guide-thumbnail.html`.
- The three decks share one engine (CSS and JS). A fix to the engine goes
  into all three files. The only differences between them are metadata,
  prompts, figures, and the slide array.
- Every deck: SLIDES button and M open the list. Escape, CLOSE, or clicking
  the backdrop closes it. Slide changes use `history.replaceState`, so one
  Back returns to the members area. Prompt slides give the prompt the full
  width, reflow authored line breaks for display only, show "More below"
  when cut off, and carry EXPAND for full-screen reading. Copied text is
  always the authored text.

## Gotchas that cost time before

- `chromium --headless --screenshot --window-size=1200,630` scales the page
  and ships a cropped card. Always render with Playwright at a true viewport
  and a clip. Playwright is global at
  `/opt/node22/lib/node_modules/playwright`, CommonJS require, with
  `executablePath: '/opt/pw-browsers/chromium'`.
- Chromium in the sandbox cannot reach Google Fonts. For any render that
  needs the real fonts, inline them: fetch the CSS with a browser UA, download
  the latin woff2 files, base64 them into a temp copy of the page. A pre-built
  `fonts-inline.css` sits in the session scratchpad; if it is gone, rebuild
  it.
- `github.io` is blocked from the sandbox. You cannot verify the live site.
  Verify against a local `python3 -m http.server` and tell James to check
  live.
- Do not `pkill -f` a local server by pattern. It killed the shell once. Let
  it die with the session.
- `navigator.clipboard.readText()` hangs headless Chromium. Do not test it.
- Prompts are authored with hard line breaks at about 72 characters. Widening
  a panel does nothing until they are reflowed.
- Case-insensitive grep for "Inter" matches "interaction". Use word
  boundaries when checking for retired fonts.
- A Word lock file (`~$name.docx`) is not a document.

## Deeper reading

- `notes/training-audit.md`: the full material audit, the never-touch rules,
  the Drive inventory, the closure decision.
- `brand/index.html` and `brand/magnum-house-style/SKILL.md`: the look.
- `brand/rollout-exemplar.html`: the reference client document in the house
  style.
- `newsletter/README.md`: how a Field Note is added.
- `README.md` and `ROADMAP.md`: the human-facing version of this file and
  the long-term plan for logins.
