function socialsFunc() {

    const instagramBtn = document.querySelector('.btn-instagram');
    const githubBtn = document.querySelector('.btn-github');


    instagramBtn.addEventListener('click', function () {
        window.open('https://www.instagram.com/eysvid', '_blank');
    });

    githubBtn.addEventListener('click', function () {
        window.open('https://github.com/Eysvid', '_blank');
    });
}

export default socialsFunc;