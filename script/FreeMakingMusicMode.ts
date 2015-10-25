/// <reference path="reference.ts"/>

class FreeMakingMusicMode extends Phaser.Game {

    private logo: Logo = new Logo(this, new CONSTANTS.Logo, {});

    constructor(assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(constants.width, constants.height, Phaser.AUTO, constants.renderer);
        this.createElements(constants.selector, constants.elements);
        this.setRestrict(constants.selector);
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', MelOn, false);
        this.state.start('Boot', false, false, assets);
    }

    private createElements(parentSelector: string, elementIds: string[]) {
        var parent = $(parentSelector);
        for (var element of elementIds) parent.append(`<div id=${element}></div>`);
    }

    private setRestrict(selector: string) {
        $(selector).on("contextmenu", () => { return false; }).on("selectstart", () => { return false; });
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new FreeMakingMusicMode(new MelOnAssets, new CONSTANTS.MelOn); });
}