'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

console.log("go-to-center");

function drawRectangle(x:number,y:number,w:number,h:number) {
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.strokeRect(x, y, w, h);
}

for (let i = 0; i < 1; i++) {
    drawRectangle(300,200,10,10);
}

