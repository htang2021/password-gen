// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt users for password criteria in order to generate password
var generatePassword = function () {
  passLength();

}

// Write password to the #password input
function writePassword() {
  console.log("Function is called after 'click'.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompt for password length
var passLength = function() {

  var pwLength = prompt("How long do you want your password to be, between 8 and 128 in length?");

  pwLength = parseInt(pwLength);

  if (pwLength < 8 || pwLength > 128) {
    alert("You did not enter the appropriate length for your password.\n" +
    "Please enter a length that's between 8 and 128.");
    passLength();
  } else if (isNaN(pwLength)){
    alert("You have entered a non numeric value.  Please try again!");
    passLength();
  } else {
    return pwLength;
  }
}

var passwordRule = {
  pwLength: passLength(),
  pwUpperCase: yesUpper(),
  pwLowerCase: yesLower(),
  pwSpChar: ['!', '@', '#', '$', '%', '&', '*'],
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

