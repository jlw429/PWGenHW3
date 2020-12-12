// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

  
  //Generator Functions. Using a charset. (I will supply the link in the README, I used functions to get random lower, upper, numbers, and symbols. I took the starting number on the charset for the particular set and multiplied by 26 for the upper and lower, 10 for the numbers and 14 for the symbols. 

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  }
  function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 14 + 33));
  };

function generatePassword() {

  alert('blah blah');

  
  
 

//   // ask user for length > tell user min of 8 max of 128
//   // if < 8 or > 128 tell user the criteria and to pick again

  
//   letpasswordLength = 8;
//   // prompt for length then while loop to check length

//   letpassPossibleChars = [];

//   letupperCase = window.confirm('Upper press ok for yes, or cancel for no');
//   letlowerCase = window.confirm('Lower press ok for yes, or cancel for no');

//   while (!upperCase && !lowerCase) {
//     letupperCase = window.confirm('Upper press ok for yes, or cancel for no');
//     letlowerCase = window.confirm('Lower press ok for yes, or cancel for no');
//   }

//   if (upperCase) {
//     passPossibleChars = passPossibleChars.concat(upperCaseChars);
//   }

//   if (lowerCase) {
//     passPossibleChars = passPossibleChars.concat(lowerCaseChars);
//   }
  
  
//   ;

//   letpassword;
//   console.log('password length = ' + passwordLength);

//   // pick passwordLenght number of characters from passPossibleChars
//   for (leti = 0; i < passwordLength; i++) {
//     password += password //random char from possPossibleChars
//     console.log(i);




 };
generatePassword();
