'user strict'


/**
 * Variables globales y locales.
 */


var texto = "Hola mundo, soy una variable global";
var numero = 12;

function holaMundo(texto) {

    var hola_mundo = "Texto dentor de funcion";
    console.log(texto);
    console.log(numero.toString()); //convierte a String
    console.log(typeof numero); //Muestra el tipo de dato
    console.log(hola_mundo);
}

holaMundo(texto);