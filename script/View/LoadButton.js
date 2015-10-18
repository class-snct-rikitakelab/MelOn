/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadButton = (function (_super) {
    __extends(LoadButton, _super);
    function LoadButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.$.click(function () { _this.load(); });
        this.$.css("background-color", "aquamarine");
    }
    LoadButton.prototype.load = function () {
        if (!confirm("The music you are making will be disposed. Is it OK?"))
            return;
        var score = JSON.parse(localStorage.getItem("music"));
        if (!score) {
            alert("Music not Found!");
            return;
        }
        this.setMusic(score);
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