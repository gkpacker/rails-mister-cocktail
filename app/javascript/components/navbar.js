function initUpdateNavbarOnScroll() {
  if (document.querySelector(".navbar-wagon")) {
    const navbar = document.querySelector('.navbar-wagon');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-white');
      } else {
        navbar.classList.remove('navbar-wagon-white');
      }
    });
  }
}
export { initUpdateNavbarOnScroll };
