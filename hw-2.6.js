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