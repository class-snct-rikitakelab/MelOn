/// <reference path="../reference.ts"/>

class ScoreSheet extends GroupView {
    
    constructor(game: Phaser.Game, private constants: CONSTANTS.ScoreSheet, models?: Object) {
        super(game, constants, models);
        _.times(this.constants.measureNum, () => { this.addMeasure(); });
        
        // Set camera avairable zone.
        this.game.camera.bounds.height = this.constants.height;
    }

    addMeasure() {
        this.add(new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, this.children.length, this.models));
        this.updateCameraWidth();
    }

    reduceMeasure() {
        this.children.pop();
        this.updateCameraWidth();
    }

    updateCameraWidth() {
        this.game.camera.bounds.width = this.constants.width * this.children.length;
    }
}