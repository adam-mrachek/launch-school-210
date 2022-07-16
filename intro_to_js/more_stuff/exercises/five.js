// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// It takes an argument `string` and splits it on spaces which returns an array of strings
// Then `reverse` is called on the array of strings to reverse the order of string elements in the array
// then the `map` method iterates over the array of strings and returns an array of elements where
// each element represents the length of the strings in the reversed array.