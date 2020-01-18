"use strict";

class Drawing {

    private x:number;
    private y:number;
    private color:string;
    private offsetX:number;
    private offsetY:number;
    private quarter:number;

    constructor(drawObject) {
        this.x = drawObject.x;
        this.y = drawObject.y;
        this.color = drawObject.color;
        this.offsetX = drawObject.offsetX;
        this.offsetY = drawObject.offsetY;
        this.quarter = drawObject.quarter;
        this.drawLine();
    }

    private drawLine():void {
        ctx.beginPath();
        ctx.strokeStyle = `rgb(${this.color})`;
        ctx.lineWidth = 2;
        ctx.moveTo(this.quarter-this.x + this.offsetX, this.quarter-this.y + this.offsetY);
        ctx.lineTo(this.y + this.offsetX, this.quarter-this.x + this.offsetY);
        ctx.stroke();
    }


}