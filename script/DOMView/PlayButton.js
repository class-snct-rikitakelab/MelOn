/// <reference path="../referenceFreeMakingMusic.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PlayButton = (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.musicPlayer = this.models["musicPlayer"];
        this.setView();
        this.setEvent();
        this.changeImage(false);
    }
    PlayButton.prototype.setView = function () {
        this.$.append($("<img src=\"" + this.constants.images["image"] + "\" />").addClass(this.constants.class["buttonImage"]));
    };
    PlayButton.prototype.setEvent = function () {
        var _this = this;
        this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.changePlayingState(); });
        this.musicPlayer.onPlay.add(function () { _this.changeImage(true); });
        this.musicPlayer.onStop.add(function () { _this.changeImage(false); _this.game.sound.stopAll(); });
    };
    PlayButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () {
            _this.$.css("box-shadow", "0 0 20px 6px " + (_this.musicPlayer.isPlaying ? "orange" : "springgreen"));
            _this.game.sound.play("select");
        }).on(this.game.device.touch ? "touchend" : "mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    PlayButton.prototype.changeImage = function (playing) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor);
    };
    PlayButton.prototype.changePlayingState = function () {
        this.musicPlayer.togglePlayingState();
        this.$.css("box-shadow", "0 0 20px 6px " + (this.musicPlayer.isPlaying ? "orange" : "springgreen"));
    };
    return PlayButton;
})(DOMView);
//# sourceMappingURL=PlayButton.js.map