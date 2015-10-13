/// <reference path="../reference.ts"/>

class Note extends SpriteView {
    
    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];
    private instrument: Instrument = this.models["instrument"];
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private sound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, private data: NoteData) {
        super(game, constants, models);
        this.music.onChangeExtension(() => { this.changeExtension(); });
        this.setPosition(data.start * constants.width, constants.pitch.indexOf(data.pitch) * constants.height);
    }

    protected setPhysical() {
        this.game.physics.enable(this);
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

    get getNoteData(): NoteData {
        return this.data;
    }

    private touchNote() {
        this.music.select(this.data);
        if (this.stationery.getStationery === this.constants.eraseStationery) this.erase();
    }

    private erase() {
        this.music.select(this.data);
        this.music.erase(this.data);
        this.destroy();
    }

    private changeExtension() {
        if (this.music.getSelectedNote === this.data) this.width = this.constants.width * (this.music.getSelectedNote.extension + 1);
    }

    onOverlap() {
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.data.pitch);
    }

    offOverlap() {
        this.sound.fadeOut(100);
    }

    update() {
        this.lengthenNote();
        this.shortenNote();
    }

    private lengthenNote() {
        var juttingOut = (this.pointer.x + this.game.camera.x) - ( this.x + this.width );
        if (juttingOut > 0) _.times(Math.ceil(juttingOut / this.constants.width), () => { this.music.lengthen(this.data); });
    }

    private shortenNote() {
        var juttingIn = (this.x + this.width) - (this.pointer.x + this.game.camera.x);
        if (juttingIn > 0) _.times(Math.floor(juttingIn / this.constants.width), () => { this.music.shorten(this.data); });
    }
}