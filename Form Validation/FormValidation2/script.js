//identify the source
const form = document.getElementById("form");

//retrieve the contents of username and email textbox
const username = document.getElementById("username");
const email = document.getElementById("email");

//register listener
form.addEventListener("submit", formSubmitted);

//expand function
function formSubmitted(event) {
  event.preventDefault();
  //check if username is empty
  if (form.username.value == "") {
    //display error by displaying #s1
    const small1 = document.querySelector("#s1");
    small1.innerText = "username is required";
    //change the visibility to visible
    document.querySelector("#s1").style.visibility = "visible";
  } else {
    //change the border color of text box to green
    document.querySelector("#s1").style.visibility = "hidden";
    document.querySelector("#username").style.borderColor = "green";

  }
}
