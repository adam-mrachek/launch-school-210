// the following causes an infinite loop. Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The condition of the while loop is `counter = 1` which is assignment and will always evaluate to true
// since it returns a truthy value (1). So the while loop continues infinitely.