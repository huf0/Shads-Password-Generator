// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "?",
  "/",
  "-",
  ":",
  ";",
  "[",
  "]",
  "{",
  "}",
  ".",
  "<",
  ">",
  "=",
  "_",
  "`",
  "|",
  "~",
];

console.log(lowerCasedCharacters);
console.log(upperCasedCharacters);
console.log(numericCharacters);
console.log(specialCharacters);

function getPasswordOptions() {
  var length = parseInt(prompt("How long do you want your password to be?"));
  if (Number.isNaN(length)) {
    alert("The length must be a number")
    return;
  }
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 and 128. How many characters do you want?"));


  var lowercase = window.confirm("Would you like lowercase letters?");

  var uppercase = window.confirm("Would you like uppercase letters?");

  var numbers = window.confirm("Would you like numbers?");

  var symbols = window.confirm("Would you like special characters?");


  if (!lowercase && !uppercase && !numbers && !symbols) {
    (prompt("You need to choose at least one option!"));
  };
  var answers = {
    length: length,
    lowerCasedCharacters: lowerCasedCharacters,
    upperCasedCharacters: upperCasedCharacters,
    numericCharacters: numericCharacters,
    specialCharacters: specialCharacters,
  }

  return answers;
}

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  var source = [];
  var results = [];
  if (passwordOptions.lowerCasedCharacters) {
    source = source.concat(lowerCasedCharacters);
  }

  if (passwordOptions.upperCasedCharacters) {
    source = source.concat(upperCasedCharacters);
  }

  if (passwordOptions.numericCharacters) {
    source = source.concat(numericCharacters);
  }

  if (passwordOptions.specialCharacters) {
    source = source.concat(specialCharacters);
  }

  for (i = 0; i < passwordOptions.length; i++) {
    var randomIndex = Math.floor(Math.random() * source.length);
    results.push(source[randomIndex])
  }

  return results.join("");
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);