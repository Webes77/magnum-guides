---
name: magnum-house-style
description: Enforces Magnum AI's visual identity on anything that gets designed: HTML documents, decks, slides, artifacts, one-pagers, service menus, thumbnails, social cards, web pages. White paper, navy and coral, with Oswald for display and IBM Plex Sans and Mono for everything else. Trigger this automatically whenever visual output is being produced, regardless of which other skill is also running. It applies on top of magnum-client-rollout-doc, magnum-service-menu-writer, gamma-architect, design-director, sales-training-deck-writer and any other skill that produces something a person will look at. Also trigger when James says a deliverable "looks off-brand", "does not match the members area", "looks like the old one", or asks what the house colours or fonts are.
---

# Magnum AI house style

This is a check that runs on top of whatever skill is building the thing. It
governs how the output looks. It does not govern what it says.

The system is white paper, a navy block, and coral as the single accent.
Set on 9 September 2026 and final. Do not reopen the palette, and do not
substitute a near value because a tool offers one.

The full reference, with swatches and live components, is at
https://webes77.github.io/magnum-guides/brand/. That page is the source of
truth. This skill is the working summary, written so it functions without
fetching anything. Two companion files sit beside it: `reference/tokens.css`
to paste at the top of a new page, and `reference/paste-block.md`, the
condensed version to drop into another skill.

## The tokens

Paste `reference/tokens.css`, or this, at the top of any new page. Every
value below comes from it. The token is still named `--rust` and its value
is coral; `--olive` is slate. The names stayed so nothing broke when the
palette changed.

```css
:root{
  --paper:#FBFBF9;        /* page ground, flat, no texture */
  --paper-2:#FFFFFF;      /* cards and panels */
  --navy:#1F2A37;         /* masthead band, footers, figure plates, dark cards */
  --ink:#1E1B17;          /* text, borders, headings */
  --body:#2B2823;         /* running text on paper */
  --rust:#DE4A3C;         /* the accent: coral. anything you read */
  --coral-bright:#FF6F5E; /* fills only: badges, bars, figure stripes */
  --tint:#FBE1D8;         /* tags and marks */
  --olive:#5B6B7A;        /* slate: ticks and figure detail, never text */
  --char:#3A3630;         /* text inside cards */
  --mute:#7A7A7A;         /* notes and secondary lines */
  --display:'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif;
  --sans:'IBM Plex Sans',Arial,system-ui,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
}
```

On navy, text is `#F4F1EA` and muted text `#C8CDD3`. Hairlines on paper are
`#DADAD5`.

The ground is flat. No grid, no dots, no texture. Weight comes from the navy
blocks: every screen carries one, the masthead band on a page, the figure
plate or footer on a slide.

## Type

Three faces, each with one job. Never introduce a fourth.

- Oswald 600 or 700, uppercase, for headings and card titles. Line height .90
  to 1.12.
- IBM Plex Sans 400 for running text, 500 or 600 for emphasis. 15.5px inside
  cards, 17px on the page.
- IBM Plex Mono 11 to 13px, uppercase, letter spaced .14em to .28em, for
  eyebrows, dates, metadata, footers, and any prompt text.

Never more than two type treatments in one block.

In HTML the fonts load from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Oswald and IBM Plex are web fonts. They do not exist on a client's machine.
Anything that renders locally, a PowerPoint file or a Word document, must use
the fallbacks, so the display stack is
`'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif` and body falls
back to Arial. Arial and Arial Narrow ship with Office on Mac and Windows and
render identically everywhere. A deck delivered forty times across client
machines cannot depend on a font that might not be there.

## The card

One component does most of the work. White, 2px ink border, no shadow, no
radius. Interactive cards turn their border coral on hover. Static cards do
not change, because a change on something unclickable is a lie.

## Rules

- Coral is the only accent. Deep coral (`--rust`) for anything you read.
  Bright coral for fills on navy and for badges, never small text on white.
  The tint for tags and marks. One accent colour per page.
- Slate never carries text. Ticks, secondary lines and figure detail only.
- Every label is mono, uppercase, letter spaced, with a rule running off right.
- Headings carry one coral word. Not an italic, because Oswald italic is not
  in the system.
- Figures sit on a navy plate: white shapes, a bright coral stripe, slate
  ticks. No gradients.
- Cards within a section share one type: all with images, or all without.
- Never ship a placeholder card. An empty section beats advertising an empty
  room.
- Light pages must not flip. Hard-code the ground as literal hex on both
  `html` and `body`, in CSS and inline, with `color-scheme: light` and
  `<meta name="color-scheme" content="light">`.

## House hard rules that survive into any visual work

These belong to the business, not to the palette, and they apply to every
deliverable this skill touches.

- No em dashes, anywhere. Use a comma, a full stop, or a middot as a
  separator.
- Never the word "solid".
- The 6 Levers are Role, Context, Constraints, Tone, Format, Output. That
  order, those labels. Never renamed, reordered, or added to.
- Prices are always quoted plus GST.
- No client names on anything that ships beyond that client.
- Never change a URL that has been sent to a client, including during a
  redesign.

## Retired. Do not reintroduce

- Black and gold, including `#D4AF37` and `#0E0D0B`.
- The beige and rust system of August and early September 2026: paper
  `#EEE6D3`, rust `#B8452A`, olive `#6C7A3F`, the grid texture, the 6px
  offset shadow.
- Playfair Display, Inter, Bebas Neue, Archivo Narrow.
- Rounded corners and soft blurred shadows.

These came from documents that predate this system. If a brief, a template or
an older file reaches for them, use the tokens above instead and say so.

## Imagery

The system is image-light. Image-light is not image-free. Every layout needs
something to look at.

In order of preference:

1. **Real screenshots.** In training material this is the strongest image
   available. An actual AI output, an actual inbox, an actual quote. It proves
   the claim rather than decorating it. Crop tight. No browser chrome, no drop
   shadow, no device mockup.
2. **Line icons and diagrams.** Single weight outline, ink on paper, or paper
   inside a filled ink shape. One per component, never a decorative scatter.
3. **Photography of real work.** Real sites, real hands on real tools. A photo
   of an actual tradesman's van earns its place. A stock photo of someone
   smiling at a laptop does not.
4. **Line illustration**, as used in the deck figures. Flat ink line work on a
   navy plate, coral and slate fills, no gradients.

Never: stock photography, circuit boards, neural networks, glowing blue
anything, abstract AI gradients, 3D renders, isometric business people, or an
image chosen because a layout looked empty. If nothing real is available, the
answer is more white space, not filler.

The quality gate: would this image survive being printed in black and white on
a bad photocopier? If it only works in colour, or only works large, it is not
strong enough.

## Before delivering

- Does every layout have something to look at, and is it real rather than
  decorative?
- Is coral doing a job on every appearance, or is it just present?
- Is the display type uppercase and condensed?
- Is there exactly one navy block carrying the weight of the screen?
- Does it still read printed in black and white?
- Are there any em dashes left in the copy?
- If a layout feels full, cut content rather than shrink the type.

## What this skill does not govern

- Voice and register. That is `client-facing-voice` and `james-writes`.
- Procedural wording. That is `asd-ste100-clarity`.
- What the document contains and in what order. That belongs to whichever
  skill is building it.

## Leave alone

Never restyle a document a client has already received. Delivered work stays
as it was sent.

Two live things are deliberately outside this system and are not to be
restyled: the Fine-Tune guide in the members area, and This Week in AI, the
newsletter, which is a separate product with its own look.
