"use strict";
exports.__esModule = true;
var Sharpie = /** @class */ (function () {
    function Sharpie(name, width) {
        if (width === void 0) { width = 50; }
        this.inkAmount = 100;
        this.name = name;
        this.width = width;
    }
    Sharpie.prototype.use = function () {
        this.inkAmount--;
    };
    return Sharpie;
}());
exports.Sharpie = Sharpie;
