# Image style for the members area

Locked by James on 15 Oct 2026, after four rounds of samples. Every
illustration on the members area uses this recipe so the images read as one
set. Photographs are out: James said no to photorealism on 15 Oct.

## What it is

A modern adult animated-series look, like a smart prime-time cartoon.
Rounded, confident ink lines. Faces with personality and a bit of wit.
Daylight. Grown-up but not dark, cartoonish but not childish.

How it got here, so nobody walks the same road twice:

- Photographic editorial images: rejected, too realistic.
- Flat editorial vector and clean-line comic: liked, but the people read as
  kids' characters ("a little bit vanilla").
- Graphic-novel noir and pop-comic poster: closer, but too dark and edgy for
  a members area.
- This one, the middle: approved ("Perfect").

## The prompt

Every image prompt is a scene line followed by the style block, word for word.

```
Scene: [one sentence: who, where, doing what, and the one funny or human
detail that makes it]. Style: modern adult animated-series illustration,
like a smart prime-time cartoon. Rounded, confident ink outlines with gentle
line weight variation, slightly exaggerated cartoon proportions, expressive
faces with personality, flat colour with one soft cel-shade tone, a few
subtle halftone dots in the shadows. Grown-up and witty, not childish, not
dark, daylight. Palette only: deep navy (#1F2A37), coral-red (#EF4029),
off-white (#FBFBF9), ink black (#1E1B17), slate grey (#5B6B7A). Thin black
panel border. Australian setting. No text, no readable screens, no speech
bubbles, no logos.
```

Model: Nano Banana 2.1 on Higgsfield, 16:9, 1k. About 2 credits an image.

## Rules for the scene line

- Australian people and places. Vehicles are right-hand drive: say "steering
  wheel on the right" when a car is in shot, because the model defaults to
  left.
- One human detail per scene (a raised eyebrow, a cat in the shot, a seagull
  eyeing a sandwich). That detail is what stops it reading as stock art.
- Coral goes on one thing: the hi-vis, the cap, the door. Not everywhere.
- No real people, no real brands, no readable words. The page carries the
  words.
- No client is ever drawn or named (hard rule 5).

## Where the files live

Images are made on Higgsfield and are hotlinked from its CDN as the
compressed `_min.webp` version (about 110 KB at 1376 by 768), because the
sandbox cannot reach that CDN to self-host. When a session can reach
`d8j0ntlcm91z4.cloudfront.net`, download each `_min.webp` into
`assets/illustrations/` and swap the URLs. Each page lists its image URLs in
one place so that swap is a single edit.

Every image carries a small credit line: "Illustration: Magnum AI".

## Where the pictures are, since 15 Oct

James said "apply to the whole members area" on 15 Oct. One picture per page,
under the masthead, in a `<figure class="ill">` with the credit line, styled by
`assets/illustration.css`:

- Guides: `privacy/`, `cowork/`, `team-seats/`, `effort/`,
  `agent-workforce/`, `manus-bridge/`, `manus-website-manual.html`,
  `ba-growth/`, the Prompt Shelf and the Field Note archive.
- Fine-Tune: at the top of Start here, not on the cover, because the cover
  keeps its safe drawing.
- The social questionnaire: on the start card only, so no question moves.
- The five decks: on the cover slide, through an optional `ill:[url, alt]`
  on the slide. When it is there it replaces the cover figure, on the laptop
  and on the phone page. It is capped at 500px wide so the cover fits at
  1280 by 600.
- The front page: the course, shelf and tool cards show the pictures. The AI
  tools card uses the shadow board. The footer carries the credit.

Left alone on purpose. The share cards (`og:image`) keep their titles, because
WhatsApp shows them. The Field Notes are sent and printed on their own, and a
routine builds them. And the AI tools page keeps its own figures.

The image ids are in each page's `<figure class="ill">` and in each deck's
cover slide. To self-host, swap the CDN prefix in those places.

