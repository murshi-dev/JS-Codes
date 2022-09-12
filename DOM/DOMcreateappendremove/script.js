const d1=document.getElementById("d1");
const h1 = document.createElement("h1");
const textNode1 = document.createTextNode("Heading1");
h1.appendChild(textNode1);

const para = document.createElement("p");
const textNode2 = document.createTextNode("Para inside heading 1");
para.appendChild(textNode2);

d1.appendChild(h1);
d1.appendChild(para);
