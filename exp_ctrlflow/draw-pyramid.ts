'use strict';

let lineCount: number = 21;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function repeatStr(maxi,str) {
    let STR:string= '';
    for (let i= 0; i < maxi; i++) {
        STR+= str;
    }
    return STR;
}

let width:number = lineCount*2 -1;

for (let i= 1; i <= lineCount; i++) {
    console.log( repeatStr((width-(i*2-1))/2," ") + repeatStr(i*2-1,"*") );
}

export {}