let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");

b1.addEventListener("click", innerTextChange);
b2.addEventListener("click", innerHTMLChange);


function innerTextChange() {
  let d1 = document.getElementById("div1");

  d1.innerText =  "<p style='color:red'>NEW text changed by innerText !</p>";
}
function innerHTMLChange() {
  let d2 = document.getElementById("div2");
  d2.innerHTML = "<p style='color:red'>NEW text changed by<span style='display:none'>secret</span> innerHTML !</p>";
}
