function reverseArray(arr) {
  const reversed = [];

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    reversed.push(arr[index]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
