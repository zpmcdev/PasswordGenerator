// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}








//generate password
function generatePassword() {
  
  
  //evaluate password length
  var length = Number(prompt("How many characters will your password be? Please enter a number between 8 and 128"));
  if (length < 8 || length > 128) {
    alert("Please choose a value between 8 and 128!")
    var TryAgain = "Try again!";
    return TryAgain
  }
  
  //"empty" string for characters to lay
  var charSet;


  //ask for character types
  if (window.confirm("Would you like uppercase letters in your password?")) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (window.confirm("Would you like lowercase letters in your password?")) {
      charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
  }
  if (window.confirm("Would you like numbers in your password?")) {
    charSet = charSet + "0123456789";
  }
  if (window.confirm("Would you like symbols in your password?")) {
    charSet = charSet + "!@#$%^&*()_+=-<>?,./:[]{}";
  } 
  if (charSet = undefined) {
    alert("You didnt choose any options! Please try again")
    var TryAgain = "Try again!";
    return TryAgain
  }
  

  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
