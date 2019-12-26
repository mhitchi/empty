// Assignment Code
var generateBtn = document.querySelector("#generate");

//ask for length
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

//ask for character type
var type = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
