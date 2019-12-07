'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

console.log("purple-steps");

function stepBox(i:number,size:number) {
    ctx.fillStyle = "black";
    ctx.fillRect(i*size, i*size, size, size);
    ctx.fillStyle = "purple";
    ctx.fillRect(i*size+2, i*size+2, size-4, size-4);

}

const size = 20
for (let i = 0; i < 400/size; i++) {
    stepBox(i,size);
}

