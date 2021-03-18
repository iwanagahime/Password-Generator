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

console.log(lowercaseArray);
console.log(uppercaseArray);
console.log(numberArray);
console.log(specialCharactersArray);

let isLowercase;
let isUppercase;
let isNumber;
let isSpecialCharacter;

// Declaring an empty array for user's chosen options
const chosenOptionsArray = [];

// Declaring function for generating password
const generatePassword = function (
  passwordLength = prompt("What is your password length?")
) {
  console.log(passwordLength);
  // If password length is greater than or equal to 8 and password length is lesser than or equal to 128
  // Prompt returns a string value eg. 8 is actually "8"
  // check if the number entered by the user is an actual number or string
  // Before if  convert string to number Number.parseInt() and store in new variable
  passwordLength > 8 && passwordLength < 128;

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

  console.log(isLowercase);
  console.log(isUppercase);
  console.log(isNumber);
  console.log(isSpecialCharacter);

  if (!isLowercase && !isUppercase && !isNumber && !isSpecialCharacter) {
    alert("At least one type of character should be selected");
  }

  if (isLowercase) {
    optionsArray.push(lowercaseArray);
  }
  if (isUppercase) {
    optionsArray.push(uppercaseArray);
  }
  if (isNumber) {
    optionsArray.push(numberArray);
  }
  if (isSpecialCharacter) {
    optionsArray.push(specialCharactersArray);
  }

  // choose random array and a random character from that chosen array
  let randomArray =
    chosenCharacterArray[Math.random() * chosenCharacterArray.length];
  let randomCharacter =
    randomArray[Math.floor(Math.floor(Math.random * randomArray.length))];

  console.log(randomArray);
  console.log(randomCharacter);

  // for loop to generate characters for password

  for (let i = 0; i < passwordLengthNumber; i++)
    passwordArray.push(randomCharacter);
  console.log(passwordArray);

  console.log(passwordArray.join(""));

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
};
