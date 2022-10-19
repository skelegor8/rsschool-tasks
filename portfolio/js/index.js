import i18Obj from './translate.js';

console.log("Оцениваю себя в 75/75")

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');
const portfolioBtn = document.querySelectorAll('.section__portfolio-button');
const portfolioImages = document.querySelectorAll('.section__portfolio-img');
const portfolioBtns = document.querySelector('.section__portfolio-conteiner');
const themeBtn = document.querySelector('.header__theme-button');
const wrapperTitle = document.querySelectorAll('.section__wrapper-title');
const h2 = document.querySelectorAll('.section-h2');
const section__skillsElement = document.querySelectorAll('.section__skills-element');
const section__priceConteiner = document.querySelectorAll('.section__price-conteiner');
const currentElement = document.querySelectorAll('[data-i18]');
const menuLanguage = document.querySelector('.menu__language');
const langBtn = document.querySelectorAll('.menu__language-btn');
const footer = document.querySelector('.footer');
const footerLinkRs = document.querySelector('.footer__link-rs');
const gitLink = document.querySelector('.footer__git-link');
const footerSocial = document.querySelectorAll('.footer__social');

let lang;
let theme;

headerBurger.onclick = function(){
  headerBurger.classList.toggle('open');
  headerMenu.classList.toggle('open');
  body.classList.toggle('lock');
}

headerMenu.addEventListener('click', (event) =>{
  if (event.target.classList.contains('menu__link')) {
      headerMenu.classList.remove('open')
      headerBurger.classList.remove('open')
      body.classList.remove('lock')
     }
 });

themeBtn.addEventListener('click', () => {
  lightTheme();
  if (themeBtn.classList.contains('day')) {
    theme = "day";
  } else {
    theme = "";
  }
});

function lightTheme() {
  body.classList.toggle('day');
  footer.classList.toggle('day');
  footerLinkRs.classList.toggle('day');
  gitLink.classList.toggle('day');
  themeBtn.classList.toggle('day');
  footerSocial.forEach((className) => className.classList.toggle('day'));
  wrapperTitle.forEach((className) => className.classList.toggle('day'));
  h2.forEach((className) => className.classList.toggle('day'));
  section__skillsElement.forEach((className) => className.classList.toggle('day'));
  portfolioBtn.forEach((className) => className.classList.toggle('day'));
  section__priceConteiner.forEach((className) => className.classList.toggle('day'));
  menuLink.forEach((className) => className.classList.toggle('day'));
  headerMenu.classList.toggle('day');
  headerBurger.classList.toggle('day');
}

portfolioBtns.addEventListener('click', (event) => {
    changeImage(event);
});

function changeImage(event) {
  if(event.target.classList.contains('section__portfolio-button')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }
  portfolioBtn.forEach((portfolioBtn) => {
    if (portfolioBtn.dataset.season == event.target.dataset.season) {
      event.target.classList.add('active');
    } else {
      portfolioBtn.classList.remove('active');
    }
  });
}

menuLanguage.addEventListener('click', (event) => {
  lang = event.target.dataset.language;
  getTranslate(event);
});

function getTranslate(event) {
  if (event.target.classList.contains('menu__language-btn')) {
    currentElement.forEach((currentElement) => {
      let dataseti18n = currentElement.dataset.i18;
      let datalang = event.target.dataset.language;
      currentElement.textContent = i18Obj[datalang][dataseti18n];
      if (currentElement.placeholder) {
        currentElement.placeholder = i18Obj[datalang][dataseti18n];
        currentElement.textContent = ''
      }
      currentElement.textContent = i18Obj[datalang][dataseti18n];
      });
    langBtn.forEach((langBtn) => {
      if (langBtn.dataset.language == event.target.dataset.language) {
        event.target.classList.add('active');
      } else {
        langBtn.classList.remove('active');
      }
    });
  }
}


function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    currentElement.forEach((currentElement) => {
      let dataseti18n = currentElement.dataset.i18;
      currentElement.textContent = i18Obj[lang][dataseti18n];
      if (currentElement.placeholder) {
        currentElement.placeholder = i18Obj[lang][dataseti18n];
        currentElement.textContent = ''
      }
      currentElement.textContent = i18Obj[lang][dataseti18n];
      });
    langBtn.forEach((langBtn) => {
      if (langBtn.dataset.language == lang) {
        langBtn.classList.add('active');
      } else {
        langBtn.classList.remove('active');
      }
    });
  }
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme == "day") {
      lightTheme();
    }
  }
}
window.addEventListener('load', getLocalStorage);

const playMiniBtn = document.querySelector('.section__video-play-mini-btn');
const playBtn = document.querySelector('.section__video-play-button-img');
const muteBtn = document.querySelector('.section__video-mute');
const videoContainer = document.querySelector('.section__video-container');
const video = document.querySelector('.section__video-video');
const controlsPanel = document.querySelector('.section__video-controls');
const volumeRange = document.querySelector('.section__video-volume');
const timeLine = document.querySelector('.section__video-timeline');

playBtn.onclick = function () {
  playBtn.classList.toggle('active');
  playMiniBtn.classList.toggle('active');
  video.play();
}

video.onclick = function () {
  playBtn.classList.toggle('active');
  playMiniBtn.classList.toggle('active');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

videoContainer.onmouseenter = function () {
  controlsPanel.classList.add('up');
}

videoContainer.onmouseleave = function () {
  controlsPanel.classList.remove('up');
}

playMiniBtn.onclick = function () {
  playBtn.classList.toggle('active');
  playMiniBtn.classList.toggle('active');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

muteBtn.onclick = function () {
  muteBtn.classList.toggle('active');
  if (video.volume > 0) {
    video.volume = 0;
    volumeRangeBg();
  } else if (volumeRange.value == 0) {
    volumeRange.value = 40
    video.volume = volumeRange.value / 100;
    volumeRangeBg();
  } else {
    video.volume = volumeRange.value / 100;
    volumeRangeBg();
  }
}

volumeRange.onchange = function () {
  video.volume = volumeRange.value / 100;
}

volumeRange.addEventListener('input', function () {
  volumeRangeBg();
  muteBtnOnOff();
});

function volumeRangeBg() {
  const value = volumeRange.value;
  volumeRange.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
}

video.ontimeupdate = timeLineUpdate;

function timeLineUpdate() {
  let d = video.duration;
  let c = video.currentTime;
  timeLine.value = (100 * c) / d;
  timeLine.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${timeLine.value}%, #fff ${timeLine.value}%, white 100%)`
}

timeLine.onclick = function () {
  video.currentTime = (timeLine.value / 100) * video.duration;
}

function muteBtnOnOff() {
  if (volumeRange.value == 0) {
    muteBtn.classList.add('active');
  } else {
    muteBtn.classList.remove('active');
  }
}


