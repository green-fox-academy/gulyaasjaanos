'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


console.log("triangles");

function drawTriangle(px:number,py:number,width:number,length:number,color:string,depth:number) {
    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color})`;
    ctx.lineWidth = 2;
    ctx.moveTo(px,py);
    ctx.lineTo(px + length/2, py + length);
    ctx.lineTo(px - length/2, py + length);
    ctx.lineTo(px, py);
    ctx.stroke();
    if (depth > 0) {
        drawTriangle(px,py,width/2,length/2,color,depth-1);
        drawTriangle(px-length/4,py+length/2,width/2,length/2,color,depth-1);
        drawTriangle(px+length/4,py+length/2,width/2,length/2,color,depth-1);
        //drawTriangle(px,py+length,width/2,-length/2,color,depth-1);
    }
}


const DEPTH = 6;
const SIZE = 600;
const color = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
drawTriangle(SIZE/2,SIZE/22,SIZE,Math.sqrt(3)/2*SIZE,color,DEPTH);


