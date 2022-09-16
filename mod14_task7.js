const btn = document.querySelector('.j-btn');
const enterId = document.querySelector('.enter');
const list = document.querySelector('.list');
const deleteList = document.querySelector('.delete');

// Функция, которая возвращает fetch
const useRequest = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${enterId.value}/todos`)
    .then((response) => {
     return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

// deleteList.addEventListener('click', () => {
//   const list = document.querySelector('.list');
//   list = [];
// })

btn.addEventListener('click', async () => {
  // console.log(enterId.value);
  const requestResult = await useRequest();
  console.log('requestResult', requestResult);  
  // const UserId = document.querySelector('.UserId');
  // const newPId = document.createElement('p');
  // UserId.textContent = `User ID: ${userId.value}`;
  
  let res = requestResult.length;
  // console.log(res)
      
  if (res != 0) {
      for (let obj in requestResult) {
        let userId = requestResult[obj].userId;
        let flag = requestResult[obj].completed;
        let title = requestResult[obj].title;
        let uid = requestResult[obj].id;
        // console.log(flag);
        // console.log(userId);
        // console.log(enterId.value);
        let UserId = document.querySelector('.UserId');
        UserId.innerHTML = `User ID: ${userId}`;
        if (flag == true) {
          const newLi = document.createElement('div');
          newLi.textContent = `${uid} - ${title}`;
          list.appendChild(newLi);  
        } else {
          const strike = document.createElement('strike');
          const br = document.createElement('br');
          strike.textContent = `${uid} - ${title}`;
          list.appendChild(strike);
          list.appendChild(br);
        }
      }
     } else {
        // console.log('Такого нет');
        const newP = document.createElement('p');
        newP.textContent = "Пользователь с указанным id не найден";
        list.append(newP);
     };
});