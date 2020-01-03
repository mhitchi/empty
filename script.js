// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//ask for length
var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  //shift all to lowercase
  var charLower = charType.toLowerCase();
  if( charLower.includes("lowercase") ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charLower.includes("uppercase") ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charLower.includes("numeric") ) {
    charSet = "0123456789";
  } else if( charLower.includes("special") ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //return value
  var retVal = "";
  //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    //retVal += charSet[Math.floor(Math.random() * n)];
  }
  return retVal;
}

//password is the retVal from generatePassword()
var password = generatePassword();

// Write password to the #password input
function writePassword() {
  
  //passwordText fills HTML id password
  var passwordText = document.querySelector("#password");

  //passwordText is retVal
  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand('copy');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyToClipboard);

// BONUS EVENT LISTENER
