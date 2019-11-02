'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let oneHalf: number= (lineCount%2 === 0) ? Math.floor(lineCount/2) : Math.floor(lineCount/2)+1;
let twoHalf: number= lineCount-oneHalf;

function repeatStr(maxi,str) {
    let STR:string= '';
    for (let i= 0; i < maxi; i++) {
        STR+= str;
    }
    return STR;
}

let width:number = oneHalf*2 -1;

for (let i= 1; i <= oneHalf; i++) {
    console.log( repeatStr((width-(i*2-1))/2," ") + repeatStr(i*2-1,"*") );
}
for (let i= twoHalf; i > 0; i--) {
    console.log( repeatStr((width-(i*2-1))/2," ") + repeatStr(i*2-1,"*") );
}

export {}