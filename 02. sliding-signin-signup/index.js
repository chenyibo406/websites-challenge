const signInBtn = document.getElementById("btn-signIn");
const signUpBtn = document.getElementById("btn-signUp");
const circleEl = document.getElementById("circle");
const signInEl = document.getElementById("sign-in");
const signUpEl = document.getElementById("sign-up");
const inputSignUpEl = document.querySelector(".input-sign-up");
const inputSignInEl = document.querySelector(".input-sign-in");
// const bodyEl = document.getElementById("body");

signInBtn.addEventListener("click", () => {
  circleEl.classList.add("circle-to-right");
  signInEl.classList.add("signin-hide");
  signUpEl.classList.add("signup-show");
  inputSignUpEl.classList.add("input-sign-up-hide");
  inputSignInEl.classList.add("input-sign-in-show");
});

signUpBtn.addEventListener("click", () => {
  circleEl.classList.remove("circle-to-right");
  signInEl.classList.remove("signin-hide");
  signUpEl.classList.remove("signup-show");
  inputSignUpEl.classList.remove("input-sign-up-hide");
  inputSignInEl.classList.remove("input-sign-in-show");
});

// TODO: how to not refresh the whole page as the function working
// How to call javascript function without refreshing page?
// use Remove function.
