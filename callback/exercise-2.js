"use strict";

const mapWith = (array, callback) => {
    let output = [];
  
    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.
    let e;
    for (e of array) {
      output.push(callback(e));
    } 
    return output;
  }


// Exercise 2:

// Create a callback function which removes every second character from a string

const removeSecondLetter = (word) => {
    let output = "";
    for (let i = 0; i < word.length; i++) {
        if ( i % 2 === 0) {
            output += word[i];
        }
    }
    return output;
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']