// Use `reduce` to compute the sum of squares of all numbers in an array.

let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0);
}

console.log(sumOfSquares(array)); // => 83
