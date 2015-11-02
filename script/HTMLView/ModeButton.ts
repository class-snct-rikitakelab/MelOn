/// <reference path="../index.ref.ts"/>

class ModeButton extends HTMLView {

    private destination: string;

    constructor(private constants: INDEX.ModeButton) {
        super(constants);
        this.setImage(this.constants.defaultLanguage);
        this.setEvent();
        this.setUrl(this.constants.defaultLanguage);
    }

    private setEvent() {
        this.$.click(() => { this.click(); });
        this.$.hover(() => { this.enter(); }, () => { this.leave(); });
        //this.language.onChangeLanguage(() => { 
        //    this.chengeImage(this.language.getLanguage);
        //    this.setUrl(this.language.getLanguage);
        //});
    }

    private click() {
        this.audioPlay(this.audios["decide"]);
        setTimeout(() => { document.location = <any>this.destination; }, 500);
    }

    private enter() {
        this.$.css("box-shadow", `0 0 20px 6px ${this.constants.shadowColor}`);
        this.audioPlay(this.audios["select"]);
    }

    private leave() {
        this.$.css("box-shadow", "none");
    }

    private setUrl(language: string) {
        this.destination = this.constants.baseUrl + language;
    }
}