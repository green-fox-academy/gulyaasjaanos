'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

{
let l:number= 10;
let w:number= 10;
let h:number= 10;

console.log(`Surface Area: ${2*(l*w + w*h + h*l)}`);
console.log(`Volume: ${l * w * h}`);
}
