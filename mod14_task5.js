let userName = localStorage.getItem('userName');
let lastDate = localStorage.getItem('date');
// console.log(`UserName: ${userName}; Date: ${lastDate}`);

function Enter() {
    if(userName !== null) {
      console.log(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас  ${lastDate}`);
      localStorage.removeItem('date');
      let now = new Date();
      localStorage.setItem('date', `${now}`);
    } else {
        let enterName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', '');
        alert(`Ваше имя ${enterName}`)  
        localStorage.setItem('userName', `${enterName}`);
        let now = new Date();
        localStorage.setItem('date', `${now}`);
    }
}

Enter();

// localStorage.removeItem('userName');
// localStorage.removeItem('date');