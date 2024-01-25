function seasons() {
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
}

function memory() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words.sort(() => Math.random() - 0.5);
    let wordsInStringForAlert = words.join(', ')
    alert(wordsInStringForAlert);
    let firstWord = words.shift();
    let secondWord = words.pop();
    let regexp = /^[а-яА-Я]*$/;
    let firstWordUser = prompt('Какое было первое слово?');
    if (regexp.test(firstWordUser)) {
        let secondWordUser = prompt('Какое было второе слово?');
        if (regexp.test(secondWordUser)) {
            if (firstWord.toLowerCase() === firstWordUser.toLowerCase() && secondWord.toLowerCase() === secondWordUser.toLowerCase()) {
                alert('Поздравляю! У вас феноменальная память! Вы победили! 😆');
            } else if (firstWord.toLowerCase() === firstWordUser.toLowerCase() || secondWord.toLowerCase() === secondWordUser.toLowerCase()) {
                alert('Вы были близки к победе! 😉');
            } else {
                alert('К сожалению вы проиграли 😭');
            }
        } else {
            alert('Вы ввели что-то не то 😕');
        }
    } else {
        alert('Вы ввели что-то не то 😕');
    }   
}