// Use `map` and `filter` to first determine the lengths of all elements in an array of strings,
// then discard the even values (keep the odd values)

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let lengths = array.map(value => value.length)

  return lengths.filter(function(length){
    if (length % 2 !== 0) {
      return length
    }
  });
}

console.log(oddLengths(arr)); // => [1, 5, 3]
