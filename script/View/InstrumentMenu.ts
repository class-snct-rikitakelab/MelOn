/// <reference path="../reference.ts"/>

class InstrumentMenu extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private text: JQuery = $("<div></div>").addClass("instrumentText");
    private img: JQuery = $(`<img src="" />)`);
    private container: InstrumentContainer;

    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentMenu, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.changeInstrument();
    }

    private setView() {
        this.$.addClass("instrumentOption")
            .css("background-color", "blue")
            .css("height", this.constants.height);
        this.$.append(this.text);
        this.$.append(this.img);
        this.setContainer();
    }

    private setContainer() {
        this.$.append($("<div id='instrumentContainer'></div>"));
        this.container = new InstrumentContainer(this.game, new CONSTANTS.InstrumentContainer, this.models);
    }

    private setEvent() {
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.container.slideToggle(); });
        $(document).on(this.game.device.touch ? "touchstart" : "mousedown", (event) => {
            if (!$.contains($(this.constants.selector)[0], event.target)) this.container.close();
        });
        this.instrument.onChangeInstrument.add(() => { this.changeInstrument(); });
    }

    private changeInstrument() {
        var name = this.instrument.getInstrument;
        this.$.remove("img").append($(`<img src="${this.constants.image[name]}" />`).addClass("instrumentImage"));
        this.text.text(this.constants.instrumentText[this.constants.language][name])
            .css("color", this.constants.textColor[name]);
        this.$.css("background-color", this.constants.backgroundColor[name]);
    }
}