"use strict";

import {Aircraft} from "./Aircraft";

class F16 extends Aircraft {

    private static type:string = "F16";
    private static maxAmmo:number = 8;
    private static baseDamage:number = 30;
    private static priority:boolean = false;

    constructor () {
        super(F16.type, F16.maxAmmo, F16.baseDamage, F16.priority);
    }

}

export {F16};