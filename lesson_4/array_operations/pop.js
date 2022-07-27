// Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

const pop = (array) => {
  const lastElement = array.at(-1);
  array.length -= 1;

  return lastElement;
};

const count = [1, 2, 3];
console.log(pop(count));
console.log(count);
