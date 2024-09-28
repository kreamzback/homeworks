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
    currentValue = startValue;
    return currentValue;
  };

  count.reset = function() {
    currentValue = step;
    return currentValue;
  };

  return count;
}

const myCounter = counter(10, 2);

console.log(myCounter.decrement());
