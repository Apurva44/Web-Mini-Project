const submitbtn = document.getElementById('submitbtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validationName() && validationEmail() && validationPassword()) {
    alert("Form Submitted Successfully");
  }
});

function validationName() {
  let name = document.getElementById('name').value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add('fa-check');
  return true;
}

function validationEmail() {
  let email = document.getElementById('email').value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter valid email";
    emailError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add('fa-check');
  return true;
}

function validationPassword() {
  let password = document.getElementById('password').value;

  if (password.length == 0) {
    passError.innerHTML = "Password is Required";
    passError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }

  if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
    passError.innerHTML = "Password should contain 1 uppercase,1 lowercase,1 digit & 1 alphabet";
    passError.previousElementSibling.classList.add('fa-xmark');
    return false;
  }
  passError.innerHTML = "";
  passError.previousElementSibling.classList.add('fa-check');
  return true;
}



