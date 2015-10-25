/// <reference path="reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FreeMakingMusicMode = (function (_super) {
    __extends(FreeMakingMusicMode, _super);
    function FreeMakingMusicMode(assets, constants) {
        _super.call(this, constants.width, constants.height, Phaser.AUTO, constants.renderer);
        this.logo = new Logo(this, new CONSTANTS.Logo, {});
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', MelOn, false);
        this.state.start('Boot', false, false, assets);
    }
    return FreeMakingMusicMode;
})(Phaser.Game);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $(function () { new FreeMakingMusicMode(new MelOnAssets, new CONSTANTS.Game); });
};
//# sourceMappingURL=FreeMakingMusicMode.js.map