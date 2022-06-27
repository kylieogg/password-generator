// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// 1. Prompt the user for the password criteria.
//  a. Password length 8 < 128.
//  b. Lowercase, uppercase, numbers, special characters.
function generatePassword() {
  
  var userInput = window.prompt("How many characters would you like your password to contain?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number. Please enter a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numeric characters in your password?")
  var userWantsCharacters = window.confirm("Would you like to include special characters in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase characters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase characters in your password?")

  // arrays to include password possibilities
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var characterList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// 2. Validate the input.
// 3. Generate password based on criteria.

  var passwordOptions = []

  if (userWantsNumbers === true) {
    passwordOptions.push(numberList)
  }

  if (userWantsCharacters === true) {
    passwordOptions.push(characterList)
  }

  if (userWantsLowercase === true) {
    passwordOptions.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    passwordOptions.push(uppercaseList)
  }

  // if no options selected, default to assigning lowercase characters to generated password
  if (passwordOptions.length === 0) {
    passwordOptions.push(lowercaseList)
  }


  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandom(passwordOptions)
    var randomChar = getRandom(randomList)
    generatedPassword += randomChar
  } 

  console.log(generatedPassword);

// 4. Display password to the page.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
