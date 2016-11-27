/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VideoLecture = (function (_super) {
    __extends(VideoLecture, _super);
    function VideoLecture(constants, models) {
        _super.call(this, constants);
        this.constants = constants;
        this.models = models;
        this.lessonData = this.models["lessonData"];
        this.$.append(this.makeTitle(this.lessonData.getTitle));
        this.makeLectureVideo(this.lessonData.getVideoSrc);
    }
    VideoLecture.prototype.makeTitle = function (title) {
        return $("<div id=" + this.constants.titleId + "></div>").text(title);
    };
    VideoLecture.prototype.makeLectureVideo = function (src) {
        var video = $("<video></video>").attr({ "src": src, "controls": "true" });
        this.$.append(video);
    };
    return VideoLecture;
})(HTMLView);
//# sourceMappingURL=VideoLecture.js.map