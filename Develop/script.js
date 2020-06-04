// Constant that definites all the sets of character types available
const charTypes = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}


// Prompts the user for a password length (between 8 and 128 characters)
// Returns the length that the user specified
function promptForLength() {
  
  // Variable to store the user inputted length in
  var length = 0;

  // While the user input for length is not within our accepted criteria (between 8 and 128 characters)
  while (!(length >=8 && length <= 128)) {
    // Prompts the user for a length, converts the string to an interger
    length = parseInt(prompt("Please enter the length you would like for your password, between 8 and 128 characters"));
  }

  // If this point is reached, the length should be valid, so return it
  return length;
}


// Function that allows user to choose what character types they want to use
function promptSpecificCharType(charType) {
  var userInput = '';

  //Idea: change to a confirmation (true/false) rather than a prompt
  while (userInput != 'y' && userInput != 'n') {
    userInput = prompt("Would you like the password to contain " + charType + " characters? (y/n)");
  }
  if (userInput = 'y') {
    return true;
  }
  else {
    return false;
  }
}

// Generates a password string and returns a string containing the generated password
function generatePassword(length, charPool) {

  // Variable to store the password in
  var result = '';

  // For each character up to the specified password length
  for ( var i = 0; i < charPool.length; i++ ) {
    // Append a randomly generated character to the password from the charPool 
    result += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }
  
  // We've created a string of the required length, so return the result
  return result;
}


// Write password to the #password input
function writePassword() {

  // Prompt the user for input
  var length = promptForLength();

  // Generate the password
  var password = generatePassword(length);

  // Display the password on screen
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// --------------------------------------------------------------------------

// Get a reference to the Generate Button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
