'user strict'

/**
 * Hacer un programa que muestre los numeros entre dos numeros introducidos por el usuario.
 */

 var num1 = parseInt(prompt("Introduce un numero", 0));
 var num2 = parseInt(prompt("Introduce el segundo numero", 0));

 document.write("<h1>De"+num1+" a "+ num2 + "están estos dos números: </h1>");
    for(var i = num1; i <= num2; i++){
        document.write(i + "</br>");
    }