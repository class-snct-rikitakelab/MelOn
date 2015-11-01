/// <reference path="../FreeMakingMusic.ref.ts"/>

class MusicStorage extends Model {

    onSaveConfirm: Phaser.Signal = new Phaser.Signal();
    onLoadConfirm: Phaser.Signal = new Phaser.Signal();
    onSave: Phaser.Signal = new Phaser.Signal();
    onLoad: Phaser.Signal = new Phaser.Signal();
    private postMusic: MusicData;

    constructor(private constants: CONSTANTS.MusicStorage) {
        super(constants);
    }

    saveConfirm(music: MusicData) {
        this.postMusic = music;
        if (localStorage.getItem("music")) { this.onSaveConfirm.dispatch(); return; }
        this.save();
    }

    save() {
        localStorage.setItem("music", JSON.stringify(this.postMusic));
        this.onSave.dispatch();
    }

    loadConfirm() {
        this.postMusic = JSON.parse(localStorage.getItem("music"));
        this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    }

    load() {
        this.onLoad.dispatch(this.postMusic);
    }
}