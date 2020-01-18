"use strict";

import {Instrument} from "./Instrument"

abstract class StringedInstrument extends Instrument {

    protected numberOfStrings:number;

    constructor(name:string, strings:number) {
        super(name);
        this.numberOfStrings = strings;
    }

    abstract sound():string;

    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

}


export {StringedInstrument};