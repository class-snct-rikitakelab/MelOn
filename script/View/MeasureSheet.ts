/// <reference path="../reference.ts"/>

class MeasureSheet extends SpriteObject {
    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, private measureNumber, models?: Object) {
        super(game, constants, models);
        this.setPosition(this.width * measureNumber, 0);
    }
}