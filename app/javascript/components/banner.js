import Typed from 'typed.js';

function loadDynamicBannerText() {
  if (document.querySelector('#banner-typed-text')) {
    new Typed('#banner-typed-text', {
      strings: ["Vodka", "Lemon", "Sugar", "Best cocktail ever."],
      typeSpeed: 80,
      smartBackspace: true,
      backSpeed: 60,
      backDelay: 700,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
