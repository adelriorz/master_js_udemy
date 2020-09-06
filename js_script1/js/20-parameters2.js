'user strict'

//REST AND SPREAD PARAMETERS:

//REST PARAMETER
function fruitsList(fru1, fru2, ...anyOther){ //adding '...var' will add an array 
    console.log("Fruit #1: " + fru1);
    console.log("Fruit #2: " + fru2);
}

fruitsList("orange", "apple");
fruitsList("orange", "apple", "melon", "passionfruit");

//SPREAD PARAMETER
var fruits = ["Orange", "Apple"];
fruitsList(...fruits, "watermelon", "pear");
