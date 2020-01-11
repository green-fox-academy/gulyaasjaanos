"use strict";

class Aircraft {

    private maxAmmo:number;
    private baseDamage:number;
    private ammo:number;
    private type:string;
    private priority:boolean;
    private damage:number;

    constructor (type:string, maxAmmo:number, baseDamage:number, priority:boolean) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.ammo = 0;
        this. priority = priority;
    }

    public fight() {
        const damage = this.ammo * this.baseDamage;
        this.ammo = 0;
        return damage;
    }

    public refill(ammoAmount) {
        this.ammo = (ammoAmount < this.maxAmmo)? ammoAmount : this.maxAmmo;
        const ammoRefund = (ammoAmount < this.maxAmmo)? 0 : ammoAmount - this.maxAmmo;
    }

    public getType() {
        return this.type;
    }

    public getStatus() {
        return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.ammo}`;
    }

    public isPriority() {
        return this.priority;
    }

    public getmaxAmmo() {
        return this.maxAmmo;
    }

    public getDamage() {
        return this.baseDamage * this.ammo;
    }

}

export {Aircraft};