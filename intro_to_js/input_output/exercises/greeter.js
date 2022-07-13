let rlsync = require('readline-sync'); 
let firstName = rlsync.question("What is your first name?");
let lastName = rlsync.question("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);
