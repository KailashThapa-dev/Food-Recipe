const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Tab Switching
loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

// Utility Functions
function clearErrors() {
  const errors = document.getElementsByClassName('formerror');
  for (let error of errors) {
    error.innerText = '';
  }
}

function setError(id, error) {
  const element = document.getElementById(id);
  element.innerText = error;
}

// Login Validation
const validationLogin = () => {
  let isValid = true;
  clearErrors();

  const form = document.forms["loginForm"];
  
  
  // Email Validation
  const email = form["email"].value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("emailerror", "*Please enter a valid email address!");
    isValid = false;
  }
  
  // Password Validation
  const password = form["password"].value.trim();
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%*&])[A-Za-z\d@#$%*&]{6,}$/;
  if (password.length < 6){
    setError("passworderror","*Password must be at least 6 character! ");
    isValid = false;
  }
  else if (!passwordRegex.test(password)) {
    setError(
      "passworderror",
      "*Password must include one uppercase letter, one lowercase letter, one digit, and one special character (@, #, $, %, *, &)."
    );
    isValid = false;
  }

  return isValid;
};

const validationSignup = () => {
  let isValid = true;
  clearErrors();

  const form = document.forms["signupform"];

  // Name Validation
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const fname = form["fname"].value.trim();
  const lname = form["lname"].value.trim();

  if (!nameRegex.test(fname)) {
    setError("signup-fnameerror", "*First name should only contain letters!");
    isValid = false;
  }
  if (!nameRegex.test(lname)) {
    setError("signup-lnameerror", "*Last name should only contain letters!");
    isValid = false;
  }

  // Email Validation
  const email = form["email"].value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("signup-emailerror", "*Please enter a valid email address!");
    isValid = false;
  }

  // Password Validation
  const password = form["password"].value.trim();
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%*&])[A-Za-z\d@#$%*&]{6,}$/;
  if (password.length < 6) {
    setError("signup-passworderror", "*Password must be at least 6 characters!");
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    setError(
      "signup-passworderror",
      "*Password must include one uppercase letter, one lowercase letter, one digit, and one special character (@, #, $, %, *, &)."
    );
    isValid = false;
  }

  return isValid;
};

