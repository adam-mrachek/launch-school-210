// Write a function similar to `oddLengths` from exercise 6, but don't use `map`
// or `filter`. Instead, try to use the `reduce` method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let lengths = array.reduce((accumulator, element) => accumulator.concat(element.length), []);

  return lengths.reduce((accumulator, length) => {
    if (length % 2 === 1) {
      accumulator.push(length)
    }
    return accumulator
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
