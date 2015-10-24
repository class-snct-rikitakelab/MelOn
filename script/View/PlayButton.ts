/// <reference path="../reference.ts"/>

class PlayButton extends DOMView {

    private musicPlayer: MusicPlayer = this.models["musicPlayer"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.PlayButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.changeImage(false);
    }

    private setView() {
        this.$.append($(`<img src="${this.constants.images["image"]}" />`).addClass(this.constants.class["buttonImage"]));
    }

    private setEvent() {
        this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.changePlayingState(); });
        this.$.on("contextmenu", () => { return false; });
        this.musicPlayer.onPlay.add(() => { this.changeImage(true); });
        this.musicPlayer.onStop.add(() => { this.changeImage(false); this.game.sound.stopAll(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => {
            this.$.css("box-shadow", `0 0 20px 6px ${this.musicPlayer.isPlaying ? "orange" : "springgreen"}`);
            this.game.sound.play("select");
        });
        this.$.on(this.game.device.touch ? "touchend" : "mouseleave", () => { this.$.css("box-shadow", "none"); });
    }



    private changeImage(playing: boolean) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor);
    }

    private changePlayingState() {
        this.musicPlayer.togglePlayingState();
        this.$.css("box-shadow", `0 0 20px 6px ${this.musicPlayer.isPlaying ? "orange" : "springgreen"}`);
    }
}