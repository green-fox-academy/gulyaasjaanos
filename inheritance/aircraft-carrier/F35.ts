"use strict";

import {Aircraft} from "./Aircraft";

class F35 extends Aircraft {

    private static type:string = "F35";
    private static maxAmmo:number = 12;
    private static baseDamage:number = 50;
    private static priority:boolean = true;

    constructor () {
        super(F35.type, F35.maxAmmo, F35.baseDamage, F35.priority);
    }

}

export {F35};