'user strict'


//Operators
var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
alert("Sum = " + sum);


//Data Types

var integer = 33;
var text = 'hello "how" do you do';
var bool = true;

var fake_number = "33.4";
console.log(Number(fake_number) + 7); //Converts to float or double
console.log(parseFloat(fake_number) + 7);
console.log(parseInt(fake_number) + 7);

console.log(integer + "chained text"); //able because second variable is text
console.log(typeof(bool)); //throws data type


