function sortDescending(arr) {
  const sortedArr = Array.of(arr).flat();

  sortedArr.sort((a, b) => b - a);

  return sortedArr;
}

const array = [23, 4, 16, 42, 8, 15];
const result = sortDescending(array); // returns [42, 23, 16, 15, 8, 4]
console.log(result); // logs    [42, 23, 16, 15, 8, 4]
console.log(array); // logs    [23, 4, 16, 42, 8, 15]
