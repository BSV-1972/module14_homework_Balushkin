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
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

const resultTable = document.querySelector('table');
const btnNode = document.querySelector('.request');
const select = document.querySelector('select');
const message = document.querySelector('.message');
const result = document.querySelector('.result');
const year = document.querySelector('.year');

function displayResult(apiData) {
  let table = '';
  
  if (select.value === 'no') {
      message.innerHTML = 'Выберите, пожалуйста, год';
//       console.log('Выберите, пожалуйста, год')
    } else {
      message.innerHTML = '';
      result.innerHTML = '';
      year.innerHTML = select.value;
    };
  
  apiData.forEach(item => {
      if (item.year == select.value) {
      table += `
          <tr>
              <td>${item.sales.q1}</td>
              <td>${item.sales.q2}</td>
              <td>${item.sales.q3}</td>
              <td>${item.sales.q4}</td>
          </tr>
      `
    }
  });
  
  
  
  resultTable.innerHTML += table;
}

btnNode.addEventListener('click', () => {
  useRequest('https://raw.githubusercontent.com/BSV-1972/module14_homework_Balushkin/main/JSON_file.json', displayResult);
})
