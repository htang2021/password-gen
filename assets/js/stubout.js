/********** Gathering Input **************************/
/*****************************************************/

// Prompt to include Upper Case letter?
var yesUpper = function () {
    return true;
}

//Prompt to include lower case letter?
var yesLower = function () {
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
    return length;
}


/************  Generating output  *************************/
/**********************************************************/


//Generate a random Upper case letter
var genCapLetter = function() {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return aCapLetter;
}

//Generate a random lower case letter
var genLowerCaseLetter = function () {
    costt lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    return aLowerCaseLetter;
}

//Generate a random number between 0-9
var genRandomNum = function () {
    const ranNum = "0123456789"
    return aRandomNum;
}

//Generate a random special character
var genSpecialChar = function () {
    const spChar = "~!@#$%^&*?";
    return aSpecialChar;
}

/******************Password Gen Logics************************/
/*********************************************************/

var genRandomPassword = function () {
    var pwChar = capLetters + lowerCaseLetters + ranNum + spChar;

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