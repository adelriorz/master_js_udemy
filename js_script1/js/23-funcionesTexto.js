'user strict'

//Transformacion de textos

var numero = 444;
var texto1 = "Hola";
var texto2 = "Mundo";

var dato = numero.toString();
dato = texto1.toUpperCase();
dato = texto2.toLowerCase();

console.log(dato);

//Calcular la longitud 
var nombre = "Hola";
nombre = ["uno", "dos"];

console.log(nombre.length);

//Concatenar cadenas de texto, unir cadenas de texto

var textoTotal = texto1.toLowerCase + " " + texto2.toLocaleUpperCase;
console.log(textoTotal);

textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

