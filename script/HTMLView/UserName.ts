/// <reference path="../index.ref.ts"/>

class UserName extends HTMLView {
	constructor(private constants: INDEX.UserName, private language: Language) {
		super(constants);
		this.setView();
		this.setEvent();
	}

	private checkNameInSession(): string {
		var name: string = "";
		$.ajax({
			url: this.constants.sessionGetUserName,
			async: false,
			success: (data: string) => { if (data != "") name = data; }
		});
		return name;
	}

	private setView() {
		var name: string = this.checkNameInSession();
		if(name == "") this.constants.guestText[this.language.getLanguage];
		this.$.text(this.constants.welcomeText[this.language.getLanguage] + name);
	}

	private setEvent() {
		this.language.onChangeLanguage(() => this.setView());
	}
}