# Magnum AI house style, paste-ready block

Paste this into any skill that produces something a person will look at.
It replaces black and gold. The full reference with swatches is
`brand/index.html`; the enforcement skill is `brand/magnum-house-style/SKILL.md`.

---

## Visual style (Magnum AI house style)

Every visual output uses this system. Black and gold is retired: never
`#D4AF37`, never `#0E0D0B`, never Playfair Display, Inter, Bebas Neue or
Archivo Narrow. No rounded corners, no blurred shadows, no gradients.

Colours:

- Paper `#EEE6D3`: the page ground. Always carries a faint 26px dot and
  hairline grid so it does not look flat.
- Paper 2 `#E4DAC4`: cards and panels.
- Ink `#1E1B17`: headings, borders, mastheads, offset shadows.
- Body `#2B2823`: running text on paper. Charcoal `#3A3630` inside cards.
- Rust `#B8452A`: the one accent. One rust word in a heading, the rust
  label, the rust tag. Nothing else is coloured.
- Olive `#6C7A3F`: figures, ticks and confirmation marks only. Olive never
  carries text.
- Mute `#6F675C`: notes and secondary lines.

Type, three faces, one job each, never a fourth:

- Oswald 600 or 700, uppercase, for headings and card titles. Line height
  .90 to 1.12. Fallback Arial Narrow.
- IBM Plex Sans 400 for running text, 500 or 600 for emphasis. Fallback
  Arial.
- IBM Plex Mono 11 to 13px, uppercase, letter spaced .14em to .28em, for
  labels, eyebrows, dates, metadata, footers, and any prompt text.

The card: 3px ink border, 6px hard offset shadow (`box-shadow:6px 6px 0
#1E1B17`), no radius, no blur. Clickable cards lift 2px on hover; static
cards do not.

Labels: mono, uppercase, letter spaced, with a thin rule running off to
the right.

Imagery: real screenshots first, then single-weight line icons and
diagrams in ink on paper with rust and olive fills. Never stock photos,
circuit boards, glowing blue anything, or abstract AI gradients. If
nothing real exists, leave white space.

Light only. Hard-code the paper ground on `html` and `body` with
`color-scheme: light` so dark mode and preview panes cannot invert it.

CSS tokens:

```css
:root{
  --paper:#EEE6D3; --paper-2:#E4DAC4; --ink:#1E1B17; --body:#2B2823;
  --rust:#B8452A; --olive:#6C7A3F; --char:#3A3630; --mute:#6F675C;
  --grid:rgba(120,90,60,.13);
  --display:'Oswald','Arial Narrow','Liberation Sans Narrow',sans-serif;
  --sans:'IBM Plex Sans',Arial,system-ui,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
}
body{background:var(--paper);color:var(--body);font-family:var(--sans);
  background-image:radial-gradient(var(--grid) 1.2px,transparent 1.3px),
    linear-gradient(rgba(120,90,60,.06) 1px,transparent 1px),
    linear-gradient(90deg,rgba(120,90,60,.06) 1px,transparent 1px);
  background-size:26px 26px}
.card{background:var(--paper-2);border:3px solid var(--ink);
  box-shadow:6px 6px 0 var(--ink);padding:22px 26px}
.label{font-family:var(--mono);font-size:12px;letter-spacing:.22em;
  text-transform:uppercase;color:var(--rust)}
h1,h2,h3{font-family:var(--display);font-weight:600;text-transform:uppercase;
  line-height:1;color:var(--ink)}
h1 em,h2 em{font-style:normal;color:var(--rust)}
```

Fonts load from Google Fonts in HTML:
`https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap`.
Anything rendered locally (PowerPoint, Word) uses the fallbacks.

Never restyle a document a client has already received.
