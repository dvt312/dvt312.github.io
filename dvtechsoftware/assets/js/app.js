'use strict';
/* =========================================================
   CONFIGURACIÓN — edita estos valores antes de publicar
   ========================================================= */
const CONFIG = {
  // Llave de acceso de https://web3forms.com (gratis). Mientras diga "YOUR_..."
  // el formulario funciona en MODO DEMO (simula el envío, no manda correo).
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  contactEmail: "contacto@dvtechsoftware.com",
  whatsapp: "573000000000",         // Formato internacional sin "+" ni espacios
  minFillSeconds: 4,                // Anti-bot: un humano tarda más que esto en llenar el formulario
  cooldownSeconds: 60               // Anti-abuso: tiempo mínimo entre envíos desde el mismo navegador
};

/* =========================================================
   TRADUCCIONES (el español se toma del HTML; aquí solo inglés)
   ========================================================= */
const EN = {
  "meta.title": "DB Tech Software | Custom Software & Artificial Intelligence · Colombia",
  "meta.desc": "DB Tech Software is an AI-native software company from Colombia: AI agents, generative AI on your data, web and mobile development, cloud and LLMOps, built with AI-powered engineering workflows.",
  skip: "Skip to content", navLabel: "Main", menu: "Menu",
  "nav.ai": "AI", "nav.services": "Services", "nav.products": "Products", "nav.cases": "Cases", "nav.trust": "Trust", "nav.contact": "Contact", "nav.cta": "Let's talk",
  "theme.label": "Change theme", "theme.dark": "Neon (dark)", "theme.light": "Light",
  "hero.eyebrow": "AI-native software company · Made in Colombia",
  "hero.title": 'Intelligent software,<br><span class="gradient-text">built with AI.</span>',
  "hero.lead": "We build AI agents, platforms and applications that automate processes and multiply your company's productivity. Our teams run AI-powered engineering workflows, so we ship faster, with higher quality and at a lower cost.",
  "hero.cta1": "Book a free AI assessment", "hero.cta2": "How we use AI",
  "hero.trust": "Average rating from 45+ client companies", "hero.termAria": "A DB Tech AI agent workflow",
  "hero.fc1s": "with AI workflows", "hero.fc2": "last 12 months",
  "clients.title": "// Companies already innovating with us",
  "m.aria": "Key figures", "m.1": "projects delivered", "m.2": "AI solutions in production", "m.3": "less development time with AI", "m.4": "of clients recommend us",
  "ai.title": 'AI isn\'t just another service. <span class="gradient-text">It\'s how we work.</span>',
  "ai.lead": "We embed artificial intelligence into every stage of the development lifecycle. Our senior engineers work side by side with AI agents, so we deliver higher-quality software in less time.",
  "pl.1t": "AI-assisted discovery", "pl.1d": "We analyze documents, processes and interviews with LLMs to turn ideas into requirements and acceptance criteria in days, not weeks.",
  "pl.2t": "Accelerated design & prototyping", "pl.2d": "Interactive prototypes generated and refined with AI, validated with real users before we build.",
  "pl.3t": "Development with coding agents", "pl.3d": "Every engineer works with AI agents that speed up repetitive work, so people can focus on architecture, business and quality.",
  "pl.4t": "AI code & security review", "pl.4d": "Every change goes through automated quality, vulnerability and best-practice analysis before human review.",
  "pl.5t": "Auto-generated tests", "pl.5d": "AI generates unit, integration and end-to-end tests, for 80%+ coverage from the very first sprint.",
  "pl.6t": "Intelligent deployment & observability", "pl.6d": "Automated CI/CD, 24/7 monitoring and AI anomaly detection to fix incidents before you notice them.",
  "cmp.trad": "Traditional development",
  "cmp.r1": "Time to first MVP", "cmp.r1a": "4 – 6 months", "cmp.r1b": "8 – 12 weeks",
  "cmp.r2": "Test coverage", "cmp.r2a": "Manual and partial", "cmp.r2b": "80%+ automated",
  "cmp.r3": "Security review", "cmp.r3a": "At the end of the project", "cmp.r3b": "On every code change",
  "cmp.r4": "Documentation", "cmp.r4a": "Out of date", "cmp.r4b": "Generated and always current",
  "cmp.r5": "Total cost", "cmp.r5a": "High", "cmp.r5b": "Up to 30% lower",
  "cmp.note": "<b>Humans in charge:</b> AI accelerates, our engineers decide. Every line of code is reviewed and approved by people.",
  "services.label": "// 02 · SERVICES", "services.title": 'End-to-end solutions <span class="gradient-text">with AI at the core</span>',
  "services.lead": "From strategy to production. One team to take your company into the age of artificial intelligence.",
  "sv.featured": "★ Most requested",
  "sv.1t": "AI agents & intelligent automation", "sv.1d": "Autonomous agents that serve customers, process documents, query your systems and complete tasks end to end, with human oversight where it matters. Less manual work, more speed and zero repetitive tasks.",
  "sv.2t": "Generative AI on your data (RAG)", "sv.2d": "Assistants and search that answer with your company's own information, with verifiable citations and per-user permissions.",
  "sv.3t": "Web & mobile development", "sv.3d": "Modern, fast and secure platforms and apps, with AI built in from the design stage.",
  "sv.4t": "Cloud, DevOps & LLMOps", "sv.4d": "AI-ready scalable infrastructure: model evaluation, token spend control, versioning and monitoring.",
  "sv.5t": "Data & predictive analytics", "sv.5d": "Data pipelines, dashboards and models that predict demand, churn and fraud.",
  "sv.6t": "Integrations & APIs", "sv.6d": "We connect ERP, CRM, payments and e-invoicing, and expose them securely to your AI agents.",
  "sv.7t": "AI consulting & adoption", "sv.7d": "Maturity assessment, roadmap, use cases with measurable ROI, AI governance and team training. We help you move from pilots to real results.", "sv.7cta": "Request an assessment",
  "flow.user": "User", "flow.agent": "AI agent", "kpi.1": "autonomous operation", "kpi.2": "less manual work", "kpi.3": "average response time",
  "pr.label": "// 03 · PRODUCTS", "pr.title": 'AI products <span class="gradient-text">ready for your business</span>', "pr.lead": "Our own platforms, deployed in weeks and tailored to your operation.", "pr.avail": "Available",
  "pr.1": "Platform to build, orchestrate and monitor AI agents connected to your systems, with full traceability of every decision.", "pr.1m": "Orchestration · Audit · Multi-model",
  "pr.2": "Extracts data from invoices, contracts, IDs and tax forms with 98%+ accuracy and sends it straight to your ERP.", "pr.2m": "OCR + LLM · E-invoicing · ERP",
  "pr.3": "24/7 customer assistant for WhatsApp and web that answers, books, quotes and hands off to a human when needed.", "pr.3m": "WhatsApp · Web · Voice",
  "pr.4": "Ask your data in plain language and get answers, charts and alerts instantly, no SQL required.", "pr.4m": "Text-to-SQL · Dashboards · Alerts",
  "cases.label": "// 04 · CASE STUDIES", "cases.title": 'Real, <span class="gradient-text">measurable</span> results', "cases.lead": "This is how AI is transforming our clients' operations.",
  "c1.tag": "Logistics · AI agents", "c1.t": "Intelligent dispatch agent for Andina Logística", "c1.d": "An AI agent assigns routes, predicts delays and notifies customers in real time for a fleet of 600+ vehicles.", "c1.m": "in delivery times",
  "c2.tag": "Healthcare · Generative AI", "c2.t": "RAG assistant and WhatsApp scheduling for Salud Vital IPS", "c2.d": "Answers patient questions with verified information, books appointments and delivers lab results 24/7.", "c2.m": "of requests resolved with no human intervention",
  "c3.tag": "Fintech · DocAI", "c3.t": "AI credit analysis engine for FinCo Capital", "c3.d": "Automated document reading, identity verification and predictive scoring in a single flow.", "c3.m": "to approve a loan (previously 3 days)",
  "st.label": "// 05 · TECH STACK", "st.title": 'The technologies <span class="gradient-text">powering the future</span>',
  "st.lead": "We work with the market's leading models, frameworks and platforms and pick the right one for each problem, with no vendor lock-in.",
  "st.g1": "AI models", "st.g2": "Agents & orchestration", "st.g3": "Data & vectors", "st.g4": "Cloud & managed AI", "st.g5": "Product engineering", "st.g6": "DevOps, LLMOps & AI tooling",
  "tr.label": "// 06 · TRUST", "tr.title": 'Responsible, secure AI <span class="gradient-text">under your control</span>',
  "tr.lead": "We know trusting AI with your data and processes is a serious decision. That's why security and ethics sit at the core of everything we build.",
  "tr.1t": "Your data stays yours", "tr.1d": "We never use your information to train models. We can deploy AI in your own cloud or private infrastructure.",
  "tr.2t": "Secure by design", "tr.2d": "We apply the OWASP Top 10 and OWASP Top 10 for LLMs, prompt-injection testing, encryption and access control.",
  "tr.3t": "Regulatory compliance", "tr.3d": "Colombian data protection law (Ley 1581 of 2012), NDAs and practices aligned with ISO 27001.",
  "tr.4t": "Humans in charge", "tr.4d": "Critical decisions always have human oversight, with traceability and auditable logs of every AI action.",
  "tr.certs": "Team certified in:",
  "q1": "“We went from AI pilots that never left the lab to five agents running in production in just four months. DB Tech understands the business, not just the technology.”", "q1r": "Head of Innovation, Grupo Meridiano",
  "q2": "“The dispatch agent completely changed our operation. Decisions that used to take hours now take minutes.”", "q2r": "Operations Manager, Andina Logística",
  "q3": "“They hit every deadline and the code quality is flawless. Their AI-driven way of working shows in the speed of every release.”", "q3r": "CEO, FinCo Capital",
  "q4": "“Their nearshore team blended with ours from day one. Top-notch engineering, in our own time zone.”", "q4r": "CTO, Northbridge Health (USA)",
  "ab.label": "// ABOUT US", "ab.title": "Colombian engineering, global standards",
  "ab.lead": "Since 2017 we've been building software for companies in Colombia, Latin America and the United States. Today we are 40+ engineers, data scientists and designers who share one conviction: well-applied AI transforms businesses.",
  "ab.mT": "Mission", "ab.m": "To bring artificial intelligence and world-class software to every company, with solutions that deliver measurable results.",
  "ab.vT": "Vision", "ab.v": "By 2030, to be Latin America's reference software and AI company.",
  "ab.s1": "engineers and specialists", "ab.s2": "senior profiles (5+ years)", "ab.s3": "of the team uses AI daily", "ab.s4": "same time zone as the US",
  "faq.label": "// 07 · FAQ", "faq.title": "Your questions, answered",
  "f1.q": "Is my data safe if we use AI?", "f1.a": "Yes. We use enterprise versions of the models, which are not trained on your information. When needed, we deploy models in your own cloud or private infrastructure, with encryption, access control and audit logs.",
  "f2.q": "Which AI models do you use?", "f2.a": "We work with Claude, GPT, Gemini, Llama and Mistral, among others. We evaluate each case on quality, cost and latency and choose the best-fit model, with no dependency on a single vendor.",
  "f3.q": "How much does an AI project cost?", "f3.a": "It depends on the scope. We start with a free assessment and, if it makes sense, a 2–4 week proof of concept at a capped cost to validate ROI before scaling.",
  "f4.q": "Does AI replace developers?", "f4.a": "No. AI multiplies our engineers' productivity, but every architecture decision, review and release goes through expert people. That balance is what lets us move fast without sacrificing quality.",
  "f5.q": "Who owns the code and intellectual property?", "f5.a": "You do. We hand over the source code, documentation, prompts and access. IP for custom development is 100% the client's.",
  "f6.q": "Do you work with companies outside Colombia?", "f6.a": "Yes. We serve clients in Latin America, the United States and Spain, in English or Spanish and in compatible time zones.",
  "contact.label": "// 08 · CONTACT", "contact.title": 'Let\'s take your company <span class="gradient-text">into the AI era</span>',
  "contact.lead": "Tell us about your challenge. A specialist will reach out within one business day to schedule a free AI assessment.",
  "contact.email": "Email", "contact.loc": "Location", "contact.locV": "Colombia · Clients across the Americas", "contact.hours": "Hours", "contact.hoursV": "Mon – Fri · 8:00 am – 6:00 pm (GMT-5)",
  "form.name": "Full name", "form.namePh": "e.g. Ann Smith", "form.email": "Email", "form.company": "Company", "form.companyPh": "Your company name",
  "form.phone": "Phone / WhatsApp", "form.service": "Service of interest", "form.select": "Select an option", "form.other": "Other",
  "form.product": "A product: DB Agents, DocAI, Assist or Insights",
  "form.budget": "Estimated budget", "form.unknown": "Not sure yet", "form.msg": "Tell us about your project", "form.msgPh": "What process do you want to automate or what product do you want to build?",
  "form.consent": 'I authorize DB Tech Software to process my personal data to handle this request, in accordance with the <a href="#privacidad">Privacy Policy</a> (Colombian Law 1581 of 2012).',
  "form.req": "* Required fields", "form.send": "Send message",
  "form.errName": "Please enter your name.", "form.errEmail": "Please enter a valid email.", "form.errService": "Please select a service.",
  "form.errMsg": "Tell us a bit more (at least 10 characters).", "form.errConsent": "You must accept data processing to continue.",
  "fcta.t": "Ready to build your company's future?", "fcta.d": "Free, no-commitment AI assessment.",
  "footer.tag": "AI-native software company. AI agents, generative AI, web and mobile development, and cloud. Proudly made in Colombia.",
  "footer.company": "Company", "footer.ai": "How we use AI", "footer.cases": "Case studies", "footer.about": "About us", "footer.faq": "FAQ",
  "footer.privacy": "Privacy policy", "footer.rights": "All rights reserved.", "footer.made": "&lt;/&gt; with AI + ♥ in Colombia 🇨🇴"
};

