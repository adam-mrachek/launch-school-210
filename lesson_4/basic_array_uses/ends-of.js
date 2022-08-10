function endsOf(beginningArr, endingArr) {
  const ends = [];

  ends.push(beginningArr[0]);
  ends.push(endingArr[endingArr.length - 1]);

  return ends;
}

console.log(endsOf([4, 8, 15], [16, 23, 42])); // returns [4, 42]
