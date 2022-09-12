const b1 = document.querySelector("button");
b1.addEventListener("click", insertItem);

function insertItem() {
  const list = document.createElement("li");
  const listtext = document.createTextNode("POIP");
  list.appendChild(listtext);
  document.getElementById("mylist").appendChild(list);
}
