---
name: magnum-house-style
description: "Enforces Magnum AI's visual identity on anything a person will look at: HTML artifacts and web pages, PowerPoint and Word files, PDFs, Claude Design canvases, Gamma decks, one-pagers, service menus, slides, thumbnails, social cards. White paper, one navy block, coral as the only accent, Oswald for display and IBM Plex Sans and Mono for the rest. Load this automatically whenever visual output is being produced, regardless of which other skill is running, and before choosing any colour, font or layout. It sits on top of pptx, docx, pdf, design-director, gamma-architect, magnum-client-rollout-doc, magnum-service-menu-writer, sales-training-deck-writer and any other skill that produces a deliverable someone sees, and it overrides their palette and type suggestions. Also load it when James says something \"looks off-brand\", \"does not match the members area\", \"looks like the old one\", \"looks like every other AI deck\", or asks what the house colours, fonts or CSS tokens are."
---

# Magnum AI house style

This skill governs how a deliverable looks. Another skill governs what it
says and in what order. When the two meet, this one wins on palette, type,
components and imagery, and the other wins on content.

The system: white paper, one navy block per screen, coral as the single
accent. Set on 9 September 2026, with a contrast fix on 14 September that
splits coral into two values (below). The full reference with swatches and
live components is https://webes77.github.io/magnum-guides/brand/. This
skill works without fetching it.

## Route by medium

Read SKILL.md in full, then open exactly one reference for the medium you
are building in. Each one turns the rules below into a working recipe.

| Building | Read | Why |
|---|---|---|
| HTML artifact, web page, members-area page, email-safe HTML | `reference/html.md` | Page skeleton, artifact quirks, starter file |
| PowerPoint or Word file (pptxgenjs, docx-js, python-pptx) | `reference/office.md` | Office fallback fonts, colours without `#`, slide and page recipes |
| PDF | `reference/pdf.md` | HTML-to-PDF path with print CSS, and the reportlab fallback |
| Claude Design, Gamma, Canva, Midjourney, any prompt-driven tool | `reference/prompt-tools.md` | Paste-ready style briefs, and which of the other skill's defaults to override |

Two more files exist for handing the system to something else:
`reference/tokens.css` is the CSS to paste at the top of a page, and
`reference/paste-block.md` is the condensed system to drop into another
skill's instructions.

## Tokens

Every value in every medium comes from this table. The CSS token is still
named `--rust` and its value is coral; `--olive` is slate. The names stayed
so older files did not break.

Coral is two values, and the difference is load-bearing, not decoration.
`rust` (`#EF4029`) is 3.73:1 on paper: it carries display type (headings,
big numbers), fills, borders and figures, where the size or the shape does
the contrast work. `coral-text` (`#C63A2A`) is 5.02:1: it carries anything
under 18px that a person reads, labels, links, captions, metadata. Painting
small text with `rust` fails contrast; that is the bug this update fixes,
found auditing the members area on 14 September, and every page there has
been re-checked against it since.

| Token | Hex | Job |
|---|---|---|
| paper | `#FBFBF9` | Page ground. Flat, no texture |
| paper-2 | `#FFFFFF` | Cards and panels |
| navy | `#1F2A37` | Masthead band, footers, figure plates, cover slides, dark cards |
| ink | `#1E1B17` | Headings, borders, rules |
| body | `#2B2823` | Running text on paper |
| char | `#3A3630` | Text inside cards |
| mute | `#63615C` | Notes and secondary lines. 5.97:1 on paper; replaces `#7A7A7A`, which was 4.14:1 and failed |
| rust (coral) | `#EF4029` | Display type, fills, borders and figures. 3.73:1 on paper: never small text |
| coral-text | `#C63A2A` | Anything under 18px you read: labels, links, captions, metadata. 5.02:1 on paper |
| coral-bright | `#FF6F5E` | Fills only: badges, bars, the stripe under a navy band, figure stripes. Never small text on white |
| tint | `#FBE1D8` | Tags, marks, highlighted lines |
| olive (slate) | `#5B6B7A` | Ticks and figure detail. Never carries text |
| on-navy | `#F4F1EA` | Text on navy |
| on-navy-mute | `#C8CDD3` | Muted text on navy |
| hair | `#DADAD5` | Hairlines on paper |

The ground is flat. Weight comes from the navy block: every screen carries
exactly one. On a page it is the masthead band. On a slide it is the cover,
the figure plate or the footer. Two navy blocks on one screen split the
weight and the page goes grey; none and it floats.

## Type

Three faces, one job each. Never a fourth.

| Face | Weight and case | Job | Local fallback |
|---|---|---|---|
| Oswald | 600 or 700, uppercase, line height .90 to 1.12 | Headings, card titles, big numbers | Arial Narrow |
| IBM Plex Sans | 400 running, 500 or 600 emphasis. 17px on page, 15.5px in cards | Body text | Arial |
| IBM Plex Mono | 400 or 500, 11 to 13px, uppercase, letter spaced .14em to .28em | Eyebrows, labels, dates, metadata, footers, prompt text | Courier New |

Never more than two type treatments in one block. Oswald has no italic in
the system, so emphasis inside a heading is a coral word, not a slant.

Oswald and IBM Plex are web fonts. Anything rendered on a client's machine
(PowerPoint, Word, a PDF built without embedding) uses the fallbacks, because
a deck opened forty times on forty machines cannot depend on a font that
might not be there. `reference/office.md` carries the exact stacks.

