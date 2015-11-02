/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonModal = (function (_super) {
    __extends(LessonModal, _super);
    function LessonModal(game, constants, models) {
        _super.call(this, game, constants.modalConstants, models);
        this.constants = constants;
        this.achievement = this.models["achievement"];
        this.setEvents();
    }
    LessonModal.prototype.setEvents = function () {
        var _this = this;
        this.achievement.onFinish.add(function () { _this.finish(); });
        this.achievement.onPlayAlert.add(function () { _this.playAlert(); });
        this.achievement.onStopAlert.add(function () { _this.stopAlert(); });
        this.achievement.onActive.add(function () { _this.active(); });
    };
    LessonModal.prototype.finish = function () {
        this.game.sound.stopAll();
        this.game.sound.play("load");
        this.alert(this.constants.TryMsg[this.lang]);
    };
    LessonModal.prototype.playAlert = function () {
        this.alert(this.constants.playMsg[this.lang]);
    };
    LessonModal.prototype.stopAlert = function () {
        this.alert(this.constants.stopMsg[this.lang]);
    };
    LessonModal.prototype.active = function () {
        this.game.sound.stopAll();
        this.game.sound.play("save");
        this.alert(this.constants.goNextMsg[this.lang]);
    };
    return LessonModal;
})(ModalWindow);
//# sourceMappingURL=LessonModal.js.map