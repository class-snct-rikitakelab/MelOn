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
	private redFlag: boolean = false;

	protected setEvent() {
		super.setEvent();
		var redCheck = () => this.redFlag = true;
        this.music.onWrite.add(redCheck);
        this.music.onErase.add(redCheck);
		this.music.onChangeExtension.add(redCheck);
		this.music.onMove.add(redCheck);
		this.music.onEraseAll.add(redCheck);
	}

	private countRed(): number {
		return _.filter(this.children, (note: Note) => { return note.key === "red" }).length;
	}

	protected addNote() {
		this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
	}

	update() {
		super.update();
		if (this.redFlag) {
			this.achievement.changeRedNum = this.countRed();
			this.redFlag = false;
		}
	}
}

//var count: number = 0;
//_.each(this.music.getMusic, (line: NoteData[], pitch: string) => {
//	_.each(line, (note: NoteData) => {
//		if (this.lessonData.existsInTargetBlank(note)) return;
//		if (!_.some(this.lessonData.getTargetMusic[pitch], (targetNote: NoteData) => {
//			return note.start === targetNote.start && note.start + note.extension === targetNote.start + targetNote.extension
//		})) count++;
//	});
//});
//return count;