function originalAndReverse(arr) {
  const newArray = arr.slice();

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

const digits = [4, 8, 15, 16, 23, 42];
console.log(originalAndReverse(digits)); // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]
