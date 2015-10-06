/// <reference path="../reference.ts"/>

class MyPhaserGame extends Phaser.Game {
    // Create Game World
    constructor(assets: AssetLoader, constants: CONSTANTS.Game) {
        super(constants.width, constants.height, Phaser.AUTO, constants.renderer);

        // Set each state.
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', Main, false);

        // Start the first state
        this.state.start('Boot', true, false, assets);
    }
}