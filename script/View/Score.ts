/// <reference path="../reference.ts"/>

class Score extends Phaser.Group {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Score) {
        super(game);
    }
}