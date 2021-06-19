// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.getElementById("#password")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!@#$%^&*()_+~'|}{[]:;?<>,./-+"
}

function writePassword() {
  var passwordLen = ""
  var passwordLen = prompt(
    "Please choose a password length of at least 8 characters and no more than 128 characters."
  );
  if (isNaN(passwordLen)) {
    alert("Please enter a number.");
    return;
  }
  if (passwordLen > 128 || passwordLen < 8) {
    alert("Please enter a number between 8 - 128.");
    return;
  }
console.log (passwordLen)
var createCharacter = ""
var createCharacter = prompt("Pick a password character: uppercase, lowercase, numeric, special.")
if (!(createCharacter==='uppercase' || createCharacter==='lowercase' || createCharacter==='numeric' || createCharacter==='special')) {
  alert('Please enter a valid password character.')
  return;
}
console.log(createCharacter)
var chosenCharacter="";
if(createCharacter ==='uppercase') {
  chosenCharacter =characters.uppercase;
} else if (createCharacter ==='lowercase') {
  chosenCharacter =characters.lowercase;
} else if (createCharacter ==='numeric') {
  chosenCharacter =characters.numeric;
} else if (createCharacter ==='special') {
  chosenCharacter =characters.special;
}else undefined;
var password = ""
console.log(chosenCharacter)
function randomPassword() {
  for (i = 0; i <passwordLen; i++) {
    var characterLen = Math.floor(Math.random() * chosenCharacter.length)
    password.concat(chosenCharacter[characterLen])
    console.log(password);
    passwordDisplay.value=password
  }}
  randomPassword()
}