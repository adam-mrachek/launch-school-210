// Without using `Object.is`, write a function that returns `true` if the argument is `-0`
// and `false` if it is 0 or any other number.

function isNegativeZero(num) {
  if (num === -0 && 1/0 !== 1/num) {
    return true
  } else {
    return false
  }
}

console.log(isNegativeZero(0))
console.log(isNegativeZero(-0))
console.log(isNegativeZero(1))

// Another more straightforward approach

function isNegativeZero(num) {
  return 1 / value === -Infinity
}

// This works 1/0 returns +Infinity