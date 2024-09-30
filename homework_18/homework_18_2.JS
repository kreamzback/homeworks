function concurrentPromises(promises, maxConcurrent) {
  return new Promise((resolve, reject) => {
    const results = [];
    let runningPromises = 0;
    let currentIndex = 0;

    function runNext() {
      if (currentIndex >= promises.length && runningPromises === 0) {
        return resolve(results);
      }

      while (runningPromises < maxConcurrent && currentIndex < promises.length) {
        const promiseIndex = currentIndex;
        const promise = promises[promiseIndex];

        runningPromises++;
        currentIndex++;

        promise()
          .then((result) => {
            results[promiseIndex] = result;
          })
          .catch((err) => {
            return reject(err);
          })
          .finally(() => {
            runningPromises--;
            runNext();
          });
      }
    }
    runNext();
  });
}

const createPromise = (delay, result) => () => new Promise((resolve) => setTimeout(() => resolve(result), delay));

const promises = [
  createPromise(1000, 'A'),
  createPromise(500, 'B'),
  createPromise(1500, 'C'),
  createPromise(2000, 'D'),
  createPromise(300, 'E')
];

concurrentPromises(promises, 2)
  .then((results) => {
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

