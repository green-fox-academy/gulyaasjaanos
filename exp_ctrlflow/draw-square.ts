'use strict';

let lineCount: number = 25;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function repeatStr(maxi,str) {
    let STR:string= '';
    for (let i= 0; i < maxi; i++) {
        STR+= str;
    }
    return STR;
}

console.log( repeatStr(lineCount,"%") );
for (let i= 2; i < lineCount; i++) {
    console.log( "%" + repeatStr(lineCount-2," ") + "%" );
}
console.log( repeatStr(lineCount,"%") );

export {}