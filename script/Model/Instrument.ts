/// <reference path="../reference.ts"/>

class Instrument extends Model{
    private instrument: string;

    onChangeInstrument: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, private constants: CONSTANTS.Instrument) {
        super(game, constants);
        this.changeInstrument(this.constants.instruments[this.constants.initInstrument]);
    }

    get getInstrument(): string {
        return this.instrument;
    }

    changeInstrument(instrument: string) {
        this.instrument = instrument;
        this.onChangeInstrument.dispatch();
    }
}