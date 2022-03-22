let num1 = 0;
let num2 = 0;

//getInput as arrow function/anonymous function
let getInput = () => {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
};

//all these functions calls getInput-callback function
let addNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
};
let subNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) - parseInt(num2);
};
let mulNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) * parseInt(num2);
};
let divNum = () => {
  getInput();
  document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
};
