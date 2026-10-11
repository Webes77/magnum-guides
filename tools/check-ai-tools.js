#!/usr/bin/env node
/* Runs every answer combination through the tools picker on ai-tools/ and
   fails on any pick that misdescribes the reader's answers.

   node tools/check-ai-tools.js        exits 1 on any failure

   Combinations: every non-empty set of jobs (511), every set of things
   already paid for plus "none" (65), and all three budgets. */
'use strict';
const path = require('path');
const fs = require('fs');
const M = require(path.join(__dirname, '..', 'ai-tools', 'picker.js'));

/* Which ticked box a pick has to come from before it may say
   "already in your plan". Matched on the start of the tool name. */
const OWNER = [
  ['Claude Slides', 'claude'], ['Claude', 'claude'],
  ['ChatGPT', 'chatgpt'],
  ['Gemini in your Workspace', 'gws'], ['Gemini in Google Meet', 'gws'],
  ['Copilot', 'm365'],
  ['Canva', 'canva'],
  ['Zoom', 'zoom']
];
function ownerOf(tool) {
  const t = tool.replace(/^Canva's/, 'Canva');
  for (const [prefix, key] of OWNER) { if (t.startsWith(prefix)) { return key; } }
  return null;
}

const page = fs.readFileSync(path.join(__dirname, '..', 'ai-tools', 'index.html'), 'utf8');

const jobKeys = M.JOBS.map(j => j.k);
const payKeys = M.PAYS.filter(p => !p.only).map(p => p.k);
const fails = [];
/* Hard rules 1 and 2. Built from parts so this file does not trip the
   style checker by containing what it looks for. */
const BANNED = new RegExp([String.fromCharCode(0x2014), '&' + 'mdash;', '\\bso' + 'lid\\b'].join('|'), 'i');
let runs = 0;
const linksSeen = new Set();

function subsets(arr) {
  const out = [];
  for (let m = 0; m < (1 << arr.length); m++) {
    out.push(arr.filter((_, i) => m & (1 << i)));
  }
  return out;
}

const jobSets = subsets(jobKeys).filter(s => s.length);
const paySets = subsets(payKeys).map(s => (s.length ? s : ['none']));

for (const jobs of jobSets) {
  for (const pays of paySets) {
    for (const b of M.BUDGETS.map(x => x.k)) {
      runs++;
      const r = M.recommend(jobs, pays, b);
      const where = `jobs=${jobs.join(',')} pays=${pays.join(',')} budget=${b}`;
      const fail = m => { if (fails.length < 40) { fails.push(`${m}  [${where}]`); } };

      if (r.rows.length !== jobs.length) { fail(`${r.rows.length} rows for ${jobs.length} jobs`); }

      const lines = [];
      for (const row of r.rows) {
        for (const f of ['tool', 'tag', 'why', 'price', 'link', 'job']) {
          if (typeof row[f] !== 'string' || !row[f].trim()) { fail(`${row.key}: empty ${f}`); }
        }
        const text = [row.tool, row.why, row.price, row.also || '', row.note || ''].join(' ');
        if (/undefined|null|NaN/.test(text)) { fail(`${row.key}: leaked placeholder`); }
        if (BANNED.test(text)) { fail(`${row.key}: house rule word or dash`); }

        if (!['have', 'free', 'paid'].includes(row.tag)) { fail(`${row.key}: bad tag ${row.tag}`); }
        const owner = ownerOf(row.tool);
        if (row.tag === 'have' && (!owner || !pays.includes(owner))) {
          fail(`${row.key}: "${row.tool}" says already paid for, but that box was not ticked`);
        }
        if ((row.price === 'Already in your plan') !== (row.tag === 'have')) {
          fail(`${row.key}: price line and tag disagree`);
        }
        if (b === 'free' && row.tag === 'paid') { fail(`${row.key}: paid pick on free only`); }
        if (row.tag === 'paid' && !row.sub) { fail(`${row.key}: paid pick with no subscription name`); }

        linksSeen.add(row.link);
        for (const l of [row.why, row.also, row.note]) { if (l) { lines.push(l); } }
      }

      const dup = lines.find((l, i) => lines.indexOf(l) !== i);
      if (dup) { fail(`repeated line: ${dup}`); }
      if (b === 'free' && r.subs.length) { fail('new subscriptions on free only'); }
      if (new Set(r.subs).size !== r.subs.length) { fail('a subscription counted twice'); }
    }
  }
}

/* Every card a pick links to must exist on the page. */
for (const l of linksSeen) {
  if (!page.includes(`id="${l.slice(1)}"`)) { fails.push(`link ${l} has no card on the page`); }
}

if (fails.length) {
  console.log(fails.join('\n'));
  console.log(`FAIL · ${runs} combinations`);
  process.exit(1);
}
console.log(`PASS · ${runs} combinations, ${linksSeen.size} cards linked`);
