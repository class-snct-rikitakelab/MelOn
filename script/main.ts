/// <reference path="reference.ts"/>

// In main class, just declare the models and views.
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class Main extends Phaser.State {
    private stationery: Stationery;
    private score: Phaser.Group;
    private pencil: StationeryButton;
    private eraser: StationeryButton;

    create() {
        // ========== Model ===========
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        
        // ========== View ==========
        this.score = this.game.add.group();
        var MEASURE = new CONSTANTS.Measure();
        for (var i = 0; i < MEASURE.measureNum; ++i) this.score.add( new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, i, {}) );

        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        
    }

    update() {
    }

    render() {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
}