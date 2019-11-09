"use strict";
//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
//function unique(arr) {
//}
//  Example
//console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(input:number[]) {
    let temp:number[]= [];
    input.forEach(function(e) {
        if (temp.indexOf(e) === -1) {
            temp.push(e);
        }
    });
    return temp;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));


export{};