# Prompt-driven tools: Claude Design, Gamma, Canva, image models

These tools do not take CSS. They take words, and they fill every gap you
leave with their own defaults: Inter, purple gradients, rounded cards,
soft shadows, evenly spaced grids, a stock photo of a laptop. So a brief
for these tools names the house value for every property a default could
take, and names what it replaces. "No Inter" pushes the tool to Roboto.
"Oswald, or the closest condensed grotesk; not Inter, not Roboto" lands.

The blocks below are paste-ready. Change the content words, keep the style
words verbatim.

## Claude Design

`design-director` governs the sequence (cover first, then sections) and the
audience call on density and register. This block replaces its aesthetic
table wherever the two disagree. Paste it into the first prompt, then anchor
every later prompt with "Maintain the palette, faces and card treatment
established in the header."

> Visual system, fixed: page ground warm off-white #FBFBF9, flat, no
> texture or grid. One navy block #1F2A37 carries the weight: the header
> band on a document, the cover on a deck, with a 4px bright coral #FF6F5E
> rule beneath it. Headings in Oswald 600 uppercase, or the closest
> condensed grotesk if Oswald is unavailable; not Playfair, not Inter, not
> Bebas, not Roboto. Line height 1.0. One word of each heading in coral
> #EF4029 (bright coral #FF6F5E when the heading sits on navy). Body in IBM
> Plex Sans 400, 17px, colour #2B2823. Labels and metadata in IBM Plex Mono
> 12px uppercase, letter spacing 0.22em, coral #C63A2A (this is small text,
> so it takes the small-text coral, not the heading one), each with a thin
> ink rule running off to the right. Cards: white #FFFFFF, 2px ink #1E1B17
> border, square corners, no shadow, no radius, 18px gaps. Tags on pale coral
> #FBE1D8 with ink text. Slate #5B6B7A only for diagram ticks and secondary
> lines, never text. No gradients, no shadows, no rounded corners, no
> icons in coloured circles, no decorative illustration, no stock imagery,
> no purple, no blue glow. Where an image is wanted, leave a clearly bounded
> empty area for a real screenshot rather than generating one. Diagrams sit
> on a navy plate with white line work, one bright coral stripe, slate
> ticks. Text on navy is #F4F1EA with muted lines in #C8CDD3.

Then in the Tweaks panel, not chat: density, colour temperature, spacing.

## Gamma

`gamma-architect` governs content, outline, speaker notes and the settings
block. Its older style prompt (cream paper, rust accent, warm minimalism)
is retired. Use this instead as the global style prompt, keep its universal
negative block, and add the negatives here to it.

Theme: a light minimalist theme with no gradient. Never Nano Banana. If a
custom theme named Magnum exists in the workspace, use it; otherwise the
plainest light theme and this prompt.

> Off-white paper background #FBFBF9, flat and untextured. Title and section
> slides on deep navy #1F2A37 with warm white text #F4F1EA and one word in
> bright coral #FF6F5E. Content slides on paper with ink text #1E1B17.
> Headings condensed uppercase sans, Oswald or Arial Narrow, never a serif,
> never Inter. Body IBM Plex Sans or Arial. Small labels monospace uppercase
> letter-spaced in coral #C63A2A. One accent colour only, coral. Cards and
> boxes white with a thin dark border, square corners, no shadow, no
> rounding. Diagrams as flat line work on navy with white shapes, one coral
> stripe, grey-blue #5B6B7A ticks. Real screenshots or flat line icons
> only. No gradients, no glow, no 3D, no photographs of people, no abstract
> AI imagery, no circuit boards, no purple, no blue, no gold.

Image model: pick the one gamma-architect recommends for flat line work.
Keywords to add: `flat line illustration, ink on navy, single coral accent,
editorial, printed, no gradient`.

## Canva

Set a Brand Kit once: the fourteen colours from the token table, Oswald
for headings, IBM Plex Sans for body, IBM Plex Mono for labels (all three
are in Canva's font library). Then every template starts from the kit.
When generating a design from a prompt, paste the Claude Design block above
with "Canva" substituted; the tool reads the same properties.

Canva reaches for rounded corners and drop shadows on every element. In the
element settings set corner radius 0 and remove effects before exporting.

## Midjourney, Flux, other image models

Use `ai-image-prompt-director` for the prompt mechanics. The style tail for
anything Magnum:

> flat line illustration, single-weight ink line work on a deep navy
> #1F2A37 ground, white shapes, one bright coral #FF6F5E accent stripe,
> grey-blue #5B6B7A detail lines, no gradient, no glow, no 3D, no texture,
> printed editorial diagram, plenty of empty space

Negative: `photograph, people, stock, circuit board, neural network,
glowing, blue light, purple, gold, gradient, 3D render, isometric, bokeh,
rounded corners, drop shadow`.

Generated images are the fourth choice after real screenshots, line icons
and photographs of real work. Use one only when the layout truly needs
something to look at and nothing real exists, and test it: would it survive
a bad black and white photocopy?

## The words that always ride along

No em dashes in any prompt or in any text the tool will render. Prices
plus GST. The 6 Levers in their fixed order and labels. No client names on
anything that ships beyond that client.
