'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

console.log("center-box");

function centerBox(size:number,color:string) {
    ctx.strokeStyle = `rgb(${color})`;
    let w = (size > 600) ? 600 : size;
    let h = (size > 400) ? 400 : size;
    let x = 300 - w/2;
    let y = 200 - h/2;
    ctx.strokeRect(x, y, w, h);
}

for (let i = 0; i < 10; i++) {
    let color = Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256);
    centerBox(Math.floor(Math.random()*400),color);
}

