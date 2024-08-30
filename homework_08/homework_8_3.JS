const numbers = [1, 2, 3, 4, 5];

function analyzeArray (arrOfNumbers) {
  let obj = {};
  let sumOfArray = arrOfNumbers.reduce((acc, elem) => acc + elem);
  let averageNum = sumOfArray / arrOfNumbers.length;
  let minChar = Math.min(...arrOfNumbers);
  let maxChar = Math.max(...arrOfNumbers);

  obj.sum = sumOfArray;
  obj.average = averageNum;
  obj.min = minChar;
  obj.max = maxChar;
  
  return obj;
};


console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }