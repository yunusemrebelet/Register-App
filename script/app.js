var check = function () {
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");
  var message = document.getElementById("message");
  var submit = document.getElementById("submit");
  if (password1.value == password2.value) {
    message.style.color = "green";
    message.innerHTML = "matching";
    submit.disabled = false;
  } else {
    message.style.color = "red";
    message.innerHTML = "not matching";
    submit.disabled = true;
  }
};
