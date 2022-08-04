// Rewrite the following code using classic JavaScript syntax:

function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

// Rewrite

function product() {
  let args = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);