# Office files: PowerPoint and Word

These render on the client's machine, not in a browser. Two consequences
drive everything here: fonts must be ones Office ships with, and colours are
written without the `#` in pptxgenjs and docx-js.

## Fonts on a client machine

| System face | Use in Office | Why |
|---|---|---|
| Oswald | **Arial Narrow**, bold, uppercase | Ships with Office on Mac and Windows, condensed like Oswald |
| IBM Plex Sans | **Arial** | Everywhere, renders identically |
| IBM Plex Mono | **Courier New**, uppercase, char spacing 2 to 3 | The only monospace guaranteed on both platforms |

Do not name Oswald or IBM Plex in a pptx or docx. If the machine lacks the
face, Office substitutes Calibri and the deck looks like everyone else's.
Arial Narrow bold, uppercase, tight line height reads as the system; that
is the point of the fallback.

## Colours as Office wants them

```js
const C = {
  paper:"FBFBF9", white:"FFFFFF", navy:"1F2A37", ink:"1E1B17",
  body:"2B2823", char:"3A3630", mute:"63615C",
  coral:"EF4029", coralText:"C63A2A", coralBright:"FF6F5E", tint:"FBE1D8", slate:"5B6B7A",
  onNavy:"F4F1EA", onNavyMute:"C8CDD3", hair:"DADAD5"
};
```

Six digits, no `#`, no alpha. `#` or eight digits corrupts a pptxgenjs file.

Two corals: `coral` (`EF4029`) is 3.73:1 on paper, so it is for large display
text only, 28pt and up, headings and big numbers. `coralText` (`C63A2A`) is
5.02:1 and is what every label, footer and small caption below uses. Office
text sizes are large enough that most of the recipes below already land on
the right one; where a recipe below says plain `coral` at a small point
size, use `coralText` instead.

## PowerPoint with pptxgenjs

Read the pptx skill for the library footguns; they are all correct. Ignore
its Design Ideas section (palettes, rounded frames, icons in circles,
gradient backgrounds). The house system replaces it.

Set `pres.layout = "LAYOUT_16x9"` (10 × 5.625 in). Every slide gets the
paper ground and every slide has exactly one navy element.

### Slide recipes

**Cover.** Whole slide navy. Label top left in Courier New 11, uppercase,
`charSpacing: 3`, colour coralBright. Title bottom left in Arial Narrow
bold 44 to 54, uppercase, colour onNavy, one word coralBright, `lineSpacingMultiple: 0.95`.
Sub line in Arial 14, onNavyMute. A 0.06 in coralBright bar across the very
bottom.

```js
const s = pres.addSlide();
s.background = { color: C.navy };
s.addText("MAGNUM AI · FOUNDATIONS", { x:0.6, y:0.5, w:8.8, h:0.3, fontFace:"Courier New", fontSize:11, color:C.coralBright, charSpacing:3, isTextBox:true, margin:0 });
s.addText([
  { text:"BUILD THE ", options:{ color:C.onNavy } },
  { text:"SYSTEM", options:{ color:C.coralBright } },
  { text:", NOT THE PROMPT", options:{ color:C.onNavy } }
], { x:0.6, y:3.0, w:8.8, h:1.4, fontFace:"Arial Narrow", fontSize:48, bold:true, lineSpacingMultiple:0.95, valign:"bottom", isTextBox:true, margin:0 });
s.addText("Session summary · 9 September 2026", { x:0.6, y:4.5, w:8.8, h:0.35, fontFace:"Arial", fontSize:14, color:C.onNavyMute, isTextBox:true, margin:0 });
s.addShape(pres.ShapeType.rect, { x:0, y:5.565, w:10, h:0.06, fill:{ color:C.coralBright }, line:{ color:C.coralBright, width:0 } });
```

**Content slide.** Paper ground. Label at top with a rule: text in Courier
New 11 coralText (11pt is under the 18px cutoff, so it takes the small-text
coral, not the display one), then a 0.75pt ink line from the end of the
text to the right margin. Heading in Arial Narrow bold 28 to 32 uppercase,
ink, one coral word (28pt+ is display size, so this one stays `C.coral`).
Body in Arial 14, body colour. The one navy element is a footer band 0.35
in high across the bottom, text onNavyMute in Courier New 9 uppercase.

```js
function chrome(slide, label, page) {
  slide.background = { color: C.paper };
  slide.addText(label.toUpperCase(), { x:0.6, y:0.45, w:3.2, h:0.3, fontFace:"Courier New", fontSize:11, color:C.coralText, charSpacing:3, isTextBox:true, margin:0 });
  slide.addShape(pres.ShapeType.line, { x:3.9, y:0.6, w:5.5, h:0, line:{ color:C.ink, width:0.75 } });
  slide.addShape(pres.ShapeType.rect, { x:0, y:5.275, w:10, h:0.35, fill:{ color:C.navy }, line:{ color:C.navy, width:0 } });
  slide.addText(`MAGNUMAI.COM.AU   ·   ${page}`, { x:0.6, y:5.275, w:8.8, h:0.35, fontFace:"Courier New", fontSize:9, color:C.onNavyMute, charSpacing:2, valign:"middle", isTextBox:true, margin:0 });
}
```

