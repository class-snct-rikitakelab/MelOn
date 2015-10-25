/// <reference path="reference.ts"/>

class FreeMakingMusicMode extends Phaser.Game {
    private logo: Logo = new Logo(this, new CONSTANTS.Logo, {});
    constructor(assets: AssetLoader, constants: CONSTANTS.Game) {
        super(constants.width, constants.height, Phaser.AUTO, constants.renderer);
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', MelOn, false);
        this.state.start('Boot', false, false, assets);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new FreeMakingMusicMode(new MelOnAssets, new CONSTANTS.Game); });
}