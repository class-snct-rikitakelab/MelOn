/// <reference path="../reference.ts"/>
var PhaserGame = (function () {
    // Create game world.
    function PhaserGame(assets, constants) {
        var _this = this;
        this.game = new Phaser.Game(constants.width, constants.height, Phaser.AUTO, constants.renderer, {
            preload: function () { assets.load(_this.game); },
            create: this.create, update: this.update, render: this.render
        });
    }
    // start the game
    PhaserGame.prototype.create = function () {
        // override!
    };
    // do it on each frame
    PhaserGame.prototype.update = function () {
        // override!
    };
    // For Debug?
    PhaserGame.prototype.render = function () {
        // override!
    };
    return PhaserGame;
})();
//# sourceMappingURL=PhaserGame.js.map