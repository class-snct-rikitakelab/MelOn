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
        });
    };
    LessonData.prototype.getLessonData = function (data) {
        this.target = data["music"];
        this.mode = data["mode"];
        this.nextUrl = data["next"] ? "Lesson.html?lang=" + LESSON.language + "&lesson=" + data["next"] : this.constants.defaultUrl;
    };
    Object.defineProperty(LessonData.prototype, "getMode", {
        get: function () {
            return this.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getTargetMusic", {
        get: function () {
            return this.target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getNextUrl", {
        get: function () {
            return this.nextUrl;
        },
        enumerable: true,
        configurable: true
    });
    return LessonData;
})(Model);
//# sourceMappingURL=LessonData.js.map