import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperMain () {
	const swiper = new Swiper('.swiper__main', {
		slidesPerView: 2,
		direction: 'vertical',
		spaceBetween: 42,
		parallax: true,
		freeMode: true,
	});
}

export default swiperMain;