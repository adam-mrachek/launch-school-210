// Write a function named slice that accepts three arguments: an Array, a start index, and an end index.
// The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index.
// Do not modify the original Array.

function push(arr, value) {
  const array = arr;

  array[arr.length] = value;

  return array.length;
}

function slice(array, start, end) {
  const newArray = [];

  for (let index = start; index < end; index += 1) {
    push(newArray, array[index]);
  }

  return newArray;
}

const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "d", "e", "f", "g"];
console.log(slice(numbers, 0, 2));
console.log(slice(letters, 1, 3));

console.log(numbers);
console.log(letters);
