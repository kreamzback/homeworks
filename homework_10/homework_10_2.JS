function memoize (fn, cacheLimit) {
  const cache = new Map();

  return function(...args) {
    const key = args.join(",");
    
    if (cache.has(key)) {
      console.log("From cache");
      console.log(cache);
      return cache.get(key);
    };

    const result = fn(...args);


    for (let cachedValue of cache.values()) {
      if (cachedValue === result) {
        console.log("Finded duplicate, not add to cache");
        return result;
      };
    };


    if (cache.size >= cacheLimit) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    };

    cache.set(key, result);
    return result;
  };
};

function sum(a, b) {
  return a + b;
};

const memoizedAdd = memoize(sum, 3);

console.log(memoizedAdd(10, 15));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(10, 15));
console.log(memoizedAdd(3, 3));
console.log(memoizedAdd(6, 6));
console.log(memoizedAdd(10, 15));
