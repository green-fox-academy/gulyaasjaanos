"use strict";
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


const size:number= 4;
let matrix: number[][];
matrix= [];
for (let i=0; i < size; i++) {
    matrix.push([]);
    let line:string= '';
    for (let j=0; j < size; j++) {
        if (j === size-(i+1)) {
            matrix[i][j]= 1;
        } else {
            matrix[i][j]= 0;
        }
        line+= matrix[i][j] + ' ';
    }
    console.log(line);
    console.log('');
}


export{};