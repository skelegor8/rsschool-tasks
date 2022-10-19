const areaGame = document.querySelector('.area__game');
const modal = document.querySelector('.modal__message');
const newGame = document.querySelector('.modal__btn');
const cells = document.getElementsByClassName('cell');
const textModal = document.querySelector('.modal__text');
const tableBtn = document.querySelector('.header__btn');
const table = document.querySelector('.table');
const tableContents = document.getElementsByClassName('table__content');
let move = 1;
let result = '';
let lastMove = 0;

areaGame.addEventListener('click', event => {
  if (event.target.className = "cell") {
      if (move == 1) {
        event.target.classList.add('cross');
        event.target.classList.remove('zero');
        move = 0;
      } else {
        event.target.classList.add('zero');
        event.target.classList.remove('cross');
        move = 1;
        }
    }
    checkWin();
});

function checkWin() {
  lastMove++
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winArr.length; i++){
    if (cells[winArr[i][0]].classList.contains("cross") && cells[winArr[i][1]].classList.contains("cross") && cells[winArr[i][2]].classList.contains("cross") ) {
      result = 'crosses';
      modalMessage();
      checkRecords();
    } else if (cells[winArr[i][0]].classList.contains("zero") && cells[winArr[i][1]].classList.contains("zero") && cells[winArr[i][2]].classList.contains("zero"))  {
      result = 'noughts';
      modalMessage();
      checkRecords();
    }
  }
  if (lastMove == 9) {
    result = 'No one'
    modalMessage()
  }
}

let arrTableRecords = [];
tableContents[0].innerHTML = `No Records((`;
function checkRecords() {
  if (result == '') {
    for (let i = 0; i < arrTableRecords.length; i++){
      tableContents[i].innerHTML = `In ${i+1} game we won ${arrTableRecords[i]}`
    }
  } else {
    arrTableRecords.push(result);
    for (let i = 0; i < arrTableRecords.length; i++){
      tableContents[i].innerHTML = `In ${i+1} game we won ${arrTableRecords[i]}`
    }
  }
}

newGame.addEventListener('click', event => {
  modal.classList.remove('active');
  removeCell();
  move = 1;
  result = '';
  lastMove = 0;
});

tableBtn.addEventListener('click', event => {
  table.classList.toggle('active');
  if (table.classList.contains('active')) {
    tableBtn.innerHTML = "Close";
  } else {
    tableBtn.innerHTML = "table of records";
  }
});

function modalMessage() {
  modal.classList.add('active');
  textModal.innerHTML = `${result} won!`
}

function removeCell() {
  for (let i = 0; i < cells.length; i++){
    cells[i].classList.remove('cross');
    cells[i].classList.remove('zero');
  }
}

function setLocalStorage() {
  localStorage.setItem('arrTableRecords', JSON.stringify(arrTableRecords));
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('arrTableRecords')) {
    arrTableRecords = JSON.parse(localStorage.getItem('arrTableRecords'));
    checkRecords();
  }
}
window.addEventListener('load', getLocalStorage);