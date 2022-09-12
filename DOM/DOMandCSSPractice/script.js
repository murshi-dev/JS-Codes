let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");

b1.addEventListener("click", onClick1);
b2.addEventListener("click", onClick2);

function onClick1() {
  const d1 = document.getElementById("d1");
  const h1 = document.getElementById("heading1");
  const p1 = document.getElementById("para1");
 // d1.style.backgroundColor = "red";
  d1.style.border='5px groove red'; //size style color
  //https://www.w3schools.com/jsref/prop_style_borderstyle.asp
  //dotted dashed double groove etc
  h1.style.color="green";
  h1.style.letterSpacing="10px";
  p1.style.color = "blue";
  p1.style.fontFamily="Arial, Helvetica, sans-serif";
  p1.style.fontSize="18px";
  p1.style.textAlign="justify";
}
