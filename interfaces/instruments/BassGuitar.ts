"use strict";

import {StringedInstrument} from "./StringedInstrument"

class BassGuitar extends StringedInstrument {

    static numberOfStrings;
    static sound:string = "Duum-duum-duum";

    constructor(strings:number = 6) {
        BassGuitar.numberOfStrings = strings;
        super("Bass Guitar", BassGuitar.numberOfStrings);
    }

    sound() {
        return BassGuitar.sound;
    }

}


export {BassGuitar};