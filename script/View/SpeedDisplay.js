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
        this.$.mousedown(function () { _this.roleSpeed(); });
        this.$.on("touchstart", function () { _this.roleSpeed(); });
        this.speed.onChangeSpeed.add(function () { _this.changeSpeed(); });
        this.changeSpeed();
    }
    SpeedDisplay.prototype.roleSpeed = function () {
        var _this = this;
        if (this.speed.getSpeed === _.last(this.constants.speeds)) {
            _.times(this.constants.speedGradeNum, function () { _this.speed.changeSpeed(false); });
            return;
        }
        this.speed.changeSpeed(true);
    };
    SpeedDisplay.prototype.changeSpeed = function () {
        this.$.text(this.constants.speedText[this.constants.language][this.speed.getSpeedGrade]);
        this.$.css("background-color", this.constants.speedColor[this.speed.getSpeedGrade])
            .css("color", this.constants.textColor[this.speed.getSpeedGrade]);
    };
    return SpeedDisplay;
})(DOMView);
//# sourceMappingURL=SpeedDisplay.js.map