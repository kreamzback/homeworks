function isPalindrome (str) {
  let reversed = "";
  let unspacedString = str.replaceAll(" ", "");
  for (let i = unspacedString.length -1; i >= 0; i--) {
    reversed += unspacedString[i];
  }
  if (reversed == unspacedString) {
    return "is a palindrome"; 
  } else {
    return "is not a palindrome";
  }
};

console.log(isPalindrome("і що сало ласощі"));