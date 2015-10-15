/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicPlayBar = (function (_super) {
    __extends(MusicPlayBar, _super);
    function MusicPlayBar(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.musicPlayer = this.models["musicPlayer"];
        this.instrument = this.models["instrument"];
        this.noteOverlapManager = this.models["noteOverlapManager"];
        this.musicPlayer.onStop.add(function () { _this.musicStop(); });
        this.musicPlayer.onPlay.add(function () { _this.musicPlay(); });
        this.noteOverlapManager.setMusicPlayBar(this);
        this.anchor.setTo(1.0, 0.0);
    }
    MusicPlayBar.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this);
    };
    MusicPlayBar.prototype.musicStop = function () {
        this.game.camera.follow(null);
        this.body.velocity.x = 0;
    };
    MusicPlayBar.prototype.musicPlay = function () {
        this.game.camera.follow(this);
        this.body.velocity.x = 100;
    };
    MusicPlayBar.prototype.update = function () {
        if (this.x >= this.game.world.width)
            this.musicPlayer.stop();
    };
    return MusicPlayBar;
})(SpriteView);
//# sourceMappingURL=MusicPlayBar.js.map