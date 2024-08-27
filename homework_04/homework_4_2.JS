function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
          sum += i;
      }
  }
  return sum === num;
}

function findPerfectNumbers(N) {
  const perfectNumbers = [];
  for (let i = 1; i <= N; i++) {
      if (isPerfectNumber(i)) {
          perfectNumbers.push(i);
      }
  }
  return perfectNumbers;
}

let N = 10000;
const result = findPerfectNumbers(N);
console.log("Досконалі числа:", result);
