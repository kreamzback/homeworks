const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(arr) {
  return arr.map((currentValue) => {
    return currentValue[0].toUpperCase() + currentValue.slice(1).toLowerCase();
  });
}

console.log(capitalizeStrings(words));
