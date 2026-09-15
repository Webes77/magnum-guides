# Weekly Field Note

One page of practical AI a week. Every issue lives in this folder as a single
self-contained HTML file. No build step, no dependencies.

```
index.html                     ← the archive page clients land on
field-note-01-clarity.html     ← issue 01
```

## How an issue gets started

Since 14 Sep a routine drafts the next issue every Wednesday at 6am Gold Coast
time onto a branch named `field-note/<date>`, and emails James. It never
publishes. It takes the week's idea from the Sunday Brief's `FIELD NOTE` line,
which the Sunday Brief now writes into its vault file as a
`## field-note-commission` section. When that says no, the routine teaches a
Prompt Shelf card that has never carried an issue.

The routine writes the whole issue in James's voice through the `james-writes`
skill, and finishes everything around it: the three pages, the five rules, the
prompt card, the head tags, the card source, the card image, and the two index
links. James edits what it wrote or sends it as it stands. A coral draft band
sits at the top of the page until he deletes it.

An issue is a bottom line up front block and three pages, under 900 words. The
block is the first phone screen and, for most readers, the only one: the hook,
the payoff line, three short answers, and the prompt with its copy button. The
three pages under it are the cover, this week, and the five rules. It was seven
pages until 16 Sep, when James read issue 05 on a phone and the honest number
was 1,923 words over nine and a half screens.

The prompt is versioned at `../notes/field-note-prompt.md`. Change that file
first, then push it to the routine. Each branch gets an entry in
`../notes/field-note-log.md`, which is also where the list of cards already
taught lives.

Nothing stops an issue being written by hand. The steps below still work, and
the template is the faster start either way.

## The template and the check

`../templates/field-note-template.html` is issue 04's shape with the copy taken
out. Every editable spot carries an `EDIT` comment saying what goes there. Copy
it, fill it, delete the `EDIT` comments as you finish each block, and delete the
draft band last.

`node ../tools/check-field-note.js` checks every issue in this folder: no em
dash, no "solid" in the copy, balanced markup, page numbers in order, one
masthead number, one footer run, head tags that match the filename, a card
source and a card image, and a link from both index pages. Add `--shape` to
hold a file to the template's three pages, five rules and one prompt, which
issues 01 to 04 predate. Add `--draft` while the draft band
is still on the page. Run it before any issue merges.

## Adding the next issue

**1. Save the file** as `field-note-NN-slug.html` (lower case, hyphens, no spaces).
For example `field-note-02-handovers.html`.

**2. Update the tags at the top of the file.** Copy them from issue 01 and change
the issue number, headline, and one-line description in each of these:
`<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:url`,
`og:image`, `twitter:title`, `twitter:description`, `twitter:image`. The `og:` tags
are what a client sees when the link arrives in their inbox, so worth getting right.

**3. Make the thumbnail.**

- Copy `../templates/field-note-thumbnail.html` to
  `field-note-NN-thumbnail.html` in this folder and change the four bits marked
  `EDIT` in it (issue number, theme, headline, kicker). The card source is named
  by issue number only, not by slug, and it stays beside the issue.
- Render it to a JPEG at exactly 1200 × 630, quality 90, and save it to
  `../assets/thumbnails/field-note-NN-slug.jpg`.
- Render with Playwright at a true viewport and a clip. Do **not** use
  `chrome --headless --screenshot --window-size=1200,630`: it scales the page
  and ships a cropped card. This cost time more than once.
- In the sandbox, Chromium cannot reach Google Fonts, so the card renders in
  the wrong typefaces unless the fonts are inlined first: fetch the CSS with a
  browser user agent, download the latin woff2 files, base64 them into a temp
  copy of the page, and render that.
- On a Mac with the fonts installed locally, opening the source in a browser
  and screenshotting it gives the same result, as long as the crop is exactly
  1200 × 630.

**4. Link it in two places:** copy an existing card in `index.html` (this folder's
archive page) and one in the root `index.html` (the members-area home page), and
point both at the new issue and its card. Only the latest Field Note shows as a
card on the front page, so the issue that was newest moves down into the list of
earlier Field Notes beside it.

**5. Check it.** Run `node ../tools/check-field-note.js --shape
field-note-NN-slug.html`. It must print PASS.

**6. Commit and push.** The new issue is live at
`https://webes77.github.io/magnum-guides/newsletter/field-note-NN-slug.html`
once GitHub Pages has built. A push to `main` does not always queue a build, so
check the Pages deployments endpoint rather than the push output.

## House rules for an issue page

- **Self-contained.** All CSS and JS stay inside the file. The only external
  request is Google Fonts.
- **Prints properly.** The `@media print` block turns the page into clean A4,
  clients can save any issue as a PDF straight from the browser.
- **Keep the two bars.** The link back to the members area at the top, and the
  copy-link / email row at the bottom. Both are hidden when the page prints.
