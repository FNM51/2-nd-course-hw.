//Task #1
function findLess(number1, number2) {
    if (number1 === number2) {
        return number1;        
    } else if (number1 > number2){
        return number2;
    } else if (number1 < number2){
        return number1;
    } else {
        return undefined;
    }  
}
console.log(findLess(8, 4))
console.log(findLess(4, 8))
console.log(findLess(6, 6))

//Task #2
function parity(number) {
    let type = Boolean(number);
    if (type) {
        if (number % 2 === 0) {
            alert('Число четное')
        } else {
            alert('Число нечетное')
        }
    } else {
        alert('Это не число :-(')
    }
}

let userNumber = Number(prompt('Пожалуйста, введите любое число'));
parity(userNumber);

//Task #3
const rootInConsole = (number) => console.log(Math.sqrt(number));
function rootByReturn (number) {
    return Math.sqrt(number);
}

rootInConsole(5);
console.log(rootByReturn(25));

//Task #4
function checkUserAge() {
    const userAge = prompt("Сколько вам лет?");
    if (userAge > 0) {
        (userAge <= 12) ? alert('Привет, друг!'): alert('Добро пожаловать!');
    } else {
        alert("Вы ввели неправильное значение");
    };
}
checkUserAge()

//Task #5
function multiTwoNumbers(number1, number2) {
    if (isNaN(number1) && isNaN(number2)) {
        alert('Одно или оба значения не являются числом');
    } else {
        let result = Number(number1) * Number(number2);
        alert(`Произведение твоих чисел равно ${result}`)
    }
}
let number1 = prompt("Введи первое число");
let number2 = prompt("Введи второе число");
multiTwoNumbers(number1, number2);

//Task #6
function cube() {
    let userNumber = prompt("Напиши число")
    if (isNaN(userNumber)) {
        alert('Переданный параметр не является числом')
    } else {
        alert(`${userNumber} в кубе равняется ${Number(userNumber) ** 2}`)
    }
};
cube(); 

//Task #8
const circle1 = {
    radius : 12,
    getArea() {
        console.log(this.radius * Math.PI ** 2);
    },
    getPerimeter() {
        console.log(this.radius * Math.PI * 2);
    }
}
const circle2 = {
    radius : 16,
    getArea() {
        console.log(this.radius * Math.PI ** 2);
    },
    getPerimeter() {
        console.log(this.radius * Math.PI * 2);
    }
}
circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();
