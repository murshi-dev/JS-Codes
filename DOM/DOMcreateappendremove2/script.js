const b1 = document.querySelector("button");
b1.addEventListener("click", insertElement);

function insertElement() {
  // Creating a new div element
  var newDiv = document.createElement("div");
  // Creating a text node
  var newContent = document.createTextNode("Java Script is Client Side");

  // Adding the text node to the newly created div
  newDiv.appendChild(newContent);

  // Adding the newly created element and its content into the DOM
  document.body.appendChild(newDiv);
}
