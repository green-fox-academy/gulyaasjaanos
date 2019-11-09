"use strict";
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array
// Example
//console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'


function subint(n: number, arr: number[]) {
    let subint: number[]= [];
    arr.forEach(function(e,i) {
        if ( e.toString().indexOf(n.toString()) > -1 ) {
            subint.push(i);
        }
    });
    return subint;
}

console.log(subint(1, [1, 11, 34, 52, 61]));
console.log(subint(9, [1, 11, 34, 52, 61]));

export{};