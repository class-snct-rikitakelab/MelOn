/// <reference path="../reference.ts"/>

class Notes extends GroupView {

    private music: Music;
    private stationery: Stationery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Notes, models: Object) {
        super(game, constants, models);

        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        
        this.music.onWrite(() => { this.addNote(); });
        this.music.onErase(() => { this.deleteNote(); });
    }

    addNote() {
        var noteData: NoteData = this.music.getSelectedNoteData;
        var x: number = noteData.measure * this.constants.width + noteData.position * this.constants.noteWidth;
        var y: number = this.constants.pitch.indexOf(noteData.pitch) * this.constants.noteHeight;
        var note: Note = this.add(new Note(this.game, new CONSTANTS.Note, this.models, x, y));
    }

    deleteNote() {
    }
}