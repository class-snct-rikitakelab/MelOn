/// <reference path="../reference.ts"/>

class MusicPlayer extends Model {

    private playing: boolean = false;

    constructor(game: Phaser.Game, private constants: CONSTANTS.MusicPlayer) {
        super(game, constants);
    }

    get isPlaying(): boolean {
        return this.playing;
    }

    play() {
        this.playing = true;
        this.$.triggerHandler(this.constants.events["play"]);
    }

    stop() {
        this.playing = false;
        this.$.triggerHandler(this.constants.events["stop"]);
    }

    togglePlayingState() {
        this.playing ? this.stop() : this.play();
    }

    onPlay(handler: () => any): JQuery { return this.$.bind(this.constants.events["play"], handler); }
    onStop(handler: () => any): JQuery { return this.$.bind(this.constants.events["stop"], handler); }
}