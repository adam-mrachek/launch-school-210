// Read through the following code.
// Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

const person = { name: "Victor" };
// const otherPerson = { name: 'Victor' };  // Original code
const otherPerson = person; // new code

console.log(person === otherPerson); // false -- expected: true
