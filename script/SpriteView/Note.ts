/// <reference path="../FreeMakingMusic.ref.ts"/>

class Note extends SpriteView {
    
    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];
    private instrument: Instrument = this.models["instrument"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    private sound: Phaser.Sound;
    private isStreching: boolean = true;
    private isMoving: boolean = false;
    private touchPosition: number = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Note, models: Object, private data: NoteData) {
        super(game, constants, models);
        this.setEvent();
        this.setPosition(data.start * constants.width, constants.pitch.indexOf(data.pitch) * constants.height);
        this.ring();
    }

    protected setPhysical() {
        this.game.physics.enable(this);
    }

    protected setInput() {
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputUp.add(() => this.music.refresh());
        this.events.onInputDown.add((self, pointer: Phaser.Pointer) => this.touchNote(pointer));
        this.events.onInputOver.add(() => {
            if (this.stationery.getStationery === this.constants.eraseStationery && this.pointer.isDown) {
                this.game.sound.play("erase");
                this.erase();
            }
        });
    }

    private setEvent() {
        this.music.onEraseAll.add(() => this.erase());
        this.music.onRefresh.add(() => this.refresh());
        this.music.onMove.add(() => this.movePosition());
        this.music.onChangeExtension.add(() => this.changeExtension());
        this.musicPlayer.onStop.add(() => this.offOverlap());
    }

    get getNoteData(): NoteData {
        return this.data;
    }

    private refresh() {
        this.isStreching = false;
        this.isMoving = false;
        this.touchPosition = null;
    }

    private touchNote(pointer: Phaser.Pointer) {
        if (pointer.rightButton.isDown) return;
        this.music.select(this.data);
        if (this.stationery.getStationery === this.constants.writeStationery) {
            if (pointer.msSinceLastClick < this.constants.doubleClkTime) { this.startStreching(); return; }
            this.startMoving();
        }
        if (this.stationery.getStationery === this.constants.eraseStationery) {
            this.game.sound.play("erase");
            this.erase();
        }
    }

    private startMoving() {
        this.isMoving = true;
        this.isStreching = false;
        this.touchPosition = Math.floor(((this.pointer.x + this.game.camera.x) - this.x) / this.constants.width);
        this.ring();
    }

    private startStreching() {
        this.isMoving = false;
        this.isStreching = true;
        this.ring();
    }

    private movePosition() {
        if (this.music.getSelectedNote !== this.data) return;
        this.x = this.data.start * this.constants.width;
        if (this.y == this.constants.pitch.indexOf(this.data.pitch) * this.constants.height) return;
        this.y = this.constants.pitch.indexOf(this.data.pitch) * this.constants.height;
        this.ring();
    }

    private changeExtension() {
        if (this.music.getSelectedNote === this.data)
            this.game.add.tween(this)
                .to({ width: this.constants.width * (this.music.getSelectedNote.extension + 1) }, this.constants.tweenDuration)
                .start();
    }

    private erase() {
        this.music.select(this.data);
        this.music.erase(this.data);
        this.destroy();
    }

    private ring() {
        if (this.game.sound.mute) return;
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.data.pitch);
        this.sound.fadeOut(this.constants.ringDuration);
    }

    onOverlap() {
        if (this.musicPlayer.isPlaying) this.sound = this.game.sound.play(this.instrument.getInstrument + this.data.pitch);
    }

    offOverlap() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.fadeDuration);
    }

    update() {
        if (this.isMoving) this.move();
        if (this.isStreching) this.strech();
    }

    private move() {
        var juttingRight = (this.pointer.x + this.game.camera.x) - (this.x + this.constants.width * (this.touchPosition + 1));
        var juttingLeft = (this.x + this.constants.width * this.touchPosition) - (this.pointer.x + this.game.camera.x);
        var juttingTop = this.y - (this.pointer.y + this.game.camera.y);
        var juttingBottom = (this.pointer.y + this.game.camera.y) - (this.y + this.height);
        if (juttingRight > 0) _.times(Math.ceil(juttingRight / this.constants.width), () => { this.music.moveHorizontally(this.data, true) });
        if (juttingLeft > 0) _.times(Math.ceil(juttingLeft / this.constants.width), () => { this.music.moveHorizontally(this.data, false) });
        if (juttingTop > 0) _.times(Math.ceil(juttingTop / this.constants.height), () => { this.music.moveVertically(this.data, true) });
        if (juttingBottom > 0) _.times(Math.ceil(juttingBottom / this.constants.height), () => { this.music.moveVertically(this.data, false) });
    }

    private strech() {
        var right = this.x + this.constants.width * (this.data.extension + 1);
        var left = this.pointer.x + this.game.camera.x
        var juttingOut = left - right;
        var juttingIn = right - left;
        if (juttingOut > 0) _.times(Math.ceil(juttingOut / this.constants.width), () => { this.music.lengthen(this.data); });
        if (juttingIn > 0) _.times(Math.floor(juttingIn / this.constants.width), () => { this.music.shorten(this.data); });
    }
}