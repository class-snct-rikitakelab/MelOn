/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyPhaserGame = (function (_super) {
    __extends(MyPhaserGame, _super);
    // Create Game World
    function MyPhaserGame(assets, constants) {
        _super.call(this, constants.width, constants.height, Phaser.AUTO, constants.renderer);
        // Set each state.
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', Main, false);
        // Start the first state
        this.state.start('Boot', true, false, assets);
    }
    return MyPhaserGame;
})(Phaser.Game);
//# sourceMappingURL=MyPhaserGame.js.map