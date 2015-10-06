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
        // Make all DOM images in advanse.
        this.loadImages();
        // Get stationery model.
        this.stationery = models["stationery"];
        // These two below settings are needed for jQuery event process.
        // The important thing is using arrow function.
        // This function will be executed when the stationery is changed. What is called notify method.
        this.stationery.onChangeStationery(function () { _this.changeImage(); });
        // This function will be executed when this button is pushed.
        this.$.click(function () { _this.changeStationery(); });
        // Set initial Image.
        this.changeImage();
    }
    StationeryButton.prototype.loadImages = function () {
        // At first, empty the DOM elements inside this button.
        this.$.empty();
        // Get the on and off image of this button. 
        // "src" is url of these images.
        // They can have class of CSS as well. 
        this.onImage = $("<img />")
            .attr("src", this.constants.images["onImage"])
            .addClass(this.constants.class["buttonImage"]);
        this.offImage = $("<img />")
            .attr("src", this.constants.images["offImage"])
            .addClass(this.constants.class["buttonImage"]);
        // Create these above images inside this button element.
        this.$.append(this.onImage);
        this.$.append(this.offImage);
    };
    StationeryButton.prototype.changeImage = function () {
        // Change image of this button depends on stationery.
        if (this.stationery.getStationery === this.constants.name) {
            this.swapImage(true);
            return; // Use early "return" rather than "else".
        }
        this.swapImage(false);
    };
    StationeryButton.prototype.swapImage = function (on) {
        // "opacity" property means how the element is "not" clear.
        this.onImage.css("opacity", on ? 1 : 0);
        this.offImage.css("opacity", on ? 0 : 1);
    };
    StationeryButton.prototype.changeStationery = function () {
        // Set the stationery of this button. 
        // This method causes trigger of functions which were set by "onChangeStationery".
        this.stationery.changeStationery(this.constants.name);
    };
    return StationeryButton;
})(DOMView);
//# sourceMappingURL=StationeryButton.js.map