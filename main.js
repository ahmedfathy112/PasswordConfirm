var passwordValue = document.getElementById("password");
var ConfirmPass = document.getElementById("ConfirmPassword");
var btn = document.getElementById("btnSubmit");
var result = document.getElementById("result");
var length = document.getElementById("length");
btn.addEventListener("click", (e) => {
  let value = passwordValue.value;
  e.preventDefault();
  if (passwordValue.value === ConfirmPass.value) {
    result.innerHTML = "THE RESULT IS TRUE";
    length.innerHTML = `THE LENGTH IS: ${value.length}`;
  } else {
    result.innerHTML = "THE RESULT IS FALSE";
  }
  if (passwordValue.value === "" && ConfirmPass.value === "") {
    result.innerHTML = "THE INPUTE IS EMPETY";
    passwordValue.style.border = "2px solid red";
    ConfirmPass.style.border = "2px solid red";
  }
});
