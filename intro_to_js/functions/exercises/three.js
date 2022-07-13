function multiply() {
  let rlsync = require('readline-sync');
  let firstNum = Number(rlsync.question("What is the first number? "));
  let secondNum = Number(rlsync.question("What is the second number? "));
  console.log(`${firstNum} + ${secondNum} = ${firstNum * secondNum}`)
}

multiply();