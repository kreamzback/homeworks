function permute(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  let permutations = [];


  for (let i = 0; i < arr.length; i++) {
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    let remainingPermutations = permute(remaining);

    for (let perm of remainingPermutations) {
      permutations.push([arr[i], ...perm]);
    }
  }

  return permutations;
}

const input = [1, 2, 3];
const result = permute(input);

console.log(result);


