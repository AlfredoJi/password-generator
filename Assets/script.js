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
    //Ask the user how long they want the password.
    var passwordLength = prompt("Enter length of password!(Minimum 8 Maximum 128)");
    //Ask the user if they want lower case letters.
    var lowerCase = confirm("Include lowercase?");
    //Ask the user if they want upper case letters.
    var upperCase = confirm("Include uppercase?");
    //Ask the user if they want numbers.
    var numericType = confirm("Include numbers?");
    //Ask the user if they want special characters.
    var specialChar = confirm("Include special characters?");

    //Array with all letters uppercase.
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    //Array with all letters lowercase.
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //Array with special characters.
    var specialLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
    //Array with the numbers 0-9.
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    //Putting new password to a blank string.
    var newPassword = "";
    //Takes the number they put in passwordLength and turns it into a string.
    var newPassLength = parseInt(passwordLength);

    //Combining the upperLetters and lowerLetters array into one array.
    var bothCase = upperLetters.concat(lowerLetters);
    //Combining the specialLetters and numbers array into one array.
    var specialNumbers = specialLetters.concat(numbers);
    //Combining the bothCase and specialNumbers array into one array.
    var allLetters = bothCase.concat(specialNumbers);
    //Combining the upperLetters and numbers array into one array.
    var upperNumber = upperLetters.concat(numbers);
    //Combining the numbers and lowerLetters array into one array.
    var lowerNumber = lowerLetters.concat(numbers);
    //Combining the specialLetters and lowerLetters array into one array.
    var lowerSpecial = lowerLetters.concat(specialLetters);

    //If the users pick a number to small or to big return this message.
    if (newPassLength < 8 || newPassLength > 128) {
         return alert("Please pick a number greater then 8 but less then 128.");
    }
    
    //If the users picks none of the choices.
    if (upperCase === false && lowerCase === false && numericType === false && specialChar === false) {
        alert("Please pick at least one choice.");
    }

    //If the users only picks uppercase letters.
    if (upperCase === true && lowerCase === false && numericType === false && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * upperLetters.length);
            newPassword += upperLetters[randomNum];
        }
    }

    //If the users picks uppercase and lowercase letters.
    if (upperCase === true && lowerCase === true && numericType === false && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * bothCase.length);
            newPassword += bothCase[randomNum];
        }

    }

    //If the users picks uppercase letters and numbers.
    if (upperCase === true && lowerCase === false && numericType === true && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * upperNumber.length);
            newPassword += upperNumber[randomNum];
        }

    }

    //If the users picks uppercase letters and special characters.
    if (upperCase === true && lowerCase === false && numericType === false && specialChar === true) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * upperNumber.length);
            newPassword += upperNumber[randomNum];
        }

    }

    //If the users only picks lowercase letters.
    if (upperCase === false && lowerCase === true && numericType === false && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * lowerLetters.length);
            newPassword += lowerLetters[randomNum];
        }

    }

    //If the users picks lowercase letters and numbers.
    if (upperCase === false && lowerCase === true && numericType === true && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * lowerNumber.length);
            newPassword += lowerNumber[randomNum];
        }

    }

    //If the users picks lowercase letters and special characters.
    if (upperCase === false && lowerCase === true && numericType === false && specialChar === true) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * lowerSpecial.length);
            newPassword += lowerSpecial[randomNum];
        }

    }

    //If the users only picks numbers.
    if (upperCase === false && lowerCase === false && numericType === true && specialChar === false) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * numbers.length);
            newPassword += numbers[randomNum];
        }

    }

    //If the users picks numbers and special characters.
    if (upperCase === false && lowerCase === false && numericType === true && specialChar === true) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * specialNumbers.length);
            newPassword += specialNumbers[randomNum];
        }

    }

    //If the users only picks special characters.
    if (upperCase === false && lowerCase === false && numericType === false && specialChar === true) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * specialLetters.length);
            newPassword += specialLetters[randomNum];
        }

    }

    //If the users picks all the choices.
    if (upperCase === true && lowerCase === true && numericType === true && specialChar === true) {
        for (i = 0; i < newPassLength; i++) {
            var randomNum = Math.floor(Math.random() * allLetters.length);
            newPassword += allLetters[randomNum];
        }
    }

    //Return the new password.
    return newPassword;

}
