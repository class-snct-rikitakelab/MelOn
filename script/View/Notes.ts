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
    }

    addNote() {
        var noteData: NoteData = this.music.getSelectedNoteData;
        var x: number = noteData.measure * this.constants.width + noteData.position * this.constants.noteWidth;
        var y: number = this.constants.pitch.indexOf(noteData.pitch) * this.constants.noteHeight;
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, x, y));
    }

    select(index: number) {
    }

    update() {
        var selectedNoteIndex
        if (_.isNumber(selectedNoteIndex)) {
            // update only selected note
        }
    }
}