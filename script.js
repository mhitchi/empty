// Assignment Code
var generateBtn = document.querySelector("#generate");

//ask for length
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  if( charType.toLowerCase === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charType.toLowerCase === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charType.toLowerCase === "numeric" ) {
    charSet = "0123456789";
  } else if( charType.toLowerCase === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0, n = length; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  return retVal;
}

// Write password to the #password input
function writePassword() {
  //password is the retVal from generatePassword()
  var password = generatePassword(length);
  //passwordText fills HTML id password
  var passwordText = document.querySelector("#password");

  //passwordText is retVal
  passwordText.value = password;

  //copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}

//function copyToClipboard() {
  // BONUS 
//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
