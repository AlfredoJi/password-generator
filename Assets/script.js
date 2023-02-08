// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordLength = prompt("Enter length of password!(Minimum 8 Maximum 128)");
    var lowerCase = confirm("Include lowercase?");
    var upperCase = confirm("Include uppercase?");
    var numericType = confirm("Include numbers?");
    var specialChar = confirm("Include special characters?");
    var password = [""];
    console.log(password);

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    for (i = 0; i <= passwordLength; i++) {
        console.log(password[i]);
      }
}