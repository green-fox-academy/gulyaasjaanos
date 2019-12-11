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

function drawLine(x:number,y:number,color:string) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color})`;
    ctx.lineWidth = 3;
    ctx.moveTo(600-x, 600-y);
    ctx.lineTo(y, 600-x);
    ctx.stroke();
}

let r = 0;
let g = 100;
let b = 200;
let color = "";
const STEP = 64;
const step = Math.floor(600/STEP);

const DO = setInterval(function() {

    r = (r > 256) ? 0 : r + 10;
    g = (g > 256) ? 0 : g + 10;
    b = (b > 256) ? 0 : b + 10;
    color = `${r},${g},${b}`;
    console.log(color);
    for (let i = 0; i <= 600; i+= step) {
        drawLine(i,600,color);
    }
    color = `${256-r},${256-g},${256-b}`;
    for (let i = 0; i <= 600; i+= step) {
        drawLine(i,0,color);
    }

}, 300);


