/**
 * Utilizando un blucle, mostrar la suma y la media de los numeros introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */

'user strict'

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce un numero hasta que sea uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero >= 0){
        sume += numero;
        contador++;
    }
    
    console.log(suma);
    console.log(contador);

}while(parseInt(prompt()) < 0);