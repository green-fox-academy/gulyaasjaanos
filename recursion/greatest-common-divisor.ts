"use strict"

function GCD(a:number, b:number, div?:number) {
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    if (div === undefined) {
        div = min;
    }
    if ( max % div === 0 && min % div === 0 ) {
        return div;
    }
    return GCD(max,min,div-1);
}

function profGCD(a:number, b:number) {
    return ( b === 0 )? a : profGCD(b, a % b);
}

console.log(GCD(10,5));
console.log(profGCD(10,5));

export {};