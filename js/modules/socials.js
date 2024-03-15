function socialsFunc() {
  const instagramBtn = document.querySelector('.btn-instagram');
  const githubBtn = document.querySelector('.btn-github');
  const telegramBtn = document.querySelector('.btn-telegram');

  instagramBtn.addEventListener('click', function () {
    window.open('https://www.instagram.com/eysvid', '_blank');
  });

  githubBtn.addEventListener('click', function () {
    window.open('https://github.com/Eysvid', '_blank');
  });

  telegramBtn.addEventListener('click', function () {
    window.open('https://t.me/eysvid', '_blank');
  });
}

export default socialsFunc;
