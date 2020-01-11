"use strict";

import {Aircraft} from "./Aircraft";
import {F16} from "./F16";
import {F35} from "./F35";

class Carrier {

    private name:string;
    private ammoStore:number;
    private hangar:Aircraft[];
    private health:number;
    private afloat:boolean;
    private totalDamage:number;

    constructor (name:string, ammo:number, health:number) {
        this.name = name;
        this.hangar = [];
        this.ammoStore = ammo;
        this.health = health;
        this.afloat = true;
        this.totalDamage = 0;
    }

    public getName() {
        return this.name;
    }

    public add(type:string) {
        let airplane:any;
        if (type === "F16") {
            airplane = new F16();
        } else if (type === "F35") {
            airplane = new F35();
        }
        this.hangar.push(airplane);
    }

    public isAfloat() {
        return this.afloat;
    }

    public sufferDamage(damage:number) {
        this.health-= damage;
        if (this.health <= 0) {
            this.afloat = false;
        }
    }

    public fill() {
        if (this.ammoStore === 0) {
            throw "Empty ammo storage!";
        }
        this.hangar.filter( a => a.isPriority()).forEach( (a) => {
            if (a.getmaxAmmo() <= this.ammoStore) {
                this.ammoStore-= a.getmaxAmmo();
                a.refill(a.getmaxAmmo());
            } else {
                a.refill(this.ammoStore);
                this.ammoStore = 0;
            }
        });
        if (this.ammoStore > 0) {
            this.hangar.filter( a => !a.isPriority()).forEach( (a) => {
                if (a.getmaxAmmo() <= this.ammoStore) {
                    this.ammoStore-= a.getmaxAmmo();
                    a.refill(a.getmaxAmmo());
                } else {
                    a.refill(this.ammoStore);
                    this.ammoStore = 0;
                }
            });
        }
        this.totalDamage = 0;
        this.hangar.forEach( e => this.totalDamage+= e.getDamage());
    }

    public fight(enemyCarrier:Carrier) {
        this.hangar.forEach( e => e.fight());
        enemyCarrier.sufferDamage(this.totalDamage);
        console.log(`Enemy ${enemyCarrier.name} was hit for ${this.totalDamage} HP.`);
        this.totalDamage = 0;
        if (!enemyCarrier.isAfloat()) {
            console.log("Enemy carrier was sunk!");
        }
        console.log("");
    }

    public getStatus() {
        console.log(this.name);
        console.log(`HP: ${this.health}, Aircraft count: ${this.hangar.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.totalDamage}`);
        console.log("Aircrafts:");
        if (this.hangar.length > 0) {
            this.hangar.forEach( e => console.log(e.getStatus()));
        }
        console.log("");
    }

}

export {Carrier};