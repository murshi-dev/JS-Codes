//A.	Write a javascript function to add two numbers.
function addTwo(num1, num2) {
    let result = num1 + num2;
    return result;
}

//B.	Access the source of event and associate a listener to it.
//First access the button, using querySelector().
const button = document.querySelector("button");
//Next create an event Listener and attach the ‘click’ event to the button.
button.addEventListener("click", onClick);

//C.	What should onClick function actually do when the button is clicked?
function onClick() {
    //1.	read the input values from text boxes
    const num1 = document.querySelector("#first").value;
    const num2 = document.querySelector("#second").value;
    //2.	add them up by calling the function
    const res = addTwo(parseInt(num1), parseInt(num2));
    //3.	show the result on the web page in the div section
    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = num1 + " + " + num2 + " = " + res;
}






