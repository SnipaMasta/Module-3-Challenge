// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompts to the user
function generatePassword() {
  console.log("Hey, you clicked the button!");
  var uppercase = confirm("Would you like your password to contain uppercase characters? Click OK for Yes! Cancel for No.");
  var lowercase = confirm("Would you like your password to contain lowercase characters? Click OK for Yes! Cancel for No.")
  var symbols = confirm("Would you like your password to contain symbols? Click OK for Yes! Cancel for No.")
  var numbers = confirm("Would you like your password to contain numbers? Click OK for Yes! Cancel for No.")
  var passwordLength = prompt("How long would you like your password? It may be between 8 and 128 characters.")

  //declaring limits for the password
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLtter = "abcdefghijklmnopqrstuvwxyz"
  var symbol = "!@#$%^&*()?.</>|=+:;,{}[]_-"
  var numberCharacters = "1234567890"

  //actual logic for computer to check

  



  return "Generated Password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Incorporate prompts with each question:


// 1. Prompt the user for password critera
//  a. Password length 8 < 128
//  b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3. Generate password based on criteria.

// 4. Display generated the password on the page
