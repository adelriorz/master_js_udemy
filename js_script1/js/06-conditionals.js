'user strict'


//Conditional if
var name = "Armando";
var age = 25;

if(age >= 18){
    console.log(name + "has" + age + "years old, legal");

    if(age <= 33){
        console.log("you are millenial");
    } else if(age >= 70){
        console.log("You are old");
    }
    else{
        console.log("you are millenial no more");
    }

} else {
    console.log(name + "has" + age + "years old, ilegal");
}