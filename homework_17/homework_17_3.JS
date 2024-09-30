function intervalRace(functions, t) {
  return new Promise((resolve) => {
    let results = [];
    let currentIndex = 0;

    function callNextFunction() {
      if (currentIndex < functions.length) {
        const result = functions[currentIndex](); 
        results.push(result);
        currentIndex++;

        setTimeout(callNextFunction, t);
      } else {
        resolve(results);
      }
    }

    callNextFunction();
  });
}
