const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('nav');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');

headerBurger.onclick = function () {
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

const startBtn = document.querySelector(".start__btn");
const prevBtn = document.querySelector(".prev__btn");
const pageNumber = document.querySelector(".page__number");
const nextBtn = document.querySelector(".next__btn");
const endBtn = document.querySelector(".end__btn");
const cards = document.querySelectorAll(".card");

let numberItemOnPage = 8;
let page = 1;

function numberPage() {
  return Math.ceil(cards.length / numberItemOnPage);
}

function paintResult(pageN) {
  if (pageN > numberPage()) {
    page = numberPage();
  } else if (pageN <= 0) {
    page = 1;
  }
  cards.forEach(card => card.classList.remove("active"));
  let start = numberItemOnPage * (page - 1);
  let end = numberItemOnPage * page;
  if (end > cards.length) {
    end = cards.length;
  }
  for (let i = start; i < end; i++){
    cards[i].classList.add("active");
  }
  pageNumber.innerHTML = page;

  if (pageN == 1) {
    startBtn.classList.add("disabled");
    prevBtn.classList.add("disabled");
    startBtn.disabled = true;
    prevBtn.disabled = true;
  } else {
    startBtn.classList.remove("disabled");
    startBtn.disabled = false;
    prevBtn.classList.remove("disabled");
    prevBtn.disabled = false;
  }

  if (pageN == numberPage()) {
    endBtn.classList.add("disabled");
    endBtn.disabled = true;
    nextBtn.classList.add("disabled");
    nextBtn.disabled = true;
  } else {
    endBtn.classList.remove("disabled");
    endBtn.disabled = false;
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  }
}

paintResult(page);

startBtn.addEventListener("click", () => {
  paintResult(page = 1)
});

prevBtn.addEventListener("click", () => {
  paintResult(page -= 1)
});

nextBtn.addEventListener("click", () => {
  paintResult(page += 1)
});

endBtn.addEventListener("click", () => {
  paintResult(page = numberPage())
});


// --- modal --
const modalBackground = document.querySelector('.modal-background');
const closeModalBtn = document.querySelector('.close-modal-btn');
const cardBtn = document.querySelectorAll('.card__btn');
const table = document.querySelector('.table');

table.addEventListener('click', (event) => {
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