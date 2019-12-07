'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

console.log("purple-steps-3d");

function stepBox(x:number,y:number,size:number) {
    ctx.fillStyle = "black";
    ctx.fillRect(x,y,size,size);
    ctx.fillStyle = "grey";
    ctx.fillRect(x+2,y+2,size-4,size-4);
}


const size = 40;
const maxx = Math.floor(600/size);
const maxy = Math.floor(400/size);
for (let y = 0; y < maxy; y++) {
    for (let x = 0; x < maxx; x++) {
        if ( (x%2 === 0 && y%2 !== 0) || (x%2 !== 0 && y%2 === 0) ) stepBox(x*size,y*size,size);
    }
}

export{}