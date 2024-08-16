function camelCase(str, separator = " ") {
  let lowerCaseStr = str.toLowerCase();
  let result = '';
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] == separator) {
      result += lowerCaseStr[i+1].toUpperCase();
    } else {
      result += lowerCaseStr[i];
    };
  };
  return result;
};
console.log(camelCase("to string"))
