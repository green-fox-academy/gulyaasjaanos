"use strict";
var Canvas = /** @class */ (function () {
    function Canvas(CanvasOptions) {
        Canvas.width = CanvasOptions.width;
        Canvas.height = CanvasOptions.height;
        console.log("set");
        var canvas = document.querySelector('.main-canvas');
        Canvas.canvas = canvas.getContext('2d');
        canvas.width = Canvas.width;
        canvas.height = Canvas.height;
    }
    Canvas.get = function () {
        return {
            canvas: Canvas.canvas,
            width: Canvas.width,
            height: Canvas.height
        };
    };
    return Canvas;
}());
