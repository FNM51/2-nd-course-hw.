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


