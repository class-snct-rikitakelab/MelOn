/// <reference path="../reference.ts"/>

class Note extends SpriteView {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, model?: Object) {
        super(game, constants);
    }
}