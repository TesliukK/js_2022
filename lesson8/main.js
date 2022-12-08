// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone

}

let user1 = new User(1, 'Vasya', 'qwer', 'qwetrrt@email.com', 380961234567);
let user2 = new User(2, 'Olya', 'asdf', 'qwetrrt@email.com', 380961234567);
let user3 = new User(3, 'Lena', 'xzcv', 'qwetrrt@email.com', 380961234567);
let user4 = new User(4, 'Vanya', 'xcvb', 'qwetrrt@email.com', 380961234567);
let user5 = new User(5, 'Tolya', 'fghj', 'qwetrrt@email.com', 380961234567);
let user6 = new User(6, 'Kolya', 'ryui', 'qwetrrt@email.com', 380961234567);
let user7 = new User(7, 'Sasha', 'gjkl', 'qwetrrt@email.com', 380961234567);
let user8 = new User(8, 'Jenya', 'qwer', 'qwetrrt@email.com', 380961234567);
let user9 = new User(9, 'Dimon', 'rtyu', 'qwetrrt@email.com', 380961234567);
let user10 = new User(10, 'Oleg', 'sghh', 'qwetrrt@email.com', 380961234567)

let arrUser = [];
arrUser.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(arrUser);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let result = arrUser.filter((val) => val.id%2 === 0)
// console.log(result);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arrUser.sort(function (a, b){
//     return a.id - b.id
// }))
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone
        this.order = order

    }
}

let clients = new Client(1, 'Vasya', 'qwer', 'qwetrrt@email.com', 380961234567, ['goods']);
let client2 = new Client(2, 'Olya', 'asdf', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods']);
let client3 = new Client(3, 'Lena', 'xzcv', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods', 'srtht', 'erfdg']);
let client4 = new Client(4, 'Vanya', 'xcvb', 'qwetrrt@email.com', 380961234567, ['goods', 'goods']);
let client5 = new Client(5, 'Tolya', 'fghj', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods']);
let client6 = new Client(6, 'Kolya', 'ryui', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods']);
let client7 = new Client(7, 'Sasha', 'gjkl', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods', 'wert',]);
let client8 = new Client(8, 'Jenya', 'qwer', 'qwetrrt@email.com', 380961234567, ['goods']);
let client9 = new Client(9, 'Dimon', 'rtyu', 'qwetrrt@email.com', 380961234567, ['goods', 'goods', 'goods', 'qwe']);
let client10 = new Client(10, 'Oleg', 'sghh', 'qwetrrt@email.com', 380961234567, ['goods', 'goods',])

// створити пустий масив, наповнити його 10 об'єктами Client
// let arrClient = [];
// arrClient.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// console.log(arrClient);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(arrClient.sort(function (a, b) {
//     return a.order.length - b.order.length
// }));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineVolume = engineVolume;
    // this.greeting = function (drive){
    //     return `їдемо зі швидкістю ${maximumSpeed}`
    // }
    // this.greeting = function (info){
    //     return `model ${model}, manufacturer ${manufacturer},yearOfManufacture ${yearOfManufacture},maximumSpeed ${maximumSpeed},engineVolume ${engineVolume}`
    // }

}

let cars = new Car('Cherokee', 'jeep', 2015, 220, '2.4l MultiAir')
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(cars.greeting());
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// console.log(cars.greeting());
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function (newSpeed) {return this.maximumSpeed = this.maximumSpeed+newSpeed}
// cars.increaseMaxSpeed(100)
// console.log(cars);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function (newValue) {return this.yearOfManufacture = newValue}
// cars.changeYear(2018)
// console.log(cars);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver) {
// return
// }
// console.log(cars);


// - (Те саме, тільки через клас)
class Cars {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineVolume = engineVolume;
        // this.greeting = function (drive){
        //     return `їдемо зі швидкістю ${maximumSpeed}`
        // }
        // this.greeting = function (info){
        //     return `model ${model}, manufacturer ${manufacturer},yearOfManufacture ${yearOfManufacture},maximumSpeed ${maximumSpeed},engineVolume ${engineVolume}`
        // }
    }
}

let classCar = new Cars('Cherokee', 'jeep', 2015, 220, '2.4l MultiAir')
console.log(Cars);
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(classCar.greeting());
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// console.log(classCar.greeting());
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Cars.prototype.increaseMaxSpeed = function (newSpeed) {return this.maximumSpeed = this.maximumSpeed+newSpeed}
// classCar.increaseMaxSpeed(100)
// console.log(classCar);
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Cars.prototype.changeYear = function (newValue) {return this.yearOfManufacture = newValue}
// classCar.changeYear(2018)
// console.log(classCar);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Cars.prototype.addDriver = function (driver) {return driver}
// cars.addDriver = ['Vasya','qwer','qwetrrt@email.com', 380961234567];
// console.log(cars);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let cinderellas = [
    new Cinderella('Cinderella1', 22, 35),
    new Cinderella('Cinderella2', 23, 36),
    new Cinderella('Cinderella3', 24, 37),
    new Cinderella('Cinderella4', 25, 38),
    new Cinderella('Cinderella5', 20, 39),
    new Cinderella('Cinderella6', 21, 34),
    new Cinderella('Cinderella7', 26, 36.5),
    new Cinderella('Cinderella8', 24, 36),
    new Cinderella('Cinderella9', 20, 40),
    new Cinderella('Cinderella10', 24, 39)
];
console.log(cinderellas);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe
    }
}
let prince = new Prince('Vasya', 30, 36.5)
for (let i = 0; i < cinderellas.length; i++) {
  if



}
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку