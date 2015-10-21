/// <reference path="../reference.ts"/>

class SoundButton extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private sound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.SoundButton, models: Object, private pitch: string) {
        super(game, constants, models);
        this.setView();
        this.$.mousedown(() => { this.ring(); });
        this.$.on("touchstart", () => { this.ring(); });
    }

    private setView() {
        var text: JQuery = this.setText();
        this.$ = $("#" + this.pitch)
            .css("top", this.constants.border + this.constants.pitchTop * this.constants.pitch.indexOf(this.pitch))
            .css("background-color", "blue")
            .addClass(this.constants.selector)
            .append(text);
    }

    private setText(): JQuery {
        return $("<div>" + this.constants.pitchText[this.constants.language][this.constants.pitch.indexOf(this.pitch)] + "</div>");
    }

    private ring() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.sound.fadeOut(this.constants.ringDuration);
    }
}