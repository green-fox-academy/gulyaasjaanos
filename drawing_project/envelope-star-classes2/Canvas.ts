"use strict";

abstract class Canvas {

    private static canvas:any;
    private static width:number;
    private static height:number;

    constructor(CanvasOptions:any) {
        Canvas.width = CanvasOptions.width;
        Canvas.height = CanvasOptions.height;
        console.log("set");
        let canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        Canvas.canvas = canvas.getContext('2d');
        canvas.width = Canvas.width;
        canvas.height = Canvas.height;
    }

    public static get() {
        return {
            canvas : Canvas.canvas,
            width : Canvas.width,
            height : Canvas.height
        };
    }

}