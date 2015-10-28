/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonData = (function (_super) {
    __extends(LessonData, _super);
    function LessonData(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.getJSON();
    }
    LessonData.prototype.getJSON = function () {
        var _this = this;
        $.getJSON(this.constants.listUrl, function (list) {
            $.getJSON(list[$.getUrlVar("lesson")]["url"], function (data) { _this.getLessonData(data); });
            if ($.getUrlVar("inherit"))
                $.getJSON(list[$.getUrlVar("inherit")]["url"], function (data) { _this.inherit = data["music"]; });
        });
    };
    LessonData.prototype.getLessonData = function (data) {
        this.title = data["title"];
        this.target = data["music"];
        this.mode = data["mode"];
        this.setNextUrl(data);
        this.lecture = data["lecture"];
        if (this.mode === "filling")
            this.setFillingLessonData(data);
    };
    LessonData.prototype.setNextUrl = function (data) {
        if (data["next"]) {
            this.nextUrl = "Lesson.html?lang=" + LESSON.language + "&lesson=" + data["next"];
            if (data["passNext"] === true)
                this.nextUrl += "&inherit=" + data["title"];
        }
        else
            this.nextUrl = this.constants.defaultUrl;
    };
    LessonData.prototype.setFillingLessonData = function (data) {
        this.unitNote = data["unitNote"];
        this.blanks = data["blank"];
    };
    Object.defineProperty(LessonData.prototype, "getTitle", {
        get: function () { return this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getMode", {
        get: function () { return this.mode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getTargetMusic", {
        get: function () { return this.target; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getNextUrl", {
        get: function () { return this.nextUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getUnitNote", {
        get: function () { return this.unitNote; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getBlanks", {
        get: function () { return this.blanks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getInherit", {
        get: function () { return this.inherit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getLecture", {
        get: function () { return this.lecture; },
        enumerable: true,
        configurable: true
    });
    return LessonData;
})(Model);
//# sourceMappingURL=LessonData.js.map