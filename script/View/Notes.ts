/// <reference path="../reference.ts"/>

class Notes extends GroupView {

    private music: Music;
    private stationery: Stationery;
    private selectedNote: Note; 

    constructor(game: Phaser.Game, private constants: CONSTANTS.Notes, models: Object) {
        super(game, constants, models);

        this.music = this.models["music"];
        this.stationery = this.models["stationery"];

        this.music.onWrite(() => { this.addNote(); });
        this.music.onRefrechSelect(() => { this.refreshNote(); });
    }

    addNote() {
        var note: NoteData = this.music.getSelectedNote;
        var x: number = note.measure * this.constants.width + note.position * this.constants.noteWidth;
        var y: number = this.constants.pitch.indexOf(note.pitch) * this.constants.noteHeight;
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, x, y));
    }

    select(index: number) {
        var childIndex = _.findLastIndex(this.children, (note: Note) => { return note.getIndex == index })
        this.selectedNote = <Note> this.getChildAt(childIndex);
    }

    refreshNote() {
        this.selectedNote = null;
    }

    update() {
        if (this.selectedNote) {
            this.selectedNote.update();
        }
    }
}