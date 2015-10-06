/// <reference path="reference.ts"/>

// In main class, just declare the models and views.
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class Main extends Phaser.State {
    private stationery: Stationery;
    private scoreSheet: ScoreSheet;
    private notes: Notes;
    private pencil: StationeryButton;
    private eraser: StationeryButton;
    
    create() {
        // ========== Model ===========
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        
        // ========== View ==========
        this.notes = new Notes(this.game, new CONSTANTS.Notes);
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet);
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
    }

    update() {
    }

    render() {
        // For debug. In render method, all values are always updated.
        // this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
        this.game.debug.cameraInfo(this.camera, 10, 20, "blue");
        //this.game.debug.text(this.time.fps + 'fps', 5, 20);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
}