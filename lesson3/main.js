// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x !== 0) {
    console.log('true')
} else {
    console.log('false')
}
// -----------------------------------------------------------2 task----------------------------------------------------
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('enter 1 to 59')
// if (time >= 1 && time < 15){
// console.log('first');
// }
// else if (time >=15 && time < 30){
//     console.log('second');
// }
// else if (time >=30 && time < 45){
//     console.log('third');
// }
// else if (time >=45 && time < 59){
//     console.log('fourth');
// }
// else  {
//     console.log('???')
// }
//----------------------------------------------3 task --------------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('enter 1 to 31')
// if (day >= 1 && day < 10){
//     console.log('first');
// }
// else if (day >=10 && day < 20){
//     console.log('second');
// }
// else if (day >=20 && day < 31){
//     console.log('third');}
// else {
//     console.log('not the day of the month')
// }
//-------------------------------------------4 task-------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (3) {
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('fridau')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
    default:
        console.log('???')
        break
}
//-------------------------------------------5 task--------------------------------------------------------------------
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = +prompt('enter number')
let b = +prompt('enter number')
if (a>b) {
    document.write(a)
}
else if (a<b) {
    document.write(b)
}
else if (a===b) {
    document.write('equally')
}
// --------------------------------------------6 task--------------------------------------------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let y = prompt() || 'default'
// console.log(y)

