"use strict";

import {Animal} from "./Animal";

class Mammal extends Animal {

    static breedStyle:string = "pushing miniature versions out.";

    constructor(name:string) {
        super(name);
    }

    breed() {
        return Mammal.breedStyle;
    };

}

export {Mammal};