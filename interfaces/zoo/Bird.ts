"use strict";

import {Animal} from "./Animal";

class Bird extends Animal {

    static breedStyle:string = "laying eggs.";

    constructor(name:string) {
        super(name);
    }

    breed() {
        return Bird.breedStyle;
    };

}

export {Bird};