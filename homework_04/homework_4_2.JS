const isPerfectNumber = 6;
let result = 0;
let arrayOfPerfectNumbers = [];
for (let i = 1; i <= isPerfectNumber / 2; i++) {
  if (isPerfectNumber % i === 0) {
    result += i;

  };
  if (i === result) {
    arrayOfPerfectNumbers.push(i);
    result = 0;
  };
}
console.log(arrayOfPerfectNumbers);
