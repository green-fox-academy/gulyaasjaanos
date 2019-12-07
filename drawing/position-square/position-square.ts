'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

console.log("position-square");

function drawRectangle(x:number,y:number,w:number,h:number) {
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.strokeRect(x, y, w, h);
}

for (let i = 0; i < 100; i++) {
    drawRectangle(Math.floor(Math.random()*550),Math.floor(Math.random()*350),50,50);
}