**Card row.** Three cards across: white fill, 1.5pt ink line, no shadow,
no `rectRadius`. Title in Arial Narrow bold 16 uppercase ink, text in Arial
12 char. Gap 0.2 in. All cards on a slide of one kind.

```js
function card(slide, x, title, text) {
  slide.addShape(pres.ShapeType.rect, { x, y:1.6, w:2.8, h:2.9, fill:{ color:C.white }, line:{ color:C.ink, width:1.5 } });
  slide.addText(title.toUpperCase(), { x:x+0.2, y:1.8, w:2.4, h:0.5, fontFace:"Arial Narrow", fontSize:16, bold:true, color:C.ink, isTextBox:true, margin:0 });
  slide.addText(text, { x:x+0.2, y:2.35, w:2.4, h:2.0, fontFace:"Arial", fontSize:12, color:C.char, valign:"top", isTextBox:true, margin:0 });
}
```

**Figure slide.** When the slide's job is a diagram, the navy element is
the figure plate, not the footer: a navy rect with a 1.5pt ink line, white
shapes and text inside, one coralBright stripe, slate connectors. Drop the
footer band on that slide so the count stays at one.

**Big number.** Arial Narrow bold 72 to 96 in coral on paper (display size,
`C.coral` is correct here), the label above it in mono at coralText, one
sentence below in Arial 14. Nothing else on the slide.

### Charts

`addChart` with `chartColors:[C.ink, C.coral, C.slate]` and only one series
in coral. Chart fills read as a shape, not small text, so `C.coral` is fine
here even though the swatch is smaller than 18px; the exception is a data
label printed inside or beside the bar, which is text and takes `C.coralText`.
`catAxisLabelColor`/`valAxisLabelColor` set to `C.mute`,
`valGridLine:{ color:C.hair, size:0.5 }`, `catGridLine:{ style:"none" }`,
`showLegend:false` for a single series. Axis and label font Courier New 9.

### What never appears in a deck

Shadows (`shadow:` on any shape or text), `ROUNDED_RECTANGLE`, gradient
images as backgrounds, icons in coloured circles, more than one navy element
on a slide, a second accent colour, a stock image. Placeholder images are a
placeholder card by another name: leave the space empty or cut the slide.

### After writing

```bash
python <pptx-skill>/scripts/office/validate.py deck.pptx
python scripts/check_style.py deck.pptx
```

Then render to images (the pptx skill shows how) and look at three slides:
the cover, one content slide, one figure slide.

## Word with docx-js

Read the docx skill for the library footguns. Define the styles once so
every heading and paragraph inherits the system.

```js
const styles = {
  default: { document: { run: { font:"Arial", size:22, color:C.body } } },  // 11pt
  paragraphStyles: [
    { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
      run:{ font:"Arial Narrow", size:56, bold:true, allCaps:true, color:C.ink },
      paragraph:{ spacing:{ before:360, after:160, line:240 } } },
    { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true,
      run:{ font:"Arial Narrow", size:36, bold:true, allCaps:true, color:C.ink },
      paragraph:{ spacing:{ before:320, after:120, line:240 } } },
    { id:"Label", name:"Label", basedOn:"Normal", next:"Normal",
      run:{ font:"Courier New", size:18, allCaps:true, characterSpacing:40, color:C.coralText },
      paragraph:{ spacing:{ before:240, after:80 }, border:{ bottom:{ style:BorderStyle.SINGLE, size:6, color:C.ink, space:4 } } } },
    { id:"Note", name:"Note", basedOn:"Normal", run:{ font:"Arial", size:20, color:C.mute } }
  ]
};
```

**The one navy block on a page** is a single-cell table at the top of the
document, shaded navy (`shading:{ fill:C.navy, type:ShadingType.CLEAR }`),
holding the label in coralBright, the title in Arial Narrow bold 26pt
onNavy with one coralBright word, and the sub line in onNavyMute. Give the
table a bottom border of 24 (3pt) in coralBright. No other navy in the
body. Headers and footers: Courier New 8pt uppercase mute, centred, with
`magnumai.com.au` and the page number.

**Cards in Word** are a table with cell borders 12 (1.5pt) ink, no shading,
cell margins 200. Tables need `columnWidths` and per-cell `width` in DXA.

**The coral word** in a heading is a second `TextRun` with `color:C.coral`.

**Tables of figures** use `ShadingType.CLEAR` with `fill:C.tint` for a
highlighted row. Never `SOLID`; it renders black.

**Page.** A4, margins 1080 DXA (0.75 in), which suits Australian clients.
Set `page:{ size:{ width:11906, height:16838 } }` explicitly.

### After writing

```bash
python scripts/check_style.py document.docx
```

Then convert to PDF with the docx skill's soffice wrapper and look at page
one and one interior page.
