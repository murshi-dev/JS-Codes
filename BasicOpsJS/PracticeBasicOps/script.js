//Write a function to convert Celsius to Fahrenheit
function calFahrenheit(cel) {
    return (cel*9/5)+32; //Conversion formula
  }
  
  console.log(calFahrenheit(0)) //32
  console.log(calFahrenheit(20)) //68
  console.log(calFahrenheit(40)) //104


  //Write a function to find the area of a given Rectangle
  function rectangleArea(a,b) {
    return `The area of rectangle is ${a*b}`;
  }
  
  console.log(rectangleArea(10,20)) //The area of rectangle is 200
  console.log(rectangleArea(30,30)) //The area of rectangle is 900


//to find sale price
function salePrice(originalPrice, discountPercent) {
  return originalPrice - (originalPrice * discountPercent / 100.0)
}
console.log(salePrice(200, 10));            // 180
console.log(salePrice(157.95, 15));        // 134.2575
console.log(salePrice(157.95, 100));       // 0


	//Write a function to generate a random number
  function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  
  console.log(genRandom(1,10)) // random int between 1 to 10
  console.log(genRandom(100,200)) // random int between 100 and 200


//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
//Sample Output : "0 is even" "1 is odd" "2 is even"

for (var x=0; x<=15; x++) 
{ 
 if (x === 0) { 
 console.log(x + " is even"); 
 } 
 else if (x % 2 === 0) { 
  console.log (x + " is even"); 
 } 
 else { 
  console.log(x + " is odd"); 
 } 
 }
 
//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
a=66; 
b=32; 
c=41; 
d= 17; 
f=83; 
if (a>b && a>c && a>d && a>f) 
{
  console.log(a); 
} 
else if (b>a && b>c && b>d && b>f) 
{ 
  console.log(b); 
} 
else if (c>a && c>b && c>d && c>f) 
{ 
  console.log(c); 
} 
else if (d>a && d>c && d>b && d>f) 
{ 
  console.log(d); 
} 
else 
{ 
  console.log(f); 
}

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

var x= 0; 
var y=-1; 
var z= 4; 
if (x>y && x>z)
{ 
if (y>z) 
{ 
  console.log(x + ", " + y + ", " +z); 
} 
else 
{ 
  console.log(x + ", " + z + ", " +y); 
} 
} 
else if (y>x && y >z) 
{ 
if (x>z) 
{ 
  console.log(y + ", " + x + ", " +z); 
} 
else 
{ 
  console.log(y + ", " + z + ", " +x); 
} 
} 
else if (z>x && z>y) 
{ 
if (x>y) 
{ 
  console.log(z + ", " + x + ", " +y); 3
} 
else 
{ 
  console.log(z + ", " + y + ", " +x); 
} 
}
 
 //Count number of Vowels in String
function countVowel(str) {
  var count = 0;
  str=str.toLowerCase();
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
       str.charAt(i)=="o"||str.charAt(i)=="u"){
       count++; //Increment vowel count
    }
  }
  return count;
}

console.log(countVowel("Hello")) //2
console.log(countVowel("Umbrella")) //3

//	Write a function to find the count of a letter in a string
function letterCount(str, c) {
  var count=0;
  str=str.toLowerCase(); //Case insensitive
  for(var i=0;i<str.length;i++){
     if(str.charAt(i)==c){ 
       count++; //Increment count
     }
  }
  return count;
}

console.log(letterCount("Connect",'c')) // 2
console.log(letterCount("first person",'s')) // 2


//Write a JavaScript program to get the current date.
 var today = new Date(); 
 var dd = today.getDate(); 
 var mm = today.getMonth()+1; 
 var yyyy = today.getFullYear(); 
 if(dd<10) 
{ 
 dd='0'+dd; 
 } 

 if(mm<10) 
 { 
 mm='0'+mm; 
     } 
 today = mm+'-'+dd+'-'+yyyy; 
     console.log(today); 

