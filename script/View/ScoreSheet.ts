/// <reference path="../reference.ts"/>

class ScoreSheet extends GroupView {

    private measureNum: number = 0;

    constructor(game: Phaser.Game, private constants: CONSTANTS.ScoreSheet, models?: Object) {
        super(game, constants, models);
        _.times(this.constants.measureNum, () => { this.addMeasure(); });
        
        // Set camera avairable zone.
        this.game.camera.bounds.height = constants.height * constants.pitchNum;
    }

    addMeasure() {
        this.add(new SpriteView(this.game, new CONSTANTS.MeasureSheet))
            .setPosition(this.constants.width * (this.children.length - 1), 0);
        this.game.camera.bounds.width = this.constants.width * this.children.length;
    }

    reduceMeasure() {
        this.children.pop();
        this.game.camera.bounds.width = this.constants.width * this.children.length;
    }
}