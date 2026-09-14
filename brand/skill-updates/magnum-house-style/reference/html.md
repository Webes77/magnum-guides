# HTML: artifacts, web pages, members-area pages

Start from `assets/starter.html`. It is a complete one-pager in the system:
masthead, label, card grid, navy figure plate, footer. Copy it, replace the
content, delete the sections you do not need. Building from the starter is
faster than building from rules and it cannot drift on the fundamentals.

## Two delivery paths, one difference

**Published artifact (the Artifact tool).** The tool wraps your file in its
own doctype, head and body, so write only `<title>`, `<style>`, `<link>`
and the page content. Its skeleton sets a light colour scheme, but the
viewer can be in dark mode, so still hard-code the ground:

```html
<style>
  :root{color-scheme:light}
  html,body{background:#FBFBF9 !important;color:#2B2823}
</style>
<div style="background:#FBFBF9">...page...</div>
```

Google Fonts is on the allowlist, so the `<link>` below works. Nothing else
external loads: inline every image as a data URI or draw it in SVG.

**Standalone file (SendUserFile, a members-area upload, an email).** Write
the full document with `<meta name="color-scheme" content="light">` in the
head. Email clients strip `<link>` and most of `<style>`, so for anything
going into an email, inline the styles on the elements and accept Arial and
Arial Narrow.

## Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Then paste `reference/tokens.css` into the `<style>`. The token stacks
already carry the fallbacks.

## The skeleton

```html
<header class="masthead">
  <div class="label" style="color:#FF6F5E">Magnum AI · Foundations</div>
  <h1>Build the <em>system</em>, not the prompt</h1>
  <p class="sub">Session summary, 9 September 2026</p>
</header>

<main class="wrap">
  <section>
    <div class="label">What we covered</div>
    <div class="grid">
      <article class="card">
        <h3>Role</h3>
        <p>Who the model is for this job.</p>
      </article>
      <!-- one card per item, all cards of one kind -->
    </div>
  </section>

  <section>
    <div class="label">The workflow</div>
    <figure class="plate">
      <!-- inline SVG: white shapes, one #FF6F5E stripe, #5B6B7A ticks -->
    </figure>
  </section>
</main>

<footer>magnumai.com.au · plus GST · confidential to the client</footer>
```

Layout values that work: `.wrap{max-width:1040px;margin:0 auto;padding:40px 30px}`,
`.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}`,
`section{margin:0 0 44px}`. Gap between cards is 18px, never a shadow.

## Inside the masthead

The masthead is the one navy block on a page. On navy: headings and text
`#F4F1EA`, the sub line `#C8CDD3`, the label in bright coral `#FF6F5E`,
the coral word in the heading also `#FF6F5E` (deep coral disappears on
navy). Under the band, a 4px `#FF6F5E` rule. Nothing else on the page is
navy except a figure plate, and if you have a plate, keep it well below the
fold so a screen never shows two blocks at once.

## The coral word

Wrap it in `<em>`. `h1 em,h2 em,h3 em{font-style:normal;color:var(--rust)}`
is already in tokens.css: headings are display size, so `--rust` (`#EF4029`)
is correct there. Anything smaller than 18px, a label, a link, a caption,
uses `--coral-text` (`#C63A2A`) instead, because `--rust` is 3.73:1 on paper
and fails at small size. Pick the word that carries the meaning of the
heading. One per heading, not one per line.

## Charts and figures

Inline SVG on a `.plate`. Shapes and text `#F4F1EA`, one series or one bar
in `#FF6F5E`, axis ticks and gridlines `#5B6B7A`, labels in the mono face.
For a chart on paper instead of a plate: bars in ink `#1E1B17`, the one
highlighted bar in `#EF4029` (or `#C63A2A` if the bar carries a label under
18px inside it), gridlines `#DADAD5`. Never more than one coral series.

## Responsive and print

Cards collapse to one column under 640px via the `auto-fit` grid. Add:

```css
@media print{
  html,body{background:#fff}
  .masthead,.plate,footer{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .card{break-inside:avoid}
}
```

## Check before delivering

```bash
python scripts/check_style.py page.html
```

Then open it in your head: one navy block per screen, every label has its
rule, every heading has its coral word, no card is empty.
