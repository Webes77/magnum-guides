# Magnum AI house style, paste-ready block

Paste this into any skill that produces something a person will look at.
It replaces black and gold, and it replaces the beige and rust system used
until 9 September 2026. The full reference with swatches is
`brand/index.html`; the enforcement skill is `brand/magnum-house-style/SKILL.md`.

---

## Visual style (Magnum AI house style)

Every visual output uses this system. Retired and never used: black and
gold (`#D4AF37`, `#0E0D0B`), the beige and rust system (`#EEE6D3`,
`#B8452A`, olive `#6C7A3F`), Playfair Display, Inter, Bebas Neue, Archivo
Narrow. No rounded corners, no shadows, no gradients, no textures.

Colours:

- Paper `#FBFBF9`: the page ground. Warm off-white, flat.
- White `#FFFFFF`: cards and panels.
- Navy `#1F2A37`: the masthead band, footers, figure plates, cover slides,
  dark cards. This is where the weight is. Every screen has one navy block.
- Ink `#1E1B17`: text, borders, headings.
- Coral `#EF4029`: the one accent, for display type, fills and figures.
  Under 18px use `#C63A2A`, because `#EF4029` is 3.73:1 on paper and fails.
  One coral word in
  a heading, labels, links, numbers.
- Coral bright `#FF6F5E`: fills only. Badges, bars, the stripe inside a
  figure, the rule under the navy band. Never small text on white.
- Coral tint `#FBE1D8`: tags, marks, highlighted lines. The pale wash.
- Slate `#5B6B7A`: ticks, secondary lines, figure detail. Slate never
  carries text.
- Body `#2B2823` for running text, Char `#3A3630` inside cards, Mute
  `#63615C` for notes, 5.97:1 on paper. `#7A7A7A` was 4.14:1 and failed. On navy, text is `#F4F1EA` and muted text `#C8CDD3`.

Type, three faces, one job each, never a fourth:

- Oswald 600 or 700, uppercase, for headings and card titles. Line height
  .90 to 1.12. Fallback Arial Narrow.
- IBM Plex Sans 400 for running text, 500 or 600 for emphasis. Fallback
  Arial.
- IBM Plex Mono 11 to 13px, uppercase, letter spaced .14em to .28em, for
  labels, eyebrows, dates, metadata, footers, and any prompt text.

The card: white, 2px ink border, no shadow, no radius. On hover the border
turns coral. Static cards do not move.

Section headings are index entries: a big ghosted coral number that fills to
full coral when the cursor is in that section, then the section name in
Oswald beside it, over a 3px ink rule. A breadcrumb uses .crumb, which keeps
the old small mono line with a thin ink rule running off to
the right.

Figures: drawn in ink on a navy plate. Shapes white, the accent stripe in
bright coral, ticks in slate. No gradients.

Imagery: real screenshots first, then single-weight line icons and
diagrams. Never stock photos, circuit boards, glowing blue anything, or
abstract AI gradients. If nothing real exists, leave white space.

Light only. Hard-code the paper ground on `html` and `body` with
`color-scheme: light` so dark mode and preview panes cannot invert it.

CSS tokens:

```css
:root{
  --paper:#FBFBF9; --paper-2:#FFFFFF; --navy:#1F2A37; --ink:#1E1B17;
  --body:#2B2823; --rust:#EF4029; --coral-text:#C63A2A;
  --coral-text:#C63A2A;   /* small text: labels, meta, links. 5.02:1 on paper */
  --coral-ghost:#F7BAB0;  /* the resting index number. coral at 35% over paper */ --coral-bright:#FF6F5E; --tint:#FBE1D8;
  --olive:#5B6B7A; --char:#3A3630; --mute:#63615C;
  --display:'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif;
  --sans:'IBM Plex Sans',Arial,system-ui,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
}
body{background:var(--paper);color:var(--body);font-family:var(--sans)}
.masthead{background:var(--navy);color:#F4F1EA;border-bottom:4px solid var(--coral-bright)}
.card{background:var(--paper-2);border:2px solid var(--ink);padding:22px 26px}
.card:hover{border-color:var(--rust)}
.label{font-family:var(--display);font-weight:700;font-size:40px;line-height:.95;
  text-transform:uppercase;color:var(--ink);display:flex;align-items:center;
  gap:0 20px;margin:0 0 18px;border-top:3px solid var(--ink);padding-top:16px}
.label::before{content:attr(data-n);font-family:var(--display);font-weight:700;
  font-size:56px;line-height:.82;color:var(--coral-ghost);transition:color .18s ease}
.label:not([data-n])::before{display:none}
section:hover > .label::before{color:var(--rust)}
@media(max-width:820px){.label{font-size:27px}.label::before{font-size:38px}}
.crumb{font-family:var(--mono);font-size:11.5px;letter-spacing:.20em;
  text-transform:uppercase;color:var(--coral-text)}
.tag{background:var(--tint);color:var(--ink);font-family:var(--mono);
  font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:3px 8px}
.badge{background:var(--coral-bright);color:var(--ink);border:2px solid var(--ink)}
.plate{background:var(--navy);border:2px solid var(--ink);padding:26px}
h1,h2,h3{font-family:var(--display);font-weight:600;text-transform:uppercase;
  line-height:1;color:var(--ink)}
h1 em,h2 em{font-style:normal;color:var(--rust)}
```

The token is still named `--rust` in the files so nothing breaks; its value
is coral. `--olive` is slate for the same reason.

Fonts load from Google Fonts in HTML:
`https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap`.
Anything rendered locally (PowerPoint, Word) uses the fallbacks.

Never restyle a document a client has already received.
