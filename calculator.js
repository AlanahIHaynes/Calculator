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

let firstNumber=0;
let secondNumber=0;

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

console.log(operate(2, '-', 8));