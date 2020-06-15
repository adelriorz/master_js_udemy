'user strict'

/**
 * Calculadora que pida dos números por pantalla
 * 1. Si metemos uno mal, que lo vuelva a pedir
 * 2. Que nos muestre en el cuerpo de la página (alerta) y por la consola, el
 * resultado de sumar, restar, multiplicar y dividir esas dos cifras, pedidas
 * anteriormente.
 */

 
 do {
    var a = parseInt(prompt("Introduce el primer numero" , 0));
    var b = parseInt(prompt("Introduce el segundo numero" , 0));

 } while(a < 0 || b < 0 || isNaN(a) || isNaN(b));

 var resultado = "La suma es: " + (a + b) + "</br>" + 
              "La resta es: " + (a - b) + "</br>" + 
              "La multiplicacion es: " + (a * b) + "</br>" + 
              "La division es: " + (a / b) + "</br>";

 var resultadoCMD = "La suma es: " + (a + b) + "\n" + 
 "La resta es: " + (a - b) + "\n" +
 "La multiplicacion es: " + (a * b)  + "\n" + 
 "La division es: " + (a / b)  + "\n";

 document.write(resultado);
 alert(resultadoCMD);
 console.log(resultadoCMD);
