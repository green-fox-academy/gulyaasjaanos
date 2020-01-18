"use strict";

abstract class Animal {

    protected name:string;

    constructor(name:string) {
        this.name = name;
    }

    abstract breed():any;

    getName() {
        return this.name;
    }

}

export {Animal};