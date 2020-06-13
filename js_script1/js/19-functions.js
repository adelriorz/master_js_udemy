'user strict'

//FUNCTIONS;
// Are an agroupation reusable of instructions

function calculator(){
    return "calculator";
}
var result = calculator();
console.log(result);

//PARAMETERS

function calculator(num1, num2){
    console.log("Sum: " + (num1+num2));
    console.log("Substraction: " + (num1-num2));
    console.log("Multiplication: " + (num1*num2));
    console.log("Division: " + (num1/num2));
}
calculator(2, 3);

for(var i = 1; i <=10; i++){
    console.log(i);
    calculator(i, 8);
}

function calculator(num1, num2, show = false){
    if(!show){
        byConsole(num1, num2);
    }else {
        byScreen(num1, num2);
    }
}
calculator(1, 2, true);

//INNER FUNCTIONS
function byConsole(num1, num2){
    console.log("Sum: " + (num1+num2));
    console.log("Substraction: " + (num1-num2));
    console.log("Multiplication: " + (num1*num2));
    console.log("Division: " + (num1/num2));
    console.log("**************************");
}

function byScreen(num1, num2){
    document.write("Sum: " + (num1+num2) + "</br>");
    document.write("Substraction: " + (num1-num2) + "</br>");
    document.write("Multiplication: " + (num1*num2) + "</br>");
    document.write("Division: " + (num1/num2) + "</br>");
}