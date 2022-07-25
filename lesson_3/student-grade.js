function avgGrade(scores) {
  let total = 0;
  for (let index = 0; index < scores.length; index++) {
    total += Number(scores[index]);
  }

  return total / scores.length
}

function getGrades() {
  let scores = [];

  for (let number = 1; number <= 3; number++) {
    score = prompt(`Enter score ${number}: `);
    scores.push(score);
  }

  return scores
}

function letterGrade(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 70) {
    return 'B';
  } else if (average >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

let scores = getGrades();
let avgScore = avgGrade(scores);
let letter = letterGrade(avgScore);

console.log(`Based on the average of your 3 scores your letter grade is ${letter}.`)