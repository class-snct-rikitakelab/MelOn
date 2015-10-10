/// <reference path="../reference.ts"/>

class Note extends SpriteView {

    private index: number;
    private isStreching: boolean = true;
    private isMoving: boolean = false;
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private music: Music;
    private stationery: Stationery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, x: number, y: number) {
        super(game, constants, models);
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.index = this.music.getSelectedNoteIndex;
        this.music.onChangeExtension(() => { this.changeExtension(); });
        this.setPosition(x, y);
        this.setInput();
    }

    private setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add(() => { this.touchNote(); });
    }

    get getIndex(): number {
        return this.index;
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

    private changeExtension() {
        if (this.music.getSelectedNoteIndex === this.index) {
            this.setSize(this.constants.width * this.music.getSelectedNote.extension, this.height);
        }
    }

    update() {
        this.lengthenNote();
        this.shortenNote();
    }

    private lengthenNote() {
        var juttingOut = this.pointer.x - ( this.x + this.width );
        if (juttingOut > 0) { this.music.changeExtension(Math.ceil(juttingOut / this.constants.width)); }
    }

    private shortenNote() {
        var juttingIn = this.pointer.x - (this.x + this.width - this.constants.width);
        if (juttingIn < 0) { this.music.changeExtension(Math.floor(juttingIn / this.constants.width)); }
    }
}