// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt users for password criteria in order to generate password
var generatePassword = function () {
  //passLength();
  //yesUpper();
  //yesLower();
  //yesNumber();
  //yesSpChar();
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

//Prompt to include UPPERCASE letters
var yesUpper = function() {
  var includeUpperCase = prompt("Do you want to include UPPER CASE letters in your password? \n" +
  "Please enter 1 for YES; 2 for NO.");

  includeUpperCase = parseInt(includeUpperCase);

  debugger;

  console.log(includeUpperCase);
  
  if (includeUpperCase != 1 || includeUpperCase != 2) {
    alert("You have entered an incorrect value.  Please try again.");
    yesUpper();
  } else if (includeUpperCase === 1) {
    includeUpperCase = "true";
    console.log(includeUpperCase);
    return includeUpperCase;
  } else {
    includeUpperCase = "false";
    console.log(includeUpperCase);
    return includeUpperCase;
  }
}

//Prompt to include lowerCase letters
var yesLower = function() {
  var includeLowerCase = prompt("Do you want to include lower CASE letters in your password? \n" +
  "Please enter 1 for YES; 2 for NO.");

  includeLowerCase = parseInt(includeLowerCase);

  if (includeLowerCase != 1 || includeLowerCase != 2) {
    alert("You have entered an incorrect value.  Please try again.");
    yesLower();
  } else if (includeLowerCase === 1) {
    includeLowerCase = "true";
    return includeLowerCase;
  } else {
    includeLowerCase = "false";
    return includeLowerCase;
  }
}

//Prompt to include numbers
var yesNumber = function() {
  var includeNum = prompt("Do you want to include numeric values in your password? \n" +
  "Please enter 1 for YES; 2 for NO.");

  includeNum = parseInt(includeNum);

  if (includeNum != 1 || includeNum != 2) {
    alert("You have entered an incorrect value.  Please try again.");
    yesNumber();
  } else if (includeNum === 1) {
    includeNum = "true";
    return includeNum;
  } else {
    includeNum = "false";
    return includeNum;
  }
}

//Prompt to include special characters
var yesSpChar = function() {
  var includeSpChar = prompt("Do you want to include numeric values in your password? \n" +
  "Please enter 1 for YES; 2 for NO.");

  includeSpChar = parseInt(includeSpChar);

  if (includeSpChar != 1 || includeSpChar != 2) {
    alert("You have entered an incorrect value.  Please try again.");
    yesSpChar();
  } else if (includeSpChar === 1) {
    includeSpChar = "true";
    return includeSpChar;
  } else {
    includeSpChar = "false";
    return includeSpChar;
  }
}


var passwordRule = {
  pwLength: passLength(),
  pwUpperCase: yesUpper(),
  pwLowerCase: yesLower(),
  pwNumber: yesNumber(),
  pwSpChar: ['!', '@', '#', '$', '%', '&', '*'],
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

