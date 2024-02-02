//Task-1
function task1(){
    const people = [
       { name: 'Глеб', age: 29 },
       { name: 'Анна', age: 17 },
       { name: 'Олег', age: 7 },
       { name: 'Оксана', age: 47 }
    ];
  
    console.log(people.sort(function (a, b){
      return a.age - b.age;
    }));
  }
  
  //Task-2
  function isPositive(number) {
    return number > 0;
  }
  function isMale(element) {
    if (element.gender === 'male') {
      return element;
    }
  }
  function filter(array, ruleFunction) {
    const output = [];
    for (let i = 0; i < array.length; i++){
      if (ruleFunction(array[i])) {
        output.push(array[i]);
      }
    }
    return output;
  }
  function task2(){
    console.log(filter([3, -4, 1, 9], isPositive));
  
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
  
    console.log(filter(people, isMale));
  }
  
  //Task-3
  function task3() {
    const timer = (seconds) => {
      const interval = setInterval(() => {
          console.log(new Date());
      }, 3000);
  
      setTimeout(() => {
          clearInterval(interval);
          console.log(`${seconds} секунд прошло!`)
      }, seconds * 1000)
    };
  
    const seconds = 30;
    timer(seconds);
  }
  
  //Task-4
  function task4(){
    function delayForSecond(callback) {
      setTimeout(callback, 1000)
    }
  
    delayForSecond(function () {
       console.log('Привет, Глеб!');
    })
  }
  
  //Task-5
  function delayForSecond(callback) {
      setTimeout(() => {
          console.log('Прошла одна секунда');
          if(callback) { 	callback(); }
      }, 1000)
  }
  function sayHi (name) {
      console.log(`Привет, ${name}!`);
  }
  function task5(){
    delayForSecond(() => sayHi('Глеб'))
  }