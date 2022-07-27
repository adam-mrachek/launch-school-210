function arrayToString(array) {
  let stringValues = "";

  for (let index = 0; index < array.length; index += 1) {
    stringValues += array[index];
  }

  return stringValues;
}

console.log(arrayToString(["h", "e", "l", "l", "o"]));
