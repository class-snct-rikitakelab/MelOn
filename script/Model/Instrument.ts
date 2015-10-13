/// <reference path="../reference.ts"/>

class Instrument extends Model{
    private instrument: string;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Instrument) {
        super(game, constants);
        this.changeInstrument(this.constants.instruments[this.constants.initInstrument]);
    }

    get getInstrument(): string {
        return this.instrument;
    }

    changeInstrument(instrument: string) {
        this.instrument = instrument;
        this.$.triggerHandler(this.constants.events["changeInstrument"]);
    }

    onChangeInstrument(handler: () => any): JQuery { return this.$.bind(this.constants.events["changeInstrument"], handler); }
}