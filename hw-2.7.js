function task1() {
    let string = "js";
    string = string.toUpperCase();
}

//Task-2
function searchStart(array, search) {
    array.forEach((el) => {
        if (el.toLowerCase().includes(search.toLowerCase())) {
            console.log(el);
        }
    }); 
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Task-3
function getValueFloor(value) {
    return Math.floor(value);
}
function getValueCeil(value) {
    return Math.ceil(value);
}
function getValueRound(value) {
    return Math.round(value);
}
let number = 32.58884;
console.log(getValueFloor(number));
console.log(getValueCeil(number));
console.log(getValueRound(number));

function task4() {
    console.log(Math.max(52, 53, 49, 77, 21, 32));
    console.log(Math.min(52, 53, 49, 77, 21, 32));
}

function task5() {
    return Math.random()* 10
}

//Task-6
function getRandomArrNumbers(number) {
    const array = [];
    let i = Math.floor(number / 2);
    for (i; i > 0; i--) {
        array.push(Math.floor(Math.random() * number))
    }
    return array;
}

let numberUser = prompt('Введи число:');
console.log(getRandomArrNumbers(numberUser));

//Task-7
function random(min, max) {
return Math.round(Math.random() * (max - min)) + min;
}

console.log(random(15, 51));

function task8() {
    let date = new Date();
    return date;
}

function task9() {
    let currentDate = new Date();
    currentDate.setDate(73);
    return currentDate;
}

//Task-10
let myDate = new Date();

function dateToTranslate(date){
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let dateDisplay = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] + "\nВремя: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 
return dateDisplay;
}
console.log(dateToTranslate(myDate)); 

//Task-11
//В файле main.js
