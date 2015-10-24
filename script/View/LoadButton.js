/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadButton = (function (_super) {
    __extends(LoadButton, _super);
    function LoadButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.setView();
        this.setEvent();
    }
    LoadButton.prototype.setView = function () {
        this.$.append($("<img src=" + this.constants.image + " />").addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    };
    LoadButton.prototype.setEvent = function () {
        var _this = this;
        this.$.mouseenter(function () { _this.game.sound.play("select"); });
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.load(); });
    };
    LoadButton.prototype.load = function () {
        if (!confirm("The music you are making will be disposed. Is it OK?"))
            return;
        var score = JSON.parse(localStorage.getItem("music"));
        if (!score) {
            alert("Music not Found!");
            return;
        }
        this.setMusic(score);
        this.game.sound.play("load");
    };
    LoadButton.prototype.setMusic = function (score) {
        var _this = this;
        this.music.eraseAll();
        _.each(score, function (line) { _.each(line, function (note) { _this.createNote(note); }); });
    };
    LoadButton.prototype.createNote = function (note) {
        this.music.write(note);
        this.music.select(note);
        this.music.onChangeExtension.dispatch();
        this.music.refresh();
    };
    return LoadButton;
})(DOMView);
//# sourceMappingURL=LoadButton.js.map