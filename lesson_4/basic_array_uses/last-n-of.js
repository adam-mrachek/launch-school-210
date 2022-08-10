function lastNOf(arr, count) {
  let startIndex;

  if (arr.length - count < 0) {
    startIndex = 0;
  } else {
    startIndex = arr.length - count;
  }

  return arr.slice(startIndex);
}

const digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3)); // returns [16, 23, 42]
