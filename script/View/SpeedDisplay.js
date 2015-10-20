/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpeedDisplay = (function (_super) {
    __extends(SpeedDisplay, _super);
    function SpeedDisplay(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.speed = this.models["speed"];
        this.speed.onChangeSpeed.add(function () { _this.changeSpeed(); });
        this.changeSpeed();
    }
    SpeedDisplay.prototype.changeSpeed = function () {
        this.$.text(this.constants.speedText[this.constants.language][this.constants.speeds.indexOf(this.speed.getSpeed)]);
        this.$.css("background-color", this.constants.speedColor[this.constants.speeds.indexOf(this.speed.getSpeed)])
            .css("color", this.constants.textColor[this.constants.speeds.indexOf(this.speed.getSpeed)]);
    };
    return SpeedDisplay;
})(DOMView);
//# sourceMappingURL=SpeedDisplay.js.map