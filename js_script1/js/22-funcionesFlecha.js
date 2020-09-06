'user strict'

/**
 * Generalmente se utiliza para definir funciones de callback. 
 * Es para escribir de una manera mas clara, eliminando la parte de los parentesis.
 * Es sustituir la palabra 'function' y quitar los parentesis por las flechas
 */

function sumaMe(num1, num2, sumaYMuestra, sumaPorDos){
    let sumar = num1 + num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumaMe(5, 7, dato => { //Anonym functions executed as callback
            console.log("La suma es: ", dato);
        },
        dato => {
            console.log("La suma por dos es: ", dato*2);
        }
    );
