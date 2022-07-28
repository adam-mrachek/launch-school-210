function concat(array, ...args) {
  const concatenated = [array].flat();

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    const arg = args[argIndex];
    if (Array.isArray(arg)) {
      const arrSize = arg.length;
      for (let arrIndex = 0; arrIndex < arrSize; arrIndex += 1) {
        concatenated[concatenated.length] = arg[arrIndex];
      }
    } else {
      concatenated[concatenated.length] = args[argIndex];
    }
  }

  return concatenated;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], "a", ["one", "two"]); // [1, 2, "a", "one", "two"]
concat([1, 2], ["three"], 4); // [1, 2, "three", 4]
