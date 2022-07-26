// Write a function that will take a short line of text, and write it to the console log within a box.

function printBorder(length) {
  let leftBorder = '+-';
  let rightBorder = '-+'
  let border = '-'.repeat(length);

  return leftBorder + border + rightBorder;
}

function printMessage(text) {
  let leftBorder = '| ';
  let rightBorder = ' |';
  let message = text;

  return leftBorder + message + rightBorder;
}

function printBlankSpace(length) {
  let leftBorder = '| ';
  let rightBorder = ' |';
  let blankSpace = ' '.repeat(length);

  return leftBorder + blankSpace + rightBorder;
}

function logInBox(text) {
  let textLength = text.length;

  console.log(printBorder(textLength));
  console.log(printBlankSpace(textLength));
  console.log(printMessage(text));
  console.log(printBlankSpace(textLength));
  console.log(printBorder(textLength));
}

logInBox('To boldly go where no one has gone before.');

logInBox('');
