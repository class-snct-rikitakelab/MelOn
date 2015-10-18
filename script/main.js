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
        // ========== Model ==========
        this.music = new Music(new CONSTANTS.Music);
        this.stationery = new Stationery(new CONSTANTS.Stationery);
        this.instrument = new Instrument(new CONSTANTS.Instrument);
        this.musicPlayer = new MusicPlayer(new CONSTANTS.MusicPlayer);
    }
    Main.prototype.create = function () {
        this.noteOverlapManager = new NoteOverlapManager(this.game);
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager });
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
        this.upButton = new ScrollButton(this.game, new CONSTANTS.UpButton, {});
        this.downButton = new ScrollButton(this.game, new CONSTANTS.DownButton, {});
        this.rightButton = new ScrollButton(this.game, new CONSTANTS.RightButton, {});
        this.leftButton = new ScrollButton(this.game, new CONSTANTS.LeftButton, {});
        this.saveButton = new SaveButton(this.game, new CONSTANTS.SaveButton, { music: this.music, });
        this.loadButton = new LoadButton(this.game, new CONSTANTS.LoadButton, { music: this.music, });
    };
    Main.prototype.update = function () {
        this.noteOverlapManager.checkAllOverlap();
        this.notes.update();
        this.upButton.update();
        this.downButton.update();
        this.rightButton.update();
        this.leftButton.update();
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