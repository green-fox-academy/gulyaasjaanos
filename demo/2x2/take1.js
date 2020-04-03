"use strict";

function IChangedMyMindAboutB() {
    B = 2;
}

const A = 2;
let B = 2.5;

IChangedMyMindAboutB();

console.log(`2 x 2 = ${A*B}`);
