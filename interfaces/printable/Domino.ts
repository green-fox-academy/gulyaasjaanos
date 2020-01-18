"use strict";

import {Printable} from "./Printable"

class Domino implements Printable{

    private A:number;
    private B:number;

    constructor(A:number, B:number) {
        this.A = A;
        this.B = B;
    }

    printAllFields() {
        console.log(`Domino A side: ${this.A}, B side: ${this.B}`);
    }

}

export {Domino};