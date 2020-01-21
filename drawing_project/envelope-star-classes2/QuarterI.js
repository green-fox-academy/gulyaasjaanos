"use strict";
var QuarterI = /** @class */ (function () {
    function QuarterI() {
        var STEP = 15;
        var QUARTER = Canvas.get().width / 2;
        var step = Math.floor(QUARTER / STEP);
        var tubeX = [];
        var tubeY = [];
        for (var i = step; i < QUARTER; i += step) {
            tubeX.push(i);
            tubeY.push(0);
        }
        new Drawing({
            tubeX: tubeX,
            tubeY: tubeY,
            step: step,
            offsetX: QUARTER,
            offsetY: 0
        });
    }
    return QuarterI;
}());
