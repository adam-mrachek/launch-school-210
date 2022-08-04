// The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console.
// Read through the code shown below.
// Will it produce the expected result? Why or why not?

function padLeft(number) {
  const stringNumber = String(number); // converts number argument to string
  switch (stringNumber.length) {
    case 1:
      return `  ${stringNumber}`; // when number is one digit, use this padding
    case 2:
      return ` ${stringNumber}`; // when number is two digits, use this padding
    default:
      return stringNumber; // otherwise, use this padding
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = "";
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// It won't quite produce the expected results because `i` will only go up to 9
// so their will only be nine rows vs. 10 columns.
