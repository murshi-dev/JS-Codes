//get form input and display as list below

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg"); //msg is simple a div in index.html
const userList = document.querySelector("#users");

//now listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
 e.preventDefault(); //since its a form submit call preventdefault
 //console.log(nameInput.value) //input a text and submit...console log displays input name

 //check if text inputs are empty

 if (nameInput.value === "" || emailInput.value === "") {
   //alert('enter all input')--ugly looking--not used nowadays
   ///so use the msg variable declared above
   msg.innerHTML = "please enter all fields"; //displays error within form
   //take into another level by adding a timer to error message to disappear
   setTimeout(() => msg.remove(), 3000); //takes two parameters--arrow function without any parameter remove() function and time in milliseconds as second parameter
 } else {
   //console.log("success")
   //if success gather input and add as a list below using the ul id users in index.html
   //gonna use createelemnt that can add html codes dynamically
   const li = document.createElement("li");
   li.appendChild(
     document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
   );

   //add li to ul

   userList.appendChild(li);

   //clear fields
   nameInput.value = "";
   emailInput.value = "";
 }
}
