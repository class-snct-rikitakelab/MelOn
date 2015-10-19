/// <reference path="../reference.ts"/>

class SoundButton extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private sound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.SoundButton, models: Object, private pitch: string) {
        super(game, constants, models);
        this.setView();
        this.$.click(() => { this.ring() });
    }

    private setView() {
        this.$ = $("#" + this.pitch)
            .css("height", this.constants.height)
            .css("width", this.constants.width)
            .css("top", this.constants.height * this.constants.pitch.indexOf(this.pitch))
            .css("background-color", "blue")
            .addClass(this.constants.selector);
    }

    private ring() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.sound.fadeOut(this.constants.ringDuration);
    }
}