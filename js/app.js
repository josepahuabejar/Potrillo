{
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = () => innerWidth < 900;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const MAPS = 'https://www.google.com/maps/dir/?api=1&destination=El%20Potrillo%20Cocina%20Mexicana%2C%203409%20S%20Church%20St%2C%20Burlington%2C%20NC%2027215';

gsap.registerPlugin(ScrollTrigger, SplitText);

/* ---------- smooth scroll ---------- */
let lenis = null;
if (!reduce && window.Lenis) {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const goTo = (target) => {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: el.id === 'top' ? 0 : -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
};
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length < 2 || !$(id)) return;
  e.preventDefault();
  closeSheet();
  goTo(id);
});

/* ---------- nav, sheet, phone bar ---------- */
const nav = $('#nav'), sheet = $('#sheet'), toggle = $('.nav__toggle'), bar = $('#bar');
function openSheet() { sheet.classList.add('is-open'); sheet.setAttribute('aria-hidden', 'false'); toggle.setAttribute('aria-expanded', 'true'); lenis && lenis.stop(); }
function closeSheet() { sheet.classList.remove('is-open'); sheet.setAttribute('aria-hidden', 'true'); toggle.setAttribute('aria-expanded', 'false'); lenis && lenis.start(); }
toggle.addEventListener('click', openSheet);
$('.sheet__close').addEventListener('click', closeSheet);
addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
ScrollTrigger.create({ trigger: '.hero', start: 'bottom 72px', endTrigger: 'body', end: 'bottom top', onToggle: s => nav.classList.toggle('is-solid', s.isActive) });
ScrollTrigger.create({ trigger: '.hero', start: 'bottom 60%', endTrigger: 'body', end: 'bottom top', onToggle: s => bar.classList.toggle('is-on', s.isActive) });


/* scroll films: a numbered JPG per frame, drawn on a canvas (smooth everywhere, unlike seeking a video) */
function film(canvas, dir, count, fy) {
  const imgs = [];
  const load = i => { const im = new Image(); im.decoding = 'async'; im.src = `${dir}/${String(i + 1).padStart(3, '0')}.jpg`; im.onload = () => { if (i === 0 || i === shown) draw(shown, true); }; imgs[i] = im; };
  // first, last and every 8th frame first, so a fast scroll still has something to show
  const order = [...new Set([0, count - 1, ...Array.from({ length: count }, (_, i) => i).filter(i => i % 8 === 0), ...Array.from({ length: count }, (_, i) => i)])];
  order.forEach(load);
  const ctx = canvas.getContext('2d');
  let shown = 0, w = 0, h = 0;
  function draw(i, force) {
    const cw = Math.round(canvas.clientWidth * Math.min(devicePixelRatio, 2)), ch = Math.round(canvas.clientHeight * Math.min(devicePixelRatio, 2));
    if (!cw || !ch) return;
    if (cw !== w || ch !== h) { canvas.width = w = cw; canvas.height = h = ch; force = true; }
    if (i === shown && !force) return;
    let j = i; while (j > 0 && !(imgs[j] && imgs[j].complete && imgs[j].naturalWidth)) j--;
    const im = imgs[j]; if (!im || !im.naturalWidth) return;
    shown = i;
    const s = Math.max(w / im.naturalWidth, h / im.naturalHeight), dw = im.naturalWidth * s, dh = im.naturalHeight * s;
    ctx.drawImage(im, (w - dw) / 2, (h - dh) * fy, dw, dh);
  }
  return p => draw(Math.round(Math.min(1, Math.max(0, p)) * (count - 1)));
}

/* ---------- hero: walk up to the door ---------- */
const arch = $('#arch');
const walk = film($('#walkup'), 'media/walk', 69, 0.3);
const big = $('#bigword');
  big.style.whiteSpace = 'nowrap';
