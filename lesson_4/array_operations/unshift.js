// Write a function named unshift that accepts two arguments: an Array and a value.
// The function should insert the value at the beginning of the Array, and return the new length of the array.
// You will need a for loop for this problem.

const unshift = (array, value) => {
  const { length } = array;
  let thisElement = array[0];
  let nextElement;
  for (let index = 0; index < length; index += 1) {
    nextElement = array[index + 1];
    array[index + 1] = thisElement;
    thisElement = nextElement;
  }

  array[0] = value;
  return array.length;
};

const count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);
