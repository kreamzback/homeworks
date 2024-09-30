async function sequenceAsync(asyncFunctions, initialValue) {
  let result = initialValue;
  for (const func of asyncFunctions) {
    result = await func(result);
  }
  return result;
}

const asyncFunction1 = (prevResult) => new Promise((resolve) => {
  setTimeout(() => resolve(prevResult + 1), 1000);
});

const asyncFunction2 = (prevResult) => new Promise((resolve) => {
  setTimeout(() => resolve(prevResult * 2), 500);
});

const asyncFunction3 = (prevResult) => new Promise((resolve) => {
  setTimeout(() => resolve(prevResult - 3), 1500);
});

const asyncFunctions = [asyncFunction1, asyncFunction2, asyncFunction3];

sequenceAsync(asyncFunctions, 5)
  .then((result) => {
    console.log("Final result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
