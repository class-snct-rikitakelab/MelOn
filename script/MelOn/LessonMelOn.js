/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonMelOn = (function (_super) {
    __extends(LessonMelOn, _super);
    function LessonMelOn() {
        _super.apply(this, arguments);
        // ========== Model ==========
        this.lessonData = new LessonData(new LESSON.LessonData);
    }
    LessonMelOn.prototype.create = function () {
        this.achievement = new Achievement(new LESSON.Achievement, this.lessonData.getMode);
        _super.prototype.create.call(this);
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
        switch (this.lessonData.getMode) {
            case "tracing": break;
            case "filling":
                this.filling();
                break;
            default:
                this.error();
                break;
        }
    };
    LessonMelOn.prototype.filling = function () {
        this.blanks = new Blanks(this.game, new LESSON.Blanks, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
    };
    LessonMelOn.prototype.error = function () {
        alert("There are some errors in this lesson file!");
        document.location = ("LessonList.html?lang=" + LESSON.language);
    };
    return LessonMelOn;
})(MelOn);
//# sourceMappingURL=LessonMelOn.js.map