/// <reference path="../Lesson.ref.ts"/>

class TargetNotes extends GroupView {

    private music: Music = this.models["music"];
    private lessonData: LessonData = this.models["lessonData"];
    private achievement: Achievement = this.models["achievement"];
    
    constructor(game: Phaser.Game, private constants: LESSON.TargetNotes, models: Object) {
        super(game, constants, models);
        this.setNotes();
        this.music.onRefresh.add(() => { this.checkMatch(); });
    }

    private setNotes() {
        _.each(this.lessonData.getTargetMusic, (line: NoteData[]) => {
            _.each(line, (note: NoteData) => { this.createNote(note); });
        });
    }

    private createNote(note: NoteData) {
        var unitWidth = this.constants.measureWidth / note.unitNote;
        var x = unitWidth * note.start;
        var y = this.constants.pitch.indexOf(note.pitch) * this.constants.noteHeight;
        var instance: Phaser.Sprite = this.create(x, y, this.constants.images["note"]);
        instance.width = unitWidth * (note.extension + 1);
        instance.height = this.constants.noteHeight;
        instance.alpha = this.constants.opacity;
        instance.tint = this.constants.color;
    }

    private checkMatch() {
        this.achievement.checkTrace(this.lessonData.getTargetMusic, this.music.getMusic);
    }
}