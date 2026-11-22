/* The phone menu, from 22 Nov. Under 820px the link row in the top bar hides
   and a Menu button opens this list of everything in the members area,
   grouped. One list, here: when a course, guide or tool goes live, add a
   line to MENU in the same commit as its entry in assets/updates.js.
   A coral dot on the button and on What's new means an update the reader
   has not opened yet. Styles are in assets/topbar.css. */
(function(){
  var bar=document.querySelector('.mtb-in,.bar .wrap');
  if(!bar||document.querySelector('.mmenu'))return;
  var brand=document.querySelector('.mtb-brand,.bar .brand');
  var root=(brand&&brand.getAttribute('href'))||'/';
  if(root.slice(-1)!=='/')root+='/';
  if(root==='./')root='';
  var MENU=[
    ['',[['Home',''],["What's new",'whats-new/','new']]],
    ['Courses',[['00 · Chatbots, Agents and Bots','bots/'],['01 · AI Foundations','ai-foundations/'],['02 · Make Claude Yours','make-claude-yours/'],['03 · Work That Runs Without You','runs-without-you/']]],
    ['Prompts',[['The Prompt Shelf','prompts/']]],
    ['This week',[["This week's Field Note and This Week in AI",'#week'],['Every Field Note','newsletter/']]],
    ['Guides',[['Set Claude up to handle your business admin','small-business/'],['The new Projects (beta)','new-projects/'],['Build your own agent workforce','agent-workforce/'],['Build your Brand DNA','brand-dna/'],['Task work','cowork/'],['Fine-tune the AI you already use','fine-tune/'],['Social media with AI','social/'],['Claude effort levels','effort/'],['AI privacy: what is kept','privacy/'],['Should your team get paid seats?','team-seats/'],['Same job, other tool','same-job/']]],
    ['Tools and manuals',[['The AI tools worth paying for','ai-tools/'],['Client websites without a developer','manus-website-manual.html'],['Brief Claude. Manus builds it.','manus-bridge/'],["AI for buyer's agents",'ba-growth/']]],
    ['Your account',[['Account','account/'],['Log out','auth/logout']]]
  ];
  var here=location.pathname.replace(/index\.html$/,'');
  function cur(u){
    if(u===''||u.charAt(0)==='#')return u===''&&document.body.classList.contains('home');
    return here.slice(-u.length)===u;
  }
  var btn=document.createElement('button');
  btn.type='button';btn.className='mmenu';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','mpanel');
  btn.innerHTML='<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span><span class="lbl">Menu</span>';
  bar.appendChild(btn);
  var panel=document.createElement('nav');panel.id='mpanel';panel.className='mpanel';panel.setAttribute('aria-label','Everything in the members area');panel.hidden=true;
  var h='';
  MENU.forEach(function(g){
    h+='<div class="mgrp">'+(g[0]?'<p class="mh">'+g[0]+'</p>':'')+'<ul>';
    g[1].forEach(function(l){h+='<li><a href="'+root+l[1]+'"'+(l[2]?' data-m="'+l[2]+'"':'')+(cur(l[1])?' aria-current="page"':'')+'>'+l[0]+'</a></li>';});
    h+='</ul></div>';
  });
  panel.innerHTML=h;
  bar.parentNode.insertBefore(panel,bar.nextSibling);
  document.body.classList.add('has-mmenu');
  function set(open){
    if(open){var hb=bar.parentNode.getBoundingClientRect();document.documentElement.style.setProperty('--mtop',Math.max(0,Math.round(hb.bottom))+'px');}
    panel.hidden=!open;btn.setAttribute('aria-expanded',open?'true':'false');
    btn.querySelector('.lbl').textContent=open?'Close':'Menu';
    document.body.classList.toggle('mmenu-open',open);
  }
  btn.addEventListener('click',function(){set(panel.hidden);});
  panel.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){set(false);btn.focus();}});
  window.addEventListener('resize',function(){if(window.innerWidth>820&&!panel.hidden)set(false);});
  function dot(){
    var U=window.MAGNUM_UPDATES||[];if(!U.length)return;
    var seen='';try{seen=localStorage.getItem('magnum-updates-seen')||'';}catch(e){}
    var fresh=seen?U[0].date>seen:(Date.now()-new Date(U[0].date+'T00:00:00').getTime()<14*864e5);
    if(fresh&&!/\/whats-new\//.test(location.pathname)){btn.classList.add('dot');var a=panel.querySelector('[data-m="new"]');if(a)a.classList.add('dot');}
  }
  if(window.MAGNUM_UPDATES)dot();
  else{var sc=document.createElement('script');sc.src=root+'assets/updates.js';sc.onload=dot;document.head.appendChild(sc);}
})();
