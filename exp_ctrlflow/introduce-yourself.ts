'use strict';

// Write a program that prints a few details to the console about you
// It should print each detail to a new line.
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87

let me= {
    "name": "GJ",
    "age": 37,
    "height": 182
}
Object.keys(me).forEach(function(key) {
    console.log(key, me[key]);
});