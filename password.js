console.log(`Welcome to the password validator!`)
// Directions
// Create a new file called password.js. Write a program that does the following:
// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("please enter your password", function(input) {
    pass = input.split(' ');
    
    if (input >= 10){
        console.log(`thank you!`)
    }
    if (pass >= 10)(
        console.log(`${pass} ${pass.length}`)
        console.log(`That is correct!`)
    
    }
  );