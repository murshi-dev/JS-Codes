var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

button.addEventListener("click", createListElement);


input.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    createListElement();
  }
});


function createListElement() {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    ul.appendChild(li);
    input.value = "";
  }
}
