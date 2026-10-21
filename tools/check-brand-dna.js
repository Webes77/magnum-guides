#!/usr/bin/env node
/*
  check-brand-dna.js
  ==================
  The Brand DNA guide (brand-dna/index.html) is the source of sixteen
  prompts. James's walkthrough deck carries the same prompts, but it is his
  private Artifact, not part of this site: its source sits in Google Drive
  (Magnum AI / Session Run Sheets). Pass its path with --deck to check or
  fix it; without --deck the deck checks are skipped.

  Usage:  node tools/check-brand-dna.js                 check the guide
          node tools/check-brand-dna.js --deck FILE     also check the deck
          node tools/check-brand-dna.js --deck FILE --fix
                                                 copy every guide prompt into
                                                 the deck, then check. Then
                                                 republish the Artifact
          node tools/check-brand-dna.js --export DIR
                                                 also write each prompt to DIR
                                                 as a numbered .md file (the
                                                 Brand Studio's prompts folder)

  What it checks:
  1. Every guide prompt is in the deck, byte for byte, under its constant.
  2. Prompt 3.1 names the 16 sections in the same order as the template's
     brand-dna.md headings.
  3. Brackets: lowercase ones are blanks the client fills; capitals are
     markers the AI writes, and only the three markers are allowed.
  4. No em dash (any of its four forms) and no "solid" outside CSS, in any
     file under brand-dna/.
  No dependencies. Run it after any change to a Brand DNA prompt.
*/
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const GUIDE = path.join(ROOT, 'brand-dna/index.html');
const di = process.argv.indexOf('--deck');
const DECK = di > -1 ? process.argv[di + 1] : null;
const TEMPLATE = path.join(ROOT, 'brand-dna/template/brand-dna/brand-dna.md');
const MARKERS = ['[NEEDS CONFIRMING]', '[DECISION]', '[INFERRED]'];
const fails = [];

const unesc = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const constName = id => id.replace(/^p-/, 'P_').replace(/-/g, '_').toUpperCase();

const guide = fs.readFileSync(GUIDE, 'utf8');
const prompts = {};
for (const m of guide.matchAll(/<div class="promptcard" id="([^"]+)">[\s\S]*?<pre>([\s\S]*?)<\/pre>/g)) prompts[m[1]] = unesc(m[2]);
if (Object.keys(prompts).length !== 16) fails.push(`guide has ${Object.keys(prompts).length} prompts, expected 16`);

if (DECK) {
  let deck = fs.readFileSync(DECK, 'utf8');
  if (process.argv.includes('--fix')) {
    for (const [id, text] of Object.entries(prompts)) {
      if (/[`\\]|\$\{/.test(text)) { fails.push(`${id} carries a backtick, backslash or \${, which a template literal cannot hold as written`); continue; }
      const re = new RegExp(`const ${constName(id)} = \`[\\s\\S]*?\`;`);
      if (!re.test(deck)) { fails.push(`deck has no ${constName(id)} to update`); continue; }
      deck = deck.replace(re, () => `const ${constName(id)} = \`${text}\`;`);
    }
    fs.writeFileSync(DECK, deck);
  }
  const ex = process.argv.indexOf('--export');
  if (ex > -1) {
    const dir = process.argv[ex + 1];
    if (!dir) fails.push('--export needs a folder');
    else {
      fs.mkdirSync(dir, { recursive: true });
      for (const m of guide.matchAll(/<div class="promptcard" id="([^"]+)">\s*<p class="promptlabel">Prompt ([\d.]+) &middot; ([^<]+)<\/p>/g)) {
        const [, id, num, label] = m;
        const name = `${num.split('.').map(n => n.padStart(2, '0')).join('-')} ${label.trim()}.md`;
        const stamp = new Date().toISOString().slice(0, 10);
        fs.writeFileSync(path.join(dir, name), `<!-- Prompt ${num}, ${label.trim()}. Copied from the members area Brand DNA guide on ${stamp}. Edit the guide, not this file, then export again. -->\n\n${prompts[id]}\n`);
      }
    }
  }
  for (const [id, text] of Object.entries(prompts)) {
    const m = deck.match(new RegExp(`const ${constName(id)} = \`([\\s\\S]*?)\`;`));
    if (!m) fails.push(`deck is missing ${constName(id)}`);
    else if (m[1] !== text) fails.push(`${constName(id)} in the deck differs from ${id} in the guide (run with --fix)`);
  }
  const used = [...deck.matchAll(/prompt:(P_[A-Z_]+)/g)].map(m => m[1]);
  for (const id of Object.keys(prompts)) if (!used.includes(constName(id))) fails.push(`no deck slide uses ${constName(id)}`);
}

// 2. sixteen sections, same names and order as the template
const draft = prompts['p-draft'] || '';
const fromPrompt = [...draft.matchAll(/^(\d{1,2})\. ([^.]+)\./gm)].map(m => `${m[1]}. ${m[2]}`).filter((_, i, a) => i < 16);
const fromTemplate = [...fs.readFileSync(TEMPLATE, 'utf8').matchAll(/^## (\d{1,2}\. .+)$/gm)].map(m => m[1]);
if (fromTemplate.length !== 16) fails.push(`template has ${fromTemplate.length} section headings, expected 16`);
fromTemplate.forEach((t, i) => { if (fromPrompt[i] !== t) fails.push(`section ${i + 1}: prompt says "${fromPrompt[i]}", template says "${t}"`); });

// 3. brackets
for (const [id, text] of Object.entries(prompts)) {
  for (const b of text.match(/\[[^\]\n]+\]/g) || []) {
    if (/[a-z]/.test(b)) continue;
    if (!MARKERS.includes(b)) fails.push(`${id}: ${b} is in capitals but is not one of the three markers`);
  }
}

// 4. em dashes and "solid"
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(path.join(ROOT, 'brand-dna')).filter(f => /\.(html|md)$/.test(f))) {
  const t = fs.readFileSync(f, 'utf8');
  if (/—|&mdash;|&#8212;|&#x2014;/i.test(t)) fails.push(`${path.relative(ROOT, f)} has an em dash`);
  const prose = t.replace(/solid (var|#|rgba|transparent)/g, '').replace(/\d+px solid/g, '').replace(/-style: *solid/g, '');
  if (/\bsolid\b/i.test(prose)) fails.push(`${path.relative(ROOT, f)} uses the word "solid"`);
}

if (fails.length) { fails.forEach(f => console.log('FAIL  ' + f)); console.log(`\nFAIL (${fails.length})`); process.exit(1); }
console.log(`PASS: ${DECK ? '16 prompts identical in guide and deck, ' : 'deck not checked (no --deck), '}16 sections match the template, brackets and banned words clean`);
