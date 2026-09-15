#!/usr/bin/env node
/*
 * check-field-note.js
 *
 * Checks a Weekly Field Note page against the house rules and the shape every
 * issue shares. Written for the midweek Field Note routine, which must prove
 * its own draft before it pushes a branch, and useful by hand before a merge.
 *
 *   node tools/check-field-note.js                     every issue in newsletter/
 *   node tools/check-field-note.js newsletter/x.html   one file
 *   node tools/check-field-note.js --draft <file>      allow the draft band
 *   node tools/check-field-note.js --shape <file>      also hold it to the template
 *   node tools/check-field-note.js --template          the template only
 *
 * Exits 1 on any failure. Prints PASS when everything holds.
 *
 * Two kinds of check. The house rules and the page's own consistency apply to
 * every issue: no em dash, no "solid" in the copy, balanced markup, page numbers
 * that run in order, one masthead number, head tags that match the filename, a
 * card image, and a link from both index pages. The template's shape (seven
 * pages, five rules, one prompt, five exercises) applies only under --shape,
 * because issues 01 and 02 were written before that shape settled and are not
 * being rebuilt to it. Anything drafted from templates/field-note-template.html
 * is checked with --shape.
 *
 * It does not measure layout. Field Notes are a scrolling page, not a deck, so
 * tools/check-decks.js and its fit rules do not apply here.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const VOID = new Set(['area','base','br','col','embed','hr','img','input','link',
  'meta','param','source','track','wbr','!doctype']);

const args = process.argv.slice(2);
const allowDraft = args.includes('--draft');
const wantShape = args.includes('--shape');
const templateOnly = args.includes('--template');
const files = args.filter(a => !a.startsWith('--'));

function strip(html) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
}

function visibleText(html) {
  return strip(html).replace(/<[^>]+>/g, ' ');
}

function tagBalance(html) {
  const src = strip(html);
  const stack = [];
  const re = /<(\/?)([a-zA-Z!][a-zA-Z0-9-]*)\b[^>]*?(\/?)>/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const closing = m[1] === '/';
    const name = m[2].toLowerCase();
    const selfClosed = m[3] === '/';
    if (VOID.has(name) || selfClosed) continue;
    if (!closing) {
      stack.push({ name, at: m.index });
    } else {
      if (!stack.length) return `stray closing </${name}>`;
      const open = stack.pop();
      if (open.name !== name) return `<${open.name}> closed by </${name}>`;
    }
  }
  if (stack.length) return `<${stack[stack.length - 1].name}> never closed`;
  return null;
}

function check(file) {
  const rel = path.relative(ROOT, path.resolve(file));
  const fail = [];
  const warn = [];
  const html = fs.readFileSync(file, 'utf8');
  const base = path.basename(file);
  const isTemplate = base === 'field-note-template.html';

  // ---- hard rules -------------------------------------------------------
  if (/—/.test(html)) fail.push('em dash present (hard rule 1)');
  const text = visibleText(html);
  if (/\bsolid\b/i.test(text)) fail.push('the word "solid" is in the copy (hard rule 2)');

  // ---- structural -------------------------------------------------------
  const bad = tagBalance(html);
  if (bad) fail.push(`unbalanced markup: ${bad}`);

  const pages = (html.match(/<section class="page /g) || []).length;
  if (pages < 2) fail.push(`${pages} pages, expected a multi-page issue`);

  const pg = (html.match(/<span class="pg">([^<]*)<\/span>/g) || [])
    .map(s => s.replace(/<[^>]+>/g, '').trim());
  const total = String(pages).padStart(2, '0');
  const wantPg = Array.from({ length: pages },
    (_, i) => `${String(i + 1).padStart(2, '0')} / ${total}`);
  if (pg.join('|') !== wantPg.join('|')) {
    fail.push(`page numbers are ${pg.join(', ') || 'missing'}, expected ${wantPg[0]} through ${wantPg[pages - 1]}`);
  }

  const mids = (html.match(/<span class="mid">([\s\S]*?)<\/span>/g) || [])
    .map(s => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  if (mids.length !== pages) fail.push(`${mids.length} footer runs, expected ${pages}`);
  else if (new Set(mids).size !== 1) fail.push('the footer run differs between pages');

  // The contents list covers every page after the cover and the intro.
  const contents = (html.match(/<aside class="contents">[\s\S]*?<\/aside>/) || [''])[0];
  if (contents) {
    const items = (contents.match(/<li>/g) || []).length;
    if (items !== pages - 2) {
      fail.push(`${items} items in the contents list, expected ${pages - 2} for ${pages} pages`);
    }
  }

  const promptBlocks = html.match(/<div class="prompt">[\s\S]*?<div class="tip">/g) || [];
  if (!promptBlocks.length) fail.push('no prompt block on the page');
  promptBlocks.forEach((b, i) => {
    if (!/data-copy/.test(b)) fail.push(`prompt block ${i + 1} has no copy button`);
    if (!/<pre>/.test(b)) fail.push(`prompt block ${i + 1} has no prompt text`);
  });
  if (!/id="share-link"/.test(html)) fail.push('the share bar is missing');
  if (!/href="\.\.\/index\.html"/.test(html)) fail.push('no link back to the members area');

  // ---- the template's shape --------------------------------------------
  if (wantShape || isTemplate) {
    if (pages !== 7) fail.push(`${pages} pages, the template shape is 7`);
    const rules = (html.match(/<div class="rule">/g) || []).length;
    if (rules !== 5) fail.push(`${rules} rules on page 04, the template shape is 5`);
    const exr = (html.match(/<div class="exr">/g) || []).length;
    if (exr !== 5) fail.push(`${exr} exercises on page 07, the template shape is 5`);
    if (promptBlocks.length !== 1) {
      fail.push(`${promptBlocks.length} prompt blocks, the template shape is exactly 1`);
    }
  }

  // ---- draft band -------------------------------------------------------
  const hasBand = /class="draftband"/.test(html);
  if (hasBand && !allowDraft && !isTemplate) {
    fail.push('the draft band is still on the page; delete it before merging');
  }
  if (isTemplate && !hasBand) warn.push('the template has lost its draft band');

  // ---- identity, issues only --------------------------------------------
  if (!isTemplate) {
    const m = base.match(/^field-note-(\d{2})-([a-z0-9-]+)\.html$/);
    if (!m) {
      fail.push(`filename is not field-note-NN-slug.html`);
    } else {
      const [, nn] = m;
      const stem = base.replace(/\.html$/, '');
      const url = `https://webes77.github.io/magnum-guides/newsletter/${base}`;
      const img = `https://webes77.github.io/magnum-guides/assets/thumbnails/${stem}.jpg`;

      const meta = (re) => (html.match(re) || [])[1];
      const pairs = [
        ['canonical', meta(/<link rel="canonical" href="([^"]*)"/), url],
        ['og:url', meta(/property="og:url" content="([^"]*)"/), url],
        ['og:image', meta(/property="og:image" content="([^"]*)"/), img],
        ['twitter:image', meta(/name="twitter:image" content="([^"]*)"/), img],
      ];
      for (const [name, got, want] of pairs) {
        if (got !== want) fail.push(`${name} is ${got || 'missing'}, expected ${want}`);
      }

      for (const tag of ['og:type','og:site_name','og:title','og:description',
                         'og:image:width','og:image:height','og:image:alt']) {
        if (!html.includes(`property="${tag}"`)) fail.push(`${tag} is missing`);
      }
      for (const tag of ['twitter:card','twitter:title','twitter:description']) {
        if (!html.includes(`name="${tag}"`)) fail.push(`${tag} is missing`);
      }
      if (!/name="theme-color" content="#1F2A37"/.test(html)) {
        fail.push('theme-color is not the house navy #1F2A37');
      }

      const title = meta(/<title>([^<]*)<\/title>/) || '';
      if (!title.includes(`No. ${nn}`)) fail.push(`<title> does not carry No. ${nn}`);
      if (!title.endsWith('Magnum AI')) fail.push('<title> does not end with Magnum AI');

      const issueNums = (html.match(/<div class="mh-issue">No\. (\d{2})<\/div>/g) || [])
        .map(s => s.replace(/\D/g, '').slice(-2));
      if (issueNums.length !== pages || issueNums.some(n => n !== nn)) {
        fail.push(`the masthead does not read No. ${nn} on all ${pages} pages`);
      }
      if (!html.includes(`Weekly Field Note / No. ${nn}`)) {
        fail.push(`the top bar does not read Weekly Field Note / No. ${nn}`);
      }

      const mailto = (html.match(/href="mailto:\?([^"]*)"/) || [])[1] || '';
      if (!mailto.includes(encodeURIComponent(url))) {
        fail.push('the email-it link does not carry this issue\'s URL');
      }

      // ---- the things around the page -------------------------------------
      // The card source is named by issue number only, not by slug.
      const thumbSrc = path.join(ROOT, 'newsletter', `field-note-${nn}-thumbnail.html`);
      if (!fs.existsSync(thumbSrc)) {
        warn.push(`no card source at newsletter/${path.basename(thumbSrc)}, so the card cannot be regenerated`);
      }
      const thumbJpg = path.join(ROOT, 'assets', 'thumbnails', `${stem}.jpg`);
      if (!fs.existsSync(thumbJpg)) {
        fail.push(`no card image at assets/thumbnails/${stem}.jpg`);
      }
      // The front page carries the latest issue as a card plus the three before
      // it, four in all. An older issue drops off by design and lives in the
      // archive. Found 16 Sep when issue 05 pushed issue 01 off and the check
      // called a working front page a failure.
      const FRONT_PAGE_SLOTS = 4;
      const newest = fs.readdirSync(path.join(ROOT, 'newsletter'))
        .filter(f => /^field-note-(\d\d)-[a-z]+\.html$/.test(f))
        .sort()
        .slice(-FRONT_PAGE_SLOTS);
      if (newest.includes(base)) {
        const home = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
        if (!home.includes(`newsletter/${base}`)) {
          fail.push('the front page does not link this issue, and it is one of the newest four');
        }
      }
      const archive = fs.readFileSync(path.join(ROOT, 'newsletter', 'index.html'), 'utf8');
      if (!archive.includes(`href="${base}"`)) {
        fail.push('the Field Note archive does not link this issue');
      }
    }
  }

  return { rel, fail, warn };
}

let targets = files;
if (templateOnly) targets = ['templates/field-note-template.html'];
if (!targets.length) {
  targets = fs.readdirSync(path.join(ROOT, 'newsletter'))
    .filter(f => /^field-note-\d{2}-[a-z0-9-]+\.html$/.test(f) && !f.endsWith('-thumbnail.html'))
    .sort()
    .map(f => path.join('newsletter', f));
  targets.push('templates/field-note-template.html');
}

let failed = 0;
for (const t of targets) {
  const full = path.isAbsolute(t) ? t : path.join(ROOT, t);
  if (!fs.existsSync(full)) {
    console.log(`FAIL ${t}\n  · file not found`);
    failed++;
    continue;
  }
  const { rel, fail, warn } = check(full);
  if (fail.length) {
    failed++;
    console.log(`FAIL ${rel}`);
    fail.forEach(f => console.log(`  · ${f}`));
  } else {
    console.log(`ok   ${rel}`);
  }
  warn.forEach(w => console.log(`  ~ ${w}`));
}

if (failed) {
  console.log(`\n${failed} file(s) failed.`);
  process.exit(1);
}
console.log('\nPASS');
