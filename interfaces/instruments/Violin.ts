"use strict";

import {StringedInstrument} from "./StringedInstrument"

class Violin extends StringedInstrument {

    static numberOfStrings:number;
    static sound:string = "Screech";

    constructor(strings:number = 6) {
        Violin.numberOfStrings = strings;
        super("Violin", Violin.numberOfStrings);
    }

    sound() {
        return Violin.sound;
    }

}


export {Violin};