const split = new SplitText(big, { type: 'chars', charsClass: 'ch' });
const chars = split.chars;
let vTarget = reduce ? 1 : 0, vNow = vTarget;

if (reduce) {
  gsap.set(['#sideL', '#sideR'], { opacity: 1 });
} else {
  // entrance, once
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  intro.from(chars, { yPercent: 110, opacity: 0, duration: 1.3, stagger: 0.045 })
       .from('.hero__el', { y: 30, opacity: 0, duration: 1 }, 0.2)
       .from(arch, { y: 80, scale: 0.86, opacity: 0, duration: 1.4 }, 0.15)
       .from('#heroMeta > *', { y: 20, opacity: 0, duration: 1, stagger: 0.1 }, 0.6);

  const finalW = () => isMobile() ? innerWidth : Math.min(innerWidth * 0.42, innerHeight * 0.5625);
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
      onUpdate: s => { vTarget = Math.min(1, s.progress / 0.82); } }
  });
  tl.to('#heroMeta', { opacity: 0, y: 20, duration: 0.1 }, 0)
    .to('.hero__el', { opacity: 0, y: -40, duration: 0.25 }, 0.02)
    .to(chars, { x: (i) => (i - (chars.length - 1) / 2) * innerWidth * 0.09, opacity: 0, duration: 0.5, stagger: { each: 0, from: 'center' } }, 0.05)
    .to(arch, { '--aw': () => finalW() + 'px', '--ah': () => (isMobile() ? innerHeight : innerHeight - 128) + 'px', '--ab': () => isMobile() ? '0px' : '18px', top: () => isMobile() ? '50%' : `calc(50% + 24px)`, duration: 0.7, ease: 'power2.inOut' }, 0.08)
    .to(arch, { boxShadow: '0 0 0 0 rgba(0,0,0,0)', duration: 0.3 }, 0.5)
    .to('#scrim', { opacity: 1, duration: 0.12 }, 0.74)
    .fromTo('#sideL', { opacity: 0, x: () => isMobile() ? 0 : -40, y: () => isMobile() ? 20 : 0 }, { opacity: 1, x: 0, y: 0, duration: 0.15 }, 0.8)
    .fromTo('#sideR', { opacity: 0, x: () => isMobile() ? 0 : 40, y: () => isMobile() ? 20 : 0 }, { opacity: 1, x: 0, y: 0, duration: 0.15 }, 0.86)
    .to({}, { duration: 0.05 });
}
// the film follows the scroll, eased so it glides
gsap.ticker.add(() => { vNow += (vTarget - vNow) * 0.16; walk(vNow); });
addEventListener('resize', () => walk(vNow));

/* ---------- adentro: the door opens as you scroll ---------- */
const inside = film($('#inside'), 'media/inside', 97, 0.5);
if (!reduce) {
  let iTarget = 0, iNow = 0;
  ScrollTrigger.create({ trigger: '.enter', start: 'top top', end: 'bottom bottom', onUpdate: s => { iTarget = Math.min(1, s.progress / 0.8); } });
  gsap.timeline({ scrollTrigger: { trigger: '.enter', start: 'top top', end: 'bottom bottom', scrub: 0.6 } })
    .to('.enter__shade', { opacity: 1, duration: 0.2 }, 0.65)
    .fromTo('#enterText', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.2 }, 0.75)
    .to({}, { duration: 0.05 });
  gsap.ticker.add(() => { iNow += (iTarget - iNow) * 0.16; inside(iNow); });
} else { gsap.ticker.add(() => inside(1)); }
addEventListener('resize', () => inside(0));

