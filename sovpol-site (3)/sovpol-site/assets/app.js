(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function type(el,txt,sp,cb){var i=0;el.classList.add('caret');(function t(){el.textContent=txt.slice(0,i++);if(i<=txt.length)setTimeout(t,sp);else{if(cb)cb();}})()}
function erase(el,cb){var s=el.textContent,i=s.length;(function t(){el.textContent=s.slice(0,--i);if(i>0)setTimeout(t,22);else cb()})()}
function rotate(el){var p=el.getAttribute('data-rot').split('|'),k=0;(function go(){type(el,p[k%p.length],48,function(){setTimeout(function(){erase(el,function(){k++;setTimeout(go,300)})},2000)})})()}
function start(){document.documentElement.classList.add('go');setTimeout(function(){document.documentElement.classList.add('done')},2800);[].forEach.call(document.querySelectorAll('[data-tw]'),function(e){var s=e.getAttribute('data-tw');if(rm){e.textContent=s;return}var p=e.parentNode;p.style.minHeight=p.offsetHeight+'px';type(e,s,42,function(){e.classList.remove('caret');var r=document.querySelector('[data-rot]');if(r)rotate(r)})});
if(rm){var r=document.querySelector('[data-rot]');if(r)r.textContent=r.getAttribute('data-rot').split('|')[0]}}
var pre=document.getElementById('pre'),seen=0;try{seen=sessionStorage.getItem('sv')}catch(e){}
if(!pre||rm||seen){if(pre)pre.remove();start()}else{
var t0=Date.now();type(pre.querySelector('.t'),'SOVPOL \u2014 SOVEREIGN POLICE',55);
var fin=function(){setTimeout(function(){pre.classList.add('done');try{sessionStorage.setItem('sv',1)}catch(e){}setTimeout(function(){pre.remove()},800);start()},Math.max(0,2400-(Date.now()-t0)))};
if(document.readyState==='complete')fin();else addEventListener('load',fin)}
function tw(el){if(el.getAttribute('data-done'))return;el.setAttribute('data-done',1);var h=el.innerHTML;el.style.minHeight=el.offsetHeight+'px';el.innerHTML='';var i=0;el.classList.add('caret');(function t(){if(i>=h.length){el.classList.remove('caret');el.style.minHeight='';return}if(h.charAt(i)==='<'){i=h.indexOf('>',i)+1}else if(h.charAt(i)==='&'&&h.indexOf(';',i)>0&&h.indexOf(';',i)-i<8){i=h.indexOf(';',i)+1}else i++;el.innerHTML=h.slice(0,i);setTimeout(t,22)})()}
var hh=document.querySelector('.hero');if(hh&&!rm&&matchMedia('(hover:hover)').matches){hh.addEventListener('mousemove',function(e){var b=hh.getBoundingClientRect();hh.style.setProperty('--mx',(e.clientX-b.left)+'px');hh.style.setProperty('--my',(e.clientY-b.top)+'px')})}
[].forEach.call(document.querySelectorAll('.faq button'),function(b){b.addEventListener('click',function(){var f=b.parentNode,o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)})});
var rv=document.querySelectorAll('.rv');
function count(e){var n=+e.getAttribute('data-n'),t0=Date.now();(function f(){var p=Math.min(1,(Date.now()-t0)/1300);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})()}
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');[].forEach.call(e.target.querySelectorAll('[data-n]'),function(c){rm?c.textContent=c.getAttribute('data-n'):count(c)});var tg=e.target;if(!rm){var ts=[];if(tg.matches('h2,.big,.quote'))ts=[tg];else if(tg.closest('.cine,.head,.band2'))ts=[].slice.call(tg.querySelectorAll('h2,h3,.bq'));ts.forEach(tw)}setTimeout(function(){tg.classList.remove('d1','d2','d3')},1800);io2.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(rv,function(e){io2.observe(e)});
var hero=document.querySelector('.hero');
if(hero&&!rm)addEventListener('scroll',function(){hero.style.backgroundPosition='center '+(50+Math.min(scrollY,900)*.025)+'%'},{passive:true});
var r=document.getElementById('rail'),b=document.getElementById('mb');
b.addEventListener('click',function(){var o=r.classList.toggle('open');document.documentElement.classList.toggle('lock',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Close':'Menu'});
var links=[].slice.call(r.querySelectorAll('nav a'));
links.forEach(function(a){a.addEventListener('click',function(){r.classList.remove('open');document.documentElement.classList.remove('lock');b.textContent='Menu';b.setAttribute('aria-expanded','false')})});
var map={};links.forEach(function(a){var h=a.getAttribute('href');if(h.charAt(0)==='#')map[h.slice(1)]=a});if(document.getElementById('founder')&&document.getElementById('top')){links.forEach(function(l){if(l.getAttribute('href')==='founder.html')map.founder=l})}
function act(){var y=innerHeight*.4,cur=null,best=-1e9;Object.keys(map).forEach(function(id){var el=document.getElementById(id);if(!el)return;var t=el.getBoundingClientRect().top;if(t<=y&&t>best){best=t;cur=id}});if(cur){links.forEach(function(l){l.classList.remove('on')});map[cur].classList.add('on')}}
var prog=document.getElementById('prog'),up=document.getElementById('up');
function sc(){act();var m=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')';up.classList.toggle('show',scrollY>700)}
addEventListener('scroll',sc,{passive:true});sc();
up.addEventListener('click',function(){scrollTo({top:0,behavior:rm?'auto':'smooth'})});
if(!rm&&matchMedia('(hover:hover)').matches){[].forEach.call(document.querySelectorAll('.card,.doc'),function(c){c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform='perspective(800px) rotateX('+(-y*7)+'deg) rotateY('+(x*7)+'deg) translateY(-6px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})})}
})();