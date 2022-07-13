let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {  // this forEach invokes an anonymous function with name as the argument
  console.log(name);
});

names.forEach(name => console.log(name));  //  This forEach uses an arrow function to make things a bit more concise.