const MSG = {
  es: { ok: "¡Gracias! Recibimos tu mensaje y te contactaremos muy pronto.", demo: " (Modo demo: configura la llave de Web3Forms para recibir correos reales.)",
        fail: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a <a href="mailto:{e}">{e}</a>.', fix: "Revisa los campos marcados.",
        wait: "Ya recibimos un mensaje tuyo hace un momento. Espera {s} segundos para enviar otro.",
        waText: "Hola DB Tech Software, me gustaría hablar sobre un proyecto." },
  en: { ok: "Thank you! We received your message and will be in touch very soon.", demo: " (Demo mode: set your Web3Forms key to receive real emails.)",
        fail: 'We couldn\'t send your message. Please try again or email us at <a href="mailto:{e}">{e}</a>.', fix: "Please check the highlighted fields.",
        wait: "We just received a message from you. Please wait {s} seconds before sending another one.",
        waText: "Hi DB Tech Software, I'd like to talk about a project." }
};

/* Guion de la terminal animada del hero */
const TERMINAL = {
  es: { cmd: 'dbtech agent run --project "tu-empresa"', steps: [
    ["Analizando requerimientos con IA", "ok"], ["Diseñando arquitectura (AWS + LLM)", "ok"],
    ["Generando código con agentes", "12.4k LOC"], ["Creando pruebas automáticas", "486 tests"],
    ["Auditoría de seguridad con IA", "0 críticas"], ["Revisión de ingeniero senior", "aprobado"],
    ["Desplegando a producción", "38s"] ], done: "Listo. Tu producto está en vivo 🚀" },
  en: { cmd: 'dbtech agent run --project "your-company"', steps: [
    ["Analyzing requirements with AI", "ok"], ["Designing architecture (AWS + LLM)", "ok"],
    ["Generating code with agents", "12.4k LOC"], ["Creating automated tests", "486 tests"],
    ["Security audit (SAST + AI)", "0 critical"], ["Senior engineer review", "approved"],
    ["Deploying to production", "38s"] ], done: "Done. Your product is live 🚀" }
};

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  terminal.restart();
}
$$('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Temas ---------- */
const THEME_COLORS = { dark: '#05060f', light: '#f4f6ff', cyber: '#0b0118', matrix: '#010805' };
function setTheme(t) {
  if (!THEME_COLORS[t]) t = 'dark';
  root.setAttribute('data-theme', t);
  $('meta[name="theme-color"]').content = THEME_COLORS[t];
  $$('[data-theme-opt]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.themeOpt === t)));
  store.set('dbt-theme', t);
  particles.refreshColors();
}
const themeBtn = $('#themeBtn'), themeMenu = $('#themeMenu');
function toggleThemeMenu(open) { themeMenu.classList.toggle('open', open); themeBtn.setAttribute('aria-expanded', String(open)); }
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

/* ---------- Header + enlace activo ---------- */
const header = $('.header');
const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const navMap = new Map($$('#navLinks a').map(a => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting && navMap.has(en.target.id)) { navMap.forEach(a => a.classList.remove('active')); navMap.get(en.target.id).classList.add('active'); }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));

/* ---------- Aparición + contadores ---------- */
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    $$('[data-count]', en.target).forEach(countUp);
    reveal.unobserve(en.target);
  });
}, { threshold: .1 });
$$('.reveal').forEach(el => reveal.observe(el));
function countUp(el) {
  if (reducedMotion) return;
  const end = +el.dataset.count, suf = el.dataset.suffix || '', dur = 1600, t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e) + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ---------- Marquee de clientes ---------- */
