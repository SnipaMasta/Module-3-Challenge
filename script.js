// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

console.log(getRandomNumber());

function getRandomSymbol() {
  var symbols = "!@#$%^&*()_-+=<>,./{}[]"
  return symbols[Math.floor(Math.random() * symbols.length)];

}

console.log(getRandomSymbol());

//prompts to the user
function generatePassword() {
  console.log("Hey, you clicked the button!");
  var passwordLength = prompt("How long would you like your password? \nIt may be between 8 and 128 characters.")
  var uppercase = confirm("Would you like your password to contain uppercase characters? \nClick OK for Yes! \nCancel for No.");
  var lowercase = confirm("Would you like your password to contain lowercase characters? \nClick OK for Yes! \nCancel for No.")
  var symbols = confirm("Would you like your password to contain symbols? \nClick OK for Yes! \nCancel for No.")
  var numbers = confirm("Would you like your password to contain numbers? \nClick OK for Yes! \nCancel for No.")
  

  //declaring limits for the password
  var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseLtter = "abcdefghijklmnopqrstuvwxyz"
  var symbol = "!@#$%^&*()?.</>|=+:;,{}[]_-"
  var numberCharacters = "1234567890"

  //actual logic for computer to check
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128 you silly goose!")
    // return (generatePassword())
  }



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
