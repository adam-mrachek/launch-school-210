// What does the following code log to the console and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// It logs 'Product2', 'Product3', and 'Product not found!' because the 
// switch statement does not contain any `break` statements in the cases.