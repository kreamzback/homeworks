function sum (a, b) {
  return a + b;
}

function retry(fn, maxAttempts) {
  let count = 0;
  let lastResult;
  
  return function (...args) {
    while (count < maxAttempts) {
      try {
        lastResult = fn.apply(this, args);
        console.log(`Attempt ${count + 1}: The sum of ${args} equals ${lastResult}`);
        count++;
        return lastResult;
      } catch (error) {
        count++;
        console.log("Error");
      }
    }

    return lastResult;
  };
}

const decorated = retry(sum, 3);

console.log(decorated(3, 4));
console.log(decorated(3, 4));
console.log(decorated(3, 10));
console.log(decorated(3, 2));