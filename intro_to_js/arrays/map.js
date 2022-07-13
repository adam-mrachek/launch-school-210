let numbers = [1, 2, 3, 4]
let squares = numbers.map(num => num * num);
squares // = [1, 4, 9, 16]

squares = numbers.map(num => num * num);
// = [1, 4, 9, 16]

// `map` returns a new array that contains one element for each element in `numbers`
// with each element set to the return value of the callback: the squares of the numbers
// in this example. 
// When you need to create a new array whose values depend on the original contents of the array,
// `map` is preferred to `forEach`.
