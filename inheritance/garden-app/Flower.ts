"use strict";

import {Plant} from "./Plant";

class Flower extends Plant {
    public static absorb:number = 0.75;
    private static type:string = "Flower";

    constructor (color:string, wateramount:number) {
        super(color, wateramount, Flower.absorb, Flower.type);
    }
}

export {Flower};