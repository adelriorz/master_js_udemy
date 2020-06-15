'user strict'

var num1 = parseInt(prompt('Write the first number' , )); //prompt always gets result as string
var num2 = parseInt(prompt('Write the second number' , ));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    var num1 = parseInt(prompt('Write the first number' , ));
    var num2 = parseInt(prompt('Write the second number' , ));
}    

if(num1 > num2)
    alert(num1 + " is greater than " + num2);
    else if(num2 > num1)
        alert(num2 + " is greater than " + num1);
    else if(num1 === 0 || num2 === 0)
        alert("No number has been submitted")
else{ alert("both are equal"); }