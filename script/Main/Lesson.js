/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lesson = (function (_super) {
    __extends(Lesson, _super);
    function Lesson(assets, constants) {
        _super.call(this, assets, constants);
        this.returnLessonListButton = new ReturnButton(this, new LESSON.ReturnLessonListButton);
    }
    Lesson.prototype.createElements = function (parentSelector, elementIds) {
        var lessonData = new LessonData(new LESSON.LessonData);
        this.createLesson(lessonData);
        this.addIDs(elementIds);
        _super.prototype.createElements.call(this, parentSelector, elementIds);
    };
    Lesson.prototype.createLesson = function (lessonData) {
        new Lecture(new LESSON.Lecture, { lessonData: lessonData });
    };
    Lesson.prototype.addIDs = function (elementIds) {
        elementIds.push("nextButton");
        elementIds.push("prohibitedDisplay");
        elementIds.push("traceDisplay");
        elementIds.push("fillingDisplay");
    };
    Lesson.prototype.setStates = function () {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', LessonMelOn, false);
    };
    return Lesson;
})(FreeMakingMusic);
var VideoLesson = (function (_super) {
    __extends(VideoLesson, _super);
    function VideoLesson(assets, constants) {
        _super.call(this, assets, constants);
    }
    VideoLesson.prototype.createLesson = function (lessonData) {
        new VideoLecture(new LESSON.VideoLecture, { lessonData: lessonData });
    };
    return VideoLesson;
})(Lesson);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $.ajaxSetup({ async: false, cache: false });
    $(function () { new VideoLesson(new MelOnAssets, new CONSTANTS.MelOn); });
};
//# sourceMappingURL=Lesson.js.map