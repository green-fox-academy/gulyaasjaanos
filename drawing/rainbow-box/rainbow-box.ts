'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

console.log("center-box");

function centerBox(size:number,color:string) {
    ctx.fillStyle = `rgb(${color})`;
    let w = (size > 600) ? 600 : size;
    let h = Math.floor(400/600*w);
    let x = 300 - w/2;
    let y = 200 - h/2;
    ctx.clearRect(x, y, w, h);
    ctx.fillRect(x, y, w, h);
}

for (let i = 600; i >= 0; i-= 20) {
    let color = Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256);
    centerBox(i,color);
}

