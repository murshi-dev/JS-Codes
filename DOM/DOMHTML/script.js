let b1 = document.querySelector("#b1");
b1.addEventListener("click", changeText);
function changeText() {
  //change text inside div1--so grab div1
  let d1 = document.getElementById("div1");
  //change text using innerText--method1
  // d1.innerText="The text is Changed now";
  //change text using textContent--method2
  //d1.textContent="The text is Changed now";
  //change text using innerHTML--method3
  //use this if elements(h1/p/li) has to be added together with
  //the text OR if any css formatting is required in thr elements
  d1.innerHTML = "<p style='color:red'>The text is Changed now</p>";
}

let b2 = document.querySelector("#b2");
b2.addEventListener("click", changeHeadingPara);
function changeHeadingPara() {
  let d2 = document.getElementById("div2");
  //create h1 using createElement()
  let h1 = document.createElement("h1");
  let p1 = document.createElement("p");
  //add text to h1 tag using createTextNode()
  let text1 = document.createTextNode("HEADING 1 FROM JAVASCRIPT");
  let text2 = document.createTextNode("PARA FROM JAVASCRIPT");
  //join or append the the text and element using appendChild()
  h1.appendChild(text1);
  p1.appendChild(text2);
  //last step--add h1 to d2
  d2.appendChild(h1);
  d2.appendChild(p1);
}

//add list items
let b3 = document.querySelector("#b3");
b3.addEventListener("click", insertList);
function insertList() {
  //create a li item
  let list = document.createElement("li");
  //add some text to li
  let listtext = document.createTextNode("Item 1 from JS");
  //add to list
  list.appendChild(listtext);
  let ulist = document.getElementById("myList");
  ulist.appendChild(list);
}

//shopping list
let enter = document.querySelector("#enter");
enter.addEventListener("click", addItemsToList);
let input = document.querySelector("#userinput");
let ul = document.querySelector("#shopList");

function addItemsToList() {
  if (input.value.length > 0) 
  {
    //create a list
    let li = document.createElement("li");
    //add text from textbox
    let litext = document.createTextNode(input.value);
    //add this to li
    li.appendChild(litext);
    //add this to ul
    ul.appendChild(li);
    //clear the text box to add another item
    input.value="";
  }
}
