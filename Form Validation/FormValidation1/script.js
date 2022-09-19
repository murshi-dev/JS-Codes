//start identify event---form
const myform = document.querySelector("#myForm");
//register listener
myform.addEventListener("submit", formSubmitted);
//exapnd the function
function formSubmitted(event) {
  event.preventDefault(); //prevents the form from submitting
  //itself again
  //check if firstname textbox is empty or first name should be
  //atleast 5 charecters in length
  if (!myform.firstname.value || myform.firstname.value.length < 5) {
    //if(myform.firstname.value=="")
    //call the error class from CSS
    //add the error class to the label firstname
    document.querySelector("#firstname").classList.add("error");
  }
  //check if lastname textbox is empty
  if (!myform.lastname.value) {
    //if(myform.firstname.value=="")
    document.querySelector("#lastname").classList.add("error");
  }
  //rules for username- number of charecters must be
  //between 6 to 10 only
  //also it must not have @ symbol
  if (
    myform.username.value.length < 6 ||
    myform.username.value.length > 10 ||
    myform.username.value.includes("@")
  ) {
    document.querySelector("#username").classList.add("error");
  }
  //password check-6 charecters , has one uppercase
  if (myform.password.value.length < 6) {
    document.querySelector("#password").classList.add("error");
  }
  //to check for uppercase
  if (
    myform.password.value == myform.password.value.toUpperCase() ||
    myform.password.value == myform.password.value.toLowerCase()
  ) {
    document.querySelector("#password").classList.add("error");
  }
  //validate state for empty entry
  if (myform.state.value == "") {
    document.querySelector("#state").classList.add("error");
  }
  //validate gender for empty entry
  if (myform.gender.value == "") {
    document.querySelector("#gender").classList.add("error");
  }
  //when check box is selected, add the selected values
  //to text area
  if(myform.course1.checked)
  {
    myform.message.value +="POIP  ";
  }
  if(myform.course2.checked)
  {
    myform.message.value+="DSA  ";
  }
  if(myform.course3.checked)
  {
    myform.message.value+="OOP  ";
  }
}
