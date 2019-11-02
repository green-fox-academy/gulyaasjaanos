'use strict';


let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function repeatStr(maxi,str) {
    let STR:string= '';
    for (let i= 0; i < maxi; i++) {
        STR+= str;
    }
    return STR;
}

let str:string= "*";
for (let i= 1; i <= lineCount; i++) {
    console.log(repeatStr(i,str));
}

export {}