/// <reference path="../reference.ts"/>

class InstrumentContainer extends DOMView {

    private instrument: Instrument = this.models["instrument"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentContainer, models: Object) {
        super(game, constants, models);
        this.setView();
    }

    private setView() {
        this.$.css("height", this.constants.containerHeight)
        this.constants.instruments.forEach((instrument: string) => {
            this.$.append($(`<div id="${instrument}"></div>`));
            new InstrumentOption(this.game, new CONSTANTS.InstrumentOption, this.models, instrument);
        });
    }

    close() {
        this.$.stop(true, true).slideUp(this.constants.slideTime);
    }

    slideToggle() {
        this.$.stop(true, true).slideToggle(this.constants.slideTime);
    }
}