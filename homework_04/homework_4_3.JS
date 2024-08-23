const heightNumber = 4; 

console.log([...Array(heightNumber)].map((_, index) => ' '.repeat(heightNumber - index - 1) + '*'.repeat(2 * index + 1)).join('\n'));