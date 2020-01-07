"use strict"

function powerN(base:number, n:number) {
    return ( n === 0 ) ? 1 : base * powerN(base,n-1);
}

console.log(powerN(3,3));

export {};