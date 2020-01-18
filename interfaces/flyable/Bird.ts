"use strict";

import {Animal} from "../zoo/animal";
import {Flyable} from "./Flyable";

abstract class Bird extends Animal implements Flyable {

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

export {Bird};