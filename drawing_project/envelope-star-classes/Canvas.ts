"use strict";

class Canvas {

    private static canvas:any;
    private static width:number;
    private static height:number;

    constructor(CanvasOptions:any) {
        Canvas.width = CanvasOptions.width;
        Canvas.height = CanvasOptions.height;
        const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
        Canvas.canvas = canvas.getContext('2d');
        Canvas.canvas.width = Canvas.width +"px";
        Canvas.canvas.height = Canvas.height +"px";
    }

    public get() {
        return {
            width : Canvas.width,
            height : Canvas.height
        };
    }

}