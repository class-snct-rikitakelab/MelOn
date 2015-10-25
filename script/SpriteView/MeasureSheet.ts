/// <reference path="../referenceFreeMakingMusic.ts"/>

class MeasureSheet extends SpriteView {

    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;

    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, models: Object, private measure: number) {
        super(game, constants, models);
        this.setPosition(this.constants.width * this.measure, 0);
    }

    protected setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add((self, pointer:Phaser.Pointer) => { this.createNote(pointer);});
        this.events.onInputUp.add(() => { this.music.refresh(); });
    }

    private createNote(pointer: Phaser.Pointer) {
        if (pointer.rightButton.isDown) return;
        var start: number = Math.floor( (this.pointer.x + this.game.camera.x) / this.constants.noteWidth);
        var pitch: string = this.constants.pitch[Math.floor( (this.pointer.y + this.game.camera.y) / this.constants.noteHeight )];
        if (this.stationery.getStationery === this.constants.writeStationery)
            this.music.write({ pitch, unitNote: this.constants.unitNote, start, extension: 0});
    }
}