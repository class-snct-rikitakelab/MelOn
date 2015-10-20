/// <reference path="../reference.ts"/>

class Speed extends Model {

    private speed: number;

    onChangeSpeed: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Speed) {
        super(constants);
        _.times(this.constants.initSpeed + 1, () => { this.changeSpeed(true); });
    }

    get getSpeed(): number {
        return this.speed;
    }
    
    changeSpeed(up: boolean) {
        var newSpeed = this.constants.speeds[this.constants.speeds.indexOf(this.speed) + (up ? 1 : -1)];
        if (!newSpeed) return;
        this.speed = newSpeed;
        this.onChangeSpeed.dispatch();
    }
}