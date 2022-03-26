// Assignment code here
// Global var   
var lower = "abcdefghijklmnopqrstuvwxyz";
var confirmLow;
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmUp;
var num = "0123456789";
var confirmNum;
var special = "~!@#$%^&*()_+=-`?\|";
var confirmSpecial;
var confirmLength = "";


function generatePassword(){

    // Password length 8 < 128
        var confirmLength = (prompt("How long would you like your password? You may choose ONLY 8 to 128 characters."))
            if (confirmLength >= 8 && confirmLength <= 128 || isNaN(confirmLength)) {
                console.log(confirmLength);
            }
                else {
                    alert("Please input valid value!");            
                return generatePassword();
            };

    var charSet = "";

     // Lowercase
        var confirmLow = window.confirm("Include lowercase letters in your password?")
            if (confirmLow) {
                charSet = charSet.concat(lower);
            };
    // Uppercase
        var confirmUp = window.confirm("Include Uppercase letters in your password?")
            if (confirmUp) {
                charSet =  charSet.concat(upper);
            };

    // Numbers
        var confirmNum = window.confirm("Include numbers in your password?")
            if (confirmNum) {
                charSet =  charSet.concat(num);
            };

    //Special characters
        var confirmSpecial = window.confirm("Include special characters in your password?")
            if (confirmSpecial) {
                charSet = charSet.concat(special);
            };


    console.log(charSet);


     // Combine the input
     var newPass = "";
     
     for (var i = 0; i < confirmLength; i++) {
       var random = Math.floor(Math.random() * charSet.length)
       var result = charSet[random];
       var newPass = newPass.concat (result);
       console.log(random);
       console.log(result);
     };

     return newPass;
}
    // Generate password based on criteria
    var generateBtn = document.querySelector("#generate");

    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);