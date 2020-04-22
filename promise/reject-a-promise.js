"use strict";

const promise = new Promise( (resolve,reject) => {
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
});

const onReject = (error) => {
    console.log(error.message);
};

promise
    .then( null, onReject );