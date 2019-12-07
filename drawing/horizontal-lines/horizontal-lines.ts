'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.


console.log("go-to-center");

function drawLine(x:number,y:number) {
    console.log(`${x}:${y}:`)
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.stroke();
}

for (let i = 0; i < 10; i++) {
    drawLine(Math.floor(Math.random()*500+50),Math.floor(Math.random()*300+50));
}

