const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('nav');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');

const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
const cards = document.querySelectorAll('.card');

let cardTitle = document.querySelectorAll('.card__title');
let cardImg = document.querySelectorAll('.card__img');

let requestURL = '../pets.json';
const request = new Request(requestURL);

const response = await fetch(request);
const petsJSON = await response.json();

function showPets(jsonObj) {
  let pets = jsonObj['pets'];
  cardTitle.forEach((contents, index) => contents.textContent = pets[index].name);
  cardImg.forEach((img, index) => img.src = pets[index].img);
}
showPets(petsJSON);

headerBurger.onclick = function () {
  headerBurger.classList.toggle('open');
  headerMenu.classList.toggle('open');
  body.classList.toggle('lock');
}

headerMenu.addEventListener('click', (event) =>{
  if (event.target.classList.contains('menu__link')) {
    headerMenu.classList.remove('open');
    headerBurger.classList.remove('open');
    body.classList.remove('lock');
    }
});

// --------------
// --- slider ---
// --------------
let cardsGroup = document.querySelectorAll(".cards-group");

let step = 1;
showSlide(step);

function nextSlide() {
  showSlide(step += 1);
}

function prevSlide() {
  showSlide(step -= 1);
}

function showSlide(index) {
  if (index > cardsGroup.length) {
    step = 1;
  }
  if (step < 1) {
    step = cardsGroup.length;
  }
  for (let i = 0; i < cardsGroup.length; i++) {
    cardsGroup[i].classList.remove("next");
  }
  cardsGroup[step-1].classList.add("next");
}

leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);

// -------------
// --- modal ---
// -------------
const modalBackground = document.querySelector('.modal-background');
const closeModalBtn = document.querySelector('.close-modal-btn');
const cardBtn = document.querySelectorAll('.card__btn');
const slider = document.querySelector('.slider');

slider.addEventListener('click', (event) => {
  if (event.target.classList.contains('card__btn')) {
    modalBackground.classList.add('open');
    body.classList.add('lock');
    showModalInfo(petsJSON, findIndex(event, cardBtn));
  }
  if (event.target.classList.contains('card')) {
    modalBackground.classList.add('open');
    body.classList.add('lock');
    showModalInfo(petsJSON, findIndex(event, cards));
  }
  if (event.target.classList.contains('card__img')) {
    modalBackground.classList.add('open');
    body.classList.add('lock');
    showModalInfo(petsJSON, findIndex(event, cardImg));
  }
});

modalBackground.onclick = function () {
  modalBackground.classList.remove('open');
  body.classList.remove('lock');
}
closeModalBtn.onclick = function () {
  modalBackground.classList.remove('open');
  body.classList.remove('lock');
}

let titleModal = document.querySelector('.title-modal');
let imgModal = document.querySelector('.img-modal');
let type = document.querySelector('.type');
let breed = document.querySelector('.breed');
let descriptionModal = document.querySelector('.description-modal');
let age = document.querySelector('.age');
let inoculations = document.querySelector('.inoculations');
let diseases = document.querySelector('.diseases');
let parasites = document.querySelector('.parasites');

function findIndex(event, arrObj) {
  let index;
  arrObj.forEach((item, i) => {
    if (event.target == item) {
      index = i;
    }
  });
  return index;
}

function showModalInfo(jsonObj, index) {
  let pets = jsonObj['pets'];
  titleModal.textContent = pets[index].name;
  imgModal.src = pets[index].img;
  type.textContent = pets[index].type;
  breed.textContent = pets[index].breed;
  descriptionModal.textContent = pets[index].description;
  age.textContent = pets[index].age;
  inoculations.textContent = pets[index].inoculations;
  diseases.textContent = pets[index].diseases;
  parasites.textContent = pets[index].parasites;
}

