// We can use the number of minutes before or after midnight to represent the time of day. 
// If the number of minutes is positive, the time is after midnight. 
// If the number of minutes is negative, the time is before midnight.

// The timeOfDay function shown below takes a time argument using this minute-based format, and returns the time of day in 24-hour format ("hh:mm"). 
// Reimplement the function using JavaScript's Date object.

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;


function timeOfDayOriginal(deltaMinutes) {
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;  // calculate delta minutes for when deltaMinutes is greater than minutes_per_day
  if (deltaMinutes < 0) {                         // translate negative minutes to corresponding positive minutes/time of day
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);  // calculate hour of day from minutes
  let minutes = deltaMinutes % MINUTES_PER_HOUR;            // calculuate minutes past the hour of day

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;  // add zero in front of hours/minutes under 10
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

function timeOfDay(deltaMinutes) {
  const time = new Date();
  time.setHours(0, 0, 0, 0);

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;  // calculate delta minutes for when deltaMinutes is greater than minutes_per_day
  if (deltaMinutes < 0) {                         // translate negative minutes to corresponding positive minutes/time of day
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  time.setMinutes(deltaMinutes);
  let hours = time.getHours();
  let minutes = time.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`; 
}


console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"