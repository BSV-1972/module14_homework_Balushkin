const btn = document.querySelector('.j-btn');
// let pageNumber = document.querySelector('.pageNumber');
const btn2 = document.querySelector('.j-btn-delete');

btn2.addEventListener('click', async () => {
localStorage.removeItem('url_address');  
});

btn.addEventListener('click', async () => {
  let pageNum = Number(document.querySelector('.pageNumber').value);
  let limit = Number(document.querySelector('.limit').value);
  // console.log(pageNum);
  let condition1 = (pageNum > 10 || pageNum < 1 || isNaN(pageNum)) && (limit > 10 || limit < 1 || isNaN(limit));
  let condition2 = limit > 10 || limit < 1 || isNaN(limit);
  let condition3 = pageNum > 10 || pageNum < 1 || isNaN(pageNum);
    
  if (condition1) {
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
  } else if (condition2) {
    console.log("Лимит вне диапазона от 1 до 10");
  } else if (condition3) {
    console.log("Номер страницы вне диапазона от 1 до 10");
  } else {
    let urlAddress = localStorage.getItem('url_address');
    if ( urlAddress != null) {
      // localStorage.setItem('url_address', urlAddress);
      useRequest(urlAddress, displayResult);
      // console.log('Из ф-ии', urlAddress);
    } else {
      urlAddress = `https://picsum.photos/v2/list/?page=${pageNum}&limit=${limit}&width=324&height=254`;
      localStorage.setItem('url_address', urlAddress);
      useRequest(urlAddress, displayResult); 
      // console.log('Из ф-ии', urlAddress);  
    } 
  }
});

// console.log("При загрузке", localStorage.getItem('url_address'));

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
        // console.log(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

const resultNode = document.querySelector('.j-result');
const heightNode = document.querySelector('.height');
const widthNode = document.querySelector('.width');


function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    if (heightNode.value == "" || widthNode.value == "") {
      const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image" height="100" width="150"
        />
        <p>${item.author}</p>
      </div>
    `;
      cards = cards + cardBlock;
    } else {
      const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image" height="${heightNode.value}" width="${widthNode.value}"
        />
        <p>${item.author}</p>
      </div>
    `;  
      cards = cards + cardBlock;
    }
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}