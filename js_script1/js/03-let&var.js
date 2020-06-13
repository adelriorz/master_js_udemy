'user strict'

//Proof with var
var number = 40;
console.log(number);

if(true) {
    var number = 50;
    console.log(number); //Will be 50
}
console.log(number);

//**************************************** */
//Exercise with Let

var text = "this is my course";
console.log(text);

if(true) {
    let text = "course java";
    console.log(text);
}

console.log(text);