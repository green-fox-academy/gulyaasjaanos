"use strict";

import {Plant} from "./Plant";

class Tree extends Plant {
    public static absorb:number = 0.40;
    private static type:string = "Tree";

    constructor (color:string, wateramount:number) {
        super(color, wateramount, Tree.absorb, Tree.type);
    }
}

export {Tree};