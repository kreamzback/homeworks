// let isPerfectNumber = 6;
// let result = 0;
// for(let i = 1; i <= i / 2; i++) {
//   if(isPerfectNumber % i === 0) {
//     result += i;
//   };
//   console.log(result);
// }

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










// якщо я правильно зрозумів потрібно перебрати всі числа від 1 до isPerfectNumber
// і мені кожне число потрібно ділити з кожним до нього, потім складати ті числа які є дільниками і порівнювати з тим 
// числом що я ділив, потім записати його в результ якщо true і продовжити виконання
// програми якщо false, я поки що не знайшов рішення в своїй голові що до цього, але буду думати,
// може ви якось підштовхнете мене до правильної послідовності дій, якщо я роблю щось не так.


