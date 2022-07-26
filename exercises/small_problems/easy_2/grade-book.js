// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
