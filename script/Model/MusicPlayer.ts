/// <reference path="../reference.ts"/>

class MusicPlayer extends Model {

    private playing: boolean = false;

    onPlay: Phaser.Signal = new Phaser.Signal();
    onStop: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, private constants: CONSTANTS.MusicPlayer) {
        super(game, constants);
    }

    get isPlaying(): boolean {
        return this.playing;
    }

    play() {
        this.playing = true;
        this.onPlay.dispatch();
    }

    stop() {
        this.playing = false;
        this.game.sound.stopAll();
        this.onStop.dispatch();
    }

    togglePlayingState() {
        this.playing ? this.stop() : this.play();
    }
}