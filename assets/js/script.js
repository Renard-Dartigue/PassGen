const NumArray = [1,2,3,4,5,6,7,8,9,0];
const special = ["!","@ ","#" ,"$" ,"%","^","&"]
const tallLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){
  var genOptions = []
  //shows the prompt when user presses the button
  //LENGTH=====================
  var genLength = prompt("Enter the length of the Password:");
  if (genLength === null){
    return "";
  } 
  
  genLength = parseInt(genLength);
  
  
  // || is an or operator
  if(!(genLength > 7 && genLength < 128)){
    alert("Please choose a valid length.");
      return "";    
  }



  var genUpper = confirm("Do you want uppercase?");
  if (genUpper) {
    //concat keeps the original array and adds
    genOptions = genOptions.concat(tallLetter)
  }

  var genLower = confirm("Do you want lowercase?");
  if(genLower){
    genOptions = genOptions.concat(lowLetter)
  }

  var genSpecial = confirm("Do you want special characters?");
  if(genSpecial){
    genOptions = genOptions.concat(special)
  }

  var genNum = confirm("Do you want numbers?");
  if(genNum){
    genOptions = genOptions.concat(NumArray)
  }

  console.log(genOptions);
  if (genOptions.length === 0){
  alert("Please choose at least one selection.")
  return ""; 
  }
    //genOptions will be used with however much is stored in it.

   //genOptions will be selected for each loop.
    var password = "";

    for(var i = 0; i < genLength; i++) {
      password += genOptions [Math.floor(Math.random() * genOptions.length)]
    }
    //Pass will be done after loop
    return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
