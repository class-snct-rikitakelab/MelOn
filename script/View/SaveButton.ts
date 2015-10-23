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
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.save(); });
    }

    private save() {
        if (localStorage.getItem("music") && !confirm("The music you have already saved will be disposed. Is it OK?")) return;
        var str = JSON.stringify(this.music.getMusic);
        localStorage.setItem("music", str); // Local Strage Save
        alert("Your music was saved!");
    }
}