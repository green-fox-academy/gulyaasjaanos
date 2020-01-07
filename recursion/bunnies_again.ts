"use strict"

function bunnies(b:number) {
    return ( b === 1 )? 2 : ( (b % 2 === 0)? 3 : 2 ) + bunnies(b-1);
}

console.log(bunnies(3));

export {};

