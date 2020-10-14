/* Making Promts for password specification*/
/* pw length (8-128 characters), pw characters lowercase, upperscase, numeric, & special characters.*/
/* use if and statements*/
/* use arrays */
var lowLet = [
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

var capLet = [
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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "+",
  "<",
  ">",
  ":",
  "{",
  "}",
  "[",
  "]",
];

var userChoice = [];

var charCount = 0;


//console.log(userChoice);
//MY CODE
//write password to the #password input
//fixed spelling of generatePassword
function generatePassword() {
  //confirm statements for the criteria of the password
  // ask how many characters wanted
  // need an if statement to confirm between 8 and 128 characters
  var charCount = prompt("How many characters do you want to use? Please select a length between 8 - 128");
  
  //changed all const to var
  var confirmlowLet = confirm("Would you like lower case letters?");
  //Pushing the user choice up to the userChoice array where i will use those
  // parameters to make the password.
  if (confirmlowLet) {
    //deleted userChoice = userChoice.push(userChoice). userChoice.push(lowLet), etc. sufficient
    userChoice.push(lowLet);
  }

  var confirmcapLet = confirm("Would you like to use upper case letters?");
  if (confirmcapLet) {
    userChoice.push(capLet);
  }

  var confirmmnumbers = confirm("Would you like to use numbers?");
  if (confirmmnumbers) {
    userChoice.push(numbers);
  }

  var confirmsymbols = confirm("Would you like to use symbols?");
  if (confirmsymbols) {
    userChoice.push(symbols);
  }

  if (!confirmlowLet && !confirmcapLet && !confirmmnumbers && !confirmsymbols) {
    alert(
      "Please choose at least one character type. Click generate password again."
    );
  }
  console.log(userChoice);
  //moved closing } for function to end of statement


  //Making a for loop for user choices that uses the length the user specified 
var arr
var char
var result = "";

for (var i = 0; i < charCount; i++) { 
  arr = Math.floor(Math.random() * userChoice.length);
  char = Math.floor(Math.random() * userChoice[arr].length);
  var a = userChoice[arr][char]
  result = result + a;
  console.log(i);
}
 return result;


}






// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //need to write script to generate random password. I'd start by using a for loop where i < charCount.
  //then inside that a four loop where i < userChoice.length and finally another for loop where i < userchoice[array number from 1st foor loop].length
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var addEventListener = function(type, callback) {
// if (stuff) {
// }
//   callback()
// }