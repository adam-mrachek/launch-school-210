// Change your output to include the value from the getMonth method. 
// Thus, the logged string will read "Today's date is Mon, 11 6th", where 11 is the month number returned by getMonth.

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

console.log(`Today's date is ${daysOfWeek[dayOfWeek]}, ${month} the ${String(dayOfMonth) + suffix}`)