// In this exercise, you will implement your own version of the Array.prototype.reverse method.
// Your implementation should differ from the built-in method in the following two ways:

// - It should accept either a string or an array as an argument.
// - It should return a new string or array.

const reverse = (input) => {
  let reversed;
  if (Array.isArray(input)) {
    reversed = [];

    for (let i = input.length - 1; i >= 0; i -= 1) {
      reversed.push(input[i]);
    }

    return reversed;
  }

  reversed = "";

  for (let i = input.length - 1; i >= 0; i -= 1) {
    reversed += input[i];
  }

  return reversed;
};

console.log(reverse("Hello")); // "olleH"
console.log(reverse("a")); // "a"
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([])); // []

const array = [1, 2, 3];
reverse(array); // [3, 2, 1]
console.log(array); // [1, 2, 3]
