const buttons = document.querySelector(".buttons");
const calculator = document.querySelector(".calculator") 
const display =  calculator.querySelector("input");
//const button = document.querySelectorAll("button");

//function for inputting,
//event.target
//display.value is whats shown in an input field. set
//event.target.value shows values put into html
//started value of 0 for inial input, first if statement checks
// to see if its a zero then if it is replaces the value,
// second statememt then adds button input to currently displayed 
// += adds button input value string to current display
//by using event.target.value only number buttons/decimal are being hit

const inputValue = () => {
    if (display.value === "0") {
        display.value = event.target.value
    } else {
    display.value += event.target.value; 
    }
}



buttons.addEventListener("click",inputValue);
//make buttons inuput values into display, then make equals process the equation put in
// use function () to run string in display
