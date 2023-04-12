const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const passwordField = document.getElementById("password");

generateBtn.addEventListener("click", function() {
  const length = document.querySelector('input[name="length"]:checked').value;
  const password = generatePassword(length);
  passwordField.value = password;
});

resetBtn.addEventListener('click', function(){
  passwordField.value = '';
});

function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