/* ---------- ticker ---------- */
const track = $('#ticker');
track.innerHTML += track.innerHTML;
const tick = reduce ? null : gsap.to(track, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
if (tick) {
  let boost = 0;
  ScrollTrigger.create({ onUpdate: s => { boost = Math.min(4, Math.abs(s.getVelocity()) / 600); } });
  gsap.ticker.add(() => { boost *= 0.94; tick.timeScale(1 + boost); });
}

/* ---------- intro words + medal ---------- */
const introP = $('#introText');
const hl = /^(molcajetes|birria|fajitas|shrimp|margaritas|1:30)/i;
introP.innerHTML = introP.textContent.split(' ').map(w => `<span class="w${hl.test(w) ? ' hl' : ''}">${w}</span>`).join(' ');
const words = $$('.w', introP);
if (!reduce) {
  ScrollTrigger.create({ trigger: introP, start: 'top 82%', end: 'bottom 50%', scrub: true,
    onUpdate: s => { const n = Math.round(s.progress * words.length); words.forEach((w, i) => w.classList.toggle('on', i < n)); } });
} else words.forEach(w => w.classList.add('on'));

const medal = $('#medal');
for (let i = 0; i < 16; i++) {
  const e = document.createElement('div');
  e.className = 'medal__edge';
  e.style.transform = `translateZ(${-8 + i}px)`;
  e.style.filter = `brightness(${0.75 + (i % 4) * 0.05})`;
  medal.prepend(e);
}
$$('.medal__face', medal).forEach((f, i) => { f.style.transform = i ? 'rotateY(180deg) translateZ(8px)' : 'translateZ(8px)'; });
if (!reduce) {
  gsap.fromTo(medal, { rotateY: -30, rotateX: 8 }, { rotateY: 690, rotateX: -8, ease: 'none', scrollTrigger: { trigger: '.intro', start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
  const wrap = $('.medal-wrap');
  wrap.addEventListener('pointermove', e => { const r = wrap.getBoundingClientRect(); gsap.to(wrap, { rotateX: ((e.clientY - r.top) / r.height - 0.5) * -16, rotateY: ((e.clientX - r.left) / r.width - 0.5) * 16, duration: 0.6 }); });
  wrap.addEventListener('pointerleave', () => gsap.to(wrap, { rotateX: 0, rotateY: 0, duration: 0.8 }));
}

/* ---------- la mesa: the turning table ---------- */
const PLATES = [
  { img: 'img/molcajete.webp', name: 'Molcajete El Potrillo', price: '$25.95', desc: 'Grilled steak, chicken, chorizo, cactus, grilled jalapeños and queso fresco, served in the stone with rice, beans and tortillas.', alt: 'Molcajete El Potrillo in a lava-stone bowl with steak, chicken, shrimp, nopales, cilantro and queso fresco' },
  { img: 'img/tacos.webp', name: 'Quesabirria & asada tacos', price: 'from $14.99', desc: 'Quesabirria tacos with their broth, $17.99. Tacos de asada on corn with cilantro and onion, $14.99.', alt: 'A red quesabirria taco beside two carne asada tacos with cilantro and onion, limes and a grilled jalapeño' },
  { img: 'img/coctel.webp', name: 'Mariscos', price: 'from $18.99', desc: 'Shrimp cocktail, parrillada with oranges and cucumber, camarones a la diabla and whole fried mojarra.', alt: 'Chopped shrimp with tomato, onion and cilantro on a white plate ringed with orange, lime and cucumber slices, topped with avocado' },
  { img: 'img/camarones.webp', name: 'Camarones', price: 'from $19.50', desc: 'Grilled shrimp a la diabla, al mojo de ajo, chipotle, rancheros or Cancún style, with rice, beans, avocado and pico de gallo.', alt: 'Grilled shrimp with red rice, refried beans with cheese, sliced avocado, pico de gallo and lime on a blue plate' },
  { img: 'img/margaritas.webp', name: 'Margaritas', price: 'at the bar', desc: 'Salted rims, orange and lime, on the rocks or frozen. Until 1:30 am on Fridays and Saturdays.', alt: 'Three margaritas and a frozen piña drink on the granite bar' },
  { img: 'img/tresleches.webp', name: 'Tres leches', price: 'for dessert', desc: 'Milk-soaked sponge under whipped cream, a strawberry and a ribbon of chocolate.', alt: 'A square of tres leches cake with whipped cream and a strawberry on a white plate drizzled with chocolate' }
];
const N = PLATES.length, STEP = 360 / N;
const ring = $('#ring'), ringWrap = $('#ringWrap');
// a Higgsfield clip can replace any card: add video: 'media/<file>.mp4' to its plate above
ring.innerHTML = PLATES.map((p, i) => `<figure class="card3d" data-i="${i}" style="margin:0">${p.video && !reduce ? `<video src="${p.video}" poster="${p.img}" muted loop autoplay playsinline aria-label="${p.alt}"></video>` : `<img src="${p.img}" alt="${p.alt}" ${i > 1 ? 'loading="lazy"' : ''} draggable="false">`}</figure>`).join('');
$('#dots').innerHTML = PLATES.map(() => '<span></span>').join('');
const cards = $$('.card3d', ring), dots = $$('#dots span');
let R = 0, cw = 0;
function sizeRing() {
  cw = isMobile() ? Math.min(innerWidth * 0.56, 260) : Math.min(innerWidth * 0.2, 300);
  const ch = cw * 1.3;
  const avail = ringWrap.clientHeight;
  const scale = avail && ch > avail * 0.92 ? (avail * 0.92) / ch : 1;
  cw *= scale;
  ring.style.setProperty('--cw', cw + 'px'); ring.style.setProperty('--ch', cw * 1.3 + 'px');
  R = (cw / 2) / Math.tan(Math.PI / N) + (isMobile() ? 30 : 60);
  cards.forEach((c, i) => { c.style.transform = `rotateY(${i * STEP}deg) translateZ(${R}px)`; });
}
let scrollA = 0, dragA = 0, curA = 0, front = -1;
function setDish(i) {
  if (i === front) return; front = i;
  const p = PLATES[i];
  const nameEl = $('#dishName'), descEl = $('#dishDesc');
  const swap = () => { nameEl.innerHTML = `${p.name}<span class="dish__price">${p.price}</span>`; descEl.textContent = p.desc; };
  if (reduce) swap();
  else gsap.timeline().to([nameEl, descEl], { opacity: 0, y: 10, duration: 0.15 }).add(swap).to([nameEl, descEl], { opacity: 1, y: 0, duration: 0.35, stagger: 0.05 });
  dots.forEach((d, k) => d.classList.toggle('on', k === i));
}
if (reduce) {
  ringWrap.classList.add('is-static');
  setDish(0);
} else {
  sizeRing(); addEventListener('resize', sizeRing);
  ScrollTrigger.create({ trigger: '.mesa', start: 'top top', end: 'bottom bottom', scrub: true,
    snap: { snapTo: 1 / (N - 1), duration: { min: 0.2, max: 0.6 }, delay: 0.08, ease: 'power2.inOut' },
    onUpdate: s => { scrollA = s.progress * (N - 1) * STEP; } });
  // drag the table
  let down = false, lastX = 0, vel = 0;
  ringWrap.addEventListener('pointerdown', e => { down = true; lastX = e.clientX; vel = 0; gsap.killTweensOf(window.__drag); ringWrap.setPointerCapture(e.pointerId); });
  ringWrap.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - lastX; lastX = e.clientX; vel = dx; dragA += dx * -0.28; });
  const release = () => { if (!down) return; down = false;
    const target = Math.round((scrollA + dragA + vel * -2.2) / STEP) * STEP - scrollA;
    window.__drag = { v: dragA }; gsap.to(window.__drag, { v: target, duration: 0.9, ease: 'power3.out', onUpdate() { dragA = this.targets()[0].v; } }); };
  ringWrap.addEventListener('pointerup', release); ringWrap.addEventListener('pointercancel', release);
  const nudge = d => { const target = Math.round((scrollA + dragA) / STEP + d) * STEP - scrollA; window.__drag = { v: dragA }; gsap.to(window.__drag, { v: target, duration: 0.8, ease: 'power3.inOut', onUpdate() { dragA = this.targets()[0].v; } }); };
  $('#prev').addEventListener('click', () => nudge(-1)); $('#next').addEventListener('click', () => nudge(1));
  ringWrap.tabIndex = 0;
  ringWrap.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); nudge(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); nudge(-1); } });
  gsap.ticker.add(() => {
    const a = scrollA + dragA;
    curA += (a - curA) * 0.12;
    ring.style.transform = `translateZ(${-R}px) rotateY(${-curA}deg)`;
    let best = 0, bestD = 999;
    cards.forEach((c, i) => {
      let rel = ((i * STEP - curA) % 360 + 540) % 360 - 180;
      const d = Math.abs(rel);
      if (d < bestD) { bestD = d; best = i; }
      c.style.filter = `brightness(${1 - Math.min(d, 150) / 150 * 0.55})`;
      c.style.opacity = d > 120 ? Math.max(0, 1 - (d - 120) / 50) : 1;
    });
    setDish(best);
  });
  gsap.from('.mesa__head > *', { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.mesa', start: 'top 70%' } });
}

/* ---------- lunch counter ---------- */
if (!reduce) {
  const num = $('#lunchNum'), o = { v: 0 };
  gsap.to(o, { v: 9.5, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: '.lunch', start: 'top 75%' }, onUpdate: () => { num.textContent = o.v.toFixed(2); } });
  gsap.from('.lunch h2', { yPercent: 30, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.lunch', start: 'top 75%' } });
  gsap.from('.lunch li', { x: 40, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'expo.out', scrollTrigger: { trigger: '.lunch ul', start: 'top 80%' } });
}

/* ---------- menu ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const list = $('#menuList'), chipsRow = $('#chips'), q = $('#q');
chipsRow.innerHTML = MENU.map(c => `<button type="button" data-cat="${c.id}">${esc(c.name)}</button>`).join('');
function mark(text, term) {
  const t = esc(text);
  if (!term) return t;
  const i = text.toLowerCase().indexOf(term);
  if (i < 0) return t;
  return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + term.length)) + '</mark>' + esc(text.slice(i + term.length));
}
function renderMenu(term = '') {
  term = term.trim().toLowerCase();
  let count = 0;
  const html = MENU.map(c => {
    const items = c.items.filter(it => !term || (it.n + ' ' + it.d + ' ' + c.name).toLowerCase().includes(term));
    if (!items.length) return '';
    count += items.length;
    return `<section class="cat" id="m-${c.id}" aria-labelledby="h-${c.id}"><h3 id="h-${c.id}">${esc(c.name)} <small>${items.length} ${items.length === 1 ? 'dish' : 'dishes'}</small></h3>${c.note && !term ? `<p class="cat__note">${esc(c.note)}</p>` : ''}<div class="items">` +
      items.map(it => `<article class="item"><div class="item__top"><span class="item__name">${mark(it.n, term)}</span>${it.star ? '<span class="item__star">★ house favorite</span>' : ''}<span class="item__dots"></span>${it.p ? `<span class="item__price">${it.p === 'MP' ? 'Market' : '$' + esc(it.p)}</span>` : ''}</div><p class="item__desc">${mark(it.d, term)}</p></article>`).join('') + '</div></section>';
  }).join('');
  list.innerHTML = html || `<p class="menu__empty">Nothing on the menu matches “${esc(term)}”. Try shrimp, steak, birria or vegetarian.</p>`;
  $$('button', chipsRow).forEach(b => { b.hidden = !!term && !$('#m-' + b.dataset.cat); });
  setupSpy();
  ScrollTrigger.refresh();
}
let spies = [];
function setupSpy() {
  spies.forEach(s => s.kill()); spies = [];
  $$('.cat', list).forEach(sec => {
    spies.push(ScrollTrigger.create({ trigger: sec, start: 'top 160px', end: 'bottom 160px', onToggle: s => {
      if (!s.isActive) return;
      $$('button', chipsRow).forEach(b => b.setAttribute('aria-current', b.dataset.cat === sec.id.slice(2) ? 'true' : 'false'));
      const b = $(`button[data-cat="${sec.id.slice(2)}"]`, chipsRow);
      if (b) chipsRow.scrollTo({ left: b.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
    } }));
  });
}
chipsRow.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; const sec = $('#m-' + b.dataset.cat); if (sec) { if (lenis) lenis.scrollTo(sec, { offset: -150, duration: 1.2 }); else sec.scrollIntoView(); } });
let qt; q.addEventListener('input', () => { clearTimeout(qt); qt = setTimeout(() => renderMenu(q.value), 120); });
renderMenu();
if (!reduce) {
  gsap.from('.menu__head > *', { y: 50, opacity: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.menu', start: 'top 75%' } });
}

/* ---------- cantina + visit ---------- */
if (!reduce) {
  gsap.fromTo('#margImg', { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.cantina', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.cantina__photo', { clipPath: 'inset(30% 30% 30% 30% round 200px)', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.cantina', start: 'top 65%' } });
  gsap.from('.cantina h2, .visit h2', { yPercent: 40, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: '.cantina h2', start: 'top 85%' } });
  gsap.from('.visit__photo', { clipPath: 'inset(20% 20% 20% 20% round 200px)', duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.visit', start: 'top 65%' } });
  gsap.from('.foot__big', { yPercent: 60, opacity: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '.foot', start: 'top 90%' } });
  // magnetic buttons
  $$('.btn').forEach(b => {
    b.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 }); });
    b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, .5)' }));
  });
}

