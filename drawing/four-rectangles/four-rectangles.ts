'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

console.log("go-to-center");

function drawRectangle(x:number,y:number,w:number,h:number) {
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.strokeRect(x, y, w, h);
}

for (let i = 0; i < 100; i++) {
    drawRectangle(Math.floor(Math.random()*500),Math.floor(Math.random()*300),Math.floor(Math.random()*80+20),Math.floor(Math.random()*80+20));
}

