let readPrompt = require('readline-sync');

function charCount() {
  let phrase = readPrompt.question("Please enter a phrase:");
  console.log(`There are ${phrase.length} characters in ${phrase}.`);
}

charCount();