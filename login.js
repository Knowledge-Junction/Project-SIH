let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let username = document.getElementById('username');
let email = document.getElementById('email');
let pass = document.getElementById('pwd');
let enterUsername = document.getElementById('username');
let enterEmail = document.getElementById('email');
let enterPwd = document.getElementById('pwd');

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
  let getUser = localStorage.getItem('userId');
  let getEmail = localStorage.getItem('userEmail');
  let getPwd = localStorage.getItem('userPwd');



  if (enterEmail.value === getEmail) {
    if (enterPwd.value === getPwd) {
      alert('Login Successful');
    }
    else {
      alert('Wrong Password!!! Try Again');
    }
  } else {
    alert('Invalid Details');
  }
}


signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign UP";
  signinBtn.classList.add("disable");
  signupBtn.classList.remove("disable");
  localStorage.setItem('userId', username.value);
  localStorage.setItem('userEmail', email.value);
  localStorage.setItem('userPwd', pass.value);
}