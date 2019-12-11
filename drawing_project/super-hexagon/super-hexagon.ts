'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


console.log("triangles");

function drawHex(px:number,py:number,color:string) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color})`;
    ctx.lineWidth = 2;
    ctx.moveTo(px-W,py);
    ctx.lineTo(px-W/2,py-H);
    ctx.lineTo(px+W/2,py-H);
    ctx.lineTo(px+W,py);
    ctx.lineTo(px+W/2,py+H);
    ctx.lineTo(px-W/2,py+H);
    ctx.lineTo(px-W,py);
    ctx.stroke();
}

function drawSix(px:number,py:number,color:string) {
    drawHex(px,py,color);
    drawHex(px,py-H*2,color);
    drawHex(px+W*1.5,py-H,color);
    drawHex(px+W*1.5,py+H,color);
    drawHex(px,py+H*2,color);
    drawHex(px-W*1.5,py+H,color);
    drawHex(px-W*1.5,py-H,color);
}

function pointer(px:number,py:number,color:string) {
    for (let i = 0; i < DB; i++) {
        drawSix(px,py-2*i*H,color);
        drawSix(px+1.5*i*W,py-i*H,color);
        drawSix(px+1.5*i*W,py+i*H,color);
        drawSix(px,py+2*i*H,color);
        drawSix(px-1.5*i*W,py+i*H,color);
        drawSix(px-1.5*i*W,py-i*H,color);
    }
}


const DB = 5;
const W = 20;
const H = Math.sqrt(3)/2*W;
const color = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
pointer(300,300,color);


