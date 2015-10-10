/// <reference path="../reference.ts"/>

class MeasureSheet extends SpriteView {

    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, private measure: number, models: Object) {
        super(game, constants, models);
        this.setPosition(this.constants.width * this.measure, 0);
        
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add((self, point) => { this.touchMeasure(point) }, this);
        this.events.onInputUp.add(() => { this.music.refreshSelect(); });
    }

    private touchMeasure(point: Phaser.Pointer) {
        var position: number = Math.floor(this.input.pointerX(point.id) / this.constants.noteWidth);
        var pitch: string = this.constants.pitch[Math.floor(this.input.pointerY(point.id) / this.constants.noteHeight)];
        if (this.stationery.getStationery === this.constants.writeStationery) this.music.write(pitch, this.measure, position);
    }
}