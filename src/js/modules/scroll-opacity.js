function scroolOpacity() {
  const header = document.querySelector(".header");
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = header.offsetHeight;

    if (prevScrollPos > scrollPos) {
      const opacity = (maxScroll - scrollPos) / maxScroll;
      header.style.opacity = opacity;
    } else {
      const opacity = (maxScroll - scrollPos) / maxScroll * 0.3;
      header.style.opacity = opacity;
    }
    prevScrollPos = scrollPos;
  }
}

export default scroolOpacity;
