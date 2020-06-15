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
       suma = suma + numero; 
       //suma += numero;
      contador++;
    }
    
    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert("La suma de todos los números es: " + suma);
alert("La media de los números introducidos es: " + suma/contador);