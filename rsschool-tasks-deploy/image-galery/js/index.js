const galleryContainer = document.querySelector('.section__imege-gallery');
const searchBtn = document.querySelector('.header__btn');
const searchInput = document.querySelector('.header__input');
let url = `https://api.unsplash.com/photos?per_page=40&client_id=UP_T69eAuld4Zhz_xNEvtcNLNjzUt6pkf85S_JPWpLI`;
getData(url);


function showData(data) {
  for (let i = 0; i < data.length; i++){
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = data[i].urls.regular;
    img.alt = 'image';
    galleryContainer.append(img);
  }
}

searchBtn.onclick = function () {
  search();
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'Enter') {
    search();
  }
});

function search() {
  if (searchInput.value != "") {
    let searchValue = searchInput.value;
    let searchUrl = `https://api.unsplash.com/photos?query=${searchValue}&per_page=40&client_id=UP_T69eAuld4Zhz_xNEvtcNLNjzUt6pkf85S_JPWpLI`;
    delImg();
    getData(searchUrl);
    console.log(url);
  }
}

function delImg() {
  let delImg = document.querySelectorAll('.gallery-img');
  delImg.forEach(delImg => delImg.remove());
}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
  console.log(url);
}