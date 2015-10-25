/// <reference path="../FreeMakingMusic.ref.ts"/>

class Instrument extends Model{
    private instrument: string;

    onChangeInstrument: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Instrument) {
        super(constants);
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