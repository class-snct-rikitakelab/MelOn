/// <reference path="../index.ref.ts"/>

class RegistButton extends HTMLView {
	constructor(private constants: INDEX.RegistButton, private language: Language) {
		super(constants);
		this.setView();
		this.setEvent();
	}

	private setView() {
		this.$.text(this.constants.registText[this.language.getLanguage]);
	}

	private setEvent() {
		this.$.hover(() => this.enter(), () => this.leave());
		this.$.click(() => this.click());
		this.language.onChangeLanguage(() => this.setView());
	}

	private enter() {
        this.$.css("box-shadow", `0 0 20px 6px ${this.constants.shadowColor}`);
		this.audioPlay(this.audios["select"]);
    }

    private leave() {
        this.$.css("box-shadow", "none");
    }

	private click() {
        this.audioPlay(this.audios["decide"]);
        setTimeout(() => { document.location = <any>(this.constants.baseUrl + this.language.getLanguage); }, 500);
    }
}