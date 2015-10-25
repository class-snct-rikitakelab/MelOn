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
        this.$.addClass(this.constants.class["stationery"])
            .append($(`<img src="${this.constants.images["image"]}"/>`).addClass(this.constants.class["buttonImage"]));
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on("contextmenu", () => { return false; })
            .on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.changeStationery(); });
        this.stationery.onChangeStationery.add(() => { this.changeImage(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 20px 6px darkorange"); this.game.sound.play("select"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });        
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