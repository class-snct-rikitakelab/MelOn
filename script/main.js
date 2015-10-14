/// <reference path="reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// In main class, just declare the models and views. We can find dependences of Models and Views
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.create = function () {
        this.createModel();
        this.createView();
    };
    Main.prototype.createModel = function () {
        this.music = new Music(this.game, new CONSTANTS.Music);
        this.musicPlayer = new MusicPlayer(this.game, new CONSTANTS.MusicPlayer);
        this.instrument = new Instrument(this.game, new CONSTANTS.Instrument);
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        this.noteOverlapManager = new NoteOverlapManager(this.game); // Manager as a Model.
    };
    Main.prototype.createView = function () {
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager });
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
    };
    Main.prototype.update = function () {
        this.noteOverlapManager.checkAllOverlap();
        this.notes.update();
    };
    Main.prototype.render = function () {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.time.fps + 'fps', 5, 20);
        // this.game.debug.text(this.notes.selectedNote ? "select": "unselect", 100, 100, "black");
        // this.game.debug.cameraInfo(this.camera, 10, 20, "blue");
    };
    return Main;
})(Phaser.State);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $(function () { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
};
//# sourceMappingURL=main.js.map