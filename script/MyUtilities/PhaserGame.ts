/// <reference path="../reference.ts"/>

class PhaserGame{
    // Phaser.js
    game: Phaser.Game;
    
    // Create game world.
    constructor(assets: AssetLoader, constants: CONSTANTS.Game) {
        this.game = new Phaser.Game(constants.width, constants.height, Phaser.AUTO, constants.renderer, {
            preload: () => { assets.load(this.game); },
            create: this.create, update: this.update, render: this.render
        });
    }

    // start the game
    protected create() {
        // override!
    }

    // do it on each frame
    protected update() {
        // override!
    }

    // For Debug?
    protected render() {
        // override!
    }
}