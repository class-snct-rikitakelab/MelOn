/// <reference path="../reference.ts"/>

class InstrumentMenu extends DOMView {

    private instrument: Instrument = this.models["instrument"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentMenu, models: Object) {
        super(game, constants, models);
    }
}