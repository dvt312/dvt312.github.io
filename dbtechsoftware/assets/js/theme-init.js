/* Aplica tema e idioma antes de pintar para evitar parpadeos */
(function () {
  var d = document.documentElement, t = null, l = null;
  try { t = localStorage.getItem('dbt-theme'); l = localStorage.getItem('dbt-lang'); } catch (e) {}
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') l = q;
  if (!t) t = (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  if (!l) l = ((navigator.language || 'es').slice(0, 2) === 'en') ? 'en' : 'es';
  d.setAttribute('data-theme', t);
  d.setAttribute('data-lang-pending', l);
  d.classList.add('js');
})();
