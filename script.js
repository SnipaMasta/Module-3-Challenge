// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompts to the user
function generatePassword() {

  var passwordLength = prompt("How long would you like your password? \nIt may be between 8 and 128 characters.")
  var uppercase = confirm("Would you like your password to contain uppercase characters? \nClick OK for Yes! \nCancel for No.")
  var lowercase = confirm("Would you like your password to contain lowercase characters? \nClick OK for Yes! \nCancel for No.")
  var symbols = confirm("Would you like your password to contain symbols? \nClick OK for Yes! \nCancel for No.")
  var numbers = confirm("Would you like your password to contain numbers? \nClick OK for Yes! \nCancel for No.")


  //declaring limits for the password
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
  var symbolCharacters = "!@#$%^&*()?.</>|=+:;,{}[]_-"
  var numberCharacters = "1234567890"

  var password = "";

  // if (passwordLength === null) {
  //   alert("Goodbye!")
  // } else {

  // if (passwordLength < 8 || passwordLength > 128) {
  //   alert("You must enter a number between 8 and 128 you silly goose!")
  // }}

  for (var i = 0; i < length; i++) {
    var charSet = "";

    if (uppercase) {
      charSet += uppercaseLetter;
    } 
    if (lowercase) {
      charSet += lowercaseLetter;
    }
    if (symbols) {
      charSet += symbolCharacters
    }
    if (numbers) {
      charSet += numberCharacters
    }
}}

var randomIndex = Math.floor(Math.random() * charSet.length)
var randomChar = charSet.charAt(randomIndex);

password += randomChar;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
