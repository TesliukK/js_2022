// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = []
arr[0] = 1
arr[1] = 'qwe'

console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1 = {
    title: 'book',
    pageCount: 150,
    genre: 'fiction'
}
console.log(books1)
let books2 = {
    title: 'book',
    pageCount: 300,
    genre: 'documentary'
}
console.log(books2)
let books3 = {
    title: 'book',
    pageCount: 400,
    genre: 'historical'
}
console.log(books3)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'book',
    pageCount: 150,
    genre: 'fiction',
    authors: ['dima',

    ]
}
console.log(book1)
let book2 = {
    title: 'book',
    pageCount: 350,
    genre: 'fiction',
    authors: [{
        name: 'anna',
        age: 25
    }
    ]
}
console.log(book2)
let book3 = {
    title: 'book',
    pageCount: 550,
    genre: 'fiction',
    authors: {
        name: 'kolya',
        age: 45
    }
}
console.log(book3)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name: 'inna', username: 'qweasd', password: 'qwe12345'},
    {name: 'vasya', username: 'qweasd', password: 'asd1234'},
    {name: 'vanya', username: 'qweasd', password: 'zxc2345'},
    {name: 'tolya', username: 'qweasd', password: 'cvb2345'},
    {name: 'anna', username: 'qweasd', password: '4561234'},
    {name: 'vika', username: 'qweasd', password: 'sdgh2345'},
    {name: 'lena', username: 'qweasd', password: 'sgh215424'},
    {name: 'vova', username: 'qweasd', password: 'sghj345637'},
    {name: 'anton', username: 'qweasd', password: 'dgjgk2347'},
    {name: 'andriy', username: 'qweasd', password: '234lgfg'}
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
