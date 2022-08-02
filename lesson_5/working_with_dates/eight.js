// Our call to console.log is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting functions that we can call from anywhere in our code. 
// Create formattedMonth and formattedDay functions to format the month and day, 
// then write a formattedDate function that pulls everything together and logs the fully formatted date.

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();

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

let todayFormatted = formattedDate(today);

console.log(`Today is ${todayFormatted}`)