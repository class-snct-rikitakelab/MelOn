/// <reference path="../reference.ts"/>

class LoadButton extends DOMView {

    private music: Music = this.models["music"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SaveButton, models: Object) {
        super(game, constants, models);
        this.$.click(() => { this.load(); });
        this.$.css("background-color", "aquamarine");
    }

    private load() {
        if (!confirm("The music you are making will be disposed. Is it OK?")) return;
        var score: { [pitch: string]: NoteData[] } = JSON.parse(localStorage.getItem("music"));
        if (!score) { alert("Music not Found!"); return; }
        this.setMusic(score);
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