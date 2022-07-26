// Write a function that takes a string argument and returns a new string that contains the value of the
// original string with all consecutive duplicate characters collapsed into a single character.

function crunch(string) {
  let collapsed = '';
  let lastLetter = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== lastLetter) {
      collapsed = collapsed += string[index]
      lastLetter = string[index]
    }
  }

  console.log(collapsed)
  return collapsed;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
