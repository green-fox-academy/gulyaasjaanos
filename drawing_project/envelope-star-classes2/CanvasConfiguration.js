"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CanvasConfiguration = /** @class */ (function (_super) {
    __extends(CanvasConfiguration, _super);
    function CanvasConfiguration() {
        var _this = _super.call(this, {
            width: 500,
            height: 500
        }) || this;
        CanvasConfiguration.single = false;
        return _this;
    }
    CanvasConfiguration.create = function () {
        if (CanvasConfiguration.single) {
            new CanvasConfiguration();
        }
        else {
            throw Error();
        }
    };
    CanvasConfiguration.single = true;
    return CanvasConfiguration;
}(Canvas));
