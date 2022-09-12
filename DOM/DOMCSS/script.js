//identify the event source
let d1 = document.getElementById("div1");
//register the listener
d1.addEventListener("mouseover", mouseHoversIn);
d1.addEventListener("mouseout", mouseHoversOut);
//expand the function
function mouseHoversIn() {
  //change the bg color to red when mouse is hovered over
  //use the 'style' property
  d1.style.backgroundColor = "red";
}
function mouseHoversOut() {
  d1.style.backgroundColor = "yellow";
}
//click event for changing css
let b1 = document.querySelector("#b1");
b1.addEventListener("click", onClick1);
function onClick1() {
  let d2 = document.getElementById("div2");
  d2.style.backgroundColor = "blue";
}
//click event for changing div heading
//and para styles
let b2=document.querySelector("#b2");
b2.addEventListener("click",onClick2);
function onClick2()
{
    //grab div, heading and para
    let d3=document.getElementById("div3");
    let h1=document.getElementById("h1");
    let p1=document.getElementById("p1");

    //add css to div--add border
    d3.style.border="5px dashed red";
    //add css to heading
    //add color
    h1.style.color="green";
    //add letter spacing
    h1.style.letterSpacing="5px";
    //add style to para
    p1.style.fontFamily="Arial";
    p1.style.fontSize="25px";
    p1.style.textAlign="justify";

}

