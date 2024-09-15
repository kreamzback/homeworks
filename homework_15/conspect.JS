// function Cat (name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype = {
//   sleep() {
//     console.log("im  sleep");
//   },
// };

// const tom = new Cat("Tom", "blue");
// console.log(tom);
// tom.sleep();

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sleep() {
//     console.log("im sleep")
//   }
// }

// const garfield = new Cat("Garfield", "orange");

// console.log(garfield);
// garfield.sleep();

// class Animal {
//   sleep() {
//     console.log("im sleep");
//   }
// }

// let animal = new Animal();
// animal.sleep();

// let method = "abs";

// class Cat {
//   legCount = 4;
//   #stomachvalue = 3;
//   #toYawn() {
//     console.log("im Yawn");
//   }

//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sleep() {
//     console.log(this.#stomachvalue);
//     this.#toYawn();
//   }

//   [method]() {
//     console.log("Hello");
//   }
// }

// const garfield = new Cat("Garfield", "orange");
// console.log(garfield);
// garfield.sleep();



// class BankAccount {
//   static bankCode = "555333";
//   static isAccountExist(account) {
//     return account >= 111000 && account <= 333000;
//   }

//   #balance = 1000;
//   #checkBankAccess() {
//     return Math.random() > 0.5;
//   }

//   constructor(bankAccountNumber) {
//     this.bankAccountNumber = bankAccountNumber;
//   }

//   getMoney(amont) {
//     if(!this.#checkBankAccess()) {
//       console.log("Банк недоступний");
//       return;
//     }
//     if(amont <= this.#balance) {
//       this.#balance -= amont;
//       console.log(`Ви зняли ${amont} грн`);
//     } else {
//       console.log("Нема грошей на рахунку");
//     }
//   }
// }

// let myAccount = new BankAccount(111222);

// class Cat {
//   static hastail = true;
//   static convertCatYears(years) {
//     return years * 7;
//   }

//   legCount = 4;
//   #stomachvalue = 3;
//   #toYawn() {
//     console.log("im Yawn");
//   }

//   #toy = "red ball";

//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sleep() {
//     console.log(this.#stomachvalue);
//     this.#toYawn();
//     console.log("im sleep");
//   }

//   get getToy() {
//     return this.#toy;
//   }

//   set getToy(newToy) {
//     this.#toy = newToy;
//   }
// }



// const garfield = new Cat("Garfield", "orange");
// console.log(garfield);
// garfield.getToy = "orange bone";
// console.log(garfield.getToy);

// constructor(animalClass) {
  //   this.animalClass = animalClass
  // }

class Animal {
  constructor(animalClass) {
    this.animalClass = animalClass;
  }
  sleep() {
    console.log("im sleep");
  }
}

class Cat extends Animal {
  constructor(...args) { // цей конструктор ствооюється автоматично
    super(...args);
  }
  
  play() {
    console.log("im play");
  }
}

let tom = new Cat("Ссавці", "Tom", "blue");
tom.play();
tom.sleep();

console.log(tom);
