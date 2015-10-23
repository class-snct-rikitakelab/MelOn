/// <reference path="../reference.ts"/>

class StationeryButton extends DOMView {
    private stationery: Stationery = this.models["stationery"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.StationeryButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.changeImage();
    }

    private setView() {
        this.$.append($(`<img src="${this.constants.images["image"]}"/>`).addClass(this.constants.class["buttonImage"]));
    }

    private setEvent() {
        this.$.on("contextmenu", () => { return false; });
        this.$.on("mouseenter", () => { this.game.sound.play("select"); });
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.changeStationery(); });
        this.stationery.onChangeStationery.add(() => { this.changeImage(); });
    }

    private changeImage(): void {
        this.$.css("background-color", this.constants.onColor);
        if (this.stationery.getStationery === this.constants.name) return;
        this.$.css("background-color", this.constants.offColor);
    }

    private changeStationery(): void {
        this.game.sound.play("decide");
        this.stationery.changeStationery(this.constants.name);
    }
}