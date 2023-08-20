const loginFormDiv = document.querySelector(".login-form-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();

  const inputValue = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("inputvalue", inputValue);

  greeting.innerText = `Hello, ${inputValue}!`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

const savedInputValue = localStorage.getItem("inputvalue");

if (savedInputValue === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${savedInputValue}!`;

  loginForm.addEventListener("submit", onLoginSubmit);
}
