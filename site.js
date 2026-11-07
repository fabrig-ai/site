// The phone menu: a button opens the nav, and Escape or a click elsewhere closes it.
(function () {
  var button = document.querySelector('.menu-button');
  var nav = document.getElementById('primary-nav');
  function set(open) {
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  }
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    set(!nav.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) set(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      set(false);
      button.focus();
    }
  });
})();
