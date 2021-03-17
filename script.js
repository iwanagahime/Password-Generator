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

const generatePassword = function (
  passwordLength = prompt("What is the length of your password?")
) // If password length is greater than or equal to 8 and password length is lesser than or equal to 128
// Prompt returns a string value eg. 8 is actually "8"
// Before if  cenvert string to number Number.parseInt() and store in new variable
// If true then ask for all 4 requirements using confirm and store each in a variable

// if(condition){
//   const isLowercase = confirm ("Do you want lowercase?");
//   const isUppercase = confirm ("Do you want uppercase?");
//   const isNumber = confirm ("Do you want number?");
//   const isSpecialCharacter = confirm ("Do you want special character");
// }

// Start to generate password
// const optionsArray =[
//   ['a', 'b', 'c', 'd'],
//   ['A', 'B', 'C', 'D']
// ]

// if(isLowercase){
//   optionsArray.push(lowercaseArray)}
// }
// else if (isUppercase){
//   optionsArray.push(uppercaseArray)
// }
// else if (isNumber){
//   optionsArray.push(numberArray)
// }
// else {optionsArray.push(specialCharactersArray)
// }

// Get random index for options array (0,1)
// Get the array from options array optionsArray[random index]
// From that array get another random number between 0 and the length of that array
// Get the random character from that array

{};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
