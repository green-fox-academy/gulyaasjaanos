"use strict";

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const fruits = [
    {
        text: "apple",
        timeout: 0
    },
    {
        text: "pear",
        timeout: 1000
    },
    {
        text: "melon",
        timeout: 2000
    },
    {
        text: "grapes",
        timeout: 3000
    }
];

const timeCall = (timedObj,callBack) => {
    
    for ( let e of timedObj) {
        setTimeout(() => {
            callBack(e.text)
        }, e.timeout);
    }

}

const putToConsole = (text) => {
    console.log(text);
} 

timeCall(fruits,putToConsole);