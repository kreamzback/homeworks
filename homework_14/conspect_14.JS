"use strict"

// let user = {
//   firstName: "John",
//   lastName: "Snow",
//   age: 30,
//   get fullName() {
//     return `${this.FirstName} ${this.LastName}`
//   },
//   set fullName(newName) {
//     let newNameArr = newName.split(" ");
//     this.lirstName = newNameArr[0];
//     this.lastName = newNameArr[1];
//   },
// };
// user.fullName = "leo messi";
// console.log(user.fullName);


// let user = {
//   _phone: "+3806321312",
//   get phone() {
//     return this._phone;
//   },
//   set phone(newPhone) {
//     if(newPhone.startsWith("+380")){
//       this._phone = newPhone;
//     } else {
//       console.log("dont currently");
//     };
//   },
// };
// user.phone = "+38021321312"
// console.log(user.phone);

// let user1 = {
//   name: "Leonardo Dicaprio",
// };

// let user2 = {
//   __proto__: user1,
// };

// let user3 = {
//   name: "Peter Parker",
//   __proto__: user2,
// };

// console.log(user3.name);

// let animal = {
//   sleep () {
//     console.log("i'm sleep");
//   },
// };

// let cat = { 
//   eat() {
//     console.log("i'm eat");
//   },
//   __proto__: animal,
// };

// let dankey = {
//   say() {
//     console.log("iaiaia");
//   },
//   __proto__: animal,
// };

// let shrekDankey = {
//   say() {
//     console.log("We drived?");
//   },
//   __proto__: dankey,
// }

// dankey.say();
// dankey.sleep();

// shrekDankey.sleep();
// shrekDankey.say();



// let user = {
//   role: "user",
//   login() {
//     console.log("Hello! I'm logged in!");
//   },
//   logout() {
//     console.log("Good Bye! I'm logged out!");
//   },
// };

// let admin = {
//   role: "Admin",
//   addProduct(productName) {
//     console.log(`Я додав новий продукт - ${productName}`);
//   },
//   __proto__: user,
// };

// let superAdmin = {
//   role: "SuperAdmin",
//   createAdmin(adminName) {
//     console.log(`Я створив нового адміна - ${adminName}`);
//   },
//   __proto__: admin,
// };

// // [[Prototype]]

// // obj.hasOwnProperty(key)
// // console.log(Object.hasOwn(superAdmin, "createAdmin"));
// // console.log(Object.getOwnPropertyNames(admin));
// // console.log(superAdmin.hasOwnProperty("login"));
// // console.log(Object.getOwnPropertySymbols(admin));


// // for (const key in superAdmin) {
// //   console.log("key:", key);
// //   console.log("value:", superAdmin[key]);
// //   console.log("====================");
// // };



// // superAdmin[[Prototype]]


// // superAdmin.addProduct("Iphone");
// // superAdmin.login();
// // superAdmin.logout();
// // superAdmin.createAdmin("Vasya");

// let animal = {
//   sleep () {
//     console.log("i'm sleep");
//   },
// };


// function Cat(name, color) {
//   this.name = name;
//   this.color = name;
// };

// Cat.prototype = {
//   play() {
//     console.log("Im playing!");
//   },
//   say() {
//     console.log("meow!");
//   },
//   __proto__: animal,
// };

// let tom = new Cat ("Tom", "blue");
// let garfield = new Cat ("Garfield", "orange");

// tom.play();
// garfield.play();

// tom.say();
// garfield.say();

// tom.sleep();
// garfield.sleep();


// let animal = {
//   sleep () {
//     console.log("i'm sleep");
//   },
// };

//Object.create(proto, {})

// let cat = Object.create(animal , { 
//   eat() {
//     console.log("i'm eat");
//   },
// });

// Object.setPrototypeOf(obj, proto)
// Object.setPrototypeOf(cat, animal);

// Object.getPrototypeOf(obj, proto)
// console.log(Object.getPrototypeOf(cat));

//obj.isPrototypeOf()
// console.log(animal.isPrototypeOf(cat))

// let cat = Object.create(animal, {
//   play() {
//     console.log("I'm playing!");
//   },
// });

// let arr = [2, 4, 6, 8];
// let arr2 = new Array(2, 4, 6, 8);
// console.log(arr);

// arr.forEach((item) => {
//   console.log(item);
// });

// console.log(Array.prototype);
// Array.prototype[[Prototype]] = Object.prototype
// console.log(Object.prototype);



// let obj = {
//   age: 30,
// };

// let obj2 = new Object({
//   age: 30,
// });

// console.log(obj);
// console.log(obj2);


// Array.prototype.ourMap = function (cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result[i] = cb(this[i], i, this);
//   };
// };

// let arr = [1, 3, 4, 7];
// let arr2 = [1, 2, 6, 10];

// let newArr = arr.ourMap((item) => {
//   return item ** 2;
// });
// let newArr2 = arr2.ourMap((item) => {
//   return item ** 2;
// });

// console.log(newArr);
// console.log(newArr2);

