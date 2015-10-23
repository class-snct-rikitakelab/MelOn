/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScrollButton = (function (_super) {
    __extends(ScrollButton, _super);
    function ScrollButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.isPushed = false;
        this.initCamera();
        this.setEvent();
    }
    ScrollButton.prototype.setEvent = function () {
        var _this = this;
        this.$.on("contextmenu", function () { return false; });
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.isPushed = true; });
        this.$.on(this.game.device.touch ? "touchend" : "mouseup", function () { _this.isPushed = false; });
        this.$.mouseenter(function () { _this.game.sound.play("select"); });
        this.$.mouseleave(function () { _this.isPushed = false; });
        this.$.dblclick(function () { _this.double(); });
        this.$.data("dblTap", false).click(function () {
            if (_this.$.data("dblTap"))
                _this.$.data("dblTap", false);
            else
                _this.$.data("dblTap", true);
            setTimeout(function () { _this.$.data("dblTap", false); }, _this.constants.doubleTapTime);
        });
    };
    ScrollButton.prototype.initCamera = function () {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    };
    ScrollButton.prototype.rightestPosition = function () {
        var _this = this;
        var music = this.music.getMusic;
        var x = 0;
        _.each(music, function (line) {
            _.each(line, function (note) {
                var endPosition = (_this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x)
                    x = endPosition;
            });
        });
        return x;
    };
    ScrollButton.prototype.double = function () {
        this.game.sound.play("jump");
        switch (this.constants.direction) {
            case "up":
                this.game.camera.y = 0;
                break;
            case "down":
                this.game.camera.y = Infinity;
                break;
            case "right":
                this.game.camera.x = this.rightestPosition() - this.constants.measureWidth * this.constants.displayMeasureNum;
                break;
            case "left":
                this.game.camera.x = 0;
                break;
            default: break;
        }
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
                default: break;
            }
        }
    };
    return ScrollButton;
})(DOMView);
//# sourceMappingURL=ScrollButton.js.map