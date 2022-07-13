// Does the following code product an error? Why or why not?
// Why output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// It does not produce an error and it outputs 1, 2, 3, 4, 5 to the console.
// This happens because `i` is being incremented in `console.log(i += 1);`.
// There is no error since all 3 components of `for` loops are optional.