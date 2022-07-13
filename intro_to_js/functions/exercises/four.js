// What does the following code log to the console?

function scream(words) {
  words = words + '!!!';
  return;
  console.log(words);
}

scream('Yippee!');

// It logs nothing because the return statement terminates the function before the console.log expression