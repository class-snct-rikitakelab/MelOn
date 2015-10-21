/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This class is one of View (Concrete Observer).
var StationeryButton = (function (_super) {
    __extends(StationeryButton, _super);
    function StationeryButton(game, constants, models) {
        var _this = this;
        // game and models will be set in this instance by super class ( DOMObject ).
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.stationery = this.models["stationery"]; // Observer(View) can watch Subject(Model).
        // Make DOM image in advanse.
        this.loadImage();
        // These two below settings are needed for jQuery event process.
        // The important thing is using arrow function.
        // This function will be executed when the stationery is changed. What is called notify method.
        this.stationery.onChangeStationery.add(function () { _this.changeImage(); });
        this.rightEvent = this.pointer.rightButton.onDown.add(function () { _this.toggleStationery(); });
        // This function will be executed when this button is pushed.
        this.$.mousedown(function () { _this.changeStationery(); });
        this.$.on("touchstart", function () { _this.changeStationery(); });
        this.$.on("contextmenu", function () { return false; });
        // Set initial Image.
        this.changeImage();
    }
    StationeryButton.prototype.loadImage = function () {
        // Get the on and off image of this button. 
        // "src" is url of these images.
        // They can have class of CSS as well. 
        this.image = $("<img />")
            .attr("src", this.constants.images["image"])
            .addClass(this.constants.class["buttonImage"]);
        // Create these above images inside this button element.
        this.$.append(this.image);
    };
    StationeryButton.prototype.changeImage = function () {
        // Change image of this button depends on stationery.
        if (this.stationery.getStationery === this.constants.name) {
            this.$.css("background-color", this.constants.onColor);
            return; // Use early "return" rather than "else".
        }
        this.$.css("background-color", this.constants.offColor);
    };
    StationeryButton.prototype.changeStationery = function () {
        // Set the stationery of this button. 
        // This method causes trigger of functions which were set by "onChangeStationery".
        this.stationery.changeStationery(this.constants.name);
    };
    StationeryButton.prototype.toggleStationery = function () {
        if ((this.rightEvent.callCount + 1) % this.constants.stationeryNum === this.constants.index)
            this.changeStationery();
    };
    return StationeryButton;
})(DOMView);
//# sourceMappingURL=StationeryButton.js.map