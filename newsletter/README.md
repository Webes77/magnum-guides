# Weekly Field Note

One page of practical AI a week. Every issue lives in this folder as a single
self-contained HTML file. No build step, no dependencies.

```
index.html                     ← the archive page clients land on
field-note-01-clarity.html     ← issue 01
```

## Adding the next issue

**1. Save the file** as `field-note-NN-slug.html` (lower case, hyphens, no spaces).
For example `field-note-02-handovers.html`.

**2. Update the tags at the top of the file.** Copy them from issue 01 and change
the issue number, headline, and one-line description in each of these:
`<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:url`,
`og:image`, `twitter:title`, `twitter:description`, `twitter:image`. The `og:` tags
are what a client sees when the link arrives in their inbox, so worth getting right.

**3. Make the thumbnail.**

- Copy `../templates/field-note-thumbnail.html` and change the four bits marked
  `EDIT` in it (issue number, theme, headline, kicker).
- Render it to a PNG at exactly 1200 × 630. Any headless browser does this:

  ```
  chrome --headless --screenshot=field-note-NN-slug.png \
         --window-size=1200,630 field-note-NN-thumbnail.html
  ```

  (On a Mac, `chrome` is
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.)
  If you'd rather not touch the command line, open the template in a browser,
  screenshot it, and crop to 1200 × 630. Same result.
- Save the PNG to `../assets/thumbnails/field-note-NN-slug.png`.

**4. Link it in two places:** copy an existing card in `index.html` (this folder's
archive page) and one in the root `index.html` (the members-area home page), and
point both at the new issue and its thumbnail.

**5. Commit and push.** The new issue is live at
`https://webes77.github.io/magnum-guides/newsletter/field-note-NN-slug.html`
once GitHub Pages has been turned on for the repo.

## House rules for an issue page

- **Self-contained.** All CSS and JS stay inside the file. The only external
  request is Google Fonts.
- **Prints properly.** The `@media print` block turns the page into clean A4,
  clients can save any issue as a PDF straight from the browser.
- **Keep the two bars.** The link back to the members area at the top, and the
  copy-link / email row at the bottom. Both are hidden when the page prints.
