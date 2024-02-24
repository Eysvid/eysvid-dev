import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
  distance: '100px',
  duration: 2500,
});

function scrollRevealFunc() {
  ScrollReveal().reveal(`.home__projects, .block--visible`, {
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
    `.home__title, .home__block-item--left, .footer__subtitle`,
    {
      origin: 'left',
    }
  );

  ScrollReveal().reveal(
    `.home__subtitle, .home__block-item--right, .footer__email`,
    {
      origin: 'right',
    }
  );

  ScrollReveal().reveal(
    `.home__skils,  .home__block--bottom, .footer__socials`,
    {
      origin: 'bottom',
    }
  );
}

export default scrollRevealFunc;
