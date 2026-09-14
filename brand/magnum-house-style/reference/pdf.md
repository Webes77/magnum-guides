# PDF

A PDF is either a web page printed well or a document drawn by hand. Prefer
the first. It gets the real fonts, the real card, the real masthead, and
the check script can read the HTML before rendering.

## Path 1: HTML with print CSS, rendered by Chromium (default)

Build the page exactly as `reference/html.md` describes, from
`assets/starter.html`, then add a print block and render headless.

```css
@page { size: A4; margin: 16mm 14mm 18mm 14mm; }
@media print {
  html, body { background: #FBFBF9; }
  .masthead, .plate, footer, .badge {
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .card, figure, table, tr { break-inside: avoid; }
  h1, h2, h3 { break-after: avoid; }
  a { color: #C63A2A; text-decoration: none; }
}
```

Link text is body-sized, well under 18px, so it takes `--coral-text`
(`#C63A2A`, 5.02:1) rather than `--rust` (`#EF4029`, 3.73:1, display only).

The masthead runs full bleed to the page margin, not to the paper edge;
bleed is for printers, and the client prints on an office machine. Let
`footer` sit at the end of the content rather than fighting for a fixed
position on every page. For a running page footer use `@page` margin boxes
only where Chromium supports them, which is not reliably, so the safer way
is to leave the page footer to the last page.

Render with Playwright and the preinstalled Chromium:

```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/page.html', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: 'out.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
```

`waitUntil: 'networkidle'` lets Google Fonts finish loading so Oswald and
Plex embed into the file. If the render runs without network, the fallback
stacks take over and the file still holds together in Arial Narrow and
Arial. Do not ship a PDF you have not opened: render page one and one
interior page to PNG and look at them.

## Path 2: reportlab (only when HTML is not an option)

Register no web fonts; use the Office fallbacks so the file needs nothing
embedded beyond what reportlab carries. Helvetica is reportlab's default
and is acceptable for body, Helvetica-Bold condensed by `textTransform`
is not available, so for the display face register Arial Narrow if the
system has it, otherwise use Helvetica-Bold in uppercase with tight leading
(`leading = fontSize * 0.95`).

Colours: `HexColor('#1F2A37')` and so on from the token table. The one navy
block is a full-width rectangle at the top of page one with the title in
onNavy and one word in coralBright, a 3pt coralBright rule beneath. Cards
are `Table` objects with a 1.5pt ink box and no background. Labels are 9pt
Courier, uppercase, `#C63A2A` (small text, not `#EF4029`), with a 0.5pt ink
`HRFlowable` after.

No `roundRect`, no shadows, no gradients, no images that fail the
photocopier test.

## Either path, before delivering

```bash
python scripts/check_style.py page.html      # path 1, before rendering
pdftoppm -png -r 60 -f 1 -l 2 out.pdf preview  # then look at the PNGs
```

One navy block per page, one coral word per heading, edges hard, nothing
placeholder.
