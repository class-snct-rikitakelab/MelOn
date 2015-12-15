/// <reference path="../FreeMakingMusic.ref.ts"/>

class Notes extends GroupView {

    protected music: Music = this.models["music"];
    protected stationery: Stationery = this.models["stationery"];
    protected noteOverlapManager: NoteOverlapManager = this.models["noteOverlapManager"];
    protected selectedNote: Note = null;

    constructor(game: Phaser.Game, protected constants: CONSTANTS.Notes, models: Object) {
        super(game, constants, models);
		this.setEvent();
    }

	protected setEvent() {
		this.music.onSelect.add(() => this.select());
        this.music.onRefresh.add(() => this.refreshSelect());
		this.music.onWrite.add(() => this.addNote());
        this.music.onErase.add(() => this.removeNote());
	}

    protected setPhysical() {
        this.game.physics.arcade.enable(this, true);
    }

    private select() {
        this.selectedNote = <Note>_.find(this.children, (note: Note) => { return _.isEqual(note.getNoteData, this.music.getSelectedNote); });
    }

    private refreshSelect() {
        this.selectedNote = null;
    }

    protected addNote() {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    }

    private removeNote() {
		if (!this.selectedNote) return;
        this.noteOverlapManager.removeNote(this.selectedNote);
		this.selectedNote.destroy();
    }

    update() {
        if (this.selectedNote) this.selectedNote.update();
    }
}

class LessonNotes extends Notes {
	private achievement: Achievement = this.models["achievement"];
	private lessonData: LessonData = this.models["lessonData"];
	private countFlag: boolean = false;

	protected setEvent() {
		super.setEvent();
		var count = () => this.countFlag = true;
        this.music.onWrite.add(count);
        this.music.onErase.add(count);
		this.music.onChangeExtension.add(count);
		this.music.onMove.add(count);
		this.music.onEraseAll.add(count);
	}

	private countRed(): number {
		return _.filter(this.children, (note: Note) => { return note.key === this.constants.prohibitedImage}).length;
	}

	protected addNote() {
		this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
	}

	update() {
		super.update();
		if (this.countFlag) {
			this.achievement.changeRedNum = this.countRed();
			this.achievement.changeRestTraceNum = this.achievement.countRestTrace(this.lessonData.getTargetMusic, this.music.getMusic);
			this.achievement.changeRestFillingNum = this.achievement.countRestFilling(this.lessonData.getBlanks, this.lessonData.getUnitNote, this.music);
			this.achievement.checkFinish()
			this.countFlag = false;
		}
	}
}