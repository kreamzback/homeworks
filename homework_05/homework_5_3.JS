function findGCD (a, b) {
  let result;
  let c; 
  while (a != b) {
    if (a > b) {
      a -= b;
    } else if (a < b) {
      c = a;
      a = b;
      b = c; 
    };
  };
  return result = a;
};

console.log(findGCD(16, 32));