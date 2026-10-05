/* Magnum AI shared layer: marks lever labels and blanks inside prompt
   blocks. Display only. If wrapping would change one character of the
   text, the block is put back exactly as it was. */
(function(){
  document.querySelectorAll('.prompt pre').forEach(function(pre){
    if(pre.children.length)return;
    var t=pre.textContent;
    var h=t.replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/^(Role|Context|Constraints|Tone|Format|Output):/gm,'<span class="lv">$1:</span>')
      .replace(/\[([^\]\n]+)\]/g,function(m,l){return /[a-z]/.test(l)?'<span class="bl">'+m+'</span>':'<span class="mk">'+m+'</span>';});
    pre.innerHTML=h;
    if(pre.textContent!==t)pre.textContent=t;
  });
})();