const track = $('#marquee');
$$('.client-logo', track).forEach(n => { const c = n.cloneNode(true); c.setAttribute('aria-hidden', 'true'); track.appendChild(c); });

/* ---------- Terminal animada (agente de IA) ---------- */
const terminal = (() => {
  const el = $('#terminal');
  let timer = null, run = 0, visible = true;
  const span = (cls, txt) => { const s = document.createElement('span'); if (cls) s.className = cls; s.textContent = txt; return s; };
  const wait = ms => new Promise(r => { timer = setTimeout(r, ms); });
  function cols() {
    const w = el.clientWidth - 32, cw = parseFloat(getComputedStyle(el).fontSize) * 0.6;
    return Math.max(30, Math.floor(w / cw));
  }
  async function play(id) {
    const s = TERMINAL[lang];
    el.textContent = '';
    const cursor = span('t-cursor', '');
    el.append(span('t-prompt', '$ '));
    const cmd = span('t-cmd', ''); el.append(cmd, cursor);
    for (const ch of s.cmd) { if (id !== run) return; cmd.textContent += ch; await wait(reducedMotion ? 0 : 28); }
    await wait(400);
    const width = cols();
    for (const [label, val] of s.steps) {
      if (id !== run) return;
      const v = val === 'ok' ? '' : ' ' + val;
      const dots = Math.max(2, Math.min(40, width - label.length - v.length - 9));
      cursor.remove();
      el.append('\n', span('t-dim', '› '), label + ' ', span('t-dim', '.'.repeat(dots)), span('t-ok', ' ✓'), span('t-val', v), cursor);
      await wait(reducedMotion ? 0 : 520);
    }
    if (id !== run) return;
    cursor.remove();
    el.append('\n\n', span('t-done', '✔ ' + s.done), ' ', cursor);
    if (reducedMotion) return;
    await wait(5000);
    while (!visible && id === run) await wait(500);
    if (id === run) play(++run);
  }
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(el);
  return { restart() { clearTimeout(timer); play(++run); } };
})();

