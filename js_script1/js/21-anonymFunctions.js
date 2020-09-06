'user strict'

/*ANONYM FUNCTIONS
*It's a function that has no name, commonly used in callbacks
*/

var movie = function(name){
    return "The movie's name is:" + name;
}
console.log(movie);

//CALLBACKS
/**
 *  Functions being executed within a function itself but only ran when the function is called.
 *  It's an anonnimous function that is handed over as an argument or parameter that,
 *  later on it's summoned within an external function to complete a routine or action.
 *  https://developer.mozilla.org/es/docs/Glossary/Callback_function
*/
//var dato = 0;
function sumMe(num1, num2){
    let sum = num1 + num2;
    return sum;
}
console.log(sumMe(4, 5));

function sumaMe(num1, num2, sumaYMuestra, sumaPorDos){
    let sumar = num1 + num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumaMe(5, 7, function(dato){ //Anonym functions executed as callback
            console.log("La suma es: ", dato);
        },
        function(dato){
            console.log("La suma por dos es: ", dato*2);
        }
    );

var a = [1, 2, 3];
console.log(a[0]);