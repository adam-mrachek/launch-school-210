// Let's add the calendar date (the day of month) to our log message: "Today's date is Mon, the 6th". 
// Use the getDate method to obtain the current day of month. 
// Don't worry about using different suffixes for numbers that end with 1, 2, or 3 just yet; we'll deal with that in the next problem.

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let dayOfWeek = today.getDay();
let dayOfMonth = today.getDate();

console.log(`Today's date is ${daysOfWeek[dayOfWeek]}, the ${dayOfMonth}`)

