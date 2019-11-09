"use strict";
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(n: number) {
    let SUM:number= 1;
    for (let i= 1; i <= n; i++) {
        SUM*= i;
    }
    return SUM;
}

console.log(factorio(10));

export{};