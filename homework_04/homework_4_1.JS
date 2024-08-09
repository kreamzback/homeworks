let num;

for(let i = 2; i < num; i++){
  if(num % i == 0) {
    console.log("Число N не є простим числом");
    break;
  } else if (num % i != 0) {
    console.log("Число N є простим числом");
    break;
  };
};