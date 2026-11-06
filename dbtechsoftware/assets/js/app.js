'use strict';
/* =========================================================
   CONFIGURACIÓN — edita estos valores antes de publicar
   ========================================================= */
const CONFIG = {
  // Llave de acceso de https://web3forms.com (gratis). Mientras diga "YOUR_..."
  // el formulario funciona en MODO DEMO (simula el envío, no manda correo).
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  contactEmail: "contacto@dbtechsoftware.com",
  whatsapp: "573000000000",         // Formato internacional sin "+" ni espacios
  minFillSeconds: 4,                // Anti-bot: un humano tarda más que esto en llenar el formulario
  cooldownSeconds: 60               // Anti-abuso: tiempo mínimo entre envíos desde el mismo navegador
};

/* =========================================================
   TRADUCCIONES (el español se toma del HTML; aquí solo inglés)
   ========================================================= */
const EN = {
  "meta.title": "DB Tech Software | Custom software development from Colombia",
  "meta.desc": "DB Tech Software designs, builds and runs custom software: web and mobile apps, cloud, integrations and AI. A software company based in Colombia.",
  skip: "Skip to content", navLabel: "Main", menu: "Menu",
  "nav.services": "Services", "nav.cases": "Case studies", "nav.process": "Process", "nav.about": "About us", "nav.faq": "FAQ", "nav.contact": "Contact", "nav.cta": "Let's talk",
  "theme.label": "Change theme", "theme.light": "Light", "theme.dark": "Dark", "theme.ocean": "Ocean", "theme.sunset": "Sunset",
  "hero.eyebrow": "Software development · Made in Colombia 🇨🇴",
  "hero.title": 'We build the software that <span class="gradient-text">drives</span> your business',
  "hero.lead": "We design, build and run web, mobile and cloud applications for companies that want to grow without technology limits. Senior teams, agile processes and a nearshore partner in your time zone.",
  "hero.cta1": "Book a free consultation", "hero.cta2": "See our services", "hero.note": "We reply within one business day",
  "hero.code": "// Your next technology partner", "hero.fc1": "Successful deploy", "hero.fc2": "last 12 months",
  "stats.projects": "projects delivered", "stats.years": "years building software", "stats.clients": "clients in 6 countries", "stats.nps": "of clients recommend us",
  "clients.title": "Companies that trust us",
  "services.eyebrow": "Services", "services.title": "Everything your digital product needs, in one team",
  "services.lead": "From idea to production. Pick a single service or a full team that takes care of it end to end.",
  "s1.t": "Custom web development", "s1.d": "Robust, fast and secure platforms, portals and internal systems, designed around how your company works.",
  "s2.t": "Mobile apps", "s2.d": "iOS and Android apps from a single codebase, from prototype to store release and beyond.",
  "s3.t": "Cloud & DevOps", "s3.d": "Cloud migration, containers, CI/CD and infrastructure as code to scale without surprises and cut costs.",
  "s4.t": "Integrations & APIs", "s4.d": "We connect your ERP, CRM, payment gateways and e-invoicing so all your systems speak the same language.", "s4.tag": "E-invoicing",
  "s5.t": "Data & artificial intelligence", "s5.d": "Dashboards, analytics, process automation and generative-AI assistants that turn your data into decisions.",
  "s6.t": "Consulting & dedicated teams", "s6.d": "Architecture, code audits and nearshore teams that plug into your operation in your own time zone.", "s6.tag1": "Architecture",
  "cases.eyebrow": "Case studies", "cases.title": "Results you can measure", "cases.lead": "A few of the projects we are most proud of.",
  "c1.tag": "Logistics", "c1.t": "Real-time fleet tracking for Andina Logística", "c1.d": "Web platform and driver app with GPS, optimized routes and digital proof of delivery for 600+ vehicles.", "c1.m": "in delivery times",
  "c2.tag": "Healthcare", "c2.t": "Appointments & telehealth for Salud Vital IPS", "c2.d": "Mobile app for booking, video visits and lab results, integrated with the existing medical records system.", "c2.m": "patients served per year",
  "c3.tag": "E-commerce", "c3.t": "Export store for Café Altamira", "c3.d": "Bilingual e-commerce with international payments, subscriptions and automatic shipping rates to 14 countries.", "c3.m": "online sales in the first year",
  "process.eyebrow": "How we work", "process.title": "A clear process, no surprises", "process.lead": "You'll know what we're building, what it costs and when it will be ready, at every stage.",
  "p1.t": "Discovery", "p1.d": "We learn your business, users and goals. We define scope, priorities and a transparent estimate.", "p1.time": "1 – 2 weeks",
  "p2.t": "UX/UI design", "p2.d": "We build interactive prototypes and validate them with real users before writing a single line of code.", "p2.time": "2 – 3 weeks",
  "p3.t": "Agile development", "p3.d": "Two-week sprints with working demos, automated tests and full visibility into progress.", "p3.time": "Iterative",
  "p4.t": "Launch & evolution", "p4.d": "We deploy, monitor and keep improving your product with ongoing support.", "p4.time": "Ongoing support",
  "about.eyebrow": "About us", "about.title": "Colombian engineering, international standards",
  "about.lead": "DB Tech Software was founded in 2017 with a simple idea: any company, whatever its size, deserves world-class technology. Today we are a team of 40+ engineers, designers and consultants building software for clients in Colombia, Latin America and the United States.",
  "about.mT": "Mission", "about.m": "To create reliable, custom software that helps our clients operate better, grow faster and compete in a digital world.",
  "about.vT": "Vision", "about.v": "By 2030, to be Latin America's go-to Colombian software company for engineering quality and product impact.",
  "why.title": "Why choose us?",
  "why.1t": "Senior talent", "why.1d": "Over 70% of our team has more than 5 years of experience.",
  "why.2t": "Your time zone", "why.2d": "GMT-5: real-time collaboration with Latin America and the US.",
  "why.3t": "Transparent pricing", "why.3d": "Clear proposals, per project or per team, with no hidden costs.",
  "why.4t": "You own the code", "why.4d": "100% client-owned intellectual property and complete documentation.",
  "why.5t": "Bilingual communication", "why.5d": "Teams that work fluently in English and Spanish.",
  "val.1": "Technical excellence", "val.2": "Transparency", "val.3": "Closeness", "val.4": "Responsible innovation",
  "stack.title": "Technologies we master",
  "t.eyebrow": "Testimonials", "t.title": "What our clients say",
  "t1.q": "“DB Tech understood our operation better than many of our own vendors. The tracking platform completely changed the way we dispatch.”", "t1.r": "Operations Manager, Andina Logística",
  "t2.q": "“They hit every deadline and communication was flawless. Three projects in, and we keep growing with them.”", "t2.r": "CEO, FinCo Capital",
  "t3.q": "“Their nearshore team blended with ours from day one. Top-notch engineering, in our own time zone.”", "t3.r": "CTO, Northbridge Health (USA)",
  "faq.eyebrow": "FAQ", "faq.title": "Your questions, answered",
  "f1.q": "How much does a project cost?", "f1.a": "It depends on scope, complexity and timeline. After a free discovery session we send a detailed proposal, fixed-price or dedicated team, with no commitment.",
  "f2.q": "How long does it take?", "f2.a": "An MVP is usually ready in 8 to 12 weeks. Larger projects are delivered in phases so you get value from the first weeks.",
  "f3.q": "Do you work with companies outside Colombia?", "f3.a": "Yes. We serve clients in Latin America, the United States and Spain, working in English or Spanish and in compatible time zones.",
  "f4.q": "Who owns the source code?", "f4.a": "You do. At the end of each stage we hand over the code, documentation and access. IP is 100% yours.",
  "f5.q": "Do you offer support after launch?", "f5.a": "Yes, with monthly support and maintenance plans that include monitoring, bug fixes, security updates and new features.",
  "contact.eyebrow": "Contact", "contact.title": "Let's talk about your project",
  "contact.lead": "Tell us what you have in mind. A specialist will reach out within one business day to schedule a free consultation.",
  "contact.email": "Email", "contact.loc": "Location", "contact.locV": "Colombia · Clients across the Americas", "contact.hours": "Hours", "contact.hoursV": "Mon – Fri · 8:00 am – 6:00 pm (GMT-5)",
  "form.name": "Full name", "form.namePh": "e.g. Ann Smith", "form.email": "Email", "form.company": "Company", "form.companyPh": "Your company name",
  "form.phone": "Phone / WhatsApp", "form.service": "Service of interest", "form.select": "Select an option", "form.other": "Other",
  "form.budget": "Estimated budget", "form.unknown": "Not sure yet", "form.msg": "Tell us about your project", "form.msgPh": "What do you want to build? What problem do you want to solve?",
  "form.consent": 'I authorize DB Tech Software to process my personal data to handle this request, in accordance with the <a href="#privacidad">Privacy Policy</a> (Colombian Law 1581 of 2012).',
  "form.req": "* Required fields", "form.send": "Send message",
  "form.errName": "Please enter your name.", "form.errEmail": "Please enter a valid email.", "form.errService": "Please select a service.",
  "form.errMsg": "Tell us a bit more (at least 10 characters).", "form.errConsent": "You must accept data processing to continue.",
  "footer.tag": "Custom software, cloud and AI for companies that want to grow. Proudly made in Colombia.",
  "footer.company": "Company", "fs.1": "Web development", "fs.2": "Mobile apps", "fs.4": "Data & AI",
  "footer.privacy": "Privacy policy", "footer.rights": "All rights reserved.", "footer.made": "Made with ♥ in Colombia 🇨🇴"
};
const MSG = {
  es: { sending: "Enviando…", ok: "¡Gracias! Recibimos tu mensaje y te contactaremos muy pronto.", demo: " (Modo demo: configura la llave de Web3Forms para recibir correos reales.)",
        fail: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a <a href="mailto:{e}">{e}</a>.', fix: "Revisa los campos marcados.", wait: "Ya recibimos un mensaje tuyo hace un momento. Espera {s} segundos para enviar otro.",
        waText: "Hola DB Tech Software, me gustaría hablar sobre un proyecto." },
  en: { sending: "Sending…", ok: "Thank you! We received your message and will be in touch very soon.", demo: " (Demo mode: set your Web3Forms key to receive real emails.)",
        fail: 'We couldn\'t send your message. Please try again or email us at <a href="mailto:{e}">{e}</a>.', fix: "Please check the highlighted fields.", wait: "We just received a message from you. Please wait {s} seconds before sending another one.",
        waText: "Hi DB Tech Software, I'd like to talk about a project." }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
const root = document.documentElement;

/* ---------- Idioma ---------- */
const ES = {};
$$('[data-i18n]').forEach(el => { ES[el.dataset.i18n] ??= el.innerHTML; });
$$('[data-i18n-ph]').forEach(el => { ES[el.dataset.i18nPh] ??= el.placeholder; });
$$('[data-i18n-aria]').forEach(el => { ES[el.dataset.i18nAria] ??= el.getAttribute('aria-label'); });
ES["meta.title"] = document.title;
ES["meta.desc"] = $('meta[name="description"]').content;
let lang = 'es';

function setLang(l) {
  lang = l === 'en' ? 'en' : 'es';
  const dict = lang === 'en' ? EN : ES;
  const t = k => dict[k] ?? ES[k];
  $$('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (v != null) el.innerHTML = v; });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.title = t("meta.title");
  $('meta[name="description"]').content = t("meta.desc");
  root.lang = lang;
  $$('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $$('.js-wa').forEach(a => a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(MSG[lang].waText)}`);
  store.set('dbt-lang', lang);
}
$$('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Temas ---------- */
const THEME_COLORS = { light: '#f7f8fc', dark: '#0a0e1a', ocean: '#03161d', sunset: '#fff9f4' };
function setTheme(t) {
  if (!THEME_COLORS[t]) t = 'light';
  root.setAttribute('data-theme', t);
  $('meta[name="theme-color"]').content = THEME_COLORS[t];
  $$('[data-theme-opt]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.themeOpt === t)));
  store.set('dbt-theme', t);
}
const themeBtn = $('#themeBtn'), themeMenu = $('#themeMenu');
function toggleThemeMenu(open) {
  themeMenu.classList.toggle('open', open);
  themeBtn.setAttribute('aria-expanded', String(open));
}
themeBtn.addEventListener('click', e => { e.stopPropagation(); toggleThemeMenu(!themeMenu.classList.contains('open')); });
$$('[data-theme-opt]').forEach(b => b.addEventListener('click', () => { setTheme(b.dataset.themeOpt); toggleThemeMenu(false); themeBtn.focus(); }));
document.addEventListener('click', e => { if (!e.target.closest('.theme-picker')) toggleThemeMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { toggleThemeMenu(false); toggleNav(false); } });

/* ---------- Menú móvil ---------- */
const menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
function toggleNav(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
}
menuBtn.addEventListener('click', () => toggleNav(!navLinks.classList.contains('open')));
$$('#navLinks a').forEach(a => a.addEventListener('click', () => toggleNav(false)));

/* ---------- Header con sombra + enlace activo ---------- */
const header = $('.header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 8), { passive: true });
const sections = $$('main section[id]');
const navMap = new Map($$('#navLinks a').map(a => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { navMap.forEach(a => a.classList.remove('active')); navMap.get(en.target.id)?.classList.add('active'); }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

/* ---------- Animaciones de aparición + contadores ---------- */
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    $$('[data-count]', en.target).forEach(countUp);
    reveal.unobserve(en.target);
  });
}, { threshold: .12 });
$$('.reveal').forEach(el => reveal.observe(el));
function countUp(el) {
  const end = +el.dataset.count, suf = el.dataset.suffix || '', dur = 1400, t0 = performance.now();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e) + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ---------- Marquee de clientes (duplica para bucle infinito) ---------- */
const track = $('#marquee');
track.innerHTML += track.innerHTML.replace(/class="client-logo"/g, 'class="client-logo" aria-hidden="true"');

/* ---------- Formulario de contacto ---------- */
const formLoadedAt = Date.now();
const form = $('#contactForm'), statusBox = $('#formStatus'), submitBtn = $('#submitBtn');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validate() {
  const checks = [
    ['#f-name', v => v.trim().length >= 2],
    ['#f-email', v => EMAIL_RE.test(v.trim())],
    ['#f-service', v => v !== ''],
    ['#f-msg', v => v.trim().length >= 10],
  ];
  let firstBad = null;
  checks.forEach(([sel, ok]) => {
    const el = $(sel), good = ok(el.value);
    el.closest('.field').classList.toggle('invalid', !good);
    el.setAttribute('aria-invalid', String(!good));
    if (!good && !firstBad) firstBad = el;
  });
  const consent = $('#f-consent');
  consent.closest('.field').classList.toggle('invalid', !consent.checked);
  if (!consent.checked && !firstBad) firstBad = consent;
  return firstBad;
}
form.addEventListener('input', e => {
  const f = e.target.closest('.field');
  if (f && f.classList.contains('invalid')) validate();
});

function showStatus(kind, html) {
  statusBox.className = 'form-status ' + kind;
  statusBox.innerHTML = html;
}
form.addEventListener('submit', async e => {
  e.preventDefault();
  statusBox.className = 'form-status';
  const bad = validate();
  if (bad) { bad.focus(); showStatus('fail', MSG[lang].fix); return; }
  // Anti-bot: honeypot lleno o formulario enviado demasiado rápido → se descarta en silencio
  if (form.botcheck.checked || Date.now() - formLoadedAt < CONFIG.minFillSeconds * 1000) {
    showStatus('ok', MSG[lang].ok); form.reset(); return;
  }
  // Anti-abuso: enfriamiento entre envíos
  const last = +(store.get('dbt-last-submit') || 0), left = Math.ceil((last + CONFIG.cooldownSeconds * 1000 - Date.now()) / 1000);
  if (left > 0) { showStatus('fail', MSG[lang].wait.replace('{s}', left)); return; }

  // Normaliza y recorta todos los campos (sin HTML: el correo se arma como texto plano en JSON)
  const clip = (v, n) => String(v || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, n);
  const raw = Object.fromEntries(new FormData(form));
  const data = { name: clip(raw.name, 100), email: clip(raw.email, 120), company: clip(raw.company, 100), phone: clip(raw.phone, 30), budget: clip(raw.budget, 30), message: clip(raw.message, 3000) };
  const serviceLabel = $('#f-service').selectedOptions[0].textContent;
  const payload = {
    access_key: CONFIG.web3formsKey,
    subject: `Nuevo contacto web: ${data.name.replace(/[\r\n]+/g, ' ')} — ${serviceLabel}`,
    from_name: "Sitio web DB Tech Software",
    replyto: data.email,
    "Nombre": data.name, "Correo": data.email, "Empresa": data.company || "—", "Teléfono": data.phone || "—",
    "Servicio": serviceLabel, "Presupuesto": data.budget || "—", "Mensaje": data.message,
    "Idioma": lang.toUpperCase(), "Autoriza tratamiento de datos": "Sí",
    botcheck: false
  };

  submitBtn.disabled = true; submitBtn.classList.add('loading');
  try {
    if (CONFIG.web3formsKey.startsWith('YOUR_')) {
      await new Promise(r => setTimeout(r, 1100));          // MODO DEMO
      console.info('[DB Tech] Modo demo — esto es lo que se enviaría:', payload);
      showStatus('ok', MSG[lang].ok + MSG[lang].demo);
    } else {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', credentials: 'omit', referrerPolicy: 'strict-origin', signal: AbortSignal.timeout(15000), headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.message || res.status);
      showStatus('ok', MSG[lang].ok);
    }
    store.set('dbt-last-submit', String(Date.now()));
    form.reset();
  } catch (err) {
    console.error(err);
    showStatus('fail', MSG[lang].fail.replaceAll('{e}', CONFIG.contactEmail));
  } finally {
    submitBtn.disabled = false; submitBtn.classList.remove('loading');
  }
});

/* ---------- Inicio ---------- */
$('#year').textContent = new Date().getFullYear();
setTheme(root.getAttribute('data-theme'));
setLang(root.getAttribute('data-lang-pending') || 'es');
