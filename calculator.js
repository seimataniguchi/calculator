//Funciton to add
let firstNum
let operator
let secondNum

function add(a, b) {
    return a + b
}
//Function to substract
function substract(a, b){
    return a - b;
}
//Function to multiply
function  multiply(a, b) {
    return a * b;
} 
function divide(a, b) {
    return a / b;
}

//Takes numbers and performs above operators
function operate(operator, numOne, numTwo){
    if(operator === " + ")
    {
        return add(numOne, numTwo)
    }
    else if(operator === " - ")
    {
        return substract(numOne, numTwo)
    }
    else if(operator === " * "){
        return multiply(numOne, numTwo)
    }
    else if(operator === " / "){
        return divide(numOne, numTwo)
    }
}
//Creates 10 buttons representing each digit
const body = document.querySelector("body"); 
const display = document.querySelector(".display");
let displayValue = display.textContent
for(let i = 0; i < 10;i++){
    const button = document.createElement("button")
    button.textContent = i;
    button.addEventListener("click", function(){ 
        display.textContent = display.textContent + i
     });
    body.appendChild(button);

}
//Selects all operators(except equals)
const operators = document.querySelectorAll(".operator");

for(let i = 0; i < operators.length; i++)
{
    operators[i].addEventListener("click", function(){
        firstNum = display.textContent
        display.textContent = ""
        operator = operators[i].textContent;
    });
}
//D
const equals = document.querySelector(".equals");
equals.addEventListener("click", function(){
    
    secondNum = display.textContent;
    console.log("First Number: "+ firstNum)
    console.log("Operator: " + operator);
    console.log("Second Number: " + secondNum);
    let solution = operate(operator, parseInt(firstNum), parseInt(secondNum));
    console.log("Solution: " + solution);
    display.textContent = solution;
});