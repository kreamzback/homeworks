function counter (startValue, step) {
  let currentValue = startValue;
  function count() {
    return currentValue;
  }

  count.increment = function() {
    currentValue += step;
    return currentValue;
  };

  count.decrement = function() {
    currentValue -= step;
    return currentValue;
  };

  count.reset = function() {
    currentValue = startValue;
    return currentValue;
  };

  return count;
}

const myCounter = counter(10, 2);

console.log(myCounter.reset());
