// Assignment Code
var generateBtn = document.querySelector("#generate");
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
  var symbolCharacters = "!@#$%^&*()?.</>|=+:;,{}[]_-"
  var numberCharacters = "1234567890"
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



  //actually pulling password characters based on input 

  var variables = ""
  if (symbols) {
    variables = password + symbolCharacters
  }
  if (numbers) {
    variables = password + numberCharacters
  }
  if (uppercase) {
    variables = password + uppercaseLetter
  }
  if (lowercase) {
    variables = password + lowercaseLetter
  }

  console.log(variables);

    var newPass = ""
    for (let i = 0; i < passwordLength; i++) {
      newPass = newPass + variables.charAt(Math.floor(Math.random() * variables.length))
    }
    console.log(variables);
    return newPass //generated password.
  }

generateBtn.addEventListener("click", writePassword);