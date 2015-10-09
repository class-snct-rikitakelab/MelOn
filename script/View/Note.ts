/// <reference path="../reference.ts"/>

class Note extends SpriteView {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models?: Object) {
        super(game, constants, models);
    }
}