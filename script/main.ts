/// <reference path="reference.ts"/>

// In main class, just declare the models and views.
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class MelOn extends PhaserGame{
    private stationery: Stationery;
    private pencil: StationeryButton;
    private eraser: StationeryButton;

    protected create() {
        // =========== Setting game ==========

        // Start phisics system.
        alert("Physics System Started!"); 
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // This game can run even if the users change the focus such as tab on their browser.
        this.game.stage.disableVisibilityChange = true;
       
        alert("Objects Create Started!");
        // ========== Model ===========
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        
        // ========== View ==========
        new SpriteObject(this.game, new CONSTANTS.Background);
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });

        // ========== Other ===========
        alert("Load Completed!");
    }

    protected update() {
    }

    protected render() {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.stationery.getStationery, 100, 100, "black");
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MelOn(new MelOnAssets, new CONSTANTS.Game); });
}