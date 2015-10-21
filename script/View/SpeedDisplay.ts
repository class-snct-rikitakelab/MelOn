/// <reference path="../reference.ts"/>

class SpeedDisplay extends DOMView {

    private speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SpeedDisplay, models: Object) {
        super(game, constants, models);
        this.$.mousedown(() => { this.roleSpeed(); });
        this.$.on("touchstart", () => { this.roleSpeed(); });
        this.speed.onChangeSpeed.add(() => { this.changeSpeed(); });
        this.changeSpeed();
    }

    private roleSpeed() {
        if (this.speed.getSpeed === _.last(this.constants.speeds)) {
            _.times(this.constants.speedGradeNum, () => { this.speed.changeSpeed(false); });
            return;
        }
        this.speed.changeSpeed(true);
    }

    private changeSpeed() {
        this.$.text(this.constants.speedText[this.constants.language][this.speed.getSpeedGrade]);
        this.$.css("background-color", this.constants.speedColor[this.speed.getSpeedGrade])
            .css("color", this.constants.textColor[this.speed.getSpeedGrade]);
    }
}