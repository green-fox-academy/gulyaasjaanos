"use strict";

import {Vehicle} from "./Vehicle";
import {Flyable} from "./Flyable";

abstract class Helicopter extends Vehicle implements Flyable {

    fly() {
        console.log("Flying...");
    }

    land() {
        console.log("Landed.");
    }

    takeOff() {
        console.log("Started to fly.");
    }


}

export {Helicopter};