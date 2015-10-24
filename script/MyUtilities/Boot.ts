/// <reference path="../reference.ts"/>

class Boot extends Phaser.State {
    private assets: AssetLoader;
    init(assets: AssetLoader) {
        this.assets = assets;
    }

    preload() {
        // Load the preload images in advance.
        this.assets.preload(this.load);
    }

    create() {
        // Start phisics system.
        this.physics.startSystem(Phaser.Physics.ARCADE);
 
        // Unless you specifically need to support multitouch I would recommend setting this to 1
        this.input.maxPointers = 1;
 
        // This game can run even if the users change the focus such as tab on their browser.
        // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        // For display fps.
        this.time.advancedTiming = true;

        // Start asset loading.
        this.game.state.start('Preloader', true, false, this.assets);
    }
}