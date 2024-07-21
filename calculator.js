//Addition
function add(num1, num2){
    let result= num1 + num2;
    return result;
}

//Subtraction
function subtract(num1, num2){
    let result= num1-num2;
    return result;
}

//Multiplication
function multiply(num1, num2){
    let result= num1*num2;
    return result;
}

//Division
function divide(num1, num2){
    if (num2 == 0){
        alert('You cannot divide by zero!');
        clearScreen();   
    }
    let result= num1 / num2;
    if (Number.isInteger(result)){
        return result;
    }
    else{
        let resultdps= result.toString().split('.')[1].length;
        if (resultdps > 8){
            return result.toFixed(5);
        }
        else{
            return result;
        }
    }

}

//Declaring Variables
const addOperator='+';
const subtractOperator='-';
const multiplyOperator='*';
const divideOperator='/';


//Operate function
function operate(displayValue){
    displayValue = displayValue.toString();
    displayValue = displayValue.split(' ');
    let firstNumber= Number(displayValue[0]);
    let secondNumber= Number(displayValue[2]);
    let operator = displayValue[1];
    switch(operator){
        case addOperator:
            return add(firstNumber, secondNumber);

        case subtractOperator:
            return subtract(firstNumber, secondNumber);

        case multiplyOperator:
            return multiply(firstNumber, secondNumber);

        case divideOperator:
           return divide(firstNumber, secondNumber);


    }

}

//Click Numbers to Display On Screen
let numberBtns = document.querySelectorAll('.number-btn');
numberBtns.forEach(button => {
    button.addEventListener('click', populateDisplay);
});

//Declare Global Variables
let displayValue='';
let operateStatus= 'ready';
let outputNum=document.querySelector('.output');

//Display Numbers on Screen
function populateDisplay(){
    let number=this.textContent;
    if (operateStatus == 'done'){
        clearScreen();
        operateStatus = 'ready';
    }
    if (number == '.' && displayValue.includes(number)){
        /* do nothing */
    }
    else {
        outputNum.append(number);
    }   
}

//Click Operators to Operate
let operatorBtns=document.querySelectorAll('.operator-btn');
operatorBtns.forEach(button => {
    button.addEventListener('click', storeValue);
})

function storeValue(){
    let operator=this.textContent;  
    outputNum.textContent += ` ${operator} `;
    isOperating('ready');
}

let equalBtn=document.querySelector('.equal-btn');
equalBtn.addEventListener('click', equate);

//function to calculate answer after =
function equate(){
    let answer = operate(outputNum.textContent);
    if (answer==undefined){
            /*do Nothing */
    }
    else{
        clearScreen();
        displayResults(answer);
        isOperating('done');
        }
        
}

function displayResults(answer){
    let number=answer;
    outputNum.textContent += `${number}`;
}

function isOperating(status){
    if (status=='done'){
        operateStatus='done';
        /*Handle cases where user does not specify an operation
         and hits the equal sign*/
        /*operator='';*/
    }
    else {
        operateStatus='ready';
    }
}

//Clears the Display Screen Values
function clearScreen(){
    outputNum.innerHTML='';

}

//Functionality for Clear Button
let clearBtn=document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearScreen);

//Functionality for Backspace Button
let backBtn=document.querySelector('.backspace-btn');
backBtn.addEventListener('click', backspace());
function backspace(){
    outputNum.textContent = outputNum.textContent.toString().slice(0, -1);
}


//Functionality for Keyboard Input
document.addEventListener('keydown', function(event){
    let key = event.key;
    if (key >= '0' && key <= '9' || key == '.'){
        outputNum.textContent += `${key}`;
    }
    if (['+', '-', '*', '/'].includes(key)){
        outputNum.textContent += ` ${key} `;
    }

    if (key == '=' || key == 'Enter'){
        equate();
    }

    if (key == 'Backspace'){
        backspace();
    }
})