'user strict'

/**
 * Todos los numeros divisores de un numero introduciros en pantalla
 */

 var num1 = parseInt(prompt("Mete un numero", 1));

 for(var i = 1; i <num1; i++){
     if(num1%i == 0){
        console.log("Divisor: " + i);
     }
 }