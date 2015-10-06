/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        _super.apply(this, arguments);
    }
    Boot.prototype.init = function (assets) {
        this.assets = assets;
    };
    Boot.prototype.preload = function () {
        // Load the preload images in advance.
        this.assets.preload(this.load);
    };
    Boot.prototype.create = function () {
        // Start phisics system.
        this.physics.startSystem(Phaser.Physics.ARCADE);
        // Unless you specifically need to support multitouch I would recommend setting this to 1
        this.input.maxPointers = 2;
        // This game can run even if the users change the focus such as tab on their browser.
        // Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;
        // Start asset loading.
        this.game.state.start('Preloader', true, false, this.assets);
    };
    return Boot;
})(Phaser.State);
//# sourceMappingURL=Boot.js.map