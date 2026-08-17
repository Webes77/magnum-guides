# Magnum AI — Members Area

This repository is the home for all Magnum AI guides, notes, and resources — and
the foundation for a future members area where clients log in to access their material.

## What's in here

```
index.html      ← the members-area front page (links to everything below)
clients/        ← per-client guides and deliverables
notes/          ← general notes and knowledge, not tied to one client
templates/      ← reusable starting points (e.g. guide-template.html)
assets/         ← shared images, logos, and files
```

## How to add new material

1. **Add the file** in the right folder (a client guide goes under `clients/<name>/`).
2. **Start from the template** — copy `templates/guide-template.html` so new guides
   match the house style.
3. **Link it on the home page** — open `index.html` and copy an existing card,
   pointing it at your new file. That's what makes it appear in the members area.
4. **Save it to GitHub** — in GitHub Desktop: write a short summary, click
   *Commit*, then *Push*.

## Seeing it as a website

`index.html` is a real web page. To make it live at a shareable link, turn on
**GitHub Pages** (Settings → Pages → deploy from the `main` branch). See
`ROADMAP.md` for the full path from here to a proper members area.

## What belongs here — and what doesn't

**Good fit:** guides, notes, HTML pages, markdown, small documents, templates.

**Keep out:** passwords, API keys, client financial data, and large media
(photos/video belong in Google Drive or iCloud, not GitHub).
