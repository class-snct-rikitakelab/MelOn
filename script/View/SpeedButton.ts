/// <reference path="../reference.ts"/>

class SpeedButton extends DOMView {

    private speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SpeedButton, models: Object) {
        super(game, constants, models);
        this.$.click(() => { this.changeSpeed(); });
    }

    private changeSpeed() {
        if (this.constants.direction === this.constants.upDirection) this.speed.changeSpeed(true);
        if (this.constants.direction === this.constants.downDirection) this.speed.changeSpeed(false);
    }
}