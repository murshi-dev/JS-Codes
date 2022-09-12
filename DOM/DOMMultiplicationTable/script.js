let button = document.querySelector("button");
button.addEventListener("click", displayMulTable);

function displayMulTable() {
  let result = "";
  let number = document.getElementById("number").value;
  let n = parseInt(number);
  for (var i = 1; i <= 10; i++) {
    result = result + "<p>" + i + "*" + number + "=" + number * i + "</p>";
  }
  document.getElementById("result").innerHTML = result;
}
