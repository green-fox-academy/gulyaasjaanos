'use strict';

/*We are going to represent our expenses in a list containing integers.

    Create a list with the following items.
        500, 1000, 1250, 175, 800 and 120
    Create an application which solves the following problems.
        How much did we spend?
        Which was our greatest expense?
        Which was our cheapest spending?
        What was the average amount of our spendings?*/

const spendings: number[]= [500, 1000, 1250, 175, 800, 120];
    console.log(spendings.reduce((acc,x) => acc+x));
    console.log(Math.max(...spendings));
    console.log(Math.min(...spendings));
    console.log(Math.round(spendings.reduce((acc,x) => acc+x) / spendings.length));


export {};