/// <reference path="../reference.ts"/>

class Note extends SpriteView {
    
    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];
    private instrument: Instrument = this.models["instrument"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private sound: Phaser.Sound;
    private isStreching: boolean = true;
    private isMoving: boolean = false;
    private touchPosition: number = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, private data: NoteData) {
        super(game, constants, models);
        this.music.onRefresh.add(() => { this.refresh(); });
        this.music.onMove.add(() => { this.movePosition(); });
        this.music.onChangeExtension.add(() => { this.changeExtension(); });
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
        if (this.stationery.getStationery === this.constants.writeStationery) this.startMoving();
        if (this.stationery.getStationery === this.constants.eraseStationery) this.erase();
    }

    private refresh() {
        this.isStreching = false;
        this.isMoving = false;
        this.touchPosition = null;
    }

    private startMoving() {
        this.isMoving = true;
        this.touchPosition = Math.floor( ((this.pointer.x + this.game.camera.x) - this.x) / this.constants.width );
    }

    private movePosition() {
        if (this.music.getSelectedNote === this.data) {
            console.log(this.data);
            this.x = this.data.start * this.constants.width;
            this.y = this.constants.pitch.indexOf(this.data.pitch) * this.constants.height;
        }
    }

    private changeExtension() {
        if (this.music.getSelectedNote === this.data) this.width = this.constants.width * (this.music.getSelectedNote.extension + 1);
    }

    private erase() {
        this.music.select(this.data);
        this.music.erase(this.data);
        this.destroy();
    }

    onOverlap() {
        if (this.musicPlayer.isPlaying) this.sound = this.game.sound.play(this.instrument.getInstrument + this.data.pitch);
    }

    offOverlap() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.fadeTime);
    }

    update() {
        if (this.isMoving) this.move();
        if (this.isStreching) this.strech();
    }

    private move() {
        var juttingRight = (this.pointer.x + this.game.camera.x) - (this.x + this.constants.width * (this.touchPosition + 1));
        var juttingLeft = (this.x + this.constants.width * this.touchPosition) - (this.pointer.x + this.game.camera.x);
        var juttingTop = this.y - (this.pointer.y + this.game.camera.y);
        var juttingBottom = (this.pointer.y + this.game.camera.y) - (this.y + this.height);
        if (juttingRight > 0) _.times(Math.ceil(juttingRight / this.constants.width), () => { this.music.moveHorizontally(this.data, true) });
        if (juttingLeft > 0) _.times(Math.ceil(juttingLeft / this.constants.width), () => { this.music.moveHorizontally(this.data, false) });
        if (juttingTop > 0) _.times(Math.ceil(juttingTop / this.constants.height), () => { this.music.moveVertically(this.data, true) });
        if (juttingBottom > 0) _.times(Math.ceil(juttingBottom / this.constants.height), () => { this.music.moveVertically(this.data, false) });
    }

    private strech() {
        var juttingOut = (this.pointer.x + this.game.camera.x) - (this.x + this.width);
        var juttingIn = (this.x + this.width) - (this.pointer.x + this.game.camera.x);
        if (juttingOut > 0) _.times(Math.ceil(juttingOut / this.constants.width), () => { this.music.lengthen(this.data); });
        if (juttingIn > 0) _.times(Math.floor(juttingIn / this.constants.width), () => { this.music.shorten(this.data); });
    }
}