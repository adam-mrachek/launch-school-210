// Let's make the month readable. 
// Using the same technique we used in problem 3, convert the month number in the output string to a 3-letter month name abbreviation. 
// You may use the following array:

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let dayOfWeek = today.getDay();
let dayOfMonth = today.getDate();
let month = today.getMonth();

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

console.log(`Today's date is ${daysOfWeek[dayOfWeek]}, ${months[month]} the ${String(dayOfMonth) + suffix}`)