// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. 
// Read through the code shown below. Will it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// It will not produce the expected result because `i` is only iterated
// when it's not a multiple of 3 and will result in an infinite loop.