"use strict";
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

const abc:string[]= ["Arthur", "Boe", "Chloe"];
let swap:string= abc[0];
abc[0]= abc[2];
abc[2]= swap;
console.log(abc);

export{};