// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring lowercase array
const lowercaseArray = [
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

// Declaring uppercase array
const uppercaseArray = [
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

// Declaring number array
const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Declaring special characters array
const specialCharactersArray = [
  "@",
  "%",
  "+",
  "\\",
  "|",
  "!",
  "#",
  "$",
  "^",
  "?",
  "~",
  "_",
  "-",
  ")",
  "(",
  "]",
  "[",
  "}",
  "{",
  ":",
];

let isLowercase;
let isUppercase;
let isNumber;
let isSpecialCharacter;

// Declaring an empty array for user's chosen options
const chosenOptionsArray = [];

// Declaring function for generating password
function generatePassword() {
  const passwordArray = [];
  // prompting user for password length
  const passwordLength = prompt("What is your password length?");

  // converting string to a number
  const passwordLengthNumber = parseInt(passwordLength, 10);

  // asking user to provide character choices
  if (passwordLengthNumber > 8 && passwordLengthNumber < 128) {
    isLowercase = confirm(
      "Do you want your password to contain lowercase characters?"
    );

    isUppercase = confirm(
      "Do you want your password to contain uppercase characters?"
    );

    isNumber = confirm("Do you want your password to contain numbers?");

    isSpecialCharacter = confirm(
      "Do you want your password to contain special characters?"
    );
  } else {
    alert("Your password should be between 8 and 128 characters");
  }

  // Push user's choices into chosenOptionsArray

  if (isLowercase) {
    chosenOptionsArray.push(lowercaseArray);
  }

  if (isUppercase) {
    chosenOptionsArray.push(uppercaseArray);
  }

  if (isNumber) {
    chosenOptionsArray.push(numberArray);
  }

  if (isSpecialCharacter) {
    chosenOptionsArray.push(specialCharactersArray);
  }

  if (!isLowercase && !isUppercase && !isNumber && !isSpecialCharacter) {
    alert("At least one type of characters should be selected");
  }

  // For loop to generate characters for the password

  for (let i = 0; i < passwordLengthNumber; i++) {
    // Choosing random array and a random character from that chosen array
    let randomArray =
      chosenOptionsArray[Math.floor(Math.random() * chosenOptionsArray.length)];
    let randomCharacter =
      randomArray[Math.floor(Math.random() * randomArray.length)];

    passwordArray.push(randomCharacter);
  }

  // Converting array into a string

  const password = passwordArray.join("");

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
