function loader() {
    const loader = document.querySelector('.loader-wrapper');
    const video = document.querySelector('.header__video-src');

    video.addEventListener('loadeddata', () => {
        loader.classList.add('loader-wrapper--hidden');
    });
}

export default loader;