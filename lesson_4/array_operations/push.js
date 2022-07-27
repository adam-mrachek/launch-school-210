// Write a function named push that accepts two arguments: an Array and any other value.
// The function should append the second argument to the end of the Array, and return the new length of the Array.

function push(arr, value) {
  const array = arr;

  array[arr.length] = value;

  return array.length;
}

const numbers = [1, 2, 3];
console.log(push(numbers, 3));
console.log(numbers);
