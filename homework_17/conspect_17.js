"use strict"

// Интерпретируемый язык
// Высокоуровневый
// Веб
// ООП функциональный стиль процедурный
// Синхронний Блокирующий Однопоточный

// console.log("start");
// //Блок Потока
// for (let i = 0; i < 5500000000; i++) {
//   let a = i ** i;
// }
// //Блок Потока

// console.log("end");

// callback - aSync

// function foo(cb) {
//   for (let i = 0; i < 5500000000; i++) {
//     let a = i ** i;
//   }

//   cb();
// }

// foo(showMessage);

// function showMessage () {
//   console.log("Розрахунок завершено!");
// }

// setTimeout()
// setInterval()

// setTimeout(cb, delay, ...args)



// setTimeout(() => {
//   console.log("Hello");
// }, 2000);


// function sayHi (name) {
//   console.log(`Hi, ${name}!`);
// }

// let timerId = setTimeout(sayHi, 2000, "John");

// let number = Math.random().toFixed(2) * 100;

// console.log(number);

// if(number > 50) {
//   clearTimeout(timerId);
// }

// function rideTaxi(cb) {
//   console.log("Батьки сіли в таксі");
//   setTimeout(() => {
//     console.log("Поїздка завершена");
//     cb();
//   }, 3000);
// }

// function parentsMessage() {
//   console.log("Ми вже дома");
// }

// rideTaxi(parentsMessage);


// function getWeather (cb) {
//   let weather;

//   setTimeout(() => {
//     weather = "Сонячно. Температура 23С";
//     cb(weather);
//   }, 2000)
// }

// function showWeather(weather) {
//   console.log(`Погода в вашому місті: ${weather}`);
// }

// getWeather(showWeather);


// let timerId = setInterval(() => {
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 1000)

// setTimeout(() => {
//   clearInterval(timerId);
// }, 5100);

// let count = 1;

// let timerId = setInterval(() => {
//   if(count >= 5) {
//     clearInterval(timerId);
//   }
//   count++;
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }, 2000)
// let count = 1;

// let timerId = setTimeout(function func() {
//   if (count > 5) {
//     clearTimeout(timerId);
//     return;
//   }
  
//   count++;
//   let date = new Date().toLocaleTimeString();
//     console.log(date);

//   timerId = setTimeout(func, 1000);
// }, 1000);


// console.log("start");

// setTimeout(() => {
//   console.log("TimeOut");
// }, 0);

// console.log("end");\

// function hardFunc() {
//   for (let i = 0; i < 6500000000; i++) {
//     let a = i ** i;
//   };
//   console.log("HardFunction")
// }


// console.log("start");

// setTimeout(() => {
//   console.log("TimeOut 1000");
// }, 1000);

// setTimeout(() => {
//   console.log("TimeOut 5000");
// }, 5000);


// hardFunc()


// console.log("end");


function makeDish1(title, time, cb) {
  setTimeout(() => {
    console.log(`Ваша страва ${title} готова`);
    cb?.();
  }, time);
}
function makeDish2(title, time, cb) {
  setTimeout(() => {
    console.log(`Ваша страва ${title} готова`);
    cb?.();
  }, time);
}
function makeDish3(title, time, cb) {
  setTimeout(() => {
    console.log(`Ваша страва ${title} готова`);
    cb?.();
  }, time);
}
function makeDish4(title, time, cb) {
  setTimeout(() => {
    console.log(`Ваша страва ${title} готова`);
    cb?.();
  }, time);
}

makeDish1("Борщ", 3000, () => {
  makeDish2("Паста", 2000, () => {
    makeDish3("Кава", 500, () => {
      makeDish4("Морозиво", 100);
    });
  });
});

