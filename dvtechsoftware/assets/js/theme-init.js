/* Aplica tema e idioma antes de pintar para evitar parpadeos */
(function () {
  var d = document.documentElement, t = null, l = null;
  var THEMES = { dark: 1, light: 1, cyber: 1, matrix: 1 };
  try { t = localStorage.getItem('dbt-theme'); l = localStorage.getItem('dbt-lang'); } catch (e) {}
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') l = q;
  // Tema por defecto: "Neón" (oscuro), la identidad principal de la marca. El visitante puede cambiarlo.
  if (!t || !THEMES[t]) t = 'dark';
  if (!l) l = ((navigator.language || 'es').slice(0, 2) === 'en') ? 'en' : 'es';
  d.setAttribute('data-theme', t);
  d.setAttribute('data-lang-pending', l);
  d.classList.add('js');
})();
