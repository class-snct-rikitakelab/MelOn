/// <reference path="../reference.ts"/>

class MeasureSheet extends SpriteView {
    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, private measureNumber, models?: Object) {
        super(game, constants, models);
        this.setPosition(this.width * measureNumber, 0);
    }
}