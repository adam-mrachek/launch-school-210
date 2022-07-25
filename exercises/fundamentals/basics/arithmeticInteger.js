let readPrompt = require('readline-sync');

function doMath() {
  let firstNum = Number(readPrompt.question("Enter the first number: "));
  let secondNum = Number(readPrompt.question("Enter the second number: "));

  console.log(firstNum + secondNum);
  console.log(firstNum - secondNum);
  console.log(firstNum * secondNum);
  console.log(firstNum / secondNum);
  console.log(firstNum % secondNum);
  console.log(firstNum ** secondNum);
}

doMath();