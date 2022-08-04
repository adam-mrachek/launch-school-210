// Identify the code that violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify.
// There may be more than one issue in each code snippet.

// Code used double quotes instead of single quotes.
let title = 'The Three-Body Problem';

// Code used one `let` declaration for multiple assignments. Should use one declaration for each assignment
let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;

// Code used non-strict equality operators. Style guide recommends always using strict
let completed = lastPageRead === 400;

// Code did not use curly braces on multi-line if statement
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// Code did not have spaces around operators, used 4 spaces to indent instead of 2
// and used a function declaration instead of a named function expression
let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);