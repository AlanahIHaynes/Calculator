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
    let result= num1 / num2;
    return result;
}

//Declaring Variables
const addOperator='+';
const subtractOperator='-';
const multiplyOperator='*';
const divideOperator='/';


//Operate function
function operate(firstNumber, operator, secondNumber){
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
//Display Numbers on Screen
function populateDisplay(){
    let outputNum=document.querySelector('.output');
    let number=this.textContent;
    outputNum.append(number);

    displayValue = outputNum.textContent;
    
}


