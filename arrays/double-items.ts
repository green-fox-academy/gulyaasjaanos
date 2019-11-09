"use strict";
// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks:string[]= ["Gin", "Whiskey", "Beer"];
drinks= drinks.map(function(e){
    return e+e;
});
console.log(drinks);



export{};