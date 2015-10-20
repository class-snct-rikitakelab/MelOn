/// <reference path="../reference.ts"/>

class SpeedDisplay extends DOMView {

    private speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SpeedDisplay, models: Object) {
        super(game, constants, models);
        this.speed.onChangeSpeed.add(() => { this.changeSpeed(); });
        this.changeSpeed();
    }

    private changeSpeed() {
        this.$.text(this.constants.speedText[this.constants.language][this.constants.speeds.indexOf(this.speed.getSpeed)]);
        this.$.css("background-color", this.constants.speedColor[this.constants.speeds.indexOf(this.speed.getSpeed)])
            .css("color", this.constants.textColor[this.constants.speeds.indexOf(this.speed.getSpeed)]);
    }
}