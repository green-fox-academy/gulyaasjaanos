"use strict"

function sumDigit(n:number):number {
    //return ( n.toString().length === 1 ) ? n : n + sumDigit( parseInt(n.toString().substr(0,n.toString().length-1)) );
    return ( n / 10 < 1 )? n : n % 10 + sumDigit(Math.floor(n / 10)); 
}

console.log(sumDigit(1017));

export {};