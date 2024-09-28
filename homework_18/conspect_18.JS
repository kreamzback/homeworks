let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Я вдома");   
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
