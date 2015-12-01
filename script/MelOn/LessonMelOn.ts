/// <reference path="../Lesson.ref.ts"/>

class LessonMelOn extends MelOn {
    // ========== Model ==========
	private lessonData: LessonData = new LessonData(new LESSON.LessonData);
    private achievement: Achievement = new Achievement(new LESSON.Achievement, this.lessonData.getMode);

    // ========== View ==========
    private targetNotes: TargetNotes;
    private nextButton: NextButton;
    private blanks: Blanks;
    private lessonModal: LessonModal;

    create() {
        super.create();
		this.leftButton = new LessonScrollButton(this.game, new CONSTANTS.LeftButton, { music: this.music, achievement: this.achievement});
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
        this.lessonModal = new LessonModal(this.game, new LESSON.LessonModal, { achievement: this.achievement, lessonData: this.lessonData });
        if (this.lessonData.getMode === "filling") this.blanks = new Blanks(this.game, new LESSON.Blanks, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        if (this.lessonData.getInherit) this.loadButton.setMusic(this.lessonData.getInherit);
		this.musicPlayBar.bringToTop();
    }
}