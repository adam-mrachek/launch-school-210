// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

function wordSizes(string) {
  const lettersOnly = string.replaceAll(/([^a-zA-Z])/g, "");
  const words = string.split(" ");
  const sizeCount = {};

  if (string.length === 0) {
    return sizeCount;
  }

  words.forEach((word) => {
    const lettersOnly = word.replaceAll(/([^a-zA-Z])/g, "");
    const count = lettersOnly.length;

    if (count in sizeCount) {
      sizeCount[count] += 1;
    } else {
      sizeCount[count] = 1;
    }
  });

  return sizeCount;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "5": 1, "2": 1, "3": 1 }
wordSizes(""); // {}
