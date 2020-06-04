// Constant with all the different character type sets
const charTypes = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}


// Function that prompts the user for a password length (between 8 and 128 characters) then returns the length
function promptForLength() {
  
  // Variable to store length in
  var length = 0;

  // While loop that asks the user to enter a length between 8-128 
  while (!(length >=8 && length <= 128)) {
    // Prompts the user for a length, converts the string to an interger
    length = parseInt(prompt("Please enter the length you would like for your password, between 8 and 128 characters"));
  }

  // If this point is reached, then the length is valid, so return it
  return length;
}


function promptSpecificCharType(charType) {
  var userInput = '';

  //Idea: change to a confirmation (true/false) rather than a prompt
  while (userInput != 'y' && userInput != 'n') {
    userInput = prompt("Would you like the password to contain " + charType + " characters? (y/n)");
  }
  if (userInput === 'y') {
    return true;
  }
  else {
    return false;
  }
}


// Prompts the user for a set of character types then returns a string of chosen character types
function promptForChars() {

  // Variable to store the users pool of character types to generate a password from 
  var charPool = '';
  
  while(charPool === '') {
    if (promptSpecificCharType('uppercase')) {
      charPool += charTypes.uppercase;
    }
    if(promptSpecificCharType('lowercase')) {
      charPool += charTypes.lowercase;
    }
    if(promptSpecificCharType('number')) {
      charPool += charTypes.number;
    }
    if(promptSpecificCharType('special')) {
      charPool += charTypes.special;
    }
    if(charPool === '') {
      alert("Please choose at least one character type out of; 'uppercase', 'lowercase', 'number' or 'special'.");
    } 
  }

  return charPool;
 
}


// Generates a password string then returns a string containing the generated password
// Parameter length: the number of characters in the generated password
// Parameter charPool: a string containing a list of acceptable characters to build the password from
function generatePassword(length, charPool) {

  // Variable to store the password result in
  var result = '';

  // For each character up to the previously specified password length
  for ( var i = 0; i < length; i++ ) {
    // Adds a randomly generated character to the password from the user selected character type pool (charPool)
    result += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }
  
  // Returns the password result
  return result;
}


// Write password to the #password input
function writePassword() {

  // Prompt the user for input
  var length = promptForLength();
  var charPool = promptForChars();

  // Generate the password
  var password = generatePassword(length, charPool);

  // Display the password on screen
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Get a reference to the Generate Button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
