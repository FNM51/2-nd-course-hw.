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