/// <reference path="../reference.ts"/>

class MelOn extends Phaser.State {
    // ========== Model ==========
    private music: Music = new Music(new CONSTANTS.Music);
    private stationery: Stationery = new Stationery(new CONSTANTS.Stationery);
    private musicPlayer: MusicPlayer = new MusicPlayer(new CONSTANTS.MusicPlayer);
    private instrument: Instrument = new Instrument(new CONSTANTS.Instrument);
    private speed: Speed = new Speed(new CONSTANTS.Speed);

    // ========== View ==========
    private noteOverlapManager: NoteOverlapManager; // View Manager is middle of Model and View ?
    private stationeryToggler: StationeryToggler;
    private pencil: StationeryButton;
    private eraser: StationeryButton;
    private speedDisplay: SpeedDisplay;
    private speedUpButton: SpeedButton;
    private speedDownButton: SpeedButton;
    private playButton: PlayButton;
    private saveButton: SaveButton;
    private loadButton: LoadButton;
    private instrumentMenu: InstrumentMenu;
    private soundButtonContainer: SoundButtonContainer;
    private upButton: ScrollButton;
    private downButton: ScrollButton;
    private rightButton: ScrollButton;
    private leftButton: ScrollButton;
    private scoreSheet: ScoreSheet;
    private notes: Notes;
    private musicPlayBar: MusicPlayBar;
    
    create() {
        this.noteOverlapManager = new NoteOverlapManager(this.game);
        this.stationeryToggler = new StationeryToggler(this.game, new CONSTANTS.StationeryToggler, { stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.speedDisplay = new SpeedDisplay(this.game, new CONSTANTS.SpeedDisplay, { speed: this.speed });
        this.speedUpButton = new SpeedButton(this.game, new CONSTANTS.SpeedUpButton, { speed: this.speed });
        this.speedDownButton = new SpeedButton(this.game, new CONSTANTS.SpeedDownButton, { speed: this.speed });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
        this.saveButton = new SaveButton(this.game, new CONSTANTS.SaveButton, { music: this.music, });
        this.loadButton = new LoadButton(this.game, new CONSTANTS.LoadButton, { music: this.music, });
        this.instrumentMenu = new InstrumentMenu(this.game, new CONSTANTS.InstrumentMenu, { instrument: this.instrument, musicPlayer: this.musicPlayer });
        this.soundButtonContainer = new SoundButtonContainer(this.game, new CONSTANTS.SoundButtonContainer, { instrument: this.instrument });
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager });
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager, speed: this.speed });
        this.upButton = new ScrollButton(this.game, new CONSTANTS.UpButton, { music: this.music, });
        this.downButton = new ScrollButton(this.game, new CONSTANTS.DownButton, { music: this.music, });
        this.rightButton = new ScrollButton(this.game, new CONSTANTS.RightButton, { music: this.music, });
        this.leftButton = new ScrollButton(this.game, new CONSTANTS.LeftButton, { music: this.music, });
    }

    update() {
        this.noteOverlapManager.checkAllOverlap();
        this.soundButtonContainer.update();
        this.upButton.update();
        this.downButton.update();
        this.rightButton.update();
        this.leftButton.update();
        this.notes.update();
    }
}