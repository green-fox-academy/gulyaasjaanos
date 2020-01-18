"use strict";

import {Reservation} from "./Reservation";

class Reserve {

    private static reservations:Reservation[];

    constructor() {
        Reserve.reservations = [];
    }

    static addReservation() {
        Reserve.reservations.push( new Reservation);
    }

    static readReservations() {
        Reserve.reservations.forEach( (e) =>
            console.log(`Booking#${e.getN()} ${e.getCodeBooking()} for ${e.getDowBooking()}`)
        );
    }

}



export {Reserve};