/// <reference path="reference.ts"/>

// In main class, just declare the models and views.
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class Main extends Phaser.State {
    private MEASURE: CONSTANTS.Measure;
    private stationery: Stationery;
    private score: Phaser.Group;
    private pencil: StationeryButton;
    private eraser: StationeryButton;

    init() {
        // Get Measure constants.
        this.MEASURE = new CONSTANTS.Measure;

        // Set camera avairable zone.
        var scoreWidth: number = this.MEASURE.width * this.MEASURE.measureNum;
        var scoreHeight: number = this.MEASURE.height * this.MEASURE.pitchNum;
        this.camera.bounds.setTo(0, 0, scoreWidth, scoreHeight);

        // For display fps.
        this.time.advancedTiming = true;
    }

    create() {
        // ========== Model ===========
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        
        // ========== View ==========
        this.score = this.game.add.group();
        _.times(this.MEASURE.measureNum, (n: number) => {
            this.score.add(new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, n, {}))
        });

        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
    }

    update() {
        this.camera.x += 1;
    }

    render() {
        // For debug. In render method, all values are always updated.
        // this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
        // this.game.debug.cameraInfo(this.camera, 0, 0, "brack");
        this.game.debug.text(this.time.fps + 'fps', 5, 20);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
}