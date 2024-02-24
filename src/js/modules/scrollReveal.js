import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
  distance: '100px',
  duration: 2500,
});

function scrollRevealFunc() {
  ScrollReveal().reveal(`.home__projects, .block--visible, .footer__socials`, {
    distance: '0px',
    opacity: 0,
  });

  ScrollReveal().reveal(
    `.home__avatar, .discover__picture-hint, .footer__title`,
    {
      origin: 'top',
    }
  );

  ScrollReveal().reveal(
    `.home__title, .home__subtitle, .home__block-item--left, .home__block-item--right, .footer__email, .footer__subtitle`,
    {
      origin: 'left',
    }
  );

  // ScrollReveal().reveal(
  //   `.home__subtitle, .home__block-item--right, .footer__email`,
  //   {
  //     origin: 'right',
  //   }
  // );

  ScrollReveal().reveal(`.home__skils,  .home__block--bottom`, {
    origin: 'bottom',
  });
}

export default scrollRevealFunc;
