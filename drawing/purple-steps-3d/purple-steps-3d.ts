'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

console.log("purple-steps-3d");

function stepBox(p:number,size:number) {
    ctx.fillStyle = "black";
    ctx.fillRect(p,p,size,size);
    ctx.fillStyle = "cyan";
    ctx.fillRect(p+2,p+2,size-4,size-4);
}

const size = 3;
let s1 = 1;
let s2 = 1;
while ((s1+s2*2) < 400/size) {
    stepBox((s2+s1)*size,s2*size);
    [s2,s1] = [s2+s1,s2];
    console.log(`${s1}/${s2}`);
}



