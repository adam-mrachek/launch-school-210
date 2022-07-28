// In this exercise, you will implement your own version of two Array methods: Array.prototype.pop and Array.prototype.push.

const pop = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }

  const lastValue = arr[arr.length - 1];
  arr.length -= 1;

  return lastValue;
};

const array1 = [1, 2, 3];
pop(array1); // 3
console.log(array1); // [1, 2]
pop([]); // undefined
pop([1, 2, ["a", "b", "c"]]); // ["a", "b", "c"]

const push = (arr, ...args) => {
  for (let argsIndex = 0; argsIndex < args.length; argsIndex += 1) {
    arr[arr.length] = args[argsIndex];
  }

  return arr.length;
};

const array2 = [1, 2, 3];
push(array2, 4, 5, 6); // 6
console.log(array2); // [1, 2, 3, 4, 5, 6]
push([1, 2], ["a", "b"]); // 3
push([], 1); // 1
push([]);
