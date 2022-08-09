// Build a program that randomly generates Teddy's age, and logs it to the console.
// Have the age be a random number between 20 and 200 (inclusive).

function teddysAge(min, max) {
  return Math.floor(Math.random() * (max - min) + 20);
}

console.log(teddysAge(20, 100));
