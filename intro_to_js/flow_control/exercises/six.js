// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not empty');
  } else {
    console.log('Empty')
  }
}

isArrayEmpty([]);

// The output is `Not Empty` since an empty array is not falsey.
// If we had based the if statement on the `length` property, it would have been `Empty` since `0` is falsey.