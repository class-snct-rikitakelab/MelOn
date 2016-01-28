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

	saveCheckInDB(): boolean {
		var existMusic: boolean = false;
		$.ajax({
			url: this.constants.musicSaveUrl,
			async: false,
			success: (data: string, state: string) => { if (data == "true") existMusic = true; }
		});
		return existMusic;
	}

    saveConfirm(music: MusicData) {
        this.postMusic = music;
        if (this.saveCheckInDB()) { this.onSaveConfirm.dispatch(); return; }
        this.save();
    }

	saveInDB(music: string) {
		$.ajax({
			url: this.constants.musicSaveUrl,
			type: "post",
			data: "music=" + music,
			async: false,
			success: (data: string, state: string) => { console.log(data, state); }
		});
	}

    save() {
		var music: string = JSON.stringify(this.postMusic);
        localStorage.setItem("music", music);
		this.saveInDB(music);
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