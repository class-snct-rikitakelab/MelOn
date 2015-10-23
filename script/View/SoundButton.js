/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SoundButton = (function (_super) {
    __extends(SoundButton, _super);
    function SoundButton(game, constants, models, pitch) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.pitch = pitch;
        this.instrument = this.models["instrument"];
        this.setView();
        this.setEvent();
    }
    SoundButton.prototype.setView = function () {
        var text = this.setText();
        this.$ = $("#" + this.pitch)
            .css("top", this.constants.border + this.constants.pitchTop * this.constants.pitch.indexOf(this.pitch))
            .addClass(this.constants.selector)
            .append(text);
    };
    SoundButton.prototype.setEvent = function () {
        var _this = this;
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.ring(); });
    };
    SoundButton.prototype.setText = function () {
        return $("<div>" + this.constants.pitchText[this.constants.language][this.constants.pitch.indexOf(this.pitch)] + "</div>");
    };
    SoundButton.prototype.ring = function () {
        if (this.sound && this.sound.isPlaying)
            this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.sound.fadeOut(this.constants.ringDuration);
    };
    return SoundButton;
})(DOMView);
//# sourceMappingURL=SoundButton.js.map