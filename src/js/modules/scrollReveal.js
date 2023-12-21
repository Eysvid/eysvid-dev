import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '100px',
	duration: 2800
});

function scrollRevealFunc () {
	ScrollReveal().reveal(`.home__avatar, .home__projects`, {
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(`.discover__picture-hint`, {
		origin: 'top',
	});

	ScrollReveal().reveal(`.home__title`, {
		origin: 'left',
	});

	ScrollReveal().reveal(`.home__subtitle`, {
			origin: 'right',
		}
	);

	ScrollReveal().reveal(`.home__skils`, {
		origin: 'bottom',
	});
}

export default scrollRevealFunc;