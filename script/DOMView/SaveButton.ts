/// <reference path="../reference.ts"/>

class SaveButton extends DOMView {

    private music: Music = this.models["music"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SaveButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.append($(`<img src=${this.constants.image} />`).addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    }

    private setEvent() {
        if(!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.save(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); this.game.sound.play("select"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private save() {
        if (localStorage.getItem("music") && !confirm("The music you have already saved will be disposed. Is it OK?")) return;
        var str = JSON.stringify(this.music.getMusic);
        localStorage.setItem("music", str); // Local Strage Save
        this.game.sound.play("save");
        alert("Your music was saved!");
    }
}