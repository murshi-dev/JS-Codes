//start retrieving values using DOM
const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");


//function to check error
//takes two param-first-to know which input control generates error
//second--what message to display
function showError(input,message)
{
    //identify the input element
    const formcontrol=input.parentElement;
    //pass the css error class here
    formcontrol.className="form-control error";
    //target the <small> tag
    //querySelector--will target or retrieve all <small> tags
    const small=formcontrol.querySelector("small");
    //now modify the message using innertext
    small.innerText=message;
}
function showSuccess(input)
{
    //identify the input element
    const formcontrol=input.parentElement;
    //pass the css error class here
    formcontrol.className="form-control success";
}

//function to check if controls are empty
function checkRequired(inputArr)
{
//use loop to read each element
inputArr.forEach(function(input){
    if(input.value=="")
    {
        //display error -by writing a function
        showError(input,`${input.id} is required`);

    }
    else{
        //display success -by writing a function
        showSuccess(input);
    }
})
}
//function to check length
//takes 3 param
//1--which control, 2-min number of chars, 3-max number of chars
function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${input.id} must have atleast ${min} charecters`);
    }
    else  if(input.value.length>max)
    {
        showError(input,`${input.id} must not exceed ${max} charecters`);
    }
    else{
        showSuccess(input);
    }
}
 

//write listeners for event
form.addEventListener("submit",function(e){
    e.preventDefault();//to prevent the form by submitting itself
    //function to check if controls are empty
    //pass all elements in an array
    checkRequired([username,email,password]);
    //function to check length of username
    checkLength(username,3,10);
    //function to check length of password
    checkLength(password,5,10);
    
})