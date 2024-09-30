function randomDelayPrint(message) {
  for (let i = 0; i < message.length; i++) {
    let delay = Math.random() * 1000;

    setTimeout(() => {
      process.stdout.write(message[i]);
    }, delay);
  }
}

randomDelayPrint("Hello, World!");
