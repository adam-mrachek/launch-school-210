// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
// You may assume that every word contains at least one letter, and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

function swap(string) {
  const words = string.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].split("");
    const first = word[0];
    const last = word[word.length - 1];
    word[0] = last;
    word[word.length - 1] = first;
    result.push(word.join(""));
  }

  return result.join(" ");
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
