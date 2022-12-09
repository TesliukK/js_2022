// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = ['Main','Products','About us','Contacts']
for (const menu1 of menu) {
    let ul = document.getElementsByClassName('menu')
    let menys = ul[0]
    let li = document.createElement( 'li')
    li.innerText = `${menu1}`
    menys.append(li)

}