function isPalindrome (str) {
  let reversed = "";
  for (let i = str.length -1; i >= 0; i--) {
    reversed += str[i];
  }
  if (reversed == str) {
    return "is a palindrome"; 
  } else {
    return "is not a palindrome";
  }
};

console.log(isPalindrome("тут"));