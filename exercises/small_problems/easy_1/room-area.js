// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.
let readline = require('readline-sync');

function calcuateArea() {
  let length = readline.question("Enter the length of the room in meters: ");
  let width = readline.question("Enter the width of the room in meters: ");

  length = Number(length);
  width = Number(width);
  
  let squareMeters = length * width;
  let squareFeet = squareMeters * 10.7639;
  
  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`)
}

calcuateArea();