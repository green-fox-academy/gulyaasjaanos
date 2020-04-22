"use strict";

const alwaysThrows = () => {throw "OH NOES"};

const iterate = (value) => {
    console.log(value);
    return value + 1;
};

const promise = Promise.resolve(1);

promise
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch( (e) => console.log(e) )
