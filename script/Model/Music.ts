/// <reference path="../reference.ts"/>



class Music extends Model {
    // NOTE type measure, position, length
    // Arrays as an Object
    private note;
    private music;
    public text: string;

    constructor(game: Phaser.Game, constants: CONSTANTS.Music) {
        super(game, constants);
    }

    write(measure: number, position: number, pitch: string) {
        this.text = "Write " + measure.toString() + position.toString() + pitch;
    }

    erase(measure: number, position: number, pitch: string) {
        this.text = "Erase " + measure.toString() + position.toString() + pitch;
    }
}