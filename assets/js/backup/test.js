// Assignment Code

/************* Start of stubbing ***************************/
var generateBtn = document.querySelector("#generate");

//Prompt users for password criteria in order to generate password
var generatePassword = function () {

    var howLong = passLength();
    console.log(howLong + " is the length");

    var passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@~$%^&";
    var psWord = "";
    for (i=0; i < howLong; i++) {
        var pwIndex = Math.floor(Math.random() * passString.length);
        //console.log(pwIndex);
        psWord += passString.substr(pwIndex, 1);
        //console.log(psWord + " is the password.");
    }
    return psWord;

}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Base code above, given to students as a baseline to work from
/*****************************************************/


//Prompt for password length and set it to passLength variable
var passLength = function() {
  var pwLength = prompt("Password length?"); 

  pwLength = parseInt(pwLength);
  //console.log(pwLength);

  return pwLength; 
}

/***********************end of stubbing + the last line of this file ********/



//Prompt to include UPPERCASE letters, "true" if yes otherwise "false"
var yesUpper = function() {
  var includeUpperCase = prompt("Upper case? \n" +
  "1 for YES; 0 for NO.");
  includeUpperCase = parseInt(includeUpperCase);
  return (includeUpperCase ? true : false);
}

//Prompt to include lowerCase letters, "true " if yes otherwise "false"
var yesLower = function() {
  var includeLowerCase = prompt("lower CASE letters? \n" +
  "1 for YES; 0 for NO.");

  includeLowerCase = parseInt(includeLowerCase);

  if (includeLowerCase) {
    includeLowerCase = "true";
    return includeLowerCase;
  } else {
    includeLowerCase = "false";
    return includeLowerCase;
  }
}

//Prompt to include numbers, "true" if yes otherwise "false"
var yesNumber = function() {
  var includeNum = prompt("Numeric values? \n" +
  "1 for YES; 0 for NO.");

  includeNum = parseInt(includeNum);
  console.log(includeNum);

  if (includeNum) {
    includeNum = "true";
    return includeNum;
  } else {
    includeNum = "false";
    return includeNum;
  }
}

//Prompt to include special characters, "true" if yes otherwise "false"
var yesSpChar = function() {
  var includeSpChar = prompt("Special char? \n" +
  "1 for YES; 0 for NO.");

  includeSpChar = parseInt(includeSpChar);
  console.log(includeSpChar);

  if (includeSpChar) {
    includeSpChar = "true";
    return includeSpChar;
  } else {
    includeSpChar = "false";
    return includeSpChar;
  }
}

//Based on passLength, randomly generate chars "passLength" times
/*
var passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@~$%^&";
for (i=0; i < passLength; i++) {
    var pwIndex = Math.floor(Math.random() * passString.length);
    console.log(pwIndex);

    var psWord =+ passString.charAt(pwIndex);
    console.log(psWord);
} */

//var passwordRule = {
//  pwLength: passLength(),
//  pwUpperCase: yesUpper(),
//  pwLowerCase: yesLower(),
//  pwNumber: yesNumber(),
//  pwSpChar: ['!', '@', '#', '$', '%', '&', '*'],
//};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

