// The penultimate function in the example below does not return the expected result. 
// Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

function penultimateOriginal(string) {
  return string.split(' ')[-2];
}

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// The starting code returned `undefined` because the arrays resulting from `.split` not have values at `-2`.
// Working code is below original code