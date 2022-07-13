let arr = [2, 3, 5, 7]
arr.reduce((accumulator, element) => accumulator + element, 0)

arr.reduce((accumulator, element) => accumulator * element, 1)

// The `reduce` method effectively reduces the contents of an array to a single value.
// It is one of the more difficult iteration methods to understand, but
// it is also one of the most fundamental. 
//
// `reduce` takes two arguments: a callback function and a value that initializes
// something called the accumulator.
// The callback function takes two arguments: the current value of the accumulator 
// and an element from the array. It returns a value that will be used as the
// accumulator in the next invocation of the callback. 
