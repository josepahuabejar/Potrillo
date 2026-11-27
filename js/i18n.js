/* English / Spanish toggle. Static text is swapped by exact-match lookup in ES.ui (see es.js);
   dynamic parts (menu, plates, hours status, intro) are rendered by app.js through I18N. */
window.I18N = (() => {
  const ES = window.ES || { ui: {}, msg: {}, menu: {}, plates: [] };
  const skip = '#menuList, #chips, #dishName, #dishDesc, #status, #ticker, #introText, script, style, svg, .medal, #lunchNum';
  const nodes = new Map();   // text node -> {en, lead, trail}
  const attrs = [['placeholder'], ['aria-label'], ['alt']];
  const origAttr = new WeakMap();
  let lang = 'en';
  try { lang = localStorage.getItem('potrillo-lang') === 'es' ? 'es' : 'en'; } catch {}
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const api = {
    get lang() { return lang; }, get es() { return lang === 'es'; }, ES,
    menuCat: c => (lang === 'es' && ES.menu[c.id]) ? { name: ES.menu[c.id].name, note: ES.menu[c.id].note || c.note } : { name: c.name, note: c.note },
    item(c, it, i) { const t = lang === 'es' && ES.menu[c.id] && ES.menu[c.id].items[i]; return t ? { n: t[0] || it.n, d: t[1] || it.d } : { n: it.n, d: it.d }; },
    plate: (p, i) => (lang === 'es' && ES.plates[i]) ? { ...p, ...ES.plates[i] } : p,
    msg: k => (lang === 'es' && ES.msg[k]) || null,
    apply() {
      const es = lang === 'es';
      document.documentElement.lang = es ? 'es' : 'en';
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let n; (n = walker.nextNode());) {
        if (n.parentElement.closest(skip)) continue;
        let rec = nodes.get(n);
        if (!rec) {
          const raw = n.nodeValue, key = norm(raw);
          if (!key || !(key in ES.ui)) continue;
          rec = { en: raw, key }; nodes.set(n, rec);
        }
        const tr = ES.ui[rec.key];
        if (es && tr) { const lead = rec.en.match(/^\s*/)[0], trail = rec.en.match(/\s*$/)[0]; n.nodeValue = lead + tr + trail; }
        else n.nodeValue = rec.en;
      }
      document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(el => {
        let o = origAttr.get(el); if (!o) { o = {}; origAttr.set(el, o); }
        attrs.forEach(([a]) => {
          if (!el.hasAttribute(a)) return;
          if (!(a in o)) { const v = el.getAttribute(a); if (!(v in ES.ui)) return; o[a] = v; }
          el.setAttribute(a, es && ES.ui[o[a]] ? ES.ui[o[a]] : o[a]);
        });
      });
      document.title = es ? ES.msg.title : 'El Potrillo Cocina Mexicana · Burlington, NC';
      document.querySelectorAll('[data-lang-toggle]').forEach(b => {
        b.textContent = es ? 'EN' : 'ES';
        b.setAttribute('aria-label', es ? 'Switch to English' : 'Cambiar a español');
        b.lang = es ? 'en' : 'es';
      });
    },
    set(l) {
      lang = l === 'es' ? 'es' : 'en';
      try { localStorage.setItem('potrillo-lang', lang); } catch {}
      api.apply();
      document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }
  };
  document.addEventListener('click', e => { if (e.target.closest('[data-lang-toggle]')) api.set(lang === 'es' ? 'en' : 'es'); });
  return api;
})();
