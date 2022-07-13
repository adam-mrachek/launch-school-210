let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
}

console.log(upperNames);