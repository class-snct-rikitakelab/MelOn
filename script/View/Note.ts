/// <reference path="../reference.ts"/>

class Note extends SpriteView {

    private music: Music;
    private stationery: Stationery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, x: number, y: number) {
        super(game, constants, models);

        this.music = this.models["music"];
        this.stationery = this.models["stationery"];

        this.setPosition(x, y);

        this.setInput();
    }

    private setInput() {
        this.inputEnabled = true;
        this.events.onInputDown.add(() => { this.touchNote(); });
    }

    private touchNote() {
        console.log("Note was clicked!");
    }
}