/// <reference path="../referenceFreeMakingMusic.ts"/>

class LoadButton extends DOMView {

    private music: Music = this.models["music"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SaveButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.append($(`<img src=${this.constants.image} />`).addClass("buttonImage")
            .css({ width: "70px", height: "50px"}));
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.load(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); this.game.sound.play("select"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private load() {
        if (!confirm("The music you are making will be disposed. Is it OK?")) return;
        var score: { [pitch: string]: NoteData[] } = JSON.parse(localStorage.getItem("music"));
        if (!score) { alert("Music not Found!"); return; }
        this.setMusic(score);
        this.game.sound.play("load");
    }

    private setMusic(score: { [pitch: string]: NoteData[] }) {
        this.music.eraseAll();
        _.each(score, (line: NoteData[]) => { _.each(line, (note: NoteData) => { this.createNote(note); }); });
    }

    private createNote(note: NoteData) {
        this.music.write(note);
        this.music.select(note);
        this.music.onChangeExtension.dispatch();
        this.music.refresh();
    }
}