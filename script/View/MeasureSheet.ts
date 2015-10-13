/// <reference path="../reference.ts"/>

class MeasureSheet extends SpriteView {

    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, models: Object, private measure: number) {
        super(game, constants, models);
        this.setPosition(this.constants.width * this.measure, 0);
    }

    protected setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add((self, pointer) => { this.createNote(pointer) });
        this.events.onInputUp.add(() => { this.music.refresh(); });
    }

    private createNote(pointer: any) {
        var start: number = Math.floor(this.scorePosition(pointer).x / this.constants.noteWidth);
        var pitch: string = this.constants.pitch[Math.floor(pointer.positionDown.y / this.constants.noteHeight)];
        if (this.stationery.getStationery === this.constants.writeStationery)
            this.music.write({ pitch, unitNote: this.constants.unitNote, start, extension: 0});
    }

    scorePosition(pointer: Phaser.Pointer): { x: number, y: number } {
        var x: number = pointer.positionDown.x + this.game.camera.x;
        var y: number = pointer.positionDown.y + this.game.camera.y;
        return { x: x, y: y };
    }
}