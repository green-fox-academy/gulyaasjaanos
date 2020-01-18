"use strict";

import { Reserve } from "./Reserve";

const RESERVATION = new Reserve();
for (let i = 0; i < 10; i++) {
    Reserve.addReservation();
}
Reserve.readReservations();