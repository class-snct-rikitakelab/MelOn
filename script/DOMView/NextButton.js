/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NextButton = (function (_super) {
    __extends(NextButton, _super);
    function NextButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.musicPlayer = this.models["musicPlayer"];
        this.setView();
        this.setEvents();
    }
    NextButton.prototype.setView = function () {
    };
    NextButton.prototype.setEvents = function () {
        var _this = this;
        this.achievement.onMatch.add(function () { _this.finish(); });
        this.musicPlayer.onStop.add(function () { _this.active(); });
    };
    NextButton.prototype.finish = function () {
        this.game.sound.play("save");
        alert("Good Job! Go on lessons!");
        document.location = this.lessonData.getNextUrl;
    };
    NextButton.prototype.active = function () {
    };
    return NextButton;
})(DOMView);
//# sourceMappingURL=NextButton.js.map