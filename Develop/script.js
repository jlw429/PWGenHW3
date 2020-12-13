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

// let password = '';
// for (i = 0; i < 44; i++) {
//   let selection = Math.floor(Math.random() * 4);
//   if (selection == 0) {
//     randomCharacter = getRandomLower();
//   }
//   if (selection == 1) {
//     randomCharacter = getRandomUpper();
//   }
//   if (selection == 2) {
//     randomCharacter = getRandomNumber();
//   }
//   if (selection == 3) {
//     randomCharacter = getRandomSymbol();
//   }
//   console.log(randomCharacter);

//   password = password + randomCharacter;
// }

// console.log(password);

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());

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

  // if useLower > possibleCharacters = for()
  // if useUpper > possibleCharacters.push(each lower)
  // if useNumbers > possibleCharacters.push(each Numbers)
  // if useSymbols > possibleCharacters.push(each Symbols)


  // Must check, at least one of 'use' variables must be true
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

  // var AllChars = [];
  // for (var i=33; i<127; i++) {
  //   AllChars.push(String.fromCharCode(i));
  // }

  // for (startAtNumber; endAtNumber; increment/decrement number) {}

  // ['1', 'l', 'U', '!']



  // lwefOIE&**(87)

  // if (!passSize){
  //   alert('This needs a value');
  // } else if ( {
  //   passSize = prompt('You must choose between 8 and 128');
  console.log(password);
  return password;
};
// generatePassword();




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