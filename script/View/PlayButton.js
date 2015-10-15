/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PlayButton = (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.musicPlayer = this.models["musicPlayer"];
        this.loadImage();
        this.musicPlayer.onPlay.add(function () { _this.changeImage(true); });
        this.musicPlayer.onStop.add(function () { _this.changeImage(false); _this.game.sound.stopAll(); });
        this.$.click(function () { _this.changePlayingState(); });
        this.changeImage(false);
    }
    PlayButton.prototype.loadImage = function () {
        this.image = $("<img />").attr("src", this.constants.images["image"]).addClass(this.constants.class["buttonImage"]);
        this.$.append(this.image);
    };
    PlayButton.prototype.changeImage = function (playing) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor);
    };
    PlayButton.prototype.changePlayingState = function () {
        this.musicPlayer.togglePlayingState();
    };
    return PlayButton;
})(DOMView);
//# sourceMappingURL=PlayButton.js.map