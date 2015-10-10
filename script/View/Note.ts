/// <reference path="../reference.ts"/>

class Note extends SpriteView {

    private index: number;
    private isStreching: boolean = true;
    private isMoving: boolean = false;
    private music: Music;
    private stationery: Stationery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, x: number, y: number) {
        super(game, constants, models);
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.index = this.music.getSelectedNoteIndex;
        this.setPosition(x, y);
        this.setInput();
    }

    get getIndex(): number {
        return this.index;
    }

    private setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add(() => { this.touchNote(); });
    }

    private touchNote() {
        this.music.select(this.index);
        if (this.stationery.getStationery === this.constants.eraseStationery) { this.erase(); }
        if (this.stationery.getStationery === this.constants.writeStationery) { this.moveStart(); }
    }

    private erase() {
        this.destroy();
        this.music.erase();
    }

    private moveStart() {
    }

    update() {
        // Get pointer
        // change size depends on pointer
    }
}