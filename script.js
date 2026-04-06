// ============================================================
// NAPOLEAO PORTFOLIO — script.js
// Clean JS: no base64, no localStorage, no FileReader.
// Images are real files in /images folder.
// ============================================================

// ===================== LIGHTBOX =====================
function openLightbox(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lightbox').classList.add('open');
}

document.getElementById('lb-close').addEventListener('click', function () {
  document.getElementById('lightbox').classList.remove('open');
});

document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('open');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
});

// ===================== SCROLL ARROWS =====================
function scrollThumb(id, dir) {
  var scroller = document.getElementById(id);
  if (scroller) scroller.scrollBy({ left: dir * 312, behavior: 'smooth' });
}

// ===================== CHANNEL SCROLL ANIMATION =====================
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) en.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.ch-block').forEach(function (el) {
    obs.observe(el);
  });
})();
