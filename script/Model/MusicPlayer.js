/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicPlayer = (function (_super) {
    __extends(MusicPlayer, _super);
    function MusicPlayer(game, constants) {
        _super.call(this, game, constants);
        this.constants = constants;
        this.playing = false;
    }
    Object.defineProperty(MusicPlayer.prototype, "isPlaying", {
        get: function () {
            return this.playing;
        },
        enumerable: true,
        configurable: true
    });
    MusicPlayer.prototype.play = function () {
        this.playing = true;
        this.$.triggerHandler(this.constants.events["play"]);
    };
    MusicPlayer.prototype.stop = function () {
        this.playing = false;
        this.game.sound.stopAll();
        this.$.triggerHandler(this.constants.events["stop"]);
    };
    MusicPlayer.prototype.togglePlayingState = function () {
        this.playing ? this.stop() : this.play();
    };
    MusicPlayer.prototype.onPlay = function (handler) { return this.$.bind(this.constants.events["play"], handler); };
    MusicPlayer.prototype.onStop = function (handler) { return this.$.bind(this.constants.events["stop"], handler); };
    return MusicPlayer;
})(Model);
//# sourceMappingURL=MusicPlayer.js.map