/// <reference path="../reference.ts"/>

class Note extends SpriteView {
    
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, private data: NoteData) {
        super(game, constants, models);
        this.music.onChangeExtension(() => { this.changeExtension(); });
        this.setPosition(data.start * constants.width, constants.pitch.indexOf(data.pitch) * constants.height);
    }

    get getNoteData(): NoteData {
        return this.data;
    }

    protected setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputUp.add(() => { this.music.refresh(); });
        this.events.onInputDown.add(() => { this.touchNote(); });
        this.events.onInputOver.add(() => {
            if (this.stationery.getStationery === this.constants.eraseStationery && this.pointer.isDown) this.erase();
        });
    }

    private touchNote() {
        this.music.select(this.data);
        if (this.stationery.getStationery === this.constants.eraseStationery) this.erase();
    }

    private erase() {
        this.music.erase(this.data);
        this.destroy();
    }

    private changeExtension() {
        if (this.music.getSelectedNote === this.data) this.width = this.constants.width * (this.music.getSelectedNote.extension + 1);
    }

    update() {
        this.lengthenNote();
        this.shortenNote();
    }

    private lengthenNote() {
        var juttingOut = this.pointer.x - ( this.x + this.width );
        if (juttingOut > 0) _.times(Math.ceil(juttingOut / this.constants.width), () => { this.music.lengthen(); });
    }

    private shortenNote() {
        var juttingIn = this.x + this.width - this.pointer.x;
        if (juttingIn > 0) _.times(Math.floor(juttingIn / this.constants.width), () => { this.music.shorten(); });
    }
}