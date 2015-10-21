/// <reference path="../reference.ts"/>

class InstrumentMenu extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private isOpen: boolean = false;

    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentMenu, models: Object) {
        super(game, constants, models);
        this.setView();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.isOpen ? this.close() : this.open(); });
    }

    private setView() {

    }

    private open() {
        this.isOpen = true;
    }

    private close() {
        this.isOpen = false;
    }
}