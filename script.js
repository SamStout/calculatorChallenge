const buttons = document.querySelector(".buttons");
const calculator = document.querySelector(".calculator")
const operatorButtons = document.querySelector(".operator");
const savedValueDisplay = document.querySelector("#savedValueDisplay");
const display =  document.querySelector("#display");
const equalsButton = document.querySelector("#equals");

//const button = document.querySelectorAll("button");
//function for inputting,
//event.target
//display.value is whats shown in an input field. set
//event.target.value shows values put into html of buttons
//started value of 0 for inial input, first if statement checks
// to see if its a zero then if it is replaces the value,
// second statememt then adds button input to currently displayed 
// += adds button input value string to current display
//by using event.target.value only number buttons/decimal are being hit

let wasEqualsLastPressed = false;
//prevents the = button from taking the display value and adding to savedValueDisplayss


const inputValue = () => {
    if (wasEqualsLastPressed === true) {
        display.value = event.target.value;
        wasEqualsLastPressed = false ;
    } else {
            if (display.value === "0") {
                    display.value = event.target.value
            } else if (event.target.id === "clear") {
                    display.value = "0";
            } else if (event.target.class = "number") {
                display.value += event.target.value; 
            } else if (display === Infinity) {
                console.log("hello")
            }
    }}

//if redo calc, throw things into array, 


const operatorFunc = () => {
    savedValueDisplay.value = `${display.value + (event.target.innerHTML)}`;
    display.value = "0" };

const equalsFunc = ()=> {
    if (wasEqualsLastPressed === false) { 
    savedValueDisplay.value += display.value;
    let fullEquation = savedValueDisplay.value;
    let result = (Function("return "+ fullEquation)()); 
    wasEqualsLastPressed = true;
    display.value = result; {
    if (result === Infinity) {
        display.value = "ERROR"
    }}
    // takes the saved value in top input box and adds the value in the main display
    //uses Function to process the concatenation of the string and displays the result
    // in display. 
    // Then changes wasEqualsLastPressed to true to prevent concatenation and 
    //  calculation of the result with the full equation
} else {
    console.log("oopsies")
}
}

equalsButton.addEventListener("click", equalsFunc);

operatorButtons.addEventListener("click",operatorFunc);

buttons.addEventListener("click",inputValue);
//make buttons inuput values into display, then make equals process the equation put in
// use Function () to run string in display