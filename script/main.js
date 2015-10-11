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
        // ========== Model ===========
        this.music = new Music(this.game, new CONSTANTS.Music);
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        // ========== View ==========
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
    };
    Main.prototype.update = function () {
        this.notes.update();
        this.game.physics.arcade.overlap(this.notes, function () { console.log("overlap"); });
    };
    Main.prototype.render = function () {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.time.fps + 'fps', 5, 20);
        // this.game.debug.text("", 100, 100, "black");
        // this.game.debug.cameraInfo(this.camera, 10, 20, "blue");
    };
    return Main;
})(Phaser.State);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $(function () { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
};
/*
if (this.camera.atLimit.y && this.camera.y === 0) this.camera.x += 10;
if (this.camera.atLimit.x && this.camera.x !== 0) this.camera.y += 10;
if (this.camera.atLimit.y && this.camera.y !== 0) this.camera.x -= 10;
if (this.camera.atLimit.x && this.camera.x === 0) this.camera.y -= 10;
*/ 
//# sourceMappingURL=main.js.map