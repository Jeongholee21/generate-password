// Assignment code here

// Make variable for all possible characters
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "`~!@#$%^&*()-_=+{[]}|;:',<.>/? ";

// Prompt How long passward length will be
// if there is no input number? no passwordLength data

function generatePassword() {
    var passwordLength = prompt("How many characters want to make for the password? Choose between 8 to 128");

    if (passwordLength >= 8 && passwordLength <= 128) {
        var passwordCharacters ="";
        
        // Asking about which characters in your password
        // UPEER CASE
        var upperCase = prompt(`Do you want to contain Upper Characters in your password? Please Enter: "YES" or "NO"`);
        upperCase = upperCase.toUpperCase();
        if (upperCase === "YES") {
            passwordCharacters += upperCharacters;
        }
        // LOWER CASE
        var lowerCase = prompt(`Do you want to contain Lower Characters in your password? Please Enter: "YES" or "NO"`);
        lowerCase = lowerCase.toUpperCase();
        if (upperCase === "YES") {
            passwordCharacters += lowerCharacters;
        }
        // NUMERIC CASE
        var numericCase = prompt(`Do you want to contain Numeric Characters in your password? Please Enter: "YES" or "NO"`);
        numericCase = numericCase.toUpperCase();
        if (numericCase === "YES") {
            passwordCharacters += numericCharacters;
        }
        // SPECIAL CASE
        var specialCase = prompt(`Do you want to contain Special Characters in your password? Please Enter: "YES" or "NO"`);
        specialCase = specialCase.toUpperCase();
        if (specialCase === "YES") {
            passwordCharacters += specialCharacters;
        }

        //if didn't choose any characters?
        //need pass word generation code using Math.random()
        var newPassword = "";

        for (i = 0; i < passwordLength; i++) {
            newPassword += passwordCharacters[Math.floor(Math.random()*passwordCharacters.length-1)];
        };
    } else {
        alert("Please enter a number between 8 to 128!");
    };
    return newPassword;
 
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
