'user strict'

/**
 * Hacer un programa que nos diga si un número par o inpar.
 * Con ventana prompt
 * Validación de un número válido, que nos pida de nuevo el número
 * Que nos muestre si es par o inpar
 */

 var num = parseInt(prompt("Introduce un numero", 0));

 while(isNaN(num)){
    num = parseInt(prompt("Introduce un numero", 0));
    if(num%2 == 0){
        alert(num + " Es par");
    } else {
        alert(num + " Es inpar");
    }
 }