'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineCount: number = 8;

function repeatStr(maxi,str) {
    let STR:string= '';
    for (let i= 0; i < maxi; i++) {
        STR+= str;
    }
    return STR;
}

let gap:string= "";
for (let i= 1; i <= lineCount; i++) {
    gap= (i%2 === 0) ? " " : "";
    console.log( gap + repeatStr(lineCount," %") );
}

export {}