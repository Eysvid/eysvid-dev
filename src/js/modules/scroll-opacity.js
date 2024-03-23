function scroolOpacity() {
  const header = document.querySelector('.header');
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = header.offsetHeight;

    if (prevScrollPos > scrollPos) {
      const opacity = (maxScroll - scrollPos) / maxScroll;
      header.style.opacity = opacity;
    } else {
      const opacity = ((maxScroll - scrollPos) / maxScroll) * 0.3;
      header.style.opacity = opacity;
    }
    prevScrollPos = scrollPos;
  };

  document
    .getElementById('scrollDownButton')
    .addEventListener('click', function () {
      const nextElement = document.querySelector('.header').nextElementSibling;
      nextElement.scrollIntoView({ behavior: 'smooth' });
    });
}

export default scroolOpacity;
