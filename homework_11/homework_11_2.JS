function isNumbers (arr) {
  return arr.every(Number.isFinite);
  
}

function sum(a, b) {
  return a + b;
}

const numbersArr = [10, 5];

function validate(fn, validator) {
  return function (...args) {
    if(validator(args)) {
      console.log(`Hello, the sum of ${args} is: `);
      return fn.apply(this, args);
    } else {
      throw new Error("Error: arguments are not valid numbers");
    }
  };
}

const validateSum = validate(sum, isNumbers);

try {
  console.log(validateSum(...numbersArr));
} catch (err) {
  console.error(err.message);
}