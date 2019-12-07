'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

console.log("starry-night");

function putStar(x:number,y:number,size:number,color:number) {
    ctx.fillStyle = `rgb(${color},${color},${color})`;
    ctx.fillRect(x, y, size, size);
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, 600, 400);

for (let i = 0; i < 100; i++) {
    let color= Math.floor(Math.random()*156+100);
    putStar(Math.floor(Math.random()*600),Math.floor(Math.random()*400),Math.floor(Math.random()*5+1),color);
}
