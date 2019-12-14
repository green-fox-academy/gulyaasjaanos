"use strict";

class Counter{

    private initial: number;
    private value: number;

    constructor(initial: number = 0) {
        this.initial= initial;
        this.value= initial;
    }

    add(n: number = 1) {
        this.value+= n;
    }

    get() {
        return this.value.toString();
    }

    reset() {
        this.value = this.initial;
    }


}



export {Counter};