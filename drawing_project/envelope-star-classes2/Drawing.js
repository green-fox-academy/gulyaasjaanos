"use strict";
var Drawing = /** @class */ (function () {
    function Drawing(DrawingOptions) {
        this.tubeX = DrawingOptions.tubeX;
        this.tubeY = DrawingOptions.tubeY;
        this.step = DrawingOptions.step;
        this.offsetX = DrawingOptions.offsetX;
        this.offsetY = DrawingOptions.offsetY;
        this.color = Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256);
        console.log(this);
        this.draw();
    }
    Drawing.prototype.drawLine = function (x, y, D, CANVAS) {
        CANVAS.beginPath();
        CANVAS.strokeStyle = "rgb(" + this.color + ")";
        CANVAS.lineWidth = 2;
        CANVAS.moveTo(D - x + this.offsetX, D - y + this.offsetY);
        CANVAS.lineTo(y + this.offsetX, D - x + this.offsetY);
        CANVAS.stroke();
        //console.log(`line drawed: ${x}`);
    };
    Drawing.prototype.draw = function () {
        var D = Canvas.get().width / 2;
        var CANVAS = Canvas.get().canvas;
        console.log("going for...");
        for (var i = 0; i < this.tubeX.length; i++) {
            this.drawLine(this.tubeX[i], this.tubeY[i], D, CANVAS);
        }
    };
    return Drawing;
}());
