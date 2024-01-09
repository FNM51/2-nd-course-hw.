//Задание №1
let password = 'пароль';
let inputPassword = prompt('Введите пароль')
password === inputPassword ? alert("Пароль введен верно") : alert("Пароль введен неправильно");
//Задание №2
let c = 8;
if (0 < c && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно')
}
//Задание №3
let d = 51;
let e = 60;
if (d > 100 || e > 100){
    console.log('Верно');
} else {
    console.log('Неверно')
}
//Задание №4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//Задание №5
let mounthNumber = Number(prompt('Введите число месяца'));
switch (mounthNumber) {
    case 1:
        alert('Январь - зима ⛄')
        break;
    case 2:
        alert('Февраль - зима ⛄')
        break;
    case 3:
        alert('Март -  весна 💐')
        break;
    case 4:
        alert('Апрель -  весна 💐')
        break;
    case 5:
        alert('Май -  весна 💐')
        break;
    case 6:
        alert('Июнь -  лето 🌞')
        break;
    case 7:
        alert('Июль -  лето 🌞')
        break;
    case 8:
        alert('Август -  лето 🌞')
        break;
    case 9:
        alert('Сентябрь -  осень 🍂')
        break;
    case 10:
        alert('Октябрь -  осень 🍂')
        break;
    case 11:
        alert('Ноябрь -  осень 🍂')
        break;
    case 12:
        alert('Декабрь - зима ⛄')
        break; 
    default:
        alert('Что то не то 😧')
        break;
}
//Задание №7
let number = Number(prompt('Пожалуйста, введите любое число'));
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
//Задание №8-9
let clientOS = 1;
let clientDeviceBirthday = 2014;
let version = '';
if (clientOS === 0) {
    clientOS = 'IOS';
} else {
    clientOS = 'Android';
}
if (clientDeviceBirthday < 2015) {
    version = 'облегченную версию';
} else {
    version = 'версию';
}
alert(`Установите ${version} приложения для ${clientOS} по ссылке`)