// Assignment Code
// debugger;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  
  let passSize = prompt('Select password size by typing in below. Minimum is 8 characters, Maximum is 128 characters');
  
  //while loop below. The prompt has to be either 8 or 128. I also entered in the NaN as I found a bug by accdient (entered 43e)
  while (passSize < 8 || passSize > 128 || isNaN(passSize)) { 
    passSize = prompt('You entered a invalid value. Minimum is 8 characters, Maximum is 128 characters');
  };

  //my variables for upper, lower, symbols, and numbers. This will help me form my passcode.
  let useLower = confirm('Do you want to use lower-case letters?');
  let useUpper = confirm('Do you want to use upper-case letters?');
  let useNumbers = confirm('Do you want to use numbers?');
  let useSymbols = confirm('Do you want to use symbols');

  //This is the result of another bug. Noticed if you clicked 'false' to everything, then it would just come back on the generator as 'undefined'. Created while loop to fix that. I looped it back to the original questions. 
  while(!useLower && !useUpper && !useNumbers && !useSymbols){
    alert('You must pick one.');
      useLower = confirm('Do you want to use lower-case letters?');
      useUpper = confirm('Do you want to use upper-case letters?');
      useNumbers = confirm('Do you want to use numbers?');
      useSymbols = confirm('Do you want to use symbols');
  }
  
  //The biggest problem. I first looked for a "all values", then I watched a YT video that showed you can get values from the Charcode. After alot and alot of research. I had my variable form an empty array and then took and built on each value (Upper, Lower, Symbols, Numbers)
  let possibleCharacters = [];
  if (useLower) {
    for (let i = 97; i <= 122; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useUpper) {
    for (let i = 65; i <= 90; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useNumbers) {
    for (let i = 48; i <= 57; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useSymbols) {
    for (let i = 33; i <= 47; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  
  //Where it all comes together. My possibleCharacters array was now filled from the for loops. I took the password variable that was given and I generated it using the passSize paramets along with the posChar variable. Using math floor/random. the loop worked!
  let password = '';
  for (let i = 0; i < passSize; i++) {
    let randomIndex = Math.floor(possibleCharacters.length * Math.random());
    password = password + possibleCharacters[randomIndex]
  }
  //returned the password and it got sent to the top for the function to be generated.
  return password;
};
