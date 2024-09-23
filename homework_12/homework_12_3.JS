"use strict"

function sequence (...functions) {
  return function (initialValue) {
    return functions.reduce((acc, fn) => fn(acc), initialValue);
  };
}

function add2 (x) {
  return x + 2;
}

function multiply3 (x) {
  return x * 3;
}

function subtract5 (x) {
  return x - 5;
}

const sequencedFunction = sequence(add2, multiply3, subtract5);

console.log(sequencedFunction(5));

