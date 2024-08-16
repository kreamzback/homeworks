function padString(str, length, symbol, toLeft = false) {
  if (str.length >= length) {
    return str;
  } 
  const padLength = length - str.length;
  const padString = symbol.repeat(padLength);
  
  if(toLeft == false) {
    return str + padString;
  } else if (toLeft == true) {
    return padString + str;
  };
};

console.log(padString("Ivan", 6, "*"));