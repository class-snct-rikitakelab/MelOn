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
	private checkFlag: boolean = false;

	protected setEvent() {
		super.setEvent();
		var check = () => this.checkFlag = true;
        this.music.onWrite.add(check);
        this.music.onErase.add(check);
		this.music.onChangeExtension.add(check);
		this.music.onMove.add(check);
		this.music.onEraseAll.add(check);
	}

	private countRed(): number {
		return _.filter(this.children, (note: Note) => { return note.key === "red" }).length;
	}

	private countRestTrace(): number {
		var count: number = 0;
		_.each(this.lessonData.getTargetMusic, (targetLine: NoteData[], pitch: string) => {
			_.each(targetLine, (targetNote: NoteData) => {
				if (!_.some(this.music.getMusic[pitch], (note: NoteData) => {
					return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
				})) count++;
			});
		});
		return count;
	}

	private countRestFilling(): number {
		var count: number = 0;
		var unitNote: number = this.lessonData.getUnitNote;
		_.each(this.lessonData.getBlanks, (blank: [number, number]) => {
			for (var i = blank[0]; i <= blank[1]; i++)
				if (_.some(this.constants.pitch, (pitch) => { return this.music.checkExist(pitch, unitNote, i) })) return;
			count++;
		});
		return count;
	}

	protected addNote() {
		this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
	}

	update() {
		super.update();
		if (this.checkFlag) {
			this.achievement.changeRedNum = this.countRed();
			this.achievement.changeRestTraceNum = this.countRestTrace();
			this.achievement.changeRestFillingNum = this.countRestFilling();
			console.log(this.achievement.redNum, this.achievement.restTraceNum, this.achievement.restFillingNum);
			this.checkFlag = false;
		}
	}
}