/* open now, in Burlington's time */
(function status() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const get = t => parts.find(p => p.type === t)?.value;
  const d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const m = (+get('hour')) * 60 + (+get('minute'));
  const late = [5, 6].includes(d), regular = [0, 2, 3, 4].includes(d);
  let open = false, until = '';
  if ((regular || late) && m >= 660) { open = late || m < 1320; until = late ? '1:30 am' : '10 pm'; }
  if ([6, 0].includes(d) && m < 90) { open = true; until = '1:30 am'; }
  const el = $('#status');
  el.classList.toggle('open', open);
  el.lastElementChild.textContent = open ? `Open now · until ${until}` : (d === 1 || (d === 0 && m >= 1320) ? 'Closed today · opens Tuesday at 11 am' : (m < 660 ? 'Opens today at 11 am' : 'Closed now · opens tomorrow at 11 am'));
  const row = $(`#hours dt[data-d="${m < 90 && [6, 0].includes(d) ? (d + 6) % 7 : d}"]`);
  if (row) { row.classList.add('today'); row.nextElementSibling.classList.add('today'); }
})();

addEventListener('load', () => ScrollTrigger.refresh());

/* papel picado: string the flags, let a fast scroll blow them */
const picado = $('#picado');
picado.innerHTML = Array.from({ length: 16 }, (_, i) => `<span class="flag" style="--i:${i}"></span>`).join('');
if (!reduce) {
  const flags = picado.children;
  ScrollTrigger.create({ trigger: '.cantina', start: 'top bottom', end: 'bottom top',
    onUpdate: s => { const v = gsap.utils.clamp(-14, 14, s.getVelocity() / 120); gsap.to(flags, { rotationX: Math.abs(v) * 2.5, skewX: v, duration: 0.4, stagger: 0.02, overwrite: 'auto' }); gsap.to(flags, { rotationX: 0, skewX: 0, duration: 1.4, delay: 0.4, ease: 'elastic.out(1, .4)', overwrite: false }); } });
}
}
