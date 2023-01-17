// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var charSet = [];

  
  theLength = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (theLength < 8 || theLength > 128 || isNaN(theLength)) {
    return "Please pick correct number of characters.";
  }

  useUpper = confirm("Would you like to use uppercase letters?");
  if (useUpper) {alert ("Your password will use uppercase.")
}
  else {
    alert("Your password will NOT use uppercase.");
  }

  useLower = confirm("Would you like to use lowercase letters?");
  if (useLower) {alert ("Your password will use lowercase.")
}
  else {
    alert("Your password will NOT use lowercase.");
  }

  useNumb = confirm("Would you like to use numbers?");
  if (useNumb) {alert ("Your password will use numbers.")
}
  else {
    alert("Your password will NOT use numbers.");
  }

  useSpec = confirm("Would you like to use special characters?");
  if (useSpec) {alert ("Your password will use special characters.")
}
  else {
    alert("Your password will NOT use special characters.");
  }

if (useUpper === false && useLower === false && useNumb === false && useSpec === false) {
  return "At least one character type is required.";
};

if (useUpper) {
  charSet = charSet.concat(upperCase);
}

if (useLower) {
  charSet = charSet.concat(lowerCase);
}

if (useNumb) {
  charSet = charSet.concat(numbers);
}

if (useSpec) {
  charSet = charSet.concat(special);
}


for (i = 0; i < theLength; i++) {
  let rng =[Math.floor(Math.random() * charSet.length)];
  password = password + charSet[rng];
}
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
