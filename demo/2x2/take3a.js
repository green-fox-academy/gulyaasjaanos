"use strict";

const fs = require("fs");

function IChangedMyMindAboutB() {
    let content = fs.readFileSync("./data.csv", "utf-8");
    B = content; 
}

const A = 2;
let B = 2.5;

IChangedMyMindAboutB();

console.log(`2 x 2 = ${A*B}`);
