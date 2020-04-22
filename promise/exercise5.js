"use strict";

const promise = new Promise ( (resolve, reject) => {
    resolve("PROMISE VALUE");
} );

promise
    .then( console.log );
console.log("MAIN PROGRAM");