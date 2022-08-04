// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers.
// Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  const result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// It will not produce the expected result because the variable `sum` is declared, but initialized to 0
// so it returns `NaN` when we try to add a number to it on line 13.
// Also, there is no explicit return in `total`
