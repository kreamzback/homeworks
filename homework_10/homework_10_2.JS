function memoize (fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = [...args];
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

function add(a, b) {
  return a + b;
};

const memoizedAdd = memoize(add);

console.log(memoizedAdd(10, 15));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));