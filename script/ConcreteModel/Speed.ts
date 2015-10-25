/// <reference path="../FreeMakingMusic.ref.ts"/>

class Speed extends Model {

    private speed: number;

    onChangeSpeed: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Speed) {
        super(constants);
        _.times(this.constants.initSpeedGrade + 1, () => { this.changeSpeed(true); });
    }

    get getSpeed(): number {
        return this.speed;
    }

    get getSpeedGrade(): number {
        return this.constants.speeds.indexOf(this.speed);
    }
    
    changeSpeed(up: boolean) {
        var newSpeed = this.constants.speeds[this.getSpeedGrade + (up ? 1 : -1)];
        if (newSpeed) this.speed = newSpeed;
        this.onChangeSpeed.dispatch();
    }
}