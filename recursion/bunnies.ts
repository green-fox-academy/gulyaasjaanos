"use strict"

function bunnies(b:number) {
    return ( b === 1 )? 2 : 2 + bunnies(b-1);
}

console.log(bunnies(22));

export {};

