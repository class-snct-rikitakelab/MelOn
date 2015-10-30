/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NextButton = (function (_super) {
    __extends(NextButton, _super);
    function NextButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.musicPlayer = this.models["musicPlayer"];
        this.onActive = _.once(function () {
            _this.game.sound.stopAll();
            _this.game.sound.play("save");
            _this.setSelectEffect();
            _this.$.css("background-color", "orange").unbind("mousedown")
                .mousedown(function () {
                _this.game.sound.play("decide");
                setTimeout(function () { document.location = _this.lessonData.getNextUrl; }, 500);
            });
            alert("Excellent! push Next button to go on!");
        });
        this.setEvents();
    }
    NextButton.prototype.setEvents = function () {
        var _this = this;
        this.achievement.onFinish.add(function () { _this.finish(); });
        this.musicPlayer.onStop.add(function () { _this.active(); });
        this.$.mousedown(function () { _this.game.sound.play("boo"); });
        this.$.select(function () { return false; });
    };
    NextButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.hover(function () { _this.$.css("box-shadow", "0 0 20px 6px lawngreen"); _this.game.sound.play("select"); }, function () { _this.$.css("box-shadow", "none"); });
    };
    NextButton.prototype.finish = function () {
        this.game.sound.stopAll();
        this.game.sound.play("load");
        this.$.mousedown(function () { alert("Play the music!"); });
        alert("Good Job! Try to play the music!");
    };
    NextButton.prototype.active = function () {
        if (!this.achievement.isFinished)
            return;
        this.onActive();
    };
    return NextButton;
})(DOMView);
//# sourceMappingURL=NextButton.js.map