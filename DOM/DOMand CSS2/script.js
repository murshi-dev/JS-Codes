let button = document.querySelector("button");

button.addEventListener("click", onClick);

function onClick() {
  const d1 = document.getElementById("div1");
  const p1 = document.getElementById("p1");
  d1.style.backgroundColor = "red";
  p1.style.color = "yellow";
}
