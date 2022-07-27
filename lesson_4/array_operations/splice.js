// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove.
// The function should remove values from the original Array, starting with the start index and removing the specified number of values.
// The function should return the removed values in a new Array.
function push(arr, value) {
  const array = arr;

  array[arr.length] = value;

  return array.length;
}

function splice(array, startIndex, deleteCount) {
  const returnValues = [];

  for (let index = startIndex; index < startIndex + deleteCount; index += 1) {
    push(returnValues, array[index]);
    array[index] = array[index + deleteCount];
  }

  array.length -= deleteCount;

  return returnValues;
}

const count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5)); // [ 3, 4, 5, 6, 7 ]
console.log(count); // [ 1, 2, 8 ]
