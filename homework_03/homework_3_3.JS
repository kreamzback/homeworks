const age = '25';
let last = age[age.length -1];

if (last == 1) {
  console.log("Вам " + age + " рік")
} else if (last == 2 || last == 3 || last == 4) {
  console.log("Вам " + age + " роки");
} else if (last == 5 || last == 6 || last == 7 || last == 8 || last == 9 || last == 0) {
  console.log("Вам " + age + " років");
} else {
  console.log('error');
};
