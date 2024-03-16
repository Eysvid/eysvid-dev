import ScrollReveal from 'scrollreveal';

ScrollReveal({
  distance: '100px',
  duration: 3000,
});

function scrollRevealFunc() {
  ScrollReveal().reveal(
    `.home__projects, .home__subtitle, .home__video-src, .footer__socials`,
    {
      distance: '0px',
      opacity: 0,
    }
  );

  ScrollReveal().reveal(
    `.home__avatar, .discover__picture-hint, .footer__title`,
    {
      origin: 'top',
    }
  );

  ScrollReveal().reveal(
    `.home__title, .home__block-item--left, .home__block-item--right, .footer__email, .footer__subtitle`,
    {
      origin: 'left',
    }
  );

  ScrollReveal().reveal(`.block-visible, .home__block--bottom`, {
    origin: 'bottom',
  });
}

export default scrollRevealFunc;
