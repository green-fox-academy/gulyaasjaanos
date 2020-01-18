"use strict";

import {StringedInstrument} from "./StringedInstrument"

class ElectricGuitar extends StringedInstrument {

    static numberOfStrings:number;
    static sound:string = "Twang";

    constructor(strings:number = 6) {
        ElectricGuitar.numberOfStrings = strings;
        super("Electric Guitar", ElectricGuitar.numberOfStrings);
    }

    sound() {
        return ElectricGuitar.sound;
    }

}


export {ElectricGuitar};