/// <reference path="../reference.ts"/>

class Notes extends GroupView {

    private music: Music = this.models["music"];
    private stationery: Stationery = this.models["stationery"];
    private selectedNote: Note = null; 

    constructor(game: Phaser.Game, private constants: CONSTANTS.Notes, models: Object) {
        super(game, constants, models);

        this.music.onSelect(() => { this.select(); });
        this.music.onRefresh(() => { this.refreshSelect(); });
        this.music.onWrite(() => { this.addNote(); });
    }

    addNote() {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
    }

    select() {
        this.selectedNote = <Note> _.find(this.children, (note: Note) => { return note.getNoteData === this.music.getSelectedNote });
    }

    refreshSelect() {
        this.selectedNote = null;
    }

    update() {
        if (this.selectedNote) this.selectedNote.update();
    }
}