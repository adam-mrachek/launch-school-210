// Write a password guessing program that tracks how many times the user enters the wrong password. 
// If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. 
// If the password is correct, log 'You have successfully logged in.' and end the program.

let password = 'password'

function checkPassword() {
  let guesses = 1;
  let correctPassword = false;

  while (guesses <= 3 && correctPassword === false) {
    let input = prompt('What is the password?')

    input === password ? correctPassword = true : guesses++
  }

  if (correctPassword) {
    console.log('You have been signed in.');
  } else {
    console.log('You have been denied access.')
  }
}

checkPassword();