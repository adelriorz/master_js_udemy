'user strict'

var texto1 = "Bienvenido al curso de JavaScript de Udemy curso";

//
var busqueda = texto1.indexOf("curso"); //Primera coincidencia
console.log("Por indexOf: ", busqueda);

busqueda = texto1.lastIndexOf("curso"); //Ultima coincidencia
console.log("Por lastIndexOf: ", busqueda);

busqueda = texto1.search("juan"); //Si no existe da -1. Si existe, arroja el índice
console.log("Por Search: ", busqueda);


busqueda = texto1.match("curso"); //Arroja array con: indice de la palabra, 
//grupo, indice en el texto, input(String dado); sino regresa null
console.log("Por Match: ",  busqueda);

