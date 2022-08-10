function matrixSums(arr) {
  const sums = [];

  for (let index = 0; index < arr.length; index += 1) {
    const innerArray = arr[index];

    const sum = innerArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );

    sums.push(sum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // returns [15, 60, 12]
