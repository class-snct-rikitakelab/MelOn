/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Note = (function (_super) {
    __extends(Note, _super);
    function Note(game, constants, models, x, y) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.setPosition(x, y);
        this.setInput();
    }
    Note.prototype.setInput = function () {
        var _this = this;
        this.inputEnabled = true;
        this.events.onInputDown.add(function () { _this.touchNote(); });
    };
    Note.prototype.touchNote = function () {
        console.log("Note was clicked!");
    };
    return Note;
})(SpriteView);
//# sourceMappingURL=Note.js.map