function firstNOf(array, count) {
  const newArray = [];

  for (let index = 0; index < count; index += 1) {
    newArray.push(array[index]);
  }
  return newArray;
}

const digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // returns [4, 8, 15]
