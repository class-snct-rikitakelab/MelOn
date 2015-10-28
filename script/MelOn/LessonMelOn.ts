/// <reference path="../Lesson.ref.ts"/>

class LessonMelOn extends MelOn {
    // ========== Model ==========
    private lessonData: LessonData = new LessonData(new LESSON.LessonData);
    private achievement: Achievement;

    // ========== View ==========
    private targetNotes: TargetNotes;
    private blanks: Blanks;
    private nextButton: NextButton;

    create() {
        this.achievement = new Achievement(new LESSON.Achievement, this.lessonData.getMode);
        super.create();
        if (this.lessonData.getInherit) this.loadButton.setMusic(this.lessonData.getInherit);
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
        switch (this.lessonData.getMode) {
            case "tracing": break;
            case "filling": this.filling(); break;
            default: this.error(); break;
        }
    }

    filling() {
        this.blanks = new Blanks(this.game, new LESSON.Blanks, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
    }

    error() {
        alert("There are some errors in this lesson file!");
        document.location = <any>`LessonList.html?lang=${LESSON.language}`;
    }
}