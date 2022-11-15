// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function S(a,b) {
//     let result = a*b;
//     console.log(result)
// }
// S(13, 17)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function Scircle(r) {
//     let result = Math.PI*r**2
//     console.log(result)
// }
// Scircle(7)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h,r) {
//     let result = 2*Math.PI*r*(r+h);
//     console.log(result)
// }
// cylinder(5,7)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// array([11,34,25,'qwe',])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function asd (tag,text) {
// document.write(`<${tag}>${text}</${tag}>`)
// }
// asd ('p','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, reiciendis?')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function asd (text) {
//  document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// asd ('Lorem ipsum dolor sit amet')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function asd (text, counter) {
//     document.write(`<ul>`)
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// asd ('Lorem ipsum dolor sit amet.', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array(y, ...arr) {
//     console.log(arr)
// }
// array(1,11,34,25,'qwe','zxc', true, false)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'max', age: 30,},
//     {id: 2, name: 'vasya', age: 29,},
//     {id: 3, name: 'olya', age: 31,},
//     {id: 4, name: 'anya', age: 20,},
//     {id: 5, name: 'tolya', age: 40,},
//     {id: 6, name: 'igor', age: 35,},
//     {id: 7, name: 'sasha', age: 33,}
// ];
//
// function array(arr) {
//     for (let i = 0; i < arr.length; i++)
//         document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
//
//
// }
// array(users)

// - створити функцію яка повертає найменьше число з масиву


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
