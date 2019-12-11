'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


console.log("triangles");

function drawTriangle(px:number,py:number,color:string) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color})`;
    ctx.lineWidth = 2;
    ctx.moveTo(px,SIZE-py);
    ctx.lineTo((px + W/2), SIZE-(py + H));
    ctx.lineTo((px + W), SIZE-py);
    ctx.lineTo(px, SIZE-py);
    ctx.stroke();
}

const DB = 21;
const SIZE = 600;
const W = 600/DB;
const H = Math.sqrt(3)/2*W;
console.log(H);
const color = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
let offset = 0;
for (let y = 0; y < DB; y++) {
    for (let x = 0; x < DB-y; x++) {
        drawTriangle((y/2) * W + x * W, H*2 + y * H, color);
    }
}


