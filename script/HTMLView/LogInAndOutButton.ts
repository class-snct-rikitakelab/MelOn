/// <reference path="../index.ref.ts"/>

class LogInAndOutButton extends HTMLView {

	private destination: string;

	constructor(private constants: INDEX.LogInAndOutButton, private language: Language) {
		super(constants);
		this.setView();
		this.setEvent();
		this.setUrl(this.language.getLanguage);
	}

	private checkNameInSession(): string {
		var name: string = "";
		$.get("./php/session.php", (data: string) => { if (data) name = data; });
		console.log(name);
		return name;
	}

	private setView() {
		if (this.checkNameInSession() == "") {
			this.$.text(this.constants.logInText[this.language.getLanguage]);
			return;
		}
		this.$.text(this.constants.logOutText[this.language.getLanguage]);
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
        setTimeout(() => { document.location = <any>this.destination; }, 500);
    }

	private setUrl(language: string) {
        this.destination = this.constants.baseUrl + language;
    }
}