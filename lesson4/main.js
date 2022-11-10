// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let user of users) {
//     document.write(`
// <div class="userbox">
//     <h3>${user.name}</h3>
//     <p>${user.age}</p>
// </div>
// `)}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let users = [
//     {id: 0, name: 'vasya', age: 31, status: false},
//     {id: 1, name: 'petya', age: 30, status: true},
//     {id: 2, name: 'kolya', age: 29, status: true},
//     {id: 3, name: 'olya', age: 28, status: false},
//     {id: 5, name: 'max', age: 30, status: true},
//     {id: 6, name: 'anya', age: 31, status: false},
//     {id: 7, name: 'oleg', age: 28, status: false},
//     {id: 8, name: 'andrey', age: 29, status: true},
//     {id: 9, name: 'masha', age: 30, status: true},
//     {id: 10, name: 'olya', age: 31, status: false},
//     {id: 11, name: 'max', age: 31, status: true}
// ];
// for (let i = 0; i < users.length -1; i++) {
//       document.write(`<div> ${i}
//     ${users[i].name}
// </div>`)
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let i = 0
// while (i<users.length) {
//     let user = users[i]
//     document.write(`
// <h1>${user.name}</h1>
// `);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоікв h1 c довільним текстом і індексом всередині.
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let i = 0;
// while (i<users.length-1) {
//     document.write(`<div><h1>${i} ${users[i].name}</h1></div>`);
//     i++
// }
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//  document.write(`<ul>`);
// for (let listOfItem of listOfItems) {
//  document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);


//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(
//         `
// <div class="container">
// <div class="product-card">
//         <h3 class="product-title">${product.title}</h3>
//         <h4 class="price">price ${product.price}</h4>
//         <img src="${product.image}" alt="${product.title}" class="product-image">
// </div>
// </div>`
//     )
// }
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (let user of users){
//     if (user.status) {
//         document.write(
// `<div class="box">
// <h3>${user.name}</h3>
// <p>${user.status}</p>
// </div>`)
//     }
// }
// for (let user of users){
//     if (!user.status) {
//         document.write(
//             `<div class="box">
// <h3>${user.name}</h3>
// <p>${user.status}</p>
// </div>`)
//     }
// }
// for (let user of users){
//     if (30<user.age) {
//         document.write(
//             `<div class="box">
// <h3>${user.name}</h3>
// <p>${user.age}</p>
// </div>`)
//     }
// }
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
