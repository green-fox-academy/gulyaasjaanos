"use strict";
// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`


const nameToGreet:string= "Green Fox";
function greet(name:string) {
    console.log(`Greetings, dear ${name}!`);
}

greet(nameToGreet);


export{};