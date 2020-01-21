"use strict";


class Drawing {

    private tubeX:number[];
    private tubeY:number[];
    private step:number;
    private offsetX:number;
    private offsetY:number;
    private color:string;


    constructor(DrawingOptions) {
        this.tubeX = DrawingOptions.tubeX;
        this.tubeY = DrawingOptions.tubeY;
        this.step = DrawingOptions.step;
        this.offsetX = DrawingOptions.offsetX;
        this.offsetY = DrawingOptions.offsetY;
        this.color = `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
        console.log(this);
        this.draw();
    }

    private drawLine(x:number,y:number,D:number,CANVAS) {
        CANVAS.beginPath();
        CANVAS.strokeStyle = `rgb(${this.color})`;
        CANVAS.lineWidth = 2;
        CANVAS.moveTo(D-x + this.offsetX, D-y + this.offsetY);
        CANVAS.lineTo(y + this.offsetX, D-x + this.offsetY);
        CANVAS.stroke();
        //console.log(`line drawed: ${x}`);
    }
    
    public draw() {
        const D = Canvas.get().width / 2;
        const CANVAS = Canvas.get().canvas;
        console.log("going for...");
        for (let i = 0; i < this.tubeX.length; i++) {
           this.drawLine(this.tubeX[i],this.tubeY[i],D,CANVAS);
        }
    }

}