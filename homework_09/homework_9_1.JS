function getPrimeNumbers(arr) {
  return arr.filter((num) => {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false; // Якщо ділиться на інше число, то не є простим
    }
    return true;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


console.log(getPrimeNumbers(numbers));