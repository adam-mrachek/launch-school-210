// Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

const shift = (array) => {
  const firstValue = array[0];

  array.splice(0, 1);

  return firstValue;
};

const count = [1, 2, 3];
console.log(shift(count));
console.log(count);
