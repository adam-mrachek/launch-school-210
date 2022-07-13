let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
numbers.filter(num => num > 4)
// = [5, 6, 7, 8, 9, 10]

numbers
// = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]

// The `filter` method returns a new array that includes all elements
// from the calling array for which the callback returns a truthy value.
// It iterates over the elements of an array and during each iteration,
// it invokes the callback function, using the value of the current element as an argument.
// If the callback returns a truthy value, `filter` appends the element's value to a new array.
// When it's finished iterating, it returns the array of selected elements.
// `filter` does NOT mutate the caller.     
