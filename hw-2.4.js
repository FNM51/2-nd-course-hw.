// Task #1
for (let i = 0; i < 2; i++){
    console.log('Привет')
}
// Task #2
for (i = 1; i <= 5; i++){
    console.log(i)
}
// Task #3
for (i = 7; i <= 22; i++){
    console.log(i)
}
// Task #4
const salary = {
    "Коля" : 200,
    "Вася" : 300,
    "Петя" : 400
}
for (let name in salary) {
    console.log(`${name} - зарплата ${salary[name]}$`)
}
// Task #5
let n = 1000;
i = 0;
while (n > 50) {
    n = n / 2;
    i++;
}
console.log(`Потребовалось ${i} операций`);
// Task #6
for (let firstFriday = 1; firstFriday <= 31; firstFriday = firstFriday + 7){
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`)
}
//За основу взят декабрь 2023 года