---
name: magnum-house-style
description: Enforces Magnum AI's visual identity on anything that gets designed: HTML documents, decks, slides, artifacts, one-pagers, service menus, thumbnails, social cards, web pages. Paper, ink and rust, with Oswald for display and IBM Plex Sans and Mono for everything else. Trigger this automatically whenever visual output is being produced, regardless of which other skill is also running. It applies on top of magnum-client-rollout-doc, magnum-service-menu-writer, gamma-architect, design-director, sales-training-deck-writer and any other skill that produces something a person will look at. Also trigger when James says a deliverable "looks off-brand", "does not match the members area", "looks like the old one", or asks what the house colours or fonts are.
---

# Magnum AI house style

This is a check that runs on top of whatever skill is building the thing. It
governs how the output looks. It does not govern what it says.

The full reference, with swatches and live components, is at
https://webes77.github.io/magnum-guides/brand/. That page is the source of
truth. This skill is the working summary, written so it functions without
fetching anything.

## The tokens

Paste this at the top of any new page. Every value below comes from it.

```css
:root{
  --paper:#EEE6D3;    /* page ground, always with the grid texture */
  --paper-2:#E4DAC4;  /* cards and panels */
  --ink:#1E1B17;      /* mastheads, borders, headings, offset shadows */
  --body:#2B2823;     /* running text on paper */
  --rust:#B8452A;     /* the only accent */
  --olive:#6C7A3F;    /* figures and ticks only */
  --char:#3A3630;     /* text inside cards */
  --mute:#6F675C;     /* notes and secondary lines */
  --grid:rgba(120,90,60,.13);
  --display:'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif;
  --sans:'IBM Plex Sans',system-ui,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
}
```

The paper ground always carries its texture: a radial dot plus two hairline
rules, all at 26px. A flat paper ground looks unfinished.

## Type

Three faces, each with one job. Never introduce a fourth.

- Oswald 600 or 700, uppercase, for headings and card titles. Line height .90
  to 1.12.
- IBM Plex Sans 400 for running text, 500 or 600 for emphasis. 15.5px inside
  cards, 17px on the page.
- IBM Plex Mono 11 to 12px, uppercase, letter spaced .14em to .28em, for
  eyebrows, dates, metadata and footers.

Never more than two type treatments in one block.

Oswald and IBM Plex are web fonts. They load in HTML and they do not exist on a
client's machine. Anything that renders locally, a PowerPoint file or a Word
document, must use the fallbacks, so the display stack is
`'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif` and body falls
back to Arial. Arial and Arial Narrow ship with Office on Mac and Windows and
render identically everywhere. A deck delivered forty times across client
machines cannot depend on a font that might not be there.

## The card

One component does most of the work. 3px ink border, 6px hard offset shadow
(`box-shadow:6px 6px 0 var(--ink)`), no radius, no blur.

Interactive cards lift 2px on hover and the shadow grows to 9px. Static cards
do not lift, because a lift on something unclickable is a lie.

## Rules

- Rust is the only accent. One accent colour per page.
- Olive never carries text. Figures, ticks and confirmation marks only.
- Every label is mono, uppercase, letter spaced, with a rule running off right.
- Headings carry one rust word. Not an italic, because Oswald italic is not in
  the system.
- Cards within a section share one type: all with images, or all without. A
  tall image card beside a short text card leaves a hole and reads as a bug.
- Never ship a placeholder card. An empty section beats advertising an empty
  room.
- Light pages must not flip. Hard-code the ground as literal hex on both `html`
  and `body`, in CSS and inline, with `color-scheme: light` and
  `<meta name="color-scheme" content="light">`. Forced dark mode and preview
  panes will otherwise invert it.

## Retired. Do not reintroduce

- Black and gold, including `#D4AF37` and `#0E0D0B`.
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
3. **Photography of real work.** Real clients, real sites, real hands on real
   tools. A photo of an actual tradesman's van earns its place. A stock photo of
   someone smiling at a laptop does not.
4. **Line illustration**, as used in the deck figures. Flat ink line work,
   rust and olive fills, no gradients.

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
- Is rust doing a job on every appearance, or is it just present?
- Is the display type uppercase and condensed?
- Does it still read printed in black and white?
- If a layout feels full, cut content rather than shrink the type.

## What this skill does not govern

- Voice and register. That is `client-facing-voice` and `james-writes`.
- Procedural wording. That is `asd-ste100-clarity`.
- What the document contains and in what order. That belongs to whichever
  skill is building it.

## Leave alone

Never restyle a document a client has already received. Delivered work stays as
it was sent. Never change a URL that has been sent to a client, including
during a redesign.
