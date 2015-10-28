/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lecture = (function (_super) {
    __extends(Lecture, _super);
    function Lecture(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.lessonData = this.models["lessonData"];
        console.log(this.lessonData);
        this.setTitle(this.lessonData.getTitle);
        this.setLecture(this.lessonData.getLecture);
    }
    Lecture.prototype.setTitle = function (title) {
        this.$.append($("<div id=" + this.constants.titleId + "></div>").text(title));
    };
    Lecture.prototype.setLecture = function (lecture) {
        var _this = this;
        lecture.forEach(function (block) {
            _this.makeBalloon(block);
            _this.makePerson(block["person"]);
        });
    };
    Lecture.prototype.makeBalloon = function (block) {
        this.$.append($("<div></div>")
            .addClass(this.constants.commonClass.balloon)
            .css("background-color", this.constants.balloonColor[block["person"]])
            .text(block["speech"]));
    };
    Lecture.prototype.makePerson = function (person) {
        var personBlock = $("<div id=" + this.constants.personIds[person] + "></div>")
            .addClass(this.constants.commonClass.person);
        var triangle = $("<div></div>")
            .addClass(this.constants.commonClass.triangle)
            .css("border-top-color", this.constants.balloonColor[person]);
        var image = $("<img src=" + this.constants.image[person] + " />");
        personBlock.append(triangle);
        personBlock.append(image);
        this.$.append(personBlock);
    };
    return Lecture;
})(DOMView);
//# sourceMappingURL=Lecture.js.map