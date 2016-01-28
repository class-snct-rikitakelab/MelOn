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

	isLogIn(): boolean {
		var isLogIn: boolean = false;
		$.ajax({
			url: this.constants.userNameUrl,
			async: false,
			success: (data: string, state: string) => { if (data != "") isLogIn = true; }
		});
		return isLogIn;
	}

	musicExistInDB(): boolean {
		var existMusic: boolean = false;
		$.ajax({
			url: this.constants.musicExistUrl,
			async: false,
			success: (data: string, state: string) => { if (data == "true") existMusic = true; }
		});
		return existMusic;
	}

    saveConfirm(music: MusicData) {
        this.postMusic = music;
		if (this.isLogIn()) {
			if (this.musicExistInDB()) { this.onSaveConfirm.dispatch(); return; }
		} else {
			if (localStorage.getItem("music")) { this.onSaveConfirm.dispatch(); return; }
		}
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
		if (this.isLogIn()) {
			this.onLoadConfirm.dispatch(this.musicExistInDB());
			return;
		}
		this.postMusic = JSON.parse(localStorage.getItem("music"));
		this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    }

    load() {
		if (this.isLogIn()) {
			$.ajax({
				url: this.constants.musicLoadUrl,
				async: false,
				success: (music: string, state: string) => { this.postMusic = JSON.parse(music); console.log("success", music); }
			});
		}
        this.onLoad.dispatch(this.postMusic);
    }
}