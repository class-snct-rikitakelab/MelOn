/// <reference path="../reference.ts"/>

class SaveButton extends DOMView {

    private music: Music = this.models["music"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SaveButton, models: Object) {
        super(game, constants, models);
        this.$.click(() => { this.save(); });
        this.$.on("touchstart", () => { this.save(); });
        this.$.css("background-color", "darkcyan");
    }

    private save() {
        var str = JSON.stringify(this.music.getMusic);
        
        // Local Strage Save
        localStorage.setItem("music", str);

        alert("Your music was saved!");
    }
}