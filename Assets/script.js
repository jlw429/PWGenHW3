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

  alert('I see you are here for a password, Lets goooooo!');

  let passSize = prompt('Select password size by typing in below. Minimum is 8 characters, Maximum is 128 characters');

  while (passSize < 8 || passSize > 128 || isNaN(passSize)) {
    passSize = prompt('You entered a invalid value. Minimum is 8 characters, Maximum is 128 characters');
  };

  let useLower = confirm('Do you want to use lower-case letters?');
  let useUpper = confirm('Do you want to use upper-case letters?');
  let useNumbers = confirm('Do you want to use numbers?');
  let useSymbols = confirm('Do you want to use symbols');

  while(!useLower && !useUpper && !useNumbers && !useSymbols){
    alert('You must pick one.');
      useLower = confirm('Do you want to use lower-case letters?');
      useUpper = confirm('Do you want to use upper-case letters?');
      useNumbers = confirm('Do you want to use numbers?');
      useSymbols = confirm('Do you want to use symbols');
  }
  
  let possibleCharacters = [];
  if (useLower) {
    for (i = 97; i <= 122; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useUpper) {
    for (i = 65; i <= 90; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useNumbers) {
    for (i = 48; i <= 57; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  if (useSymbols) {
    for (i = 33; i <= 47; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
    for (i = 58; i <= 64; i++) {
      possibleCharacters.push(String.fromCharCode(i));
    }
  }
  //console.log(possibleCharacters);

  let password = '';
  for (i = 0; i < passSize; i++) {
    let randomIndex = Math.floor(possibleCharacters.length * Math.random());
    password = password + possibleCharacters[randomIndex]
  }
  return password;
};
