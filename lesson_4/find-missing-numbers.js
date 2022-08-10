function missing(arr) {
  const allNumbers = [];
  const missingNumbers = [];
  arr.sort((a, b) => a - b);
  const max = arr[arr.length - 1];
  const min = arr[0];
  const range = max - min;

  for (let index = 0; index <= range; index += 1) {
    allNumbers.push(min + index);
  }

  for (let index = 0; index < allNumbers.length; index += 1) {
    if (!arr.includes(allNumbers[index])) {
      missingNumbers.push(allNumbers[index]);
    }
  }

  return missingNumbers;
}

missing([-3, -2, 1, 5]); // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]); // []
missing([1, 5]); // [2, 3, 4]
missing([6]); // []
