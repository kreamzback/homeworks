function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

function findPalindrome(num, maxSteps = 1000) {
  let steps = 0;
  let currentNum = num;

  while (!isPalindrome(currentNum)) {
    const reversed = reverseNumber(currentNum);
    currentNum += reversed;
    steps++;
    
    if (steps >= maxSteps) {
      return {
        result: null,
        steps: steps,
        message: "Паліндром не знайдено за ліміт кроків. Можливо, це Lychrel число."
      };
    }
  }

  return {
    result: currentNum,
    steps: steps
  };
}


console.log(findPalindrome(96)); 
console.log(findPalindrome(196)); 
