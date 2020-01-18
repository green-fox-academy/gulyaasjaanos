"use strict";

import {Reservationy} from "./Reservationy";

class Reservation implements Reservationy {

    private dow:string;
    private code:string;
    private static num:number = 0;
    private n:number;

    constructor() {
        Reservation.num++;
        this.n = Reservation.num;
        this.dow = ["MON","TUE","WED","THU","FRI","SAT","SUN"][Math.floor((Math.random() * 7))];
        this.code = Reservation.randomCode();
    }

    private static randomCode():string {
        let rcode:string = "";
        for ( let i = 0; i <= 7; i++) {
            const rcode1 = String.fromCharCode( Math.floor((Math.random() * 26) + 65) );
            const rcode2 = String.fromCharCode( Math.floor((Math.random() * 10) + 48) );
            rcode+= (Math.random() * 2 > 1)? rcode1 : rcode2;
        }
        return rcode;
    }


    getDowBooking():string {
        return this.dow;
    }

    getCodeBooking():string {
        return this.code;
    }

    getN() {
        return this.n;
    }

}

export {Reservation};