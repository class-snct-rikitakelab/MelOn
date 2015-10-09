/// <reference path="reference.ts"/>

// In main class, just declare the models and views. We can find dependences of Models and Views
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class Main extends Phaser.State {
    private music: Music;
    private stationery: Stationery;
    private scoreSheet: ScoreSheet;
    private notes: Notes;
    private pencil: StationeryButton;
    private eraser: StationeryButton;
    
    create() {
        // ========== Model ===========
        this.music = new Music(this.game, new CONSTANTS.Music);
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        
        // ========== View ==========
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music });
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
    }

    update() {
        /*
        if (this.camera.atLimit.y && this.camera.y === 0) this.camera.x += 10;
        if (this.camera.atLimit.x && this.camera.x !== 0) this.camera.y += 10;
        if (this.camera.atLimit.y && this.camera.y !== 0) this.camera.x -= 10;
        if (this.camera.atLimit.x && this.camera.x === 0) this.camera.y -= 10;
        */
    }

    render() {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.time.fps + 'fps', 5, 20);
        this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
        // this.game.debug.cameraInfo(this.camera, 10, 20, "blue");
        
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
}