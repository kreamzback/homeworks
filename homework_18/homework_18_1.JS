function sumArrayPromise(numbers) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
      return reject(new Error("Всі елементи масиву повинні бути числами"));
    }

    setTimeout(() => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }, 3000);
  });
}


sumArrayPromise([1, 2, 3, 4, 5])
  .then(sum => {
    console.log("Сума чисел:", sum);
  })
  .catch(error => {
    console.error(error.message);
  });
