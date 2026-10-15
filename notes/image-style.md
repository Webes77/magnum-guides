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

Every picture is on the site itself, in `assets/illustrations/`, as a JPEG
about 1200 pixels wide (1000 for the Field Note cards), quality 80. Nothing
is hotlinked. The site pictures are named after the page they sit on
(`privacy.jpg`, `ai-foundations.jpg`), the AI tools pictures carry a `tools-`
prefix, and each Field Note card has `field-note-NN.jpg`.

How a picture gets from Higgsfield into the repo, because this sandbox cannot
reach Higgsfield's image host (`d8j0ntlcm91z4.cloudfront.net`). In the
Higgsfield sandbox, `curl` the result, convert it to JPEG
(`convert in.png -resize 1200x -strip -interlace JPEG -quality 80 out.jpg`),
print its size, and pass the file in `image_paths` on `sandbox_exec`. The
image comes back into this session's `tool-results` folder as
`mcp-Higgsfield-blob-*.jpg`, byte for byte (checked on 15 Oct: same size,
same bytes). Copy it into place by matching the exact size. Up to 512 KB per
call, so two or three pictures at a time. Look at each one as it arrives;
that is the check.

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
- The front page Start here strip (since 15 Oct, later): four still lifes,
  objects rather than people, so they read as symbols beside the course
  pictures below them (`start-00.jpg` to `start-03.jpg`: a desk bell, a
  walkie-talkie and a wind-up robot; two coffee cups mid-conversation; shop
  keys on a handover notebook; an alarm clock beside finished parcels). Full
  width at the top of each block on a laptop, a 76px square beside the title
  on a phone. James said pictures need not be people: objects and symbols
  are fine in this style.
- The front page welcome picture (`welcome.jpg`, since 15 Oct, night):
  James and his British Bulldog at the coral shop door at opening time. His
  likeness lives here and nowhere else; see CLAUDE.md for why. Drawn from a
  written description of his photos (dark hair swept up, black rectangular
  glasses, greying moustache, grey t-shirt; a fawn bulldog with a white
  chest blaze, rose ears and the tongue out). Ask for "exactly one dog": the
  first pass drew two.
- The members area share card (`members-area.jpg`, since 15 Oct, night):
  a still life, no people. The coral shop door propped open, coffee and keys
  on the step, a dog bowl and lead by the mat, the workbench lit inside.

Not every picture is a person. James said so on 15 Oct. A still life of the
job's objects, with the human detail carried by what someone left behind,
is as much the house style as a scene with people in it. The Field Note
routine alternates: if last week's card showed a person, this week's is a
still life. Put "no people" in the scene line when you want none, or the
model adds someone.

Left alone on purpose. The share cards (`og:image`) keep their titles, because
WhatsApp shows them. The Field Notes are sent and printed on their own, and a
routine builds them. And the AI tools page keeps its own figures.

The Higgsfield image ids for every picture are in the session scratchpad
notes for 15 Oct, not here, because the files themselves are the source now.

## The Field Note cards, since 15 Oct

James asked for the weekly Field Note to follow the same style. The card's
right-hand panel (the share card WhatsApp shows, and the front page card)
carries a cartoon made for that issue, 4:3, with the issue number as a small
bright coral tag in the corner and the credit line under it. Issues 01 to 09
were all redrawn on 15 Oct. The issue page itself carries no picture: the
one-card shape is unchanged.

The Wednesday routine makes one each week (Step 6 of
`notes/field-note-prompt.md`), about two credits. It needs the Higgsfield
connector on the routine. Without it, the card uses `newsletter.jpg`, the
archive's picture, and the email says so in one line.

