// Use `map` to create a new array that contains one element for each element in the original array.
// If the element is even, then the corresponding element in the new array should contain the string 'even'
// otherwise the element should contain odd.

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let result = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(result)
