// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
    var pwLength = passwordLength();
    var needLower = yesLower();
    var needUpper = yesUpper();
    var needNumber = yesNumber();
    var needSpChar = yesSpChar();
    checkNumOfCharType(needLower, needUpper, needNumber, needSpChar);
    var psWord = "";
    for (i=0; i < pwLength; i++) {
        if (needLower) {
            psWord += genLowerCaseLetter();
            needLower = false;
        } else if (needUpper) {
            psWord += genCapLetter();
            needUpper = false;
        } else if (needNumber) {
            psWord += genRandomNum();
            needNumber = false;
        } else if (needSpChar) {
            psWord += genSpecialChar();
            needSpChar = false;
        } else {
            psWord += genGenericChar();
        }
    }
    return psWord; 
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  

/********** Gathering User Input **************************/
/*****************************************************/

//Prompt for length of password and validate entry
var passwordLength = function () {
    var pwLength = prompt("How long do you want your password to be, between 8 and 128 in length?");
    pwLength = parseInt(pwLength);
    if (pwLength < 8 || pwLength > 128) {
        alert("You did not enter the appropriate length for your password.\n" +
        "Please enter a length that's between 8 and 128.");
        passwordLength();
    } else if (isNaN(pwLength)) {
        alert("You have entered a non numeric value.  Please try again!");
        passwordLength();
    } else {
        return pwLength;
    }
}

// Prompt to include Upper Case letter and validate entry
var yesUpper = function () {
    var includeUpperCase = prompt("Do you want to include UPPER CASE letters in your password? \n" +
    "Please enter 1 for YES; 0 for NO.");
    includeUpperCase = parseInt(includeUpperCase);

    if (includeUpperCase != 1 && includeUpperCase != 0) {
        alert("You have entered an incorrect value.  Please try again.");
        yesUpper();
    } else if (includeUpperCase) {
        return true;
    } else {
        return false;
    }
}

//Prompt to include lower case letter and validate entry
var yesLower = function() {
    var includeLowerCase = prompt("Do you want to include lower CASE letters in your password? \n" +
    "Please enter 1 for YES; 0 for NO.");
    includeLowerCase = parseInt(includeLowerCase);

    if (includeLowerCase != 0 && includeLowerCase != 1) {
        alert("You have entered an incorrect value.  Please try again.");
        yesLower();
    } else if (includeLowerCase) {
        return true;
    } else {
        return false;
    }
}

//Prompt to include numeric value and validate entry
var yesNumber = function() {
    var includeNum = prompt("Do you want to include numeric values in your password? \n" +
    "Please enter 1 for YES; 0 for NO.");
    includeNum = parseInt(includeNum);

    if (includeNum != 1 && includeNum != 0) {
        alert("You have entered an incorrect value.  Please try again.");
        yesNumber();
    } else if (includeNum) {
        return true;
    } else {
        return false;
    }
}

//Prompt to include special character and validate entry
var yesSpChar = function() {
    var includeSpChar = prompt("Do you want to include special characters in your password? \n" +
    "Please enter 1 for YES; 0 for NO.");
    includeSpChar = parseInt(includeSpChar);

    if (includeSpChar != 1 && includeSpChar != 0) {
        alert("You have entered an incorrect value.  Please try again.");
        yesSpChar();
    } else if (includeSpChar) {
        return true;
    } else {
        return false;
    }
}

//Check if at least one character type is selected
var checkNumOfCharType = function (needLower, needUpper, needNumber, needSpChar) {
    if (needLower === false && needUpper === false && needNumber === false && needSpChar === false) {
        alert("You need at least one character type in your password. \n" +
        "Please start over!");
        generatePassword();
    }
    return;
}


/**** Generate random character out of a string argument *******/
/***************************************************************/

var randomOut = function (stringArg) {
    var stringIndex = Math.floor(Math.random() * stringArg.length);
    return stringArg[stringIndex];
}

/********** Generate alphanumeric & special characters ********/
/**************************************************************/

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

//Generate random trailing character after required character type is generated
var genGenericChar = function () {
    const genericChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";
    let aGenericChar = randomOut(genericChar);
    return aGenericChar;
}


// Add event listener to generate button ******************
/**********************************************************/
generateBtn.addEventListener("click", writePassword);

