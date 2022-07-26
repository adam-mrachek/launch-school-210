// Given a string that consists of some words and an assortment of non-alphabetic characters,
// write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
// If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

function cleanUp(text) {
  let cleanText = '';

  for (let index = 0; index < text.length; index++) {
    let char = text[index];

    if ((/[a-zA-z]/).test(char)) {
      cleanText += char;
    } else {
      let lastCleanChar = cleanText.at(-1);

      if (lastCleanChar !== ' ') {
        cleanText += ' ';
      }
    }
  }
  return cleanText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
