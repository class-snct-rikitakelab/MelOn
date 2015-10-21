/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpeedButton = (function (_super) {
    __extends(SpeedButton, _super);
    function SpeedButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.speed = this.models["speed"];
        this.$.click(function () { _this.changeSpeed(); });
        this.$.on("touchstart", function () { _this.changeSpeed(); });
    }
    SpeedButton.prototype.changeSpeed = function () {
        if (this.constants.direction === this.constants.upDirection)
            this.speed.changeSpeed(true);
        if (this.constants.direction === this.constants.downDirection)
            this.speed.changeSpeed(false);
    };
    return SpeedButton;
})(DOMView);
//# sourceMappingURL=SpeedButton.js.map