/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StationeryButton = (function (_super) {
    __extends(StationeryButton, _super);
    function StationeryButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.stationery = this.models["stationery"];
        this.setView();
        this.setEvent();
        this.changeImage();
    }
    StationeryButton.prototype.setView = function () {
        this.$.append($("<img src=\"" + this.constants.images["image"] + "\"/>").addClass(this.constants.class["buttonImage"]));
    };
    StationeryButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on("contextmenu", function () { return false; })
            .on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.changeStationery(); });
        this.stationery.onChangeStationery.add(function () { _this.changeImage(); });
    };
    StationeryButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 20px 6px darkorange"); _this.game.sound.play("select"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    StationeryButton.prototype.changeImage = function () {
        this.$.css("background-color", this.constants.onColor);
        if (this.stationery.getStationery === this.constants.name)
            return;
        this.$.css("background-color", this.constants.offColor);
    };
    StationeryButton.prototype.changeStationery = function () {
        this.game.sound.play("decide");
        this.stationery.changeStationery(this.constants.name);
    };
    return StationeryButton;
})(DOMView);
//# sourceMappingURL=StationeryButton.js.map