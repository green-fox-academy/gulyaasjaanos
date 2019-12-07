'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

console.log("connect-the-dots");

function connectDots(dots:number[][]) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    ctx.lineWidth = 3;
    dots.push(dots[0]);
    dots.forEach( (dot,i,a) => {
        if (i < a.length-1) {
            ctx.moveTo(dot[0], dot[1]);
            ctx.lineTo(a[i+1][0], a[i+1][1]);
        }
    });
    ctx.stroke();
}

let dots = [[10, 10], [290,  10], [290, 290], [10, 290]];
connectDots(dots);
dots = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];
connectDots(dots);

