// Create a new date object variable named tomorrow that contains a Date object. 
// Initialize the variable by setting it to the value of today. 
// You can get the value of today using the getTime method. 
// Next, change the date on the tomorrow object to the day after today: you should use setDate to change the date. 
// Finally, log the tomorrow object with your formattedDate function.

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

function dateSuffix(dayOfMonth) {
  let day = String(dayOfMonth);
  let suffix;

  if (day === '11' || day === '12' || day === '13') {
    suffix = 'th'
  } else if (day.endsWith('1')) {
    suffix = 'st'
  } else if (day.endsWith('2')) {
    suffix = 'nd'
  } else if (day.endsWith('3')) {
    suffix = 'rd'
  } else {
    suffix = 'th'
  }

  return day + suffix;
}

function formattedDate(date) {
  let dayOfWeek = date.getDay();
  let dayOfMonth = date.getDate();
  let month = date.getMonth();

  let formattedDayOfWeek = daysOfWeek[dayOfWeek];
  let formattedDayOfMonth = dateSuffix(dayOfMonth);
  let formattedMonth = months[month];

  return `${formattedDayOfWeek}, ${formattedMonth} the ${formattedDayOfMonth}`
}

console.log(formattedDate(tomorrow));