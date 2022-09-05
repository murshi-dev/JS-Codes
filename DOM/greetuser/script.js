
let button=document.querySelector('button');

button.addEventListener('click',onClick);

function onClick() {
  let thename = document.querySelector("#yourname").value;
let thecontact = document.querySelector("#yourcontact").value;

  document.write("<h1>Welcome!</h1>");
  document.write("Hello, " + thename + ", and welcome to my page!");
  document.write("contact is " + thecontact);
}
