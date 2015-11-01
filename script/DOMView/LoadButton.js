/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadButton = (function (_super) {
    __extends(LoadButton, _super);
    function LoadButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.musicStorage = this.models["musicStorage"];
        this.setView();
        this.setEvent();
    }
    LoadButton.prototype.setView = function () {
        this.$.append($("<img src=" + this.constants.image + " />").addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    };
    LoadButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); _this.game.sound.play("select"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    LoadButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.musicStorage.loadConfirm(); });
        this.musicStorage.onLoad.add(function (loadMusic) { _this.setMusic(loadMusic); });
    };
    LoadButton.prototype.setMusic = function (music) {
        this.game.sound.mute = true;
        this.music.setMusic(music);
        this.game.sound.mute = false;
    };
    return LoadButton;
})(DOMView);
//# sourceMappingURL=LoadButton.js.map