'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

console.log("colored-box");

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(220, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(220, 20);
ctx.lineTo(220, 220);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(220, 220);
ctx.lineTo(20, 220);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(20, 220);
ctx.lineTo(20, 20);
ctx.stroke();

