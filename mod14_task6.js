function usePromise() {
  // Создаем promise
  const myPromise = new Promise((resolve, reject) => {

    function randomInteger (min, max) {
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(rand);
        return rand;      
    };

      let num = randomInteger(0, 100);
      setTimeout(() => num, 3000);
      let numRound = Math.round(num);  
    
      if (numRound % 2 === 0) {
        resolve(`Завершено успешно. Сгенерированное число чётное — ${numRound}`);  
      } else {
        reject(`Завершено с ошибкой. Сгенерированное число не чётное — ${numRound}`); 
      };
  });

  // Выполняем promise
  myPromise
    .then((result) => {
      console.log('Обрабатываем resolve', result);
    })
    .catch((error) => {
      console.log('Обрабатываем reject', error);
    })
    .finally(() => {
      console.log('Выполняется всегда');
    });
};

usePromise();

