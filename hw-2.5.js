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
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            return ('Число четное');
        } else {
            return ('Число нечетное');
        }
    } else {
        return ('Это не число :-(');
    }
}

let userNumber = Number(prompt('Пожалуйста, введите любое число'));
alert(parity(userNumber));

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
        return ('Одно или оба значения не являются числом');
    } else {
        let result = Number(number1) * Number(number2);
        return (`Произведение твоих чисел равно ${result}`)
    }
}
let number1 = prompt("Введи первое число");
let number2 = prompt("Введи второе число");
alert(multiTwoNumbers(number1, number2));

//Task #6
function cube() {
    let userNumber = prompt("Напиши число")
    if (isNaN(userNumber)) {
        return ('Переданный параметр не является числом')
    } else {
        return (`${userNumber} в кубе равняется ${Number(userNumber) ** 2}`)
    }
};
alert(cube()); 

//Task #7
const circle1 = {
    radius : 12,
    getArea() {
        return (this.radius * Math.PI ** 2);
    },
    getPerimeter() {
        return (this.radius * Math.PI * 2);
    }
}
const circle2 = {
    radius : 16,
    getArea() {
        return (this.radius * Math.PI ** 2);
    },
    getPerimeter() {
        return (this.radius * Math.PI * 2);
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
