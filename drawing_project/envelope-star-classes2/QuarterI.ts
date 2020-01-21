"use strict";

class QuarterI {

    constructor() {
        const STEP = 15;
        const QUARTER = Canvas.get().width / 2;
        const step = Math.floor(QUARTER/STEP);
        let tubeX = [];
        let tubeY = [];
        for (let i = step; i < QUARTER; i+= step) {
            tubeX.push(i);
            tubeY.push(0);
        }
        new Drawing({
            tubeX : tubeX,
            tubeY : tubeY,
            step : step,
            offsetX : QUARTER,
            offsetY : 0
        });
    }


}