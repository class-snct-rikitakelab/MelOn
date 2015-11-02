/// <reference path="../FreeMakingMusic.ref.ts"/>

class LoadButton extends DOMView {

    private music: Music = this.models["music"];
    private musicStorage: MusicStorage = this.models["musicStorage"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.LoadButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.append($(`<img src=${this.constants.image} />`).addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); this.game.sound.play("select"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.musicStorage.loadConfirm(); });
        this.musicStorage.onLoad.add((loadMusic) => { this.setMusic(loadMusic); });
    }

    setMusic(music: MusicData) {
        this.game.sound.mute = true;
        this.music.setMusic(music);
        this.game.sound.mute = false;
    }
}