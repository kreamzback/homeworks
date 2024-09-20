"use strict"

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// Object.preventExtensions(person); // забороняє додавати

// if(Object.isExtensible(person)) {
//   person.email = "miketaison@gmail.com";
// } else {
//   console.log("Не можна додавати нові поля");
// };



// // person.email = "miketaison@gmail.com";
// person.age = 62;
// delete person.name;

// console.log(person);

// Object.seal() не можна додавати та видаляти поля

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// Object.seal(person);

// if (Object.isSealed(person)) {
//   console.log("Не можна додавати та видаляти поля");
// } else {
//   person.age = 62;
//   delete person.name;
//   person.email = "miketaison@gmail.com";
// }

// console.log(person);

// Object.freeze забороняє видаляти, змінювати та додавати поля

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// Object.freeze(person);

// if (Object.isFrozen(person)) {
//   console.log("Не можна додавати та видаляти поля");
// } else {
//   person.age = 62;
//   delete person.name;
//   person.email = "miketaison@gmail.com";
// };

// console.log(person);

// function Actor(name, films) {
//   this.name = name;
//   this.films = films;
// }

// Actor.prototype = {
//   getFilms() {
//     this.films.forEach((film) => {
//       console.log(film);
//     });
//   },
// };

// let actor = new Actor("Mattew McConahie", ["True detective"])

// for (const key in actor) {
//   console.log(key, actor[key])
// }


// Доскрипторы


// console.log(Object.getOwnPropertyDescriptor(person, "name", "age"))

// {
//   value: 'Mike Taison',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// let person = {
//   name: "Mike Taison",
//   age: 60,
// };

// Object.defineProperty(person, "name", {
//   value: 'Mike Taison',
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });


// person.name = "Alexandr Usik";

// for (const key in person) {
//   console.log(key, person[key]);
// }

// console.log(person);


// let actor = {
//   name: "Jason Stetham",
//   age: 49,
//   films: ["Interstellar", "Forsage"],
// }

// let actor2JSON = JSON.stringify(actor, null, 2);
// let actor2 = JSON.parse(actor2JSON);

// actor2.age = 30;
// actor2.films.push("Interstellar 2")


// console.log(actor);
// console.log(actor2);

let actor = {
  name: "Jason Stetham",
  age: 49,
  films: ["Interstellar", "Forsage"],
}

let actor2 = structuredClone(actor);

actor2.films.push("Interstellar 2")
actor2.age = 30;
actor.age = 23;

console.log(actor);
console.log(actor2);