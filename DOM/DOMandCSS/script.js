var d1 = document.getElementById("div1");

d1.addEventListener("mouseover", mouseHoversIn);
d1.addEventListener("mouseout", mouseHoversOut);
function mouseHoversIn() {
  d1.style.backgroundColor = "red";
}
function mouseHoversOut() {
  d1.style.backgroundColor = "yellow";
}
