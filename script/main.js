/// <reference path="reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// In main class, just declare the models and views.
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.
var MelOn = (function (_super) {
    __extends(MelOn, _super);
    function MelOn() {
        _super.apply(this, arguments);
    }
    MelOn.prototype.create = function () {
        // =========== Setting game ==========
        // Start phisics system.
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // This game can run even if the users change the focus such as tab on their browser.
        this.game.stage.disableVisibilityChange = true;
        // ========== Model ===========
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        // ========== View ==========
        new SpriteObject(this.game, new CONSTANTS.Background);
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        // ========== Other ===========
    };
    MelOn.prototype.update = function () {
    };
    MelOn.prototype.render = function () {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
    };
    return MelOn;
})(PhaserGame);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $(function () { new MelOn(new MelOnAssets, new CONSTANTS.Game); });
};
//# sourceMappingURL=main.js.map