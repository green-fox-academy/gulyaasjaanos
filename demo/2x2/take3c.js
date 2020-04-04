"use strict";

const fs = require("fs");

function IChangedMyMindAboutB(callBack) {
    fs.readFile("./data.csv", 'utf8', function(err, content) {
        B = content;
        callBack(A,B);
    });
}

const A = 2;
let B = 2.5;

IChangedMyMindAboutB( (A,B) => {
    console.log(`2 x 2 = ${A*B}`);
});

