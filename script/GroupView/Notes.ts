/// <reference path="../FreeMakingMusic.ref.ts"/>

class Notes extends GroupView {

    protected music: Music = this.models["music"];
    protected stationery: Stationery = this.models["stationery"];
    protected noteOverlapManager: NoteOverlapManager = this.models["noteOverlapManager"];
    protected selectedNote: Note = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Notes, models: Object) {
        super(game, constants, models);
		this.setEvent();
    }

	protected setEvent() {
		this.music.onSelect.add(() => this.select());
        this.music.onRefresh.add(() => this.refreshSelect());
		this.music.onWrite.add(() => this.addNote());
        this.music.onErase.add(() => this.removeNote());
	}

    setPhysical() {
        this.game.physics.arcade.enable(this, true);
    }

    select() {
        this.selectedNote = <Note>_.find(this.children, (note: Note) => { return _.isEqual(note.getNoteData, this.music.getSelectedNote); });
    }

    refreshSelect() {
        this.selectedNote = null;
    }

    addNote() {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    }

    removeNote() {
        this.noteOverlapManager.removeNote(this.selectedNote);
		this.selectedNote.destroy();
    }

    update() {
        if (this.selectedNote) this.selectedNote.update();
    }
}

class LessonNotes extends Notes {
	addNote() {
		this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
	}
}