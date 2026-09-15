#!/usr/bin/env node
/*
  check-contrast.js
  =================
  Measures every painted text element on a page against the background that is
  actually painted behind it, and reports anything under the WCAG AA bar
  (4.5:1 normal, 3:1 for large text). Rebuilt from scratch in three separate
  sessions before it was saved here, which is why it lives in tools/ now.

  Usage, against a local server:
    python3 -m http.server 8777 &
    node tools/check-contrast.js cowork/ privacy/ ""

  Exits 1 on any failure.

  Three exclusions, each deliberate and each earned:
  - Outlined type. A numeral drawn as --paper fill with an ink stroke reads
    1:1 to anything looking only at `color`. Skipped on a non-zero
    -webkit-text-stroke-width.
  - Unpainted elements. getComputedStyle on a descendant of a display:none
    parent returns that child's own display, not none, so a hidden nav variant
    reports ghost failures at the width where it is collapsed. The rendered
    box is the only reliable test. Found 15 Sep, having briefly looked like a
    real front page regression.
  - Nothing else. Zero is the number to keep.
*/
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const PORT = process.env.PORT || 8777;
const WIDTHS = [1440, 1280, 820, 390];
const paths = process.argv.slice(2);
if (!paths.length) { console.error('usage: node tools/check-contrast.js <path> [path...]'); process.exit(2); }

function lum(c){const s=c.map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2];}

(async () => {
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
  let total = 0;
  for (const rel of paths) {
    for (const w of WIDTHS) {
      const p = await b.newPage({viewport:{width:w,height:900}});
      await p.goto(`http://localhost:${PORT}/${rel}`, {waitUntil:'networkidle'});
      const r = await p.evaluate((lumSrc) => {
        const lum = eval('(' + lumSrc + ')');
        function bg(el){let e=el;while(e){const c=getComputedStyle(e).backgroundColor;const m=c.match(/[\d.]+/g);if(m&&(m.length<4||+m[3]>0.9))return [+m[0],+m[1],+m[2]];e=e.parentElement;}return [251,251,249];}
        const fails = [];
        document.querySelectorAll('*').forEach(el => {
          if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return;
          const cs = getComputedStyle(el);
          if (cs.visibility === 'hidden' || +cs.opacity === 0) return;
          if (parseFloat(cs.webkitTextStrokeWidth) > 0) return;
          const fg = cs.color.match(/[\d.]+/g).slice(0,3).map(Number);
          const size = parseFloat(cs.fontSize), wt = parseInt(cs.fontWeight) || 400;
          const large = size >= 24 || (size >= 18.66 && wt >= 700);
          const l1 = lum(fg), l2 = lum(bg(el));
          const ratio = (Math.max(l1,l2) + 0.05) / (Math.min(l1,l2) + 0.05);
          if (ratio < (large ? 3 : 4.5)) {
            fails.push(`${el.tagName}.${(el.className||'').toString().split(' ')[0]} ${size}px ${ratio.toFixed(2)} "${el.textContent.trim().slice(0,40)}"`);
          }
        });
        return {fails:[...new Set(fails)], sideways: document.documentElement.scrollWidth > window.innerWidth + 1};
      }, lum.toString());
      total += r.fails.length + (r.sideways ? 1 : 0);
      const name = (rel || 'front').padEnd(16);
      console.log(`${name}${String(w).padEnd(6)}sideways:${String(r.sideways).padEnd(6)}failures:${r.fails.length}`);
      r.fails.forEach(f => console.log('     ' + f));
      await p.close();
    }
  }
  await b.close();
  console.log(total === 0 ? '\nPASS' : `\nFAIL (${total})`);
  process.exit(total === 0 ? 0 : 1);
})();
