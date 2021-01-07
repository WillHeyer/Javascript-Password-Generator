// Assignment
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var passLower = true;
var passUpper = true;
var passNum = true;
var passSpec = true;

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  passLength = 0
  var pwdOutput = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pwdOutput;

}

function generatePassword() {
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("How long should your password be?\nBetween 8 - 128.");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Invalid Entry. Enter a number between 8 - 128.");
    }
    console.log(passLength);
  }

  passLower = confirm("Do you want to include lower case characters?\nOK = Yes  Cancel = No")
  passUpper = confirm("Do you want to include upper case characters?\nOK = Yes  Cancel = No")
  passNum = confirm("Do you want to include numbers?\nOK = Yes  Cancel = No")
  passSpec = confirm("Do you want to include special characters?\nOK = Yes  Cancel = No")

  return genPass(passLength);
}

function genPass(length) {
  var password = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specChar = "!@#$%^&*";
  while (password.length < length) {
      var randOption = Math.floor(Math.random() * 4) + 1;
      console.log(randOption)
      if (randOption === 1 && passLower === true) {
          password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      else if (randOption === 2 && passUpper === true) {
          password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      }
      else if (randOption === 3 && passNum === true) {
          password += numeric.charAt(Math.floor(Math.random() * numeric.length))
      }
      else if (randOption === 4 && passSpec === true) {
          password += specChar.charAt(Math.floor(Math.random() * specChar.length))
      }

  }
  console.log(password)
  return password;
}