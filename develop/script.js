// Assignment code here

// Make variable for all possible characters
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Prompt How long passward length will be
function generatePassword() {
    var passwordCharacters = "";
    var passwordLength = prompt("How many characters want to make for the password? Choose between 8 to 128");

    if (passwordLength >= 8 && passwordLength <= 128) {

        // Asking about which characters in your password
        // UPEER CASE
        var upperCase = prompt(`Do you want to contain Upper Characters in your password? Please Enter: 1."YES" or 2."NO"`);

        if (upperCase === "YES" || upperCase === "1") {
            passwordCharacters += upperCharacters;
        }
        // LOWER CASE
        var lowerCase = prompt(`Do you want to contain Lower Characters in your password? Please Enter: 1."YES" or 2."NO"`);

        if (lowerCase === "YES" || lowerCase === "1") {
            passwordCharacters += lowerCharacters;
        }
        // NUMERIC CASE
        var numericCase = prompt(`Do you want to contain Numeric Characters in your password? Please Enter: 1."YES" or 2."NO"`);

        if (numericCase === "YES" || numericCase === "1") {
            passwordCharacters += numericCharacters;
        }
        // SPECIAL CASE
        var specialCase = prompt(`Do you want to contain Special Characters in your password? Please Enter: 1."YES" or 2."NO"`);

        if (specialCase === "YES" || specialCase === "1") {
            passwordCharacters += specialCharacters;
        }

        // if didn't choose any characters, make alert and return to fuction.
        if (passwordCharacters.length === 0) {
            alert("you didn't contain any characters, please choose at least one agian");
            return generatePassword()
        }

        var newPassword = "";

        for (i = 0; i < passwordLength; i++) {
            newPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        }
        return newPassword;

    } else {
        alert("Please enter a number between 8 to 128! Try Again");
        return generatePassword()
    }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
