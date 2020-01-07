"use strict"

function numberAdder(n:number) {
    return ( n === 1 ) ? 1 : n + numberAdder(n-1);
}

console.log(numberAdder(10));

export {};