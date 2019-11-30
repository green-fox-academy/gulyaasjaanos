'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

console.log(girls.map( (e,i) => [e,boys[i]] ).concat(boys.filter( (x,i) => i >= girls.length )));

let pairs: string[]= [];
girls.forEach( (e,i) => { pairs.push(girls[i]); pairs.push(e)} );
pairs= pairs.concat(boys.filter( (x,i) => i >= girls.length ));

console.log(pairs);

export{};