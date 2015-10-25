/// <reference path="../reference.ts"/>

class MusicPlayBar extends SpriteView {

    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private instrument: Instrument = this.models["instrument"];
    private speed: Speed = this.models["speed"];
    private noteOverlapManager: NoteOverlapManager = this.models["noteOverlapManager"];
    private beatNum: number = 0;
    private beatSound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.MusicPlayBar, models: Object) {
        super(game, constants, models);
        this.musicPlayer.onStop.add(() => { this.musicStop(); });
        this.musicPlayer.onPlay.add(() => { this.musicPlay(); });
        this.speed.onChangeSpeed.add(() => { this.changeSpeed(); });
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
        this.changeSpeed();
        this.x = 0;
        this.beatNum = 0;
    }

    private changeSpeed() {
        if (this.musicPlayer.isPlaying) this.body.velocity.x = this.speed.getSpeed;
    }

    private ring() {
        this.beatSound = this.game.sound.play(this.constants.beatSound);
        this.beatSound.fadeOut(400);
    }

    private beat() {
        if (this.beatNum == 0) { this.ring(); this.beatNum++; return; }
        var pastBeat = Math.floor(this.x / (this.constants.beatWidth * (this.beatNum)));
        if (pastBeat > 0) _.times(pastBeat, (n) => { this.ring(); this.beatNum++;});
    }

    update() {
        if (this.x >= this.game.world.width) this.musicPlayer.stop();
        if (this.musicPlayer.isPlaying) {
            this.beat();
            this.game.camera.focusOnXY(this.x, this.game.camera.y + this.game.camera.view.halfHeight);
        }
    }
}