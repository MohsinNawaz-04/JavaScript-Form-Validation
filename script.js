
var first = document.querySelector('.first')
var second = document.querySelector('.second')
var third = document.querySelector('.third')
var fourth = document.querySelector('.fourth')
var fifth = document.querySelector('.fifth')


var form = document.getElementById('myForm')



form.addEventListener('submit', function(event){
  event.preventDefault()
  var isValid = validator()
  if (isValid){
    console.log("Form is Validated");
  }
})

function validator(){
  fNameInput = document.getElementById("fname").value
  lNameInput = document.getElementById("lname").value
  emailInput = document.getElementById("email").value
  passwordInput = document.getElementById("password").value
  againPasswordInput = document.getElementById("password-again").value
  inputFields.forEach(input => {
    if (input.value.trim() === ""){
      return false
    }
  })
  if (passwordInput !== "" && passwordInput !== againPasswordInput){
    console.log('not matching');
    fifth.innerHTML = "password do not match"
    return false
  }
  if (fNameInput === "" || lNameInput === "" || emailInput === "" || passwordInput === "" || againPasswordInput === "") {
    console.log("error");
    return false
  }

  console.log('submmew2itted');
  let submitBtn = document.getElementById('submit-btn')
  submitBtn.innerHTML = ""
  submitText.textContent = "Form has been Submitted"
  inputFields.forEach(input => {
    input.value = ""
  })
  return true
}

var inputFields = document.querySelectorAll('input')
var validationText = document.querySelectorAll('.validation-text')
validationText.forEach(div => {
  div.textContent = ""
})
let submitText = document.querySelector(".submission-text")
submitText.textContent = ""

function checkValidate(){
  // inputFields.forEach(input => {
  //   if (input.value.trim() === ""){
  //     valid = false

  //   } else {
  //     valid = true
  //   }
  // })
  if (inputFields[0].value === ""){
    first.innerHTML = "This Field Cannot be Empty"
  } else {
    first.innerHTML = ""
  }
  if (inputFields[1].value === ""){
    second.innerHTML = "This Field Cannot be Empty"
  } else {
    second.innerHTML = ""
  }
  if (inputFields[2].value === ""){
    third.innerHTML = "This Field Cannot be Empty"
  } else {
    third.innerHTML = ""
  }
  if (inputFields[3].value === ""){
    fourth.innerHTML = "This Field Cannot be Empty"
  } else {
    fourth.innerHTML = ""
  }
  if (inputFields[4].value === ""){
    fifth.innerHTML = "This Field Cannot be Empty"
  } else {
    fifth.innerHTML = ""
  }

  // if (valid){
  //   console.log("greatt");
    // let submitBtn = document.getElementById('submit-btn')
    // submitBtn.innerHTML = ""
    // setTimeout(() => {
    //   submitText.textContent = "Form has been Submitted"
    // }, 300);
    // inputFields.forEach(input => {
    //   input.value = ""
    // })
  // }

  // return valid
}


function inputFocus1(input){
  if (input.value !== ""){
    first.innerHTML = ""
  } else {
    first.innerHTML = "This Field Cannot be Empty"
  }
}
function inputFocus2(input){
  if (input.value !== ""){
    second.innerHTML = ""
  } else {
    second.innerHTML = "This Field Cannot be Empty"
  }
}
function inputFocus3(input){
  if (input.value !== ""){
    third.innerHTML = ""
  } else {
    third.innerHTML = "This Field Cannot be Empty"
  }
}
function inputFocus4(input){
  if (input.value !== ""){
    input.style.fontSize = "Xlarge"
}
}
let passwordField = document.getElementById('password')
function inputFocus5(input){
  if (input.value !== ""){
    fifth.innerHTML = ""
  } else {
    fifth.innerHTML = "This Field Cannot be Empty"
  }
  // if ( input.value !== "" && input.value !== passwordField.value){
  //   fifth.innerHTML = "Passwords do not match. "
  // }
}

















// Random Password Generator Script -- Ignore

var string =
  "1234567890abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ!@#$^&*";
var capitalChars = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
var smallChars = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var specialChars = [
  "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=",
  "+",
];
var numberchar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let isCapitalCharacter = 0;
let isSmallCharacter = 0;
let isSpecialCharacter = 0;
let isNumber = 0;
var password = "";
userInput = 8;

function passwordGenerator() {
  for (var i = 0; i < userInput; i++) {
    var result = Math.floor(Math.random() * string.length);
    var passChar = string[result];
    password += passChar;
  }
}

function isPasswordStrong() {
  passwordGenerator();
  for (var i = 0; i < password.length; i++) {
    if (capitalChars.includes(password[i])) {
      isCapitalCharacter++;
    } else if (smallChars.includes(password[i])) {
      isSmallCharacter++;
    } else if (specialChars.includes(password[i])) {
      isSpecialCharacter++;
    } else if (numberchar.includes(password[i])) {
      isNumber++;
    }
  }
  if (
    password.length !== userInput ||
    isSpecialCharacter <= 2 ||
    isNumber <= 1
  ) {
    // Reset password and try again
    password = "";
    isCapitalCharacter = 0;
    isSmallCharacter = 0;
    isSpecialCharacter = 0;
    isNumber = 0;
    isPasswordStrong(); // Generate a new password
  }
}

do {
  isPasswordStrong();
} while (password === "");

function passwordGenerate(){
  var pswrdInputField = document.getElementById('password')
  isPasswordStrong()
  pswrdInputField.value = password
}
