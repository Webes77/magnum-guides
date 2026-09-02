# Magnum AI — Members Area

This repository is the home for all Magnum AI guides, notes, and resources — and
the foundation for a future members area where clients log in to access their material.

## What's in here

```
index.html      ← the members-area front page (links to everything below)
brand/          ← the house style: palette, type, components, rules
newsletter/     ← the Weekly Field Note — every issue, plus the archive page
clients/        ← per-client guides and deliverables
notes/          ← general notes and knowledge, not tied to one client
templates/      ← reusable starting points (guide + Field Note thumbnail)
assets/         ← shared images, logos, and files
  thumbnails/   ← the preview images used on cards and shared links
```

## The house style — read this before building anything

`brand/index.html` is the single source of truth for how Magnum AI pages look:
paper, ink and rust, with Oswald for display and IBM Plex Sans and Mono for
everything else. It carries the palette, the type scale, the card component,
and the rules that govern them, plus a `:root` block to paste into any new page.

**Anything new starts from those tokens.** The reason this file exists is that
eight documents were each built with their own colours and typefaces, which is
why nothing looked like one business. Do not introduce a fourth typeface, and do
not reach for black and gold — that system is retired.

Live at `https://webes77.github.io/magnum-guides/brand/`. It is marked `noindex`
because it is an internal reference, and it is deliberately not linked from the
members-area front page.

## How to add new material

1. **Add the file** in the right folder (a client guide goes under `clients/<name>/`).
2. **Start from the template** — copy `templates/guide-template.html` so new guides
   match the house style.
3. **Link it on the home page** — open `index.html` and copy an existing card,
   pointing it at your new file. That's what makes it appear in the members area.
4. **Save it to GitHub** — in GitHub Desktop: write a short summary, click
   *Commit*, then *Push*.

## Adding a new Weekly Field Note

Each issue is one HTML page in `newsletter/`. The short version:

1. Save the issue as `newsletter/field-note-NN-slug.html`.
2. Update its `<title>` and the social preview tags at the top of the file
   (`og:title`, `og:description`, `og:url`, `og:image`) — these are what a client
   sees when the link lands in their inbox or chat.
3. Make its thumbnail from `templates/field-note-thumbnail.html` and save it to
   `assets/thumbnails/`. Full instructions are in `newsletter/README.md`.
4. Add the issue to `newsletter/index.html` (the archive) and to the Weekly Field
   Note section of `index.html` (the home page).

## Sharing an issue with clients

The pages here become a real website through **GitHub Pages** (Settings → Pages →
deploy from the `main` branch). Once that's on, every Field Note has its own link
you can paste into an email, a WhatsApp message, or a LinkedIn post:

```
https://webes77.github.io/magnum-guides/newsletter/                          ← all issues
https://webes77.github.io/magnum-guides/newsletter/field-note-01-clarity.html ← issue 01
```

Anyone with the link can read it — no login, nothing to install. Each issue also
carries a preview image, so the link shows the cover of that issue rather than a
bare URL. There's a **Copy link** button at the bottom of every issue.

## Seeing it as a website

`index.html` is a real web page. To make it live at a shareable link, turn on
**GitHub Pages** (Settings → Pages → deploy from the `main` branch). See
`ROADMAP.md` for the full path from here to a proper members area.

## What belongs here — and what doesn't

**Good fit:** guides, notes, HTML pages, markdown, small documents, templates.

**Keep out:** passwords, API keys, client financial data, and large media
(photos/video belong in Google Drive or iCloud, not GitHub).
