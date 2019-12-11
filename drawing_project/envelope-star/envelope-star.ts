'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


console.log("envelope-star");

function drawLine(x:number,y:number,color:string,offsetX:number,offsetY:number) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color})`;
    ctx.lineWidth = 2;
    ctx.moveTo(QUARTER-x + offsetX, QUARTER-y + offsetY);
    ctx.lineTo(y + offsetX, QUARTER-x + offsetY);
    ctx.stroke();
}


const STEP = 15;
const QUARTER = 300;
const step = Math.floor(QUARTER/STEP);
const color = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;

for (let i = step; i < QUARTER; i+= step) {
    drawLine(0,i,color,0,0);
}
for (let i = step; i < QUARTER; i+= step) {
    drawLine(i,0,color,300,0);
}
for (let i = step; i < QUARTER; i+= step) {
    drawLine(i,QUARTER,color,0,300);
}
for (let i = step; i < QUARTER; i+= step) {
    drawLine(QUARTER,i,color,300,300);
}



