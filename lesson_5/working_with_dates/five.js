// Ideally, the suffix on the day number needs to adjust to the proper suffix for days like the 1st, 22nd, and 3rd. 
// Write a function named dateSuffix that takes the day of month as a numeric value and returns the formatted day of month and suffix. 
// Make sure you use the correct suffixes.

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let dayOfWeek = today.getDay();
let dayOfMonth = today.getDate();

function dateSuffix(dayOfMonth) {
  let day = String(dayOfMonth);

  if (day === '11' || day === '12' || day === '13') {
    return 'th'
  } else if (day.endsWith('1')) {
    return 'st'
  } else if (day.endsWith('2')) {
    return 'nd'
  } else if (day.endsWith('3')) {
    return 'rd'
  } else {
    return 'th'
  }
}

let suffix = dateSuffix(dayOfMonth);

console.log(`Today's date is ${daysOfWeek[dayOfWeek]}, the ${String(dayOfMonth) + suffix}`)