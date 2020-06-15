'user strict'

/**
 * Tabla de multiplicar de un número introducido por pantalla
 */

 var num = parseInt(prompt("¿De que numero quieres la tabl2?", 1));
 document.write("<h1>Tabla del " + num + "</h1>")
 for(let i = 0; i <= 10; i++){
  document.write(num + "x" +  i + " = " + (i*num) + "</br>");   
 }

 //Todas las tablas de multiplicar 
 document.write("<strong><h2>Todas las tablas hasta el 10</h2></strong>")
 for(let i = 0; i <= 10; i++){
        document.write("<strong></br>Tabla del: " + i + "</h3></br></strong>");
    for(let j = 0; j <= 10; j++){
        document.write(i + "x" +  j + " = " + (i*j) + "</br>");
    }
 }