/* ---------- Fondo de partículas (red neuronal) ---------- */
const particles = (() => {
  const cv = $('#bg-canvas'), ctx = cv.getContext('2d');
  let W, H, dpr, pts = [], rgb1 = '0,229,255', rgb2 = '139,92,246', raf = null;
  const mouse = { x: -9999, y: -9999 };
  function refreshColors() {
    const cs = getComputedStyle(root);
    rgb1 = cs.getPropertyValue('--particle').trim() || rgb1;
    rgb2 = cs.getPropertyValue('--particle-2').trim() || rgb2;
    if (reducedMotion) draw();
  }
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor(W * H / 16000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .6, c: Math.random() < .7 }));
    if (reducedMotion) draw();
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const maxD = 140;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < maxD * maxD) { ctx.strokeStyle = `rgba(${rgb1},${(1 - Math.sqrt(d) / maxD) * .35})`; ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      const mx = p.x - mouse.x, my = p.y - mouse.y, md = Math.sqrt(mx * mx + my * my);
      if (md < 180) { ctx.strokeStyle = `rgba(${rgb2},${(1 - md / 180) * .6})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      ctx.fillStyle = `rgba(${p.c ? rgb1 : rgb2},.9)`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  }
  function step() {
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    draw();
    raf = requestAnimationFrame(step);
  }
  addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 150); });
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (reducedMotion) return;
    if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(step);
  });
  resize();
  if (!reducedMotion) raf = requestAnimationFrame(step);
  return { refreshColors };
})();

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
form.addEventListener('input', e => { const f = e.target.closest('.field'); if (f && f.classList.contains('invalid')) validate(); });
form.addEventListener('change', e => { const f = e.target.closest('.field'); if (f && f.classList.contains('invalid')) validate(); });

function showStatus(kind, html) { statusBox.className = 'form-status ' + kind; statusBox.innerHTML = html; }

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

  // Normaliza y recorta todos los campos (el correo se arma como texto plano en JSON, nunca como HTML)
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
        method: 'POST', credentials: 'omit', referrerPolicy: 'strict-origin', signal: AbortSignal.timeout(15000),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
