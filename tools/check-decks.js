// Deck layout check. Run before any deck merge:
//   python3 -m http.server 8765 &  (from the repo root)
//   node tools/check-decks.js
// Every slide of every deck, at four window sizes. Exits 1 if any slide
// fails. A prompt is never shrunk, condensed or cut to pass this check;
// the fix is fewer points beside it or a second slide.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const DECKS = ['ai-foundations', 'make-claude-yours', 'runs-without-you'];
const SIZES = [[1280, 600], [1366, 657], [1440, 780], [1920, 969]];
const BASE = process.env.BASE || 'http://localhost:8765';
const MIN_PRE_PX = 14;     // smallest prompt text on screen, in real pixels
const MIN_PRE_LINES = 10;  // prompt lines visible before "More below", the opening must show
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium' });
  let fails = 0;
  for (const [w, h] of SIZES) {
    for (const deck of DECKS) {
      const p = await b.newPage({ viewport: { width: w, height: h } });
      await p.route(/fonts\.g(oogleapis|static)\.com/, r => r.abort());
      await p.goto(`${BASE}/${deck}/index.html`, { waitUntil: 'domcontentloaded' });
      const n = await p.evaluate(() => S.length);
      const rows = [];
      for (let i = 0; i < n; i++) {
        const r = await p.evaluate(({ i, MIN_PRE_PX, MIN_PRE_LINES }) => {
          show(i);
          const sl = document.querySelector('.slide.on'); if (!sl) return null;
          const out = { i, h: (S[i].h || '').replace(/<[^>]+>/g, ''), problems: [] };
          const box = e => e.getBoundingClientRect();
          const foot = sl.querySelector('.foot'); const fb = foot ? box(foot) : null;
          if (sl.scrollHeight - sl.clientHeight > 4) out.problems.push(`overflow ${sl.scrollHeight - sl.clientHeight}px`);
          const els = [...sl.querySelectorAll('h1,.sub,.note,ul.points li,.pane,.tile,.split>*,.fig,.after,.chev span,.meta')]
            .filter(e => !e.closest('.foot') && box(e).height > 0);
          for (const e of els) {
            const r = box(e);
            if (fb && r.bottom > fb.top + 2 && r.top < fb.bottom) out.problems.push(`${e.className || e.tagName} over footer`);
          }
          for (let a = 0; a < els.length; a++) for (let c = a + 1; c < els.length; c++) {
            if (els[a].contains(els[c]) || els[c].contains(els[a])) continue;
            const A = box(els[a]), C = box(els[c]);
            const x = Math.min(A.right, C.right) - Math.max(A.left, C.left);
            const y = Math.min(A.bottom, C.bottom) - Math.max(A.top, C.top);
            if (x > 3 && y > 3) out.problems.push(`${els[a].className || els[a].tagName} overlaps ${els[c].className || els[c].tagName}`);
          }
          const pre = sl.querySelector('.prewrap pre');
          if (pre) {
            const z = parseFloat(getComputedStyle(sl).zoom) || 1;
            const fs = parseFloat(getComputedStyle(pre).fontSize) * z;
            const lh = parseFloat(getComputedStyle(pre).lineHeight) || fs * 1.42;
            const lines = Math.floor(pre.clientHeight / lh);
            out.pre = { px: +fs.toFixed(1), lines, clipped: pre.scrollHeight > pre.clientHeight + 8, more: pre.closest('.pane').classList.contains('more') };
            if (fs < MIN_PRE_PX) out.problems.push(`prompt text ${fs.toFixed(1)}px`);
            if (lines < MIN_PRE_LINES) out.problems.push(`prompt shows ${lines} lines`);
            if (out.pre.clipped && !out.pre.more) out.problems.push('prompt clipped without More below');
          }
          return out;
        }, { i, MIN_PRE_PX, MIN_PRE_LINES });
        if (r && r.problems.length) rows.push(r);
      }
      console.log(`${deck} @ ${w}x${h}: ${n} slides, ${rows.length} problem${rows.length === 1 ? '' : 's'}`);
      for (const r of rows) { fails++; console.log(`   slide ${r.i} "${r.h}": ${[...new Set(r.problems)].join('; ')}`); }
      await p.close();
    }
  }
  await b.close();
  console.log(fails ? `FAIL: ${fails} slide checks failed` : 'PASS: every slide fits at every size');
  process.exit(fails ? 1 : 0);
})();
