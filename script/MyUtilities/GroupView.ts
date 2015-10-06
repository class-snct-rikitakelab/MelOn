/// <reference path="../reference"/>

class GroupView extends Phaser.Group {

    protected $: JQuery;

    constructor(game: Phaser.Game, constants: CONSTANTS.GroupView, protected models?: Object) {
        super(game);
        game.world.add(this);
        this.$ = $(this);
    }
}