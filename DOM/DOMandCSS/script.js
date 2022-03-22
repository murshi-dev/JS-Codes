var d1 = document.getElementById("div1");
var d2 = document.getElementById("div2");
d1.onmouseover = function() {
d1.style.backgroundColor = "red";
d2.style.backgroundColor = "blue";
};

d1.onmouseout = function() {
d1.style.backgroundColor = "yellow";
d2.style.backgroundColor = "green";
};