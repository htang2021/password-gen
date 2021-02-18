/********** Gathering Input **************************/
/*****************************************************/

// Prompt to include Upper Case letter?
var yesUpper = function (flag) {
    
    return true;
}

//Prompt to include lower case letter?
var yesLower = function (flag) {
    return true;
}

//Prompt to include number?
var yesNum = function () {
    return true;
}

//Prompt to include special character?
var yesSpChar = function () {
    return true;
}


//Prompt for length of password
var passwordLength = function () {
    return 9;
}


//****** Generate a string of concatenated character types ******/
/****************************************************************/
var pwCharString = function () {
    let combinedString ="";
    
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

//Generate a random special character - ~ ! @ # $ % ^ & * ?
var genSpecialChar = function () {
    const spChar = "~!@#$%^&*?";
    let aSpecialChar = randomOut(spChar);
    return aSpecialChar;
}

/******************Password Gen Logics************************/
/*********************************************************/

var genRandomPassword = function () {
    
    var psWord = "";
    for (i=0; i < passwordLength; i++) {
        if (yesLower) {
            psWord += genLowerCaseLetter();
            yesLower = false;
        } else if (yesUpper) {
            psWord += genCapLetter();
            yesUpper = false;
        } else if (yesNumber) {
            psWord
        }
        
    }

    //loops through specified length of times to generate passwd
    return passWord; 
}

/*****************Validation of included characters***********/
/*************************************************************/

var hasUpperCaseLetter = function (genRandomPassword) {
    return true;
}

var hasLowerCaseLetter = function (genRandomPassword) {
    return true;
}

var hasRanNum = function (genRandomPassword) {
    return true;
}

var hasSpChar = function (genRandomPassword) {
    return true;
}

if ((hasUpperCaseLetter) && (hasLowerCaseLetter) && (hasRanNum) && (hasSpChar)) {
    return genRandomPassword;
} else {
    genRandomPassword ();
}