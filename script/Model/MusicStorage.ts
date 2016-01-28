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

	saveInDB(music: string) {
		console.log(music);
		$.ajax({
			url: this.constants.musicSaveUrl,
			type: "post",
			data: "music=" + music,
			async: false,
			success: (data: string) => { console.log(data); }
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