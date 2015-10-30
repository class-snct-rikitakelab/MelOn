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
    }
    Lesson.prototype.setStates = function () {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', LessonMelOn, false);
    };
    return Lesson;
})(FreeMakingMusic);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $.ajaxSetup({ cache: false });
    $(function () { new Lesson(new MelOnAssets, new CONSTANTS.MelOn); });
};
//# sourceMappingURL=Lesson.js.map