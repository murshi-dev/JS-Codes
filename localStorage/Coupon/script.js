var uname = document.getElementById("name");
var getTimeIn=0;
const msg=document.querySelector(".msg")

function storeCoupon() {
  couponCode = uname.value + 10;
  localStorage.setItem("name", uname.value);
  localStorage.setItem("cc", couponCode);

  var userName = localStorage.getItem("name");
  var storedcode = localStorage.getItem("cc");

  document.getElementById("coupon").value = couponCode;
  var timeIn=new Date()
  console.log(timeIn)
  getTimeIn=timeIn.getTime()+(30*1000)//add 30s to current date-time 1s = 1000ms
  console.log(getTimeIn)
}

function checkCoupon() {
  //retrieve stored names and code from local storage
  var storedName = localStorage.getItem("name");
  var storedCode = localStorage.getItem("cc");

  // collect name and code from form

  var userName = document.getElementById("name").value;
  var userCode = document.getElementById("couponcode").value;
  var userAmount = document.getElementById("amount").value;

  var timeOut=new Date()
  console.log(timeOut)

  if (userName == storedName && userCode == storedCode && timeOut<getTimeIn) {
        var payable = parseInt(userAmount) - parseInt(userAmount * 0.1);

    document.getElementById("payable").value = payable;
  
}
else {
       msg.innerText="Wrong Entry or Expired Coupon"
  }
}
