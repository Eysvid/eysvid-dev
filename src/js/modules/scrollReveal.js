import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '100px',
	duration: 2500
});

function scrollRevealFunc() {
	ScrollReveal().reveal(`.home__projects`, {
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(`.home__avatar, .discover__picture-hint, .footer__title`, {
		origin: 'top',
	});

	ScrollReveal().reveal(`.home__title, .footer__subtitle`, {
		origin: 'left',
	});

	ScrollReveal().reveal(`.home__subtitle, .footer__email`, {
		origin: 'right',
	});

	ScrollReveal().reveal(`.home__skils, .footer__socials`, {
		origin: 'bottom',
	});
}

export default scrollRevealFunc;