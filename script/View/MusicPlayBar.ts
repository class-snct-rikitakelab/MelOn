/// <reference path="../reference.ts"/>

class MusicPlayBar extends SpriteView {

    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private instrument: Instrument = this.models["instrument"];
    private noteOverlapManager: NoteOverlapManager = this.models["noteOverlapManager"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.MusicPlayBar, models: Object) {
        super(game, constants, models);
        this.musicPlayer.onStop.add(() => { this.musicStop(); });
        this.musicPlayer.onPlay.add(() => { this.musicPlay(); });
        this.noteOverlapManager.setMusicPlayBar(this);
        this.anchor.setTo(1.0, 0.0);
    }

    protected setPhysical() {
        this.game.physics.arcade.enable(this);
    }

    private musicStop() {
        this.game.camera.follow(null);
        this.body.velocity.x = 0;
    }

    private musicPlay() {
        this.game.camera.follow(this);
        this.body.velocity.x = 100;
    }

    update() {
        if (this.x >= this.game.world.width) this.musicPlayer.stop();
    }
}