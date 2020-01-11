"use strict";

class Plant {

    public color:string;
    public wateramount:number;
    private absorb:number;
    private type:string;

    constructor (color:string, wateramount:number, absorb:number, type:string) {
        this.color = color;
        this.wateramount = wateramount;
        this.absorb = absorb;
        this.type = type;
    }

    public statusRiport() {
        return ( this.wateramount >= 5 )? this.type + " doesnt need water" : this.type + " needs water";
    }

    public watering(wateramount:number) {
        this.wateramount+= wateramount * this.absorb;
    }

}

export {Plant};