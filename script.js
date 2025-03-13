let numbers = "0123456789";
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*()_+";
let upperCaseAlphabets = alphabets.toUpperCase();
let password = "";
document.getElementById("lenghtRange").value = 16;
document.getElementById("toggle2").checked = true;
document
  .getElementById("lenghtRange")
  .addEventListener("input", function () {
    console.log(this.value);
    
    document.querySelector(".passwordLenght>span").innerHTML = this.value;
  });

function genRandomPassword() {
  document.getElementById("result").value = "";
  password = "";
  let lenght = document.getElementById("lenghtRange");
  let IncludeUpperCase = false;
  let IncludeLowerCase = false;
  let IncludeNumbers = false;
  let IncludeSymbols = false;
  if (document.getElementById("toggle1").checked) {
    IncludeUpperCase = true;
  }
  if (document.getElementById("toggle2").checked) {
    IncludeLowerCase = true;
  }
  if (document.getElementById("toggle3").checked) {
    IncludeNumbers = true;
  }
  if (document.getElementById("toggle4").checked) {
    IncludeSymbols = true;
  }

  for (let i = 0; i < lenght.value; i++) {
    if (IncludeLowerCase) {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    } else {
      password += "";
    }
    if (IncludeNumbers) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else {
      password += "";
    }
    if (IncludeSymbols) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    } else {
      password += "";
    }
    if (IncludeUpperCase) {
      password +=
        upperCaseAlphabets[
          Math.floor(Math.random() * upperCaseAlphabets.length)
        ];
    } else {
      password += "";
    }
  }

  password = password.slice(0, lenght.value);
  document.getElementById("result").value = password;
}
