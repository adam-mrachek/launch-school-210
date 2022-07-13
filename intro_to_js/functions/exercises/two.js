function getName(prompt) {
  let rlsync = require('readline-sync'); 
  let result = rlsync.question(prompt);
  return result;
}

console.log(`Hello, ${getName("What is your first name? ")} ${getName("What is your last name? ")}!`);