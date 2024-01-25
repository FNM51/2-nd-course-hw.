function task1(){
    console.log('Task-1');
    const numbers = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 10){
            console.log(numbers[i]); 
            break;}
        console.log(numbers[i]);
    }
}

function task2(){
    console.log('Task-2');
    const numbers = [1, 5, 4, 10, 0, 3];
    console.log(numbers.indexOf(4))
}

function task3(){
    console.log('Task-3');
    const numbers = [1, 3, 5, 10, 20];
    console.log(numbers.join(' '))
}

function task4(){
    console.log('Task-4');
    const array = [
        [1, 1, 1], 
        [1, 1, 1], 
        [1, 1, 1]
    ]
    console.log(array)
}

function task5() {
    console.log('Task-5');
    const array = [1, 1, 1]
    array.push(2, 2, 2)
    console.log(array)    
}

function task6() {
    console.log('Task-6')
    const array = [9, 8, 7, 'a', 6, 5];
    array.sort();
    array.pop();
    console.log(array)
}

function task7() {
    const numbers = [9, 8, 7, 6, 5];
    let userNumber = Number(prompt('Угадай число'));
    numbers.includes(userNumber) ? alert('Угадал') : alert('Не угадал');
}

function task8() {
    console.log('Task-8')
    let line = 'abcdef';
    const array = line.split('');
    array.reverse();
    line = array.join('');
    console.log(line);
}

function task9() {
    console.log('Task-9');
    let array = [[1, 2, 3,],[4, 5, 6]];
    let assistantArray = array.join();
    array = assistantArray.split(',')
    console.log(array);
}

function task10() {
    console.log('Task-10');
    const numbers = [4, 8, 5, 3, 7, 6, 2, 10, 9, 1]
    numbers.forEach(i => {
        console.log(i)
        const result = numbers.reduce((a, b) => a + b)
        console.log(result)
    });
}

//Task 11
function squareOfNumbers(array) {
    const result = [];
    array.forEach(element => {
        element = element ** 2;
        result.push(element)
    });
    return result;
}
function task11() {
    console.log('Task-11');
    const numbers = [1, 2, 3, 4, 5];
    console.log(squareOfNumbers(numbers));
}

//Task 12
function stringLenght(array) {
    const result = [];
    array.forEach(element => {
        result.push(element.length)
    });
    return result;
}
function task12() {
    console.log('Task-12');
    const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
    console.log(stringLenght(words));
}

//Task 13
function filterPositive(array) {
    const negative = [];
    array.forEach(element => {
        if (element < 0){negative.push(element)}
    });
    return negative;
}
function task13() {
    console.log('Task-13');
    console.log(filterPositive([-1, 0, 5, -10, 56]));
    console.log(filterPositive([-25, 25, 0, -1000, -2]));
}

function task14() {
    console.log('Task-14');
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(Math.floor(Math.random() * 10));     
    };
    const filter = numbers.filter(element => element % 2 === 0);
    console.log(numbers);
    console.log(filter);
}

function task15() {
    console.log('Task-15');
    const numbers = [];
    for (let i = 1; i <= 6; i++) {
        numbers.push(Math.ceil(Math.random() * 10 + 1));     
    };
    let result = numbers.reduce((a,b) => a + b );
    result = result / 2;
    console.log(numbers);
    console.log(result);
}