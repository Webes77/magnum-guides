/* The phone tab bar, from 22 Nov. Under 820px every page with the members
   top bar gets five tabs fixed to the bottom of the screen, where the thumb
   is, and the row of links in the top bar hides. The icons are the design
   system's own drawings, copied byte for byte with the stroke changed to
   bright coral for the navy ground, the one change the system allows.
   A coral dot on What's new means an update the reader has not opened yet.
   Styles are in assets/topbar.css; the front page carries its own copy. */
(function(){
  var brand=document.querySelector('.mtb-brand,.bar .brand');
  if(!brand||document.querySelector('.mtabs'))return;
  var root=brand.getAttribute('href')||'/';
  if(root.slice(-1)!=='/')root+='/';
  if(root==='./')root='';
  var ICONS={"Building": "<svg aria-hidden=\"true\" aria-label=\"Building\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"#FF6F5E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"11\" y=\"8\" width=\"26\" height=\"32\" rx=\"2\"/><path d=\"M21 40 V33 H27 V40\"/><path d=\"M18 15 H20 M28 15 H30 M18 22 H20 M28 22 H30\"/><path d=\"M6 40 H42\"/></svg>", "Tick": "<svg aria-hidden=\"true\" aria-label=\"Tick\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"#FF6F5E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"18\"/><path d=\"M15 24 L21 31 L33 17\"/></svg>", "Chat bubble": "<svg aria-hidden=\"true\" aria-label=\"Chat bubble\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"#FF6F5E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 10 H40 A2 2 0 0 1 42 12 V30 A2 2 0 0 1 40 32 H22 L14 40 V32 H8 A2 2 0 0 1 6 30 V12 A2 2 0 0 1 8 10 Z\"/><path d=\"M14 19 H34 M14 25 H26\"/></svg>", "Megaphone": "<svg aria-hidden=\"true\" aria-label=\"Megaphone\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"#FF6F5E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 20 H16 L36 9 V37 L16 28 H8 Z\"/><path d=\"M14 28 L17 39 H22 L20 29.5\"/><path d=\"M40 18 Q43 23 40 28\"/></svg>", "Spanner": "<svg aria-hidden=\"true\" aria-label=\"Spanner\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"#FF6F5E\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M40.12 12.12 L36.95 15.29 L32.71 11.05 L35.87 7.88 A9 9 0 1 0 40.12 12.12 Z\"/><path d=\"M28.61 24.33 L18.71 34.23 A3.5 3.5 0 0 1 13.77 29.29 L23.67 19.39\"/></svg>"};
  var TABS=[["home", "Home", "", "Building"], ["courses", "Courses", "#sessions", "Tick"], ["prompts", "Prompts", "prompts/", "Chat bubble"], ["new", "What's new", "whats-new/", "Megaphone"], ["account", "Account", "account/", "Spanner"]];
  var path=location.pathname;
  function active(id){
    if(id==='new')return /\/whats-new\//.test(path);
    if(id==='prompts')return /\/prompts\//.test(path);
    if(id==='account')return /\/account\//.test(path);
    if(id==='home')return document.body.classList.contains('home');
    return false;
  }
  var nav=document.createElement('nav');nav.className='mtabs';nav.setAttribute('aria-label','Members area');
  var h='';
  TABS.forEach(function(t){
    h+='<a href="'+root+t[2]+'" data-tab="'+t[0]+'"'+(active(t[0])?' aria-current="page"':'')+'>'+ICONS[t[3]]+'<span>'+t[1]+'</span></a>';
  });
  nav.innerHTML=h;document.body.appendChild(nav);document.body.classList.add('has-mtabs');
  function dot(){
    var U=window.MAGNUM_UPDATES||[];if(!U.length)return;
    var seen='';try{seen=localStorage.getItem('magnum-updates-seen')||'';}catch(e){}
    var fresh=seen?U[0].date>seen:(Date.now()-new Date(U[0].date+'T00:00:00').getTime()<14*864e5);
    if(fresh&&!/\/whats-new\//.test(path)){var a=nav.querySelector('[data-tab="new"]');if(a)a.classList.add('dot');}
  }
  if(window.MAGNUM_UPDATES)dot();
  else{var sc=document.createElement('script');sc.src=root+'assets/updates.js';sc.onload=dot;document.head.appendChild(sc);}
})();
