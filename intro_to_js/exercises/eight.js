// Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
// You can also use Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.
 
function isNotANumber(value) {
  let notNumbers = [true, false, null, undefined]
  
  if (typeof value === 'number') {
    return false
  } else if (notNumbers.includes(value)) {
    return true
  } else if (Number(value).toString() === 'NaN') {
    return true
  } else {
    return false
  }
}

console.log(isNotANumber('a'))
console.log(isNotANumber([1, 2, 3]))
console.log(isNotANumber(true))
console.log(isNotANumber({hi: 2}))
console.log(isNotANumber(4))
console.log(isNotANumber('4'))

// Another much easier solution!!

function isNotANumber(value) {
  return value !== value;
}

// This works because `NaN` is the only value in JS that is not `===` to itself.
