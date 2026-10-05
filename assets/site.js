/* Magnum AI shared layer for prompt blocks.
   1. Reflows a prompt's authored line breaks for display, the same flow()
      the decks use, so a phone shows full lines rather than ragged halves.
   2. Marks lever labels and blanks in spans.
   3. Copy always hands over the authored text, byte for byte: a capture
      listener copies the stored original before any page handler runs.
   If marking would change one character of the reflowed text, the block
   shows the reflowed text plain. */
(function(){
  var flow=function(t){var out=[];t.split('\n').forEach(function(raw){var l=raw.replace(/\s+$/,'');var prev=out.length?out[out.length-1]:'';var item=function(x){return /^\s*([-•*]|\d+[.)])\s/.test(x)||/^[A-Z][A-Z0-9 ]{2,}:/.test(x);};var indented=/^\s+\S/.test(raw);if(l===''){out.push('');}else if(prev!==''&&(indented||/^[a-z]/.test(l)||(!item(l)&&!item(prev)))){out[out.length-1]=prev+' '+l.trim();}else{out.push(l);}});return out.join('\n');};
  var orig=new WeakMap();
  document.querySelectorAll('.prompt pre').forEach(function(pre){
    if(pre.children.length)return;
    var t=pre.textContent;orig.set(pre,t);
    var f=flow(t);
    var h=f.replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/^(Role|Context|Constraints|Tone|Format|Output):/gm,'<span class="lv">$1:</span>')
      .replace(/\[([^\]\n]+)\]/g,function(m,l){return /[a-z]/.test(l)?'<span class="bl">'+m+'</span>':'<span class="mk">'+m+'</span>';});
    pre.innerHTML=h;
    if(pre.textContent!==f)pre.textContent=f;
  });
  document.addEventListener('click',function(e){
    var btn=e.target.closest&&e.target.closest('.copy,.copybtn');if(!btn)return;
    var box=btn.closest('.promptbar,.prompt');var pre=box&&box.querySelector('pre');
    if(!pre||!orig.has(pre))return;
    e.stopPropagation();e.preventDefault();
    var text=orig.get(pre);
    if(!btn.dataset.lab)btn.dataset.lab=btn.textContent;
    var done=function(){btn.textContent='Copied';btn.classList.add('done');clearTimeout(btn._t);btn._t=setTimeout(function(){btn.textContent=btn.dataset.lab;btn.classList.remove('done');},1600);};
    var fallback=function(){var ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(x){}ta.remove();done();};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,fallback);}else{fallback();}
  },true);
})();
