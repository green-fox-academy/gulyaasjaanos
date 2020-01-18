"use strict";

import {Animal} from "./Animal";

class Reptile extends Animal {

    static breedStyle:string = "laying eggs.";

    constructor(name:string) {
        super(name);
    }

    breed() {
        return Reptile.breedStyle;
    };

}

export {Reptile};