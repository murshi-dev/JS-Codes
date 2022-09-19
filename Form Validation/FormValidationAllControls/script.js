const myform = document.querySelector("#myForm");
myform.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  //check first name and last name not empty
  if (!myform.firstname.value || myform.firstname.value.length > 10) {
    document.querySelector("#firstname").classList.add("error");
  }
  if (!myform.lastname.value || myform.lastname.value.length > 15) {
    document.querySelector("#lastname").classList.add("error");
  }
  //Validating Username
  if (
    !myform.username.value ||
    myform.username.value.length > 10 ||
    myform.username.value.length < 6 ||
    myform.username.value.includes("@")
  ) {
    document.querySelector("#username").classList.add("error");
  }

  //validating password
  if (!myform.password.value || myform.password.value.length < 6) {
    document.querySelector("#password").classList.add("error");
  }
  if (
    myform.password.value == myform.password.value.toUpperCase() ||
    myform.password.value == myform.password.value.toLowerCase()
  ) {
    document.querySelector("#password").classList.add("error");
  }
  //validating state
  if(myform.state.value == "")
{
document.querySelector("#state").classList.add("error");
}
//validating gender

if(myform.gender.value == "")
{
document.querySelector("#gender").classList.add("error");
}
//add check box value to text area
if(myform.course1.checked)
{
myform.message.value += " POIP";
}
if(myform.course2.checked)
{
myform.message.value += " OOP";
}
if(myform.course3.checked)
{
myform.message.value += " DSA";
}
}
