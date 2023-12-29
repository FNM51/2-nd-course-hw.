//Задание №1
let a = 10;
alert(a);
a = prompt('Введите значение 20');
alert(a);
//Задание №2
let birthdayIphone = 2007;
alert(`Первый айфон был выпущен в ${birthdayIphone}`);
//Задание №3
let authorJavascript = 'Брендан Эйх';
alert(`Основатель JavaScript зовут ${authorJavascript}`);
//Задание №4
a = 10;
let b = 2;
alert(`Сумма = ${a + b}`);
alert(`Разность = ${a - b}`);
alert(`Произведение = ${a * b}`);
alert(`Частное = ${a / b}`);
//Задание №5
a = 2;
b = 5;
let result = a ** b;
alert(result);
//Задание №6
a = 9;
b = 2;
alert(a % b);
//Задание №7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num++;
num--;
alert(num);
//Задание №8
const user = {age: 0};
user.age = prompt("Сколько вам лет?");
alert(`Вам ${user.age} лет`);
//Задание №9
user.cityOfResidence = undefined;
user.age = 18;
delete user.cityOfResidence;
user.info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user['info'])
//Задание №10
user.name = prompt("Как вас зовут?");
alert(`Вас зовут ${user['name']}`);