## Components

**The card.** White, 2px ink border, no shadow, no radius. A card that links
somewhere turns its border coral on hover. A static card does not change,
because movement on something unclickable is a lie.

**The label.** Mono, uppercase, letter spaced, coral-text (it is small text),
with a 1px ink rule running off to the right. Every section opens with one.

**The navy block.** Masthead with a 4px bright coral rule under it; or a
figure plate with a 2px ink border; or a footer in mono. One per screen.

**The figure.** Drawn on a navy plate: white shapes, one bright coral
stripe, slate ticks. No gradients, no 3D, no glow.

**The tag and the badge.** Tag is tint ground with ink mono text. Badge is
bright coral ground, ink text, 2px ink border.

## Rules

- Coral is the only accent, and one accent per page. `rust` for display type
  you read at 18px or larger, headings and big numbers; `coral-text` for
  anything smaller, labels, links, captions, metadata; bright coral for
  fills; tint for marks.
- Every heading carries one coral word, in `rust`. Choose the word that
  carries the meaning, not the first one.
- Slate never carries text.
- Cards within a section are all of one kind: all with images, or all without.
- Never ship a placeholder card. An empty section beats advertising an empty
  room.
- No rounded corners, no drop shadows, no gradients, no textures, no grid
  or dot backgrounds. Edges are hard. Contrast comes from the navy block.
- Light pages must not flip. Hard-code the ground as literal hex on both
  `html` and `body`, in CSS and inline, with `color-scheme: light`.
- If a layout feels full, cut content rather than shrink the type.

## Imagery

Image-light, not image-free. Every layout needs one thing to look at. In
order of preference: a real screenshot, cropped tight with no browser chrome
or device mockup; a single-weight line icon or diagram, one per component;
photography of real work, real sites, real hands on real tools; line
illustration on a navy plate in the figure style above.

Never stock photography, circuit boards, neural networks, glowing blue
anything, abstract AI gradients, 3D renders, isometric business people, or
an image chosen because a layout looked empty. If nothing real exists, the
answer is white space.

The gate: would it survive being printed in black and white on a bad
photocopier? If it only works in colour or only works large, it is not
strong enough.

## Precedence over other skills

Other skills carry their own aesthetic advice, written before this system
existed. Where they conflict, use the tokens above and say so in one line.
The known conflicts:

- **pptx** offers colour palettes, rounded image frames, icons in coloured
  circles and gradient backgrounds. Ignore all four. Take its file-format
  gotchas seriously; they are correct.
- **gamma-architect** has an older style prompt with cream paper and a rust
  accent. Replace it with the Gamma block in `reference/prompt-tools.md`.
- **design-director** chooses an aesthetic by audience, including display
  serifs. The audience call still governs layout density and register; the
  palette and faces are always these.
- **dataviz** and any chart library default to multi-hue palettes. Charts
  use ink, navy, coral and slate only, one coral series.

## Retired. Do not reintroduce

Black and gold (`#D4AF37`, `#0E0D0B`). The beige and rust system of August
and early September 2026 (paper `#EEE6D3`, rust `#B8452A`, olive `#6C7A3F`,
the grid texture, the 6px offset shadow). The single-value coral `#DE4A3C`
and the old mute grey `#7A7A7A`, both retired 14 September 2026 for failing
contrast at small size. Playfair Display, Inter, Bebas Neue, Archivo
Narrow, Roboto. If a brief, template or older file reaches for any of
these, use the tokens and say so.

## House hard rules that ride along

These belong to the business, not to the palette, and every deliverable
this skill touches carries them.

- No em dashes, anywhere, including alt text, speaker notes and prompts.
  Use a comma, a full stop, a colon or a middot.
- Never the word "solid" in copy. (`border: 2px solid` in CSS is fine.)
- The 6 Levers are Role, Context, Constraints, Tone, Format, Output. That
  order, those labels, never renamed, reordered or added to.
- Prices are quoted plus GST.
- No client names on anything that ships beyond that client.
- Never change a URL that has been sent to a client, including in a redesign.

## Before delivering

Run the checker on every file you produced. It reads HTML, CSS, Markdown,
text, PPTX and DOCX, and reports retired colours, off-system fonts,
rounded corners, shadows, gradients, em dashes and "solid" in prose:

```bash
python scripts/check_style.py <file-or-directory> [more files]
```

Fix what it reports. Two expected false positives: a prompt brief that
names fonts to exclude ("not Inter") trips the font check, and a document
that quotes the rule about the word "solid" trips the prose check. State
those in one line and move on. Then answer these by looking at the output,
not the code:

- Is there exactly one navy block carrying the weight of each screen?
- Does every layout have something real to look at?
- Is coral doing a job on every appearance, or is it just present?
- Is small text in `coral-text`, not `rust`?
- Is the display type uppercase and condensed?
- Does it still read printed in black and white?

## What this skill does not govern

Voice and register belong to `client-facing-voice` and `james-writes`.
Procedural wording belongs to `asd-ste100-clarity`. Content and order
belong to whichever skill is building the thing.

## Leave alone

Never restyle a document a client has already received. Two live things sit
deliberately outside this system: the Fine-Tune guide in the members area,
and This Week in AI, the newsletter, which is a separate product with its
own look.
