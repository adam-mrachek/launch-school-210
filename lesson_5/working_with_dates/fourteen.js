// Finally, write a function named formatTime that takes a date object as an argument and returns a string formatted with the hours and minutes as "15:30". 
// Make sure you handle the case where the hours or minutes has only one digit: you need to pad the value with a leading zero in such cases, e.g., "03:04". 
// You can use the getHours and getMinutes methods to obtain the hours and minutes.

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let stringHours = hours.toString();
  let stringMinutes = minutes.toString();

  if (hours < 10) {
    stringHours = '0' + stringHours;
  }

  if (minutes < 10) {
    stringMinutes = '0' + stringMinutes;
  }

  return `${stringHours}:${stringMinutes}`
}

let today = new Date();

console.log(formatTime(today));