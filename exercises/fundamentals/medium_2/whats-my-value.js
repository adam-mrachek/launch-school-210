// What will the following program log to the console? Can you explain why?

const array = ["Apples", "Peaches", "Grapes"];

array[3.4] = "Oranges";
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = "Watermelon";
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// The length property of arrays is always one greater than the largest non-negative integer (ie. index).
// `3.4` is not an integer and `-2` is negative so they are not counted as elements for the length property.
// `Object.keys` simply returns the keys for all properties of an array, even non-negative integers
//  which is why the number changes after we added `3.4` and `-1` properties.
