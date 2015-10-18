/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScrollButton = (function (_super) {
    __extends(ScrollButton, _super);
    function ScrollButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.isPushed = false;
        this.loadImage();
        this.$.mousedown(function () { _this.isPushed = true; });
        this.$.mouseup(function () { _this.isPushed = false; });
        this.$.mouseleave(function () { _this.isPushed = false; });
        this.$.on("contextmenu", function () { return false; });
        this.initCamera();
    }
    ScrollButton.prototype.loadImage = function () {
        this.image = $("<img />")
            .attr("src", this.constants.images["image"])
            .addClass(this.constants.class["buttonImage"]);
        this.$.append(this.image);
    };
    ScrollButton.prototype.initCamera = function () {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    };
    ScrollButton.prototype.update = function () {
        if (this.isPushed) {
            switch (this.constants.direction) {
                case "up":
                    this.game.camera.y -= this.constants.speed;
                    break;
                case "down":
                    this.game.camera.y += this.constants.speed;
                    break;
                case "right":
                    this.game.camera.x += this.constants.speed;
                    break;
                case "left":
                    this.game.camera.x -= this.constants.speed;
                    break;
            }
        }
    };
    return ScrollButton;
})(DOMView);
//# sourceMappingURL=ScrollButton.js.map