// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompts to the user
function generatePassword() {

  var passwordLength = prompt("How long would you like your password? \nIt may be between 8 and 128 characters.")
  console.log(passwordLength);
  var uppercase = confirm("Would you like your password to contain uppercase characters? \nClick OK for Yes! \nCancel for No.")
  console.log(uppercase);
  var lowercase = confirm("Would you like your password to contain lowercase characters? \nClick OK for Yes! \nCancel for No.")
  console.log(lowercase);
  var symbols = confirm("Would you like your password to contain symbols? \nClick OK for Yes! \nCancel for No.")
  console.log(symbols);
  var numbers = confirm("Would you like your password to contain numbers? \nClick OK for Yes! \nCancel for No.")
  console.log(numbers);

  //declaring limits for the password
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
  var symbolCharacters = "!@#$%^&*()?.</>|=+:;,{}[]_-"
  var numberCharacters = "1234567890"

  var password = "";
  if (symbols) {
    password = password + symbols 
  }
  if (numbers) {
    password = password + numbers 
  } if (uppercase) {
    password = password + uppercase 
  } if (lowercase) {
    password = password + lowercase 
  }
  }
  console.log(password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);