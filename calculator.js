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
function operate(firstNumber, operator, secondNumber){
    firstNumber= Number(firstNumber);
    secondNumber= Number(secondNumber);
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

let displayValue='';
let firstNumber='';
let operator='';
let operateStatus= 'ready';

//Display Numbers on Screen
function populateDisplay(){
    let outputNum=document.querySelector('.output');
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
        displayValue = outputNum.textContent;
    }
    
    
}

//Click Operators to Operate
let operatorBtns=document.querySelectorAll('.operator-btn');
operatorBtns.forEach(button => {
    button.addEventListener('click', storeValue);
})

function storeValue(){
    operator=this.textContent;
    firstNumber=displayValue;  
    clearScreen();
}

let equalBtn=document.querySelector('.equal-btn');
    equalBtn.addEventListener('click', function(){
        let answer = operate(firstNumber, operator, displayValue);
        if (answer==undefined){
            /*do Nothing */
        }
        else{
            clearScreen();
        displayResults(answer);
        isOperating('done');
        }
        
})

function displayResults(answer){
    let outputNum=document.querySelector('.output');
    let number=answer;
    outputNum.append(number);
    displayValue=number;
}

function isOperating(status){
    if (status=='done'){
        operateStatus='done';
        /*Handle cases where user does not specify an operation
         and hits the equal sign*/
        operator='';
    }
    else {
        operateStatus='ready';
    }
}

function clearScreen(){
    let display=document.querySelector('.output');
    display.innerHTML='';
    displayValue='';

}

    let clearBtn=document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', clearScreen);

