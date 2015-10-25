/// <reference path="../FreeMakingMusic.ref.ts"/>
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
        this.speed = this.models["speed"];
        this.noteOverlapManager = this.models["noteOverlapManager"];
        this.beatNum = 0;
        this.musicPlayer.onStop.add(function () { _this.musicStop(); });
        this.musicPlayer.onPlay.add(function () { _this.musicPlay(); });
        this.speed.onChangeSpeed.add(function () { _this.changeSpeed(); });
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
        this.changeSpeed();
        this.x = 0;
        this.beatNum = 0;
    };
    MusicPlayBar.prototype.changeSpeed = function () {
        if (this.musicPlayer.isPlaying)
            this.body.velocity.x = this.speed.getSpeed;
    };
    MusicPlayBar.prototype.ring = function () {
        this.beatSound = this.game.sound.play(this.constants.beatSound);
        this.beatSound.fadeOut(400);
    };
    MusicPlayBar.prototype.beat = function () {
        var _this = this;
        if (this.beatNum == 0) {
            this.ring();
            this.beatNum++;
            return;
        }
        var pastBeat = Math.floor(this.x / (this.constants.beatWidth * (this.beatNum)));
        if (pastBeat > 0)
            _.times(pastBeat, function (n) { _this.ring(); _this.beatNum++; });
    };
    MusicPlayBar.prototype.update = function () {
        if (this.x >= this.game.world.width)
            this.musicPlayer.stop();
        if (this.musicPlayer.isPlaying) {
            this.beat();
            this.game.camera.focusOnXY(this.x, this.game.camera.y + this.game.camera.view.halfHeight);
        }
    };
    return MusicPlayBar;
})(SpriteView);
//# sourceMappingURL=MusicPlayBar.js.map