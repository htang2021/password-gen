// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
    var randomPassWord = genRandomPassword();
    return randomPassWord;
  }
  
  // Write password to the #password input
  function writePassword() {
    console.log("Function is called after 'click'.");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  

/********** Gathering Input **************************/
/*****************************************************/

// Prompt to include Upper Case letter?
var yesUpper = function () {
    var includeUpperCase = prompt("UPPER case letters? \n" + "1 for YES; 0 for NO.");
    includeUpperCase = parseInt(includeUpperCase);
    return (includeUpperCase ? true : false);
}

//Prompt to include lower case letter?
var yesLower = function() {
    var includeLowerCase = prompt("lower case letters? \n" + "1 for YES; 0 for NO.");
    includeLowerCase = parseInt(includeLowerCase);
    return (includeLowerCase ? true : false);

    /*if (includeLowerCase) {
      includeLowerCase = "true";
      return includeLowerCase;
    } else {
      includeLowerCase = "false";
      return includeLowerCase;
    } */
  }

//Prompt to include number?
var yesNumber = function() {
    var includeNum = prompt("Numeric values? \n" + "1 for YES; 0 for NO.");
    includeNum = parseInt(includeNum);
    return (includeNum ? true : false);
    /*
    if (includeNum) {
      includeNum = "true";
      return includeNum;
    } else {
      includeNum = "false";
      return includeNum;
    } */
  }

//Prompt to include special character?
var yesSpChar = function() {
    var includeSpChar = prompt("Special characters? \n" + "1 for YES; 0 for NO.");
    includeSpChar = parseInt(includeSpChar);
    return (includeSpChar ? true : false);
    /*
    if (includeSpChar) {
      includeSpChar = "true";
      return includeSpChar;
    } else {
      includeSpChar = "false";
      return includeSpChar;
    } */
  }


//Prompt for length of password
var passwordLength = function () {
    var pwLength = prompt("Password length?"); 
    pwLength = parseInt(pwLength);
    return pwLength; 
}


//****** Generate a string of concatenated character types ******/
/****************************************************************/
var pwCharString = function () {
    let combinedString ="";
    if (yesLower) {
        combinedString += "abcdefghijklmnopqrstuvwxyz";
    }
    if (yesUpper) {
        combinedString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (yesNumber) {
        combinedString += "0123456789";
    }
    if (yesSpChar) {
        combinedString += "~!@#$%^&*?";
    }
    return combinedString;
}

/**** Generate random character out of a string argument *******/
/***************************************************************/

var randomOut = function (stringArg) {
    var stringIndex = Math.floor(Math.random() * stringArg.length);
    return stringArg[stringIndex];
}

/************  Generating output  *************************/
/**********************************************************/

//Generate a random Upper case letter
var genCapLetter = function() {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let aCapLetter = randomOut(capLetters);
    return aCapLetter;
}

//Generate a random lower case letter
var genLowerCaseLetter = function () {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let aLowerCaseLetter = randomOut(lowerCaseLetters);
    return aLowerCaseLetter;
}

//Generate a random number between 0-9
var genRandomNum = function () {
    const ranNum = "0123456789"
    let aRandomNum = randomOut(ranNum);
    return aRandomNum;
}

//Generate a random special character - ! @ # $ %  & * ?
var genSpecialChar = function () {
    const spChar = "!@#$%&*?";
    let aSpecialChar = randomOut(spChar);
    return aSpecialChar;
}

//Generate a random character based on the combined string
var genGenericChar = function () {
    let genericChar = pwCharString();
    let aGenericChar = randomOut(genericChar);
    return aGenericChar;
}

/******************Password Gen Logics************************/
/*********************************************************/

var genRandomPassword = function () {
    var pwLength = passwordLength();
    var lowerTrue = yesLower();
    var upperTrue = yesUpper();
    var numberTrue = yesNumber();
    var spCharTrue = yesSpChar();
    var psWord = "";
    for (i=0; i < pwLength; i++) {
        if (lowerTrue) {
            psWord += genLowerCaseLetter();
            lowerTrue = false;
        } else if (upperTrue) {
            psWord += genCapLetter();
            upperTrue = false;
        } else if (numberTrue) {
            psWord += genRandomNum();
            numberTrue = false;
        } else if (spCharTrue) {
            psWord += genSpecialChar();
            spCharTrue = false;
        } else {
            console.log(psWord);
            psWord += genGenericChar();
            console.log(psWord);
        }
    }
    return psWord; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

