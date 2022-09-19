//start retrieving values using DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");

//write listeners for event
form.addEventListener("submit", formSubmitted);

//expand function
function formSubmitted(event) {
  //to prevent the form by submitting itself
  event.preventDefault();
  //check if username is empty
  if (form.username.value == "") {
    const small1 = document.querySelector("#s1");
    small1.innerText = "username required";
    document.querySelector("#s1").style.visibility = "visible";
  } else {
    document.querySelector("#s1").style.visibility = "hidden";
    document.querySelector("#username").style.borderColor = "green";
  }
  //check if email is empty
  if (form.email.value == "") {
    const small2 = document.querySelector("#s2");
    small2.innerText = "email required";
    document.querySelector("#s2").style.visibility = "visible";
  } else {
    document.querySelector("#s2").style.visibility = "hidden";
    document.querySelector("#email").style.borderColor = "green";
  }
}
