"use strict";

const fs = require("fs");

function IChangedMyMindAboutB() {
    fs.readFile("./data.csv", 'utf8', function(err, content) {
        B = content;
    });
}

const A = 2;
let B = 2.5;

IChangedMyMindAboutB();

console.log(`2 x 2 = ${A*B}`);
