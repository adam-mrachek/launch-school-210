// Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator.
// You may assume that a separator will always be passed.

function join(array, separator) {
  let result = "";

  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      result += String(array[index]);
    } else {
      result += String(array[index]) + separator;
    }
  }

  return result;
}

console.log(join(["bri", "tru", "wha"], "ck "));
console.log(join([1, 2, 3], " and "));
