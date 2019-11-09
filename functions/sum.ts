"use strict";
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sumToEnd(end:number){
    let SUM:number= 0;
    for (let i= 0; i <= end; i++) {
        SUM+= i;
    }
    return SUM;
}

console.log(sumToEnd(100));

export{};