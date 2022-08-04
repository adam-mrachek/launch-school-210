// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

function repeatedCharacters(text) {
  let downcased = text.toLowerCase();
  let chars = {};

  for (let index = 0; index < downcased.length; index += 1) {
    let char = downcased[index];
    if (chars[char]) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] < 2) {
      delete chars[char];
    }
  }

  console.log(chars);
  return chars;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }