function sum (a, b) {
  return a + b;
}

function logArguments (fn) {
  return function(...args) {
    console.log(`Hello, the sum of ${args} equal`);
    return fn.apply(this, args);
  };
}

const loggedSum = logArguments(sum);

console.log(loggedSum(5, 10));