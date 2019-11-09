"use strict";
// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList:number[]= [1,2,3,4,5];
numList= numList.map(function(e,i){
    if(i === 2) {
        return ++e;
    } else {
        return e;
    }
});

console.log(numList);