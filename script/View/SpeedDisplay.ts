/// <reference path="../reference.ts"/>

class SpeedDisplay extends DOMView {

    private speed: Speed = this.models["speed"];
    private text: JQuery = $(`<div id="speedDisplayText"></div>`);

    constructor(game: Phaser.Game, private constants: CONSTANTS.SpeedDisplay, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.changeSpeed();
    }

    private setView() {
        this.$.append(this.text);
    }

    private setEvent() {
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.roleSpeed(); });
        this.speed.onChangeSpeed.add(() => { this.changeSpeed(); });
    }

    private roleSpeed() {
        if (this.speed.getSpeed === _.last(this.constants.speeds)) {
            _.times(this.constants.speedGradeNum, () => { this.speed.changeSpeed(false); });
            return;
        }
        this.speed.changeSpeed(true);
    }

    private changeSpeed() {
        this.text.text(this.constants.speedText[this.constants.language][this.speed.getSpeedGrade]);
        this.$.css("background-color", this.constants.speedColor[this.speed.getSpeedGrade])
            .css("color", this.constants.textColor[this.speed.getSpeedGrade]);
    }
}