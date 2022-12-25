// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function add(a, b, c) {
//     if (a > b && b < c) {
//         console.log(b);
//     }else if (b>a && a<c){
//         console.log(a);
//     }else if (b>c && c<a) {
//         console.log(c);
//     }else {
//         console.log('error');}
// }
// add(1,2,3)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function add(a, b, c) {
//     if (a < b && b > c) {
//         console.log(b);
//     }else if (b<a && a>c){
//         console.log(a);
//     }else if (b<c && c>a) {
//         console.log(c);
//     }else {
//         console.log('error');}
// }
// add(1,2,3)
// - створити функцію яка повертає найбільше число з масиву
// const arr = [1,23,564,0,34,11223,245,56,-123];
// const max =(array)=>{
//     let max = array[0]
//     for (const item of array) {
//         if (item>max){
//             max=item
//         }
//     }
//     return max
// }
// console.log(max(arr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [1, 2, 3];
//
// function mid(array) {
//     let sum = 0
//     for (const item of array) {
//         sum += item
//     }
//     return sum / array.length
// }
//
// console.log(mid(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function num(...arguments) {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (const item of arguments) {
//         if (item > max) {
//             max = item
//         }
//         if (item < min) {
//             min = item
//         }
//     }
//     console.log(max);
//     return min
// }
//
// let num1 = num(1, 2, 3, 4, 5, 6, 7)
// console.log(num1);
// - створити функцію яказаповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
//
// function num(array) {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.floor(Math.random() * 100)
//
//     }
//     console.log(arr);
// }
//
// num()
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
//
// function num(limit) {
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.floor(Math.random() * 100)
//
//     }
//     console.log(arr);
// }
//
// num(10)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr = [1, 2, 3]

function num(array) {
    let newArr = [];
    for (let i = array.length - 1, j = 0; i >= 0; i--) {
        newArr[j++] = array[i];
    }
    return newArr;
}

console.log(num(arr));
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
