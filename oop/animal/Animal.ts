"use strict";

class Animal {

    private species: string;
    private hunger: number;
    private thirst: number;

    constructor(species: string, hunger: number = 50, thirst: number = 50) {
        this.species= species;
        this.hunger= hunger;
        this.thirst = thirst;
    }

    eat(){
        this.hunger--;
    }
    drink(){
        this.thirst--;
    }
    play(){
        this.hunger++;
        this.thirst++;
    }

}



export {Animal};