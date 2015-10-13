/// <reference path="reference.ts"/>

// In main class, just declare the models and views. We can find dependences of Models and Views
// This program runs on Model-View pattern (Observer pattern, Publisher/Subscriber pattern).
// This pattern is effective for "When A Then B" problem.
// Shusei Komatsu decided to name the roles "Model" and "View" so that we can add "Controller" when it is needed later.

class Main extends Phaser.State {
    // ========== Model ==========
    private music: Music;
    private stationery: Stationery;
    private instrument: Instrument;
    private musicPlayer: MusicPlayer;
    private noteOverlapManager: NoteOverlapManager;

    // ========== View ==========
    private scoreSheet: ScoreSheet;
    private notes: Notes;
    private musicPlayBar: MusicPlayBar;
    private pencil: StationeryButton;
    private eraser: StationeryButton;
    private playButton: PlayButton;
    
    create() {
        this.createModel();
        this.createView(); 
    }

    private createModel() {
        this.music = new Music(this.game, new CONSTANTS.Music);
        this.stationery = new Stationery(this.game, new CONSTANTS.Stationery);
        this.instrument = new Instrument(this.game, new CONSTANTS.Instrument);
        this.musicPlayer = new MusicPlayer(this.game, new CONSTANTS.MusicPlayer);
        this.noteOverlapManager = new NoteOverlapManager(this.game); // Manager as a Model.
    }

    private createView() {
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, stationery: this.stationery, instrument: this.instrument, noteOverlapManager: this.noteOverlapManager });
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
    }

    update() {
        this.noteOverlapManager.checkAllOverlap();
        this.notes.update();
    }

    render() {
        // For debug. In render method, all values are always updated.
        this.game.debug.text(this.time.fps + 'fps', 5, 20);
        // this.game.debug.text(this.notes.selectedNote ? "select": "unselect", 100, 100, "black");
        // this.game.debug.cameraInfo(this.camera, 10, 20, "blue");
        
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new MyPhaserGame(new MelOnAssets, new CONSTANTS.Game); });
}