'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

console.log("go-to-center");

function drawLine(x:number,y:number) {
    console.log(`${x}:${y}:`)
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

const step = 20;
for (let i = 0; i <= Math.floor(600/step); i++) drawLine(i*step,0);
for (let i = 0; i <= Math.floor(600/step); i++) drawLine(i*step,400);
for (let i = 0; i <= Math.floor(400/step); i++) drawLine(0,i*step);
for (let i = 0; i <= Math.floor(400/step); i++) drawLine(600,i*step);

