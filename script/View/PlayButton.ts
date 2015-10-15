/// <reference path="../reference.ts"/>

class PlayButton extends DOMView {

    private musicPlayer: MusicPlayer;
    private image: JQuery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.PlayButton, models: Object) {
        super(game, constants, models);
        this.loadImage();
        this.musicPlayer = models["musicPlayer"];
        this.musicPlayer.onPlay.add(() => { this.changeImage(true); });
        this.musicPlayer.onStop.add(() => { this.changeImage(false); });
        this.$.click(() => { this.changePlayingState(); });
        this.changeImage(false);
    }

    private loadImage() {
        this.image = $("<img />").attr("src", this.constants.images["image"]).addClass(this.constants.class["buttonImage"]);
        this.$.append(this.image);
    }

    private changeImage(playing: boolean) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor);
    }

    private changePlayingState() {
        this.musicPlayer.togglePlayingState();
    }
}