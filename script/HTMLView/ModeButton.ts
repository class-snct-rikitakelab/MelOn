/// <reference path="../index.ref.ts"/>

class ModeButton extends HTMLView {
    constructor(private constants: INDEX.ModeButton) {
        super(constants);
        this.setImage("image");
        this.setEvent();
    }

    private setEvent() {
        this.$.click(() => { this.click(); });
        this.$.mouseenter(() => { this.enrer(); });
        this.$.mouseleave(() => { this.leave(); });
    }

    private click() {
        this.audioPlay(this.audios["decide"]);
        setTimeout(() => { document.location = <any>this.constants.destination; }, 500);
    }

    private enrer() {
        this.$.css("box-shadow", `0 0 20px 6px ${this.constants.shadowColor}`);
        this.audioPlay(this.audios["select"]);
    }

    private leave() {
        this.$.css("box-shadow", "none");
    }
}