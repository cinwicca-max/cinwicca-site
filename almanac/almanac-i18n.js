// ── Soul Almanac · free-access notice · EN / PT-BR / ES-ES ──
// Load AFTER i18n.js:
//   <script src="i18n.js"></script>
//   <script src="almanac-i18n.js"></script>
// The banner appears at the top of the page. To place it yourself,
// add <div id="almanac-notice"></div> where you want it.

(function () {
  const keys = {
    en: {
      "almanac.free.title": "🔥 Free while the Phoenix sleeps",
      "almanac.free.p1": "The Soul Almanac is open to you freely as we move toward 2027, when, in Human Design, the great cycle turns and the Sleeping Phoenix begins to wake. Until then, every page is yours to explore: the days, the Moon, the Gates and the Gene Keys.",
      "almanac.free.p2": "This is a living almanac, and your experience shapes it. If something touches you, or something could be clearer, I would love to hear from you. And if it brings light to your days, you're welcome to leave a little offering at <a href=\"https://ko-fi.com/cinwicca\" target=\"_blank\" rel=\"noopener\">ko-fi.com/cinwicca</a>.",
      "almanac.free.sign": "With gratitude, Cin"
    },
    pt: {
      "almanac.free.title": "🔥 Livre enquanto a Fênix dorme",
      "almanac.free.p1": "O Almanaque da Alma está aberto a você, gratuitamente, enquanto caminhamos rumo a 2027, quando, no Human Design, o grande ciclo se transforma e a Fênix Adormecida começa a despertar. Até lá, cada página é sua para explorar: os dias, a Lua, os Portais e as Chaves Genéticas.",
      "almanac.free.p2": "Este é um almanaque vivo, e a sua experiência ajuda a moldá-lo. Se algo tocar você, ou puder ficar mais claro, eu adoraria ouvir. E se ele trouxer luz aos seus dias, você pode deixar uma pequena oferta em <a href=\"https://ko-fi.com/cinwicca\" target=\"_blank\" rel=\"noopener\">ko-fi.com/cinwicca</a>.",
      "almanac.free.sign": "Com gratidão, Cin"
    },
    es: {
      "almanac.free.title": "🔥 Libre mientras el Fénix duerme",
      "almanac.free.p1": "El Almanaque del Alma está abierto para ti, de forma gratuita, mientras caminamos hacia 2027, cuando, en el Human Design, el gran ciclo se transforma y el Fénix Dormido comienza a despertar. Hasta entonces, cada página es tuya para explorar: los días, la Luna, las Puertas y las Claves Genéticas.",
      "almanac.free.p2": "Este es un almanaque vivo, y tu experiencia ayuda a darle forma. Si algo te toca, o podría ser más claro, me encantaría escucharte. Y si trae luz a tus días, puedes dejar una pequeña ofrenda en <a href=\"https://ko-fi.com/cinwicca\" target=\"_blank\" rel=\"noopener\">ko-fi.com/cinwicca</a>.",
      "almanac.free.sign": "Con gratitud, Cin"
    }
  };

  window.__i18n = window.__i18n || { en: {}, pt: {}, es: {} };
  for (const lang of Object.keys(keys)) {
    window.__i18n[lang] = Object.assign(window.__i18n[lang] || {}, keys[lang]);
  }

  const css = `
    .almanac-notice{max-width:760px;margin:1.5rem auto;padding:1.4rem 1.6rem;
      border:1px solid rgba(201,162,75,.55);border-radius:14px;
      background:linear-gradient(135deg,rgba(201,162,75,.10),rgba(120,60,140,.08));
      font-family:inherit;line-height:1.6;text-align:center}
    .almanac-notice h3{margin:0 0 .6rem;font-weight:500;letter-spacing:.02em}
    .almanac-notice p{margin:.5rem 0}
    .almanac-notice .sign{font-style:italic;opacity:.85;margin-top:.8rem}
    .almanac-notice a{color:inherit;text-decoration:underline}
    .almanac-notice .lang-switch{margin-top:.9rem;display:flex;gap:.4rem;justify-content:center}
    .almanac-notice .lang-switch button{background:none;border:1px solid rgba(201,162,75,.55);
      border-radius:999px;padding:.15rem .7rem;cursor:pointer;font:inherit;font-size:.85em;color:inherit}
    .almanac-notice .lang-switch button.active{background:rgba(201,162,75,.25)}`;

  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    let box = document.getElementById('almanac-notice');
    if (!box) {
      box = document.createElement('div');
      box.id = 'almanac-notice';
      (document.querySelector('main') || document.body).prepend(box);
    }
    box.className = 'almanac-notice';

    // Add a language switch only if the page doesn't already have one
    const hasSwitch = document.querySelector('.lang-switch');
    box.innerHTML = `
      <h3 data-i18n="almanac.free.title"></h3>
      <p data-i18n="almanac.free.p1"></p>
      <p data-i18n="almanac.free.p2"></p>
      <p class="sign" data-i18n="almanac.free.sign"></p>
      ${hasSwitch ? '' : `<div class="lang-switch">
        <button data-lang="en">EN</button><button data-lang="pt">PT</button><button data-lang="es">ES</button>
      </div>`}`;

    if (typeof applyI18n === 'function') {
      box.querySelectorAll('.lang-switch button').forEach(b =>
        b.addEventListener('click', () => applyI18n(b.getAttribute('data-lang'))));
      applyI18n(window.__lang || 'en');
    } else {
      // Fallback if i18n.js isn't on the page: show English
      const dict = window.__i18n.en;
      box.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = dict[el.getAttribute('data-i18n')] || '';
      });
      box.querySelectorAll('.lang-switch button').forEach(b =>
        b.addEventListener('click', () => {
          const d = window.__i18n[b.getAttribute('data-lang')] || dict;
          box.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerHTML = d[el.getAttribute('data-i18n')] || '';
          });
          box.querySelectorAll('.lang-switch button').forEach(x =>
            x.classList.toggle('active', x === b));
        }));
    }
  });
})();
