"use strict";

import {Plant} from "./Plant";
import {Tree} from "./Tree";
import {Flower} from "./Flower";

class Garden {
    public plantage:Plant[];
    
    constructor() {
        this.plantage = [];
    }

    public addTree(color:string, wateramount:number) {
        const tree = new Tree(color, wateramount);
        this.plantage.push(tree);
    }

    public addFlower(color:string, wateramount:number) {
        const flower = new Flower(color, wateramount);
        this.plantage.push(flower);
    }

    public statusRiport() {
       this.plantage.forEach( function(p) {
            const status = p.statusRiport();
            console.log(`The ${p.color} ${status}`);
        });
        console.log("");
    }

    public watering(wateramount:number) {
        console.log(`Watering with ${wateramount}`);
        const wAmount = wateramount / this.plantage.length;
        this.plantage.forEach( function(p) {
            p.watering(wAmount);
        });
    }

}

export {Garden};