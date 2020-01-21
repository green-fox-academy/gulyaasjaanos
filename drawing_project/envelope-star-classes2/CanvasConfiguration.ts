"use strict";

class CanvasConfiguration extends Canvas {

    static single:boolean = true;

    private constructor() {
        super({
            width : 500,
            height : 500
        })
        CanvasConfiguration.single = false;
    }

    public static create() {
        if (CanvasConfiguration.single) {
            new CanvasConfiguration();
        } else {
            throw Error();
        }
    }
    
}