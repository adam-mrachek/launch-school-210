const shift = (arr) => {
  const firstElement = arr[0];

  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }

  return firstElement;
};

shift([1, 2, 3]); // 1
shift([]); // undefined
shift([[1, 2, 3], 4, 5]); // [1, 2, 3]

const unshift = (arr, ...args) => {
  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    for (let index = arr.length; index >= 0; index -= 1) {
      arr[index] = arr[index - 1];
    }

    arr[0] = args[argIndex];
  }

  return arr.length;
};

unshift([1, 2, 3], 5, 6); // 5
unshift([1, 2, 3]); // 3
unshift([4, 5], [1, 2, 3]); // 3
