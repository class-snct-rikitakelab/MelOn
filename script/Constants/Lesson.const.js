/// <reference path="../Lesson.ref.ts"/>
var LESSON;
(function (LESSON) {
    var ScoreData = CONSTANTS.MeasureSheet;
    LESSON.language = new LESSON_LIST.Language().language;
    var LessonData = (function () {
        function LessonData() {
            this.listUrl = LESSON_LIST.listUrls[LESSON.language];
            this.defaultUrl = "LessonList.html?lang=" + LESSON.language;
        }
        return LessonData;
    })();
    LESSON.LessonData = LessonData;
    var Achievement = (function () {
        function Achievement() {
            this.pitch = new ScoreData().pitch;
        }
        return Achievement;
    })();
    LESSON.Achievement = Achievement;
    var TargetNotes = (function () {
        function TargetNotes() {
            this.images = { note: "note", };
            this.measureWidth = new ScoreData().width;
            this.noteHeight = new ScoreData().noteHeight;
            this.pitch = new ScoreData().pitch;
            this.opacity = 1.0;
            this.color = 0x7777ff;
        }
        return TargetNotes;
    })();
    LESSON.TargetNotes = TargetNotes;
    var Blanks = (function () {
        function Blanks() {
            this.images = { blank: "blank", };
            this.pitch = new ScoreData().pitch;
            this.measureWidth = new ScoreData().width;
            this.height = new ScoreData().noteHeight * this.pitch.length;
            this.opacity = 0.3;
        }
        return Blanks;
    })();
    LESSON.Blanks = Blanks;
    var NextButton = (function () {
        function NextButton() {
            this.selector = "#nextButton";
        }
        return NextButton;
    })();
    LESSON.NextButton = NextButton;
})(LESSON || (LESSON = {}));
//# sourceMappingURL=Lesson.const.js.map