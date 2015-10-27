/// <reference path="../Lesson.ref.ts"/>

class LessonMelOn extends MelOn {
    // ========== Model ==========
    private lessonData: LessonData = new LessonData(new LESSON.LessonData);
    private achievement: Achievement = new Achievement(new LESSON.Achievement);

    // ========== View ==========
    private targetNotes: TargetNotes;
    private blanks;
    private nextButton: NextButton;

    create() {
        super.create();
        switch (this.lessonData.getMode) {
            case "tracing": this.tracing(); break;
            case "filling": this.filling(); break;
            default: this.error(); break;
        }
    }

    tracing() {
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
    }

    filling() {
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        this.blanks;
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
    }

    error() {
        alert("There are some errors in this lesson file!");
        document.location = <any>`LessonList.html?lang=${LESSON.language}`;
    }
}