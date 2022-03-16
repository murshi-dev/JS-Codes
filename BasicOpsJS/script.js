//to display info in console
console.log("hello world from Java Script!");
//to display info in webpage
//Dcument Object Model
document.write("hello world in webpage from JS");
//variables
//var let const
//var--not widely used
//let and const frequently used
let age = 30;
console.log(age);
//constant values 
const marks = 78;
console.log(marks);
var price = 78.8;
console.log(price);
//SCOPE of a variable-how long a var
//is active/alive
//global scope--var
//block scope--let and const

//DATA TYPES
const uname = "jane";//string
const uage = 35;//number
const rating = 4.5;//number
const isCool = true;//boolean
const x = null;//null-object
const y = undefined;//undefined datatype

//use typeof method to check the datatype 
//of the variables
console.log(typeof uname);
console.log(typeof uage);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);

//STRINGS
//concatenate--adding two strings
console.log("name is " + uname + " and age is " + uage);
//another way of using variables
console.log(`name is ${uname} and age is ${uage}`);

//STRING methods
const s = "hello world";
//find the length of string
console.log(s.length);
//convert to uppercase
console.log(s.toUpperCase());
//convert to lowercase
console.log(s.toLowerCase());
//substring
console.log(s.substring(0, 5));
//combine methods substring and touppercase
console.log(s.substring(0, 5).toUpperCase());
//split method-convert the string to array
console.log(s.split(""));

//CONDITIONALS
//if
const xx = 10;
if (xx == 10) {
    console.log("xx is 10");
}
//identity operator === checks value and data type
const xxx = "10";
if (xxx === 10) {
    console.log("they are same");
}
else {
    console.log("not same");
}
//AND OR
const v1 = 6;
const v2 = 10;
if (v1 > 5 || v2 > 10)
    console.log("v1 is more than 5 or y is more than 10");

if (v1 > 5 && v2 > 10)
    console.log("v1 is more than 5 or y is more than 10");

//ternary operator ?:
const tervar = 10;
const color = tervar > 10 ? "red" : "blue";
console.log(color);

//SWITCH
const colors = "red";
switch (colors) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("no color");
        break;
}
//LOOP
//for
console.log("for");
for (let i = 0; i < 10; i++) {

    console.log("5" + "*" + i + "=" + 5 * i);
}
//while
let i = 0;
console.log("while");
while (i < 10) {

    console.log("5" + "*" + i + "=" + 5 * i);
    i++;
}
//FUNCTIONS
//synatx
//function functionname(parameters)
//{
//function body
//}

//function to add numbers
function addNums(num1, num2) {
    console.log(num1 + num2);
}
//function call
addNums(34, 1);

//function with return type
function addNumber(num1, num2) {
    return (num1 + num2);
}
//function call
console.log(addNumber(34, 1));

//another way to write function
//arrow function
const addNumArrow = (num1, num2) => {
    return (num1 + num2);
}
//function call
console.log(addNumArrow(34, 1));

//function triple
function triple(x) {
    return x + x + x;
}
console.log(triple(8));//24
console.log(triple("hi"));//hi hi hi

//rewrite using arrow function
const triples = (x) => {
    return x + x + x;
}
console.log(triple(8));//24
console.log(triple("hi"));//hi hi hi

//to check even number
function even(x) {
    return x % 2 == 0
}
console.log(even(16));//true
console.log(even(3));//false

//function to calculate sale price
function salePrice(originalPrice,discountPercent)
{
    return originalPrice-(originalPrice*discountPercent/100.0);
}
console.log(salePrice(780,50));

//function to find are of circle
function circleArea(radius)
{
    return Math.PI*radius*radius;
}
console.log(circleArea(35.2));

//ARRAYS
//can hold multiple values
//indexed arrays, associative arrays
const subjects=["BM","English","Maths","Science"];
console.log(subjects);
//array methods
//push-add element to the end of the array
subjects.push("Add Maths");
console.log(subjects);
//pop-delete an element at the end of the array
subjects.pop("Add Maths");
console.log(subjects);
//unshift-add an element to the fron of array
subjects.unshift("Add Maths");
console.log(subjects);
//shift-delete an element at the front of the array
subjects.shift("Add Maths");
console.log(subjects);
//isArray-to check if a structure is an array
console.log(Array.isArray(subjects));//returns true
//indexOf-returns the index of an element in the array
console.log(subjects.indexOf("English"));//1











