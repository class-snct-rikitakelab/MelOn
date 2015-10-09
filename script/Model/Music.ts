/// <reference path="../reference.ts"/>



class Music extends Model {
    // NOTE type measure, position, length
    // Arrays as an Object
    private note;
    private music;

    constructor(game: Phaser.Game, constants: CONSTANTS.Music) {
        super(game, constants);
    }

    write(measure: number, position: number, pitch: string) {
        console.log("Write " + measure, position, pitch);
    }

    erase(measure: number, position: number, pitch: string) {
        console.log("Erase " + measure, position, pitch);
    }
}