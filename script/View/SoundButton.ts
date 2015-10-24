/// <reference path="../reference.ts"/>

class SoundButton extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private sound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.SoundButton, models: Object, private pitch: string) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$ = $("#" + this.pitch)
            .on("contextmenu", () => { return false; })
            .css("top", this.constants.border + this.constants.pitchTop * this.constants.pitch.indexOf(this.pitch))
            .addClass(this.constants.selector)
            .append($("<div></div>")
               .addClass("soundButtonText")
               .text(this.constants.pitchText[this.constants.language][this.constants.pitch.indexOf(this.pitch)]));
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.ring(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 10px 3px skyblue"); });
        this.$.on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private ring() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.sound.fadeOut(this.constants.ringDuration);
    }
}