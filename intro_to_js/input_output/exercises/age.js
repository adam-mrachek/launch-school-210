let rlsync = require('readline-sync');
let age = Number(rlsync.question('How old are you?'));
console.log(`In 10 years, you will be ${age + 10} years old!`);
console.log(`In 20 years, you will be ${age + 20} years old!`);
console.log(`in 30 years, you will be ${age + 30} years old!`);
