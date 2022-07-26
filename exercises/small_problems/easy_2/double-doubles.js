// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

function twice(number) {
  let stringNum = String(number);
  let numberLength = stringNum.length;

  if (numberLength % 2 === 1) {
    return number * 2;
  }

  let firstHalf = '';
  let secondHalf = '';
  let halfSize = numberLength / 2;

  for (let index = 0; index < numberLength; index++) {
    if (index < halfSize) {
      firstHalf += stringNum[index]
    } else {
      secondHalf += stringNum[index]
    }
  }

  if (firstHalf === secondHalf) {
    return number
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
