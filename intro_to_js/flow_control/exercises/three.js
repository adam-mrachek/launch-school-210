function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("That is not a number.")
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(10);
evenOrOdd(9);
evenOrOdd('n');