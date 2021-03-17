// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring lowercase array
const lowercaseArray = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
];
// Declaring uppercase array
const uppercaseArray = [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
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
const generatePassword = function () {
  passwordLength = prompt("What is your password length